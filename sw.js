self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('eventTest').then(function(cache) {
            return cache.addAll([
                '/',
                './index.html',
                './rooms.html',
                './schedule.html',
                './speakers.html',
                './tracks.html',
                './js/'
            ]); 
        })  
    );  
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(

        caches.match(event.request).then(function(response) { 
            console.log(response);

            return response || fetch(event.request);


        })



    );

});
