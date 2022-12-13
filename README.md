# Planet training workshop

This repo contains all materials used on Planet's training workshop by Professional Services. A lot of the notebooks in here are expanded and customized versions of Planet's official developer resources, which you can find in [here](https://github.com/planetlabs/notebooks).
Below you will find environment set up instructions, decks and other learning resources to have you started on using Planet's APIs and tools. 

# Development Environment Setup

## Option 1: (recommended): Run in Google Colab
Interact directly with this repo's Jupyter Notebooks by running them in Google Colab.

Each Notebook will have its own "Open in Colab" button: once running on Colab, you'll need to run a quick setup cell in each notebook (this will install prerequisites and download data into your Colab workspace). You can also choose to make a copy of the Notebook in your own Google Drive, if you want to save any changes you make (not required for this workshop).


## Option 2: Run local Jupyter instance

The Very Basics
Let's make sure you are set up with all the tools that we need to follow along on the excercises to be covered in this training. 

* [Python 3.7](https://www.python.org/downloads/release/python-377/) <br>
You will need to download the installer for your specific OS (32 or 64 bits). When installing, make sure the box "_Add Python to Path_" is checked. 
* [Git](https://git-scm.com/downloads)


We recommend to download the very complete but heavier Python distribution [Anaconda](https://docs.anaconda.com/anaconda/install/), instead. With Anaconda, it is a lot easier to install some of the required geospatial libraries than when using the pure Python distribution.

Let's test if our basic set up is working.

* Check Python env with
```bash
python --version
````

If you are on a Windows machine, you will need to install.
* [Powershell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7) - A more powerful shell than the normal MSDOS in Windows
* [Chocolatey](https://chocolatey.org/install) - Windows package manager

* Check that `choco` is installed by installing `jq` and `git`
```bash
choco install jq
````

With `jq` we will be able to handle JSON data, check that it is installed with
```bash
jq --version
```

### Getting the repo
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


### Useful libraries
The following tools are regularly used in Planet School's guides:

* [cURL](https://curl.se/)
* [GDAL](https://gdal.org/)
* [requests](https://2.python-requests.org//en/master/)
* [retrying](https://pypi.org/project/retrying/)
* [jq](https://stedolan.github.io/jq/)
* [geojsonio-cli](https://github.com/mapbox/geojsonio-cli)
* [Rasterio](https://rasterio.readthedocs.io/en/stable/)
* [Fiona](https://fiona.readthedocs.io/en/latest/manual.html)
* [NumPy](https://numpy.org/)
* [MatPlotLib](https://matplotlib.org/)

If you choose to follow along with code here, you may find it useful to install these libraries in your development environment. You can do this by yourself simply using
```bash
pip install -r requirements.txt
```

or when using the Anaconda distribution
```bash
conda install --file requirements.txt
```

<u>Important notes specifically for Windows users:</u>
<br>
In Windows, it is a lot easier to install the core geospatial software libraries (GDAL, Rasterio, Fiona, among others) using Anaconda's package manager Conda than the standard Pip. [Here](https://mapscaping.com/python-environment-for-geospatial-programming/) is a detailed guide on how to set up your Python environment for geospatial programming using Anaconda. If you do chose to use the base installation of Python instead, we recommend to install these geospatial software packages directly using `wheel` installing files. You can grab the version needed for your OS easily in [here](https://www.lfd.uci.edu/~gohlke/pythonlibs/).


### Testing the set up
Now, let's make sure our Python env and dependencies are set up. First, let's check that the Planet tool is installed, do
```bash
planet --help
````
If you get an extensive help message about our CLI, we are good to go! <br>
But remember, we can always install new packages simply using:
```bash
pip install PACKAGE_NAME
```
or when using Anaconda
```bash
conda install PACKAGE_NAME
```

# Learning resources
Visit our learning hub: Planet's [Developer Center](https://developers.planet.com/). Explore Planet's API docs, references, tutorials, and developer tools: everything you need to start building with Planet today.

_All tailored training decks will be available here once the workhops kick off_. Below you can find some links to already publicly available resources

Some useful links:
* [Data API docs](https://developers.planet.com/docs/data/)
* [Orders API docs](https://developers.planet.com/docs/orders/)
* [Analytics API docs](https://developers.planet.com/docs/analytics/)
* [Tasking API docs](https://developers.planet.com/docs/tasking/)
* [Public APIs changelog](https://developers.planet.com/changelog/)
* [Planet Python Client](https://github.com/planetlabs/planet-client-python)
* [Planet integrations (QGIS plug-in)](https://developers.planet.com/integrations/) 
* [Quickstart guides](https://developers.planet.com/docs/quickstart/)
* [Planet school](https://developers.planet.com/planetschool/)
* [Jupyter notebooks](https://github.com/planetlabs/notebooks)
* [Imagery specs](https://assets.planet.com/docs/Planet_Combined_Imagery_Product_Specs_letter_screen.pdf)
