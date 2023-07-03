
let mix = require('laravel-mix');

mix.js('src/js/main.js', 'public/assets/js/')
    .sass('src/scss/main.scss', 'public/assets/css/')
    .copy('src/images/', 'public/assets/images/')
    .options({
        processCssUrls: false
    });
