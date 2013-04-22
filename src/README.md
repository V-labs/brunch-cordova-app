# Brunch application skeleton for mobile web apps

This repository is a [Brunch](http://brunch.io/) skeleton that utilizes [Bootstrap](http://twitter.github.com/bootstrap/), [Backbone](http://backbonejs.org/), [Handlebars](http://handlebarsjs.com/), [Zepto](http://zeptojs.com/) and [LESS](http://lesscss.org/). It includes [Backbone.Mediator](https://github.com/chalbert/Backbone-Mediator) for Pub/Sub patterns. It also embed Zepto, because we don't need to support legacy browsers for a mobile first app.

## Getting started

You should read the [README](https://github.com/V-labs/brunch-cordova-app/blob/master/README.md) file located in the parent folder. This skeleton can be used as a base for a mobile website, but the main goal is to use it inside a Phonegap/Cordova application.

If you want to use it for a mobile website, just get this folder (src) and the run these commands to make it work :

Install node modules :

	npm install

Watch for sources changes :

	brunch w

Build for production :

	brunch build -o

## Customize Bootstrap Stylesheets

All Bootstrap stylesheet files can be found separated into:

	vendor/styles/bootstrap
		
They're in original [LESS](http://lesscss.org/) format in order to be easily customized, and compiled together with the app build.

## Exclude Bootstrap jQuery plugins

jQuery plugins used by Bootstrap are all listed (in the right order) inside the config.js file. Comment out the ones you want to exclude from the build with a #. (Pay attention to dependencies!)

## Credit
This skeleton was spawned from [Brunch with Banana Pancakes](https://github.com/Anaphase/brunch-banana-pancakes).
It's nearly the same, but without SASS & Coffee script support, because I don't use them. 
