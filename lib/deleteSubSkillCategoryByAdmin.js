'use strict';

var mysql=require('./mysqlConnection');

module.exports = {
    deleteSubSkillCategoryByAdmin: function(req,res){
        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        if (!req.body.SkillId){
        return res.status(401).send({success: false, message: 'SkillId required'});
        console.log("SkillId required");
        }
        try{
            console.log("Connection established for delete Sub Skill Category for Admin");
            mysql.query("UPDATE `skillmaster` SET `IsDeleted`=1,`ModifiedBy`=?,`ModifiedDate`=? where `SkillId`=?", [req.body.ModifiedBy,date,req.body.SkillId] , function(err,result) {
            if (err) throw err;
            if(result.length === 0){
            res.send({success: false, message: 'Data not found' + req.body.SkillId});
            console.log("Data not found for this SkillId_ " + req.params.SkillId)
            } else{
                console.log("Deleted Skill Category for SkillId_" +req.body.SkillId);
            res.send("Deleted Sub Skill Category ");
            console.log(result);
            }
            });
            }catch (err) {
            console.error(err);
            }
        }
    }

