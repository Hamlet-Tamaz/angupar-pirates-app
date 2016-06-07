module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'angular-pirates-app'
    },
    degug: true
  },

  test: {
    client: 'pg',
    connection: {
      database: ''
    },
    debug: true
  },

};