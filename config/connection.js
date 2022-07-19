const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-network-API', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
