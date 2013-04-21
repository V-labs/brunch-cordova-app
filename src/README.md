# Brunch V-labs Skeleton

This repository is a [Brunch](http://brunch.io/) skeleton that utilizes [Bootstrap](http://twitter.github.com/bootstrap/), [Backbone](http://backbonejs.org/), [Handlebars](http://handlebarsjs.com/), and [LESS](http://lesscss.org/). It also includes [Backbone.Mediator](https://github.com/chalbert/Backbone-Mediator) for Pub/Sub patterns.

## Getting started

Make sure to have [Brunch.io](http://brunch.io) installed.

Create your project with:

	brunch new <your-project-name> -s git@github.com:V-labs/brunch-vlabs-app.git
		
Or simply copy the repository to your hard drive and rename it.

Then, go to your new created folder and start assets compilation watcher with:

	brunch w

or for minified assets, without watch (production build) :

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
