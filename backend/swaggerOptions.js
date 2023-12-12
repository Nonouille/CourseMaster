const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Your API Title',
            version: '1.0.0',
            description: 'Description of your API',
        },
    },
    apis: ['app.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
