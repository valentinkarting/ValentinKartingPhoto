self.addEventListener('install', (event) => {
  console.log('Service Worker installé');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activé');
});

self.addEventListener('fetch', (event) => {
  // Pas d'interception spécifique, on laisse le navigateur gérer les requêtes normalement
});
