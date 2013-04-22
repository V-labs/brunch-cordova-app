# Cordova with brunch application skeleton

This repository is a starter kit for a PhoneGap / Cordova application. It assume that you have already configured your SDKs for each platforms SDK you want to use (ios / android / blackberry).

## Prerequisites

We will use [Brunch](http://brunch.io/), [Jake](https://github.com/mde/jake), and [Cordova](https://github.com/apache/cordova-cli). You need do install them globally with :

	
	npm install -g cordova brunch jake


## Setting up a new application

Once you have downloaded the repository, first create a cordova project at the root of the project :

	cordova create . com.yourcompany.yourproject YourProject

This will create the cordova project structure. You project should look like this :

	YourProject/
    |--.cordova/
    |--.gitignore
    |-- configs/
    |-- merges/
    |-- platforms/
    |-- plugins/ # if you don't have it, we will create it later
    |-- src/
    |-- www/
    `-- Jakefile.js

Then, run the following command to initialize the project :

	jake init

It will install the `src/node_modules/` folder, and then move the `www/config.xml` and the `www/res/` folder to `src/app/assets/`. 
It also create the `plugins` folder (depends on the platform you created the cordova project, it might not be there). 
And finally, it regenerate a new `www/` folder based on the `src/app/` folder.

Once everything is OK, you can add a platform. Cordova currently supports ios / android / blackberry (windows phone is not available with the cordova cli).

	cordova platform add <platform>

It will create a new folder into `platforms/<platform>`. The folder contains your base sources which will be compiled on the device.

Next, you can now work on your `src/` folder for the given platform.


## Generate sources

The Jakefile provides 2 more commands which are able to build your sources from `src/app/` to the `www/` folder.
If you look at the `src/app/` folder, you will find another `platforms` directory.

This directory is where you are supposed to put your platform specific code, which will be compiled to the main `app.js` file. The repository provides a brunch wrapper that exclude the folders you don't want for a platform. For exemple, if you are currently working on your android platform, you don't want the `src/app/platforms/ios` and `src/app/platforms/blackberry` folders into your compiled sources.

So to use the brunch watch for a given platform, just run :

	jake brunch:watch platform=<platform>

To build for a given platform, use :

	jake brunch:build platform=<platform>

Note that you can also pass a `e=prod` parameter, it will minify sources into the compiled files.

## Build & emulate

Now, you project is running with a platform aware compiler, to compile it into a native app, just use the cordova cli :

	cordova build <platform>

And to emulate your project :

	cordova emulate <platform>


## Notes about the src folder

Actually, the repository is shipped with a `src/` folder that works with a given config, see the [readme](https://github.com/V-labs/brunch-cordova-app/blob/master/src/README.md) file for more information.

Note that this folder can be anything you want, you can use a YUI application if you want. The only constraints are the brunch based app, and the `src/app/platforms/` directory, because this is how the `Jakefile.js` works.


## Notes about the cordova behaviors

Even if this repository provides a merge process for your app.js file, when you compile for a given platform, the cordova specific behaviors still happens. This mean the `merges` & `plugins` folders still works as described in the [cordova-cli](https://github.com/apache/cordova-cli/) documentation.
