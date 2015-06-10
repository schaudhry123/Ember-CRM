// For more information see: http://emberjs.com/guides/routing/
App.Router.reopen({
	location: 'auto',
	rootURL: '/'
});

App.Router.map(function() {
	this.resource('leads', { path: '/' })
});

DS.RESTAdapter.reopen({
	namespace: 'api/v1'
});

App.Store = DS.Store.extend({});
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({});