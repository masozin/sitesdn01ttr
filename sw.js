const CACHE_NAME = 'v0.0.1';
const ASSETS = [
  './',
  'index.html',
  'data.json',
  'style.css',
  'manifest.json',

  'banner.jpg',
  'profil.jpg',

  'href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@700;800&display=swap"'
];

// Menginstal Service Worker dan menyimpan aset dasar ke memori HP (Bisa dibuka offline)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        ASSETS.map(url => {
          return cache.add(url).catch(err => {
            console.error('File ini gagal dimasukkan ke Cache PWA:', url, err);
          });
        })
      );
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});