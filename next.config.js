const webpack = require('webpack');

webpack({
    // [Configuration Object](/configuration/)
}, (err, stats) => { // [Stats Object](#stats-object)
    if (err || stats.hasErrors()) {
        // [Handle errors here](#error-handling)
    }
    // Done processing
});

module.exports = {
    env: {
        baseUrl: 'https://kt.academy',
    },
    i18n: {
        locales: ['en', 'pl'],
        defaultLocale: 'en',
        localeDetection: false,
    },
    async redirects() {
        return [
            {
                source: '/pl/article/przyszlosc-programowaniu',
                destination: 'pl/article/przyszlosc-programowania',
                permanent: true,
            },
        ]
    },
}
