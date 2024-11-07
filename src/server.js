// server.js
const Hapi = require('@hapi/hapi');
const authRoutes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    // Daftarkan route
    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
