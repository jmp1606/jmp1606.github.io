//Service Worker Network or cache version
var CACHE = 'network-or-cache';


self.addEventListener('install', function(evt) {
	console.log('The service worker is being installed.');

	evt.waitUntil(precache());
});



self.addEventListener('fetch', function(evt) {
	console.log('The service worker is serving the asset.');
//can add a var here so that if the AJAX cannot get a response, it produces a standard response
var offline = true;


evt.respondWith(fromNetwork(evt.request, 400).catch(function () {


	return fromCache(evt.request);
}));
});


function precache() {
	return caches.open(CACHE).then(function (cache) {
		return cache.addAll([
    //A list of files that you want to cache on first run of the app
    //Change paths to accordingly
    '/THEATRE/',

    '/THEATRE/index.html',
	'/THEATRE/manifest.json',
	
		'/THEATRE/css/style.css',
		'/THEATRE/css/materialize.min.css',

		'/THEATRE/js/core.js',
		'/THEATRE/js/init.js',
		'/THEATRE/js/jquery-2.2.4.min.js',
		'/THEATRE/js/materialize.min.js',

		'/THEATRE/partialViews/home.html',
		'/THEATRE/partialViews/main.html',
		'/THEATRE/partialViews/contact.html',
		'/THEATRE/partialViews/hub.html',
		'/THEATRE/partialViews/events.html',
		'/THEATRE/partialViews/theatre.html',
		'/THEATRE/partialViews/menu.html'
		

		]);

	});
}


function fromNetwork(request, timeout) {
	return new Promise(function (fulfill, reject) {


		var timeoutId = setTimeout(reject, timeout);


		fetch(request).then(function (response) {
			clearTimeout(timeoutId);
			fulfill(response);


		}, reject);
	});
}


function fromCache(request) {
	return caches.open(CACHE).then(function (cache) {
		return cache.match(request).then(function (matching) {
			return matching || Promise.reject('no-match');
		});
	});
}
