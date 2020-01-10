# Planet training workshop

This repo contains all materials used on Planet's training workshops. 
Below you will find environment set up instructions, decks and other learning resources to have you started on using Planet's APIs and tools.

# Development Environment Setup

## Getting the repo
This is a public Planet repository so you don't have to SSH authenticate to clone to your local environment. You can simply use
```
git clone git@github.com:planetlabs/training-workshop.git
```
In case you do have to authenticate, you'll have to make sure your SSH keys are added to your Github profile. Only in case you **don't** have SSH keys already, generate them using
```bash
ssh-keygen -t rsa
```
Press enter when asked if you want to save the keys to id_rsa and, if you want, enter a passphrase when asked to.

Print out your keys, copy them and add them to your Github's saved keys.
```bash
cat .ssh/id_rsa.pub
```


## The Basics
The following tools are regularly used in Planet School's guides:

* Python 3x (Note: Python 2.7 is in legacy support)
* cURL
* [requests](https://2.python-requests.org//en/master/)
* [retrying](https://pypi.org/project/retrying/)
* [jq](https://stedolan.github.io/jq/)
* [geojsonio-cli](https://github.com/mapbox/geojsonio-cli)

If you choose to follow along with code here, you may find it useful to install these libraries in your development environment. You can do this by yourself both installing each library individually,

```bash
$ pip install requests
$ pip install retrying
$ pip install jq

# Requires Node.js
$ npm install -g geojsonio-cli
```

or installing from our pre-defined requirements file (it install a bit more than what shown above)
```bash
pip install -r requirements.txt --user
```


# Working with Planet Data
When working with datasets like Planet's satellite imagery, here are a few useful Python libraries to know:

* [Rasterio](https://rasterio.readthedocs.io/en/stable/)
* [Fiona](https://fiona.readthedocs.io/en/latest/manual.html)
* [NumPy](https://numpy.org/)
* [MatPlotLib](https://matplotlib.org/)

**Rasterio** is a free and open source library for working with geospatial raster imagery. Rasterio is used extensively in the Python code that you'll find through Planet School, as well as in most Jupyter Notebooks in Planet's open source Notebook collection.

**Fiona** is a sibling library to Rasterio used when working with geospatial vector data. While less frequently used in Planet's developer resources, Fiona can still come in handy when, for example, creating or manipulating an AOI (Area of Interest) vector dataset.

**NumPy** and **MatPlotLib** can be used to manipulate, plot, and display raster data that has been loaded via Rasterio.


# Learning resources
Visit our learning hub: Planet's [Developer Center](https://developers.planet.com/). Explore Planet's API docs, references, tutorials, and developer tools: everything you need to start building with Planet today.

_All tailored training decks will be available here once the workhops kick off_. Below you can find some links to already publicly available resources

Some useful links:
* [Data API docs](https://developers.planet.com/docs/data/)
* [Orders API docs](https://developers.planet.com/docs/orders/)
* [Tiles API docs](https://developers.planet.com/docs/data/tile-services/)
* [Public APIs changelog](https://developers.planet.com/changelog/)
* [Planet Python Client](https://github.com/planetlabs/planet-client-python)
* [Planet integrations (QGIS plug-in)](https://developers.planet.com/integrations/) 
* [Quickstart guides](https://developers.planet.com/docs/quickstart/)
* [Planet school](https://developers.planet.com/planetschool/)
* [Jupyter notebooks](https://github.com/planetlabs/notebooks)
