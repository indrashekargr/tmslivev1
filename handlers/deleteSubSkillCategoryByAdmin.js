'use strict';

var deleteSubSkillCategoryByAdmin = require('../lib/deleteSubSkillCategoryByAdmin');

module.exports = {
    put: function deleteSubSkillCategoryByAdmin_put(req, res) {
        deleteSubSkillCategoryByAdmin.deleteSubSkillCategoryByAdmin(req,res,req.params['ModifiedBy'],req.params['date'],req.params['SkillId']);
    }
};
