var View = require('./view');

module.exports = View.extend({
    id: 'home-view',
    template: require('./templates/home'),
    platformName: 'Device',

    subscriptions: {
        'device:ready': 'activate'
    },

    activate: function() {
        this.platformName = require('platforms/' + device.platform.toLowerCase() + '/platform').platform
        this.render();

        this.$('#deviceready .pending').addClass(' hide');
        this.$('#deviceready .complete').removeClass('hide');
    },

    getRenderData: function() {
        return {
            platform: this.platformName
        };
    }
})
