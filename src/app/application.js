// Application bootstrapper.
Application = {
    initialize: function() {
        var HomeView = require('views/home_view')
            , Router   = require('lib/router')

        this.homeView = new HomeView()
        this.router   = new Router()
        if (typeof Object.freeze === 'function') Object.freeze(this)

        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        console.log('Device ready');
        Backbone.Mediator.publish('device:ready');
    }
}

module.exports = Application
