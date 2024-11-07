// routes/authRoutes.js
const authHandler = require('./handlers/authHandler'); // Import handler

const authRoutes = [
    {
        method: 'POST',
        path: '/register',
        handler: authHandler.registerUser,
    },
    {
        method: 'POST',
        path: '/login',
        handler: authHandler.loginUser,
    },
    {
        method: 'POST',
        path: '/upload-photo-profile',
        handler: authHandler.uploadPhoto,
    },
];

module.exports = authRoutes;
