'use strict';

var deleteSkillCategoryByAdmin = require('../lib/deleteSkillCategoryByAdmin');

module.exports = {
    put: function deleteSkillCategoryByAdmin_put(req, res) {
        deleteSkillCategoryByAdmin.deleteSkillCategoryByAdmin(req,res,req.params['date'],req.params['CategoryId']);
    }
};
