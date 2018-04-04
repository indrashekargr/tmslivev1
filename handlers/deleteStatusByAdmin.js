'use strict';

var deleteStatusByAdmin = require('../lib/deleteStatusByAdmin');

module.exports = {
    put: function deleteStatusByAdmin_put(req, res) {
        deleteStatusByAdmin.deleteStatusByAdmin(req,res,req.params['date'],req.params['ModifiedBy'],req.params['Id']);
    }
};
