module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '3.110.17.117'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'pmg'),
        username: env('DATABASE_USERNAME', 'pmg'),
        password: env('DATABASE_PASSWORD', '123456'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'pmg'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
