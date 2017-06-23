const swBuild = require('workbox-build');

swBuild.generateSW({
    navigateFallback: 'index.html',
    globDirectory: './dist',
    globPatterns: [
        'index.html',
        'assets/images/icons/**.png',
        '**.js',
        '**.css'
    ],
    swDest: 'dist/service-worker.js',
}).then(() => console.log('Service Worker has been generated.'))
.catch(err => console.error(err, 'Service Worker generation has failed.'));
