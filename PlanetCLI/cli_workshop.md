# Planet CLI

Planet easy to use Python library and interface to access the Public APIs via Command Line.

## Installation
* With PIP
```bash
pip install --user planet
```

* With conda
```bash
conda install -c conda-forge planet
```

### Nice to have
We will be using `jq` command line tool a lot. So make sure you have it installed


## Authenticate
Using your Planet credentials
```bash
planet init
Email:
Password:
```

You can also use your Planet API key on each call with the argument ```-k```
```bash
planet -k YOUR_API_KEY command subcommand
```


# Data API Examples
```bash
planet data --help
```

### Simple search

Get the most recently published PSScene3Band 
```bash
planet data search --item-type PSScene3Band
```

Item-type input is case-insensitive
```bash
planet data search --item-type psscene*
```

```bash
planet data search --item-type ps*
```
By default, pretty printing is enabled.

### Create saved-search 

Get guidance on input argument options of each API subcommand
```bash
planet data create-search --help
```

```bash
planet data create-search --name workshop-saved-1 --item-type PSScene4Band --geom sf.geojson --date acquired gte 2019-10-01 --date acquired lt 2019-10-04
```

### List all saved searches

Use `jq` to parse JSON result and filter search metadata

```bash
planet data searches | jq .searches[].name
```

### Execute a saved search
We need to first get a saved-search ID to run it
```bash
planet data searches | jq .searches[].id
```

Then we can use use the CLI to execute the search. We can again use `jq` to just check how many items we got
```bash
planet data saved-search 71687dd9711a4b80a444a99871534155 | jq '.features | length'
```

### Activate and Download imagery
Let's have a look at the optiosn we have when it comes to downloading
```bash
planet data download --help
```

Execute a search and download the resulting items
```bash
planet data download --item-type PSScene4Band --asset-type analytic --geom cali.geojson --range cloud_cover lte 0.4 --date acquired gt 2019-10-14 --dry-run
```

We can also assess our data locally by exporting the image metadata, geometry included

```bash
planet data search --item-type PSScene4Band --asset-type analytic --geom cali.geojson --range cloud_cover lte 0.4 --date acquired gt 2019-10-14 --limit 4000 > g.json
```

Then we can go and download only what we want to download
```bash
planet data download --item-type PSScene4Band --asset-type analytic --geom cali.geojson --range cloud_cover lte 0.4 --date acquired gt 2019-10-14 --string-in satellite_id 0f34
```

We can run it on verbose mode too
```bash
planet -v data download --item-type PSScene4Band --asset-type analytic --geom cali.geojson --range cloud_cover lte 0.4 --date acquired gt 2019-10-14 --string-in satellite_id 0f34 --quiet
```

Download a single image
```bash
planet -v data download --item-type PSScene4Band --asset-type analytic --string-in id 20191014_183506_0f34 --quiet
```

### Create filter onto file

We can save a filter as a json file for us to use later

```bash
planet data filter --range cloud_cover lt 0.1 --geom cali.geojson > my-search.json
```

Create a search using the saved filter
```bash
planet data create-search --item-type PSScene3Band --string-in satellite_id 0c12 --name my-search --filter-json my-search.json
```


# Orders API example
```bash
planet orders --help
```

### Create simple order
Simply, submit a job to Orders API
```bash
planet orders create --item-type PSScene4Band --bundle analytic_sr_udm2 --id 20191014_183506_0f34 --name ws-simple-1
```

### Check order status
Using an order ID, we can monitor its progress
```bash
planet orders get 20ce4bad-a52e-451e-8f9d-5f4c1559e0d6 | jq '"Name: " + .name +  ". Status: " + .state'
```

### Cancel order
Before going into `running` status, orders go into `queue`. In this state, orders can be canceled
```bash
planet orders cancel f66ccd7b-ae64-40dd-b16b-45d10736e280
```

### Create order with raster operations
With the Orders API, we can get already processed data such as NDVI maps
```bash
planet orders create --item-type PSScene4Band --bundle analytic_sr_udm2 --id 20191014_183506_0f34 --name ws-bandmath-1 --tools bandmath.json
```

### Check all my orders
We can check all of our orders in bulk
```bash
planet orders list | jq '.orders[] | "Name: " + .name + ". Status: " + .state '
```

### Set up order email notification
If we do not want to check orders regularly, we can make use of email notification
```bash
planet orders create --item-type PSScene4Band --bundle analytic_sr_udm2 --id 20191014_183506_0f34 --name ws-bandmath-email-1 --tools bandmath.json --email
```

### Download succesful order
Once an order is ready, we can download it to a desired directory
```bash
planet orders download 175373e2-0fdf-4de4-b6d2-d54747905e25 --dest ws-bandmath-email --quiet
```

### Get order metadata
We can also extract order metadata, for instance it's clipped geometry
```bash
planet orders get 3bb87e78-a55c-40af-86b3-3767b427d0d5 | jq '{"type": "Feature", "geometry": .tools[].clip.aoi }' > aoi.json
```


# Mosaics API Examples
### List of all mosaics associated with the account

```bash
planet mosaics list
```

### Information about a specific mosaic

```bash
planet mosaics info global_monthly_2018_09_mosaic
```

### List the first 10 quads for a mosaic 
(Omitting the --limit option will list all quads. Keep in mind that there may be millions for a global mosaic.)

```bash
planet mosaics search global_monthly_2018_09_mosaic --limit=10
```

### Find all quads inside a particular area of interest

```bash
planet mosaics search global_monthly_2018_09_mosaic --rbox=-95.5,29.6,-95.3,29.8
```
Note that the format of --bbox is "xmin,ymin,xmax,ymax", so longitude comes before latitude.

### Download all quads inside of a rectangular box for a mosaic

```bash
planet mosaics download global_monthly_2018_09_mosaic --bbox=-95.5,29.6,-95.3,29.8
```

### Get information about a mosaic series
Unless there is a basemap series set up in the subscription, this will not work

```bash
planet mosaics series describe  0beb88b8-4d08-464a-a8a6-9848de9585e8
```

### Get list of mosaics in a mosaic series

```bash
planet mosaics series list-mosaics 0beb88b8-4d08-464a-a8a6-9848de9585e8
```
