self.addEventListener('install', function(event){
    // only happens once for this version of the service worker
    // wait until the install event has resolved
    event.waitUntil(
      // then create our named cached
      caches
      .open('my-sw-cache')
      .then(function(cache) {
        // once created, lets add some local resouces
        return cache.addAll([
          './index.html',
        ]);
      })
      .then(function(){
      })
    );
  });

  self.addEventListener("fetch", function(event) {
    // If the request in GET, let the network handle things,
    if (event.request.method !== 'GET') {
      return;
    }
    // here we block the request and handle it our selves
    event.respondWith(
      // Returns a promise of the cache entry that matches the request
      caches
      .match(event.request)
      .then(function(response) {
  
        // here we can hanlde the request how ever we want.
        // We can reutrn the cache right away if it exisit,
        // or go to network to fetch it.
        // There are more intricate examples below.
        // https://ponyfoo.com/articles/progressive-networking-serviceworker
  
        if (response) {
          // our responce is in the cache, let's return that instead
          return response;
        }
        // if the responce is not in the cache, let's fetch it
        return fetch(event.request)
          .then(function(response) {
            // we have a responce from the network
            return response;
          }).catch(function(error) {
            // Something happened
            console.error('Fetching failed:', error);
            throw error;
          });
      })
    );
  });