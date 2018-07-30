module.exports = {
    //MongoDB configuration
    development: {
        db: 'mongodb://localhost/congresso',
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: 'mongodb://<username>:<password>@ds157325.mlab.com:57325/graphql-api',
        app: {
            name: 'graphql'
        }
    }
};