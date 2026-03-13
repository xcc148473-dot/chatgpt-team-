const { requestHandler } = require('../server');

module.exports = async (req, res) => requestHandler(req, res);
