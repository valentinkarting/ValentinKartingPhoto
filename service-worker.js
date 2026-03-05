self.addEventListener('install', (event) => {
  console.log('Service Worker installé');
});

self.addEventListener('fetch', (event) => {
  // Ici tu peux gérer la mise en cache si tu veux
});