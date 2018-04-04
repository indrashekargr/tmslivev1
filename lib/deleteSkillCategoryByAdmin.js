'use strict';

var mysql=require('./mysqlConnection');

module.exports = {
    deleteSkillCategoryByAdmin: function(req,res){
        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        if (!req.body.CategoryId){
        return res.status(401).send({success: false, message: 'CategoryId required'});
        console.log("CategoryId required");
        }
        try{
            console.log("Connection established for delete Category Skill for Admin");
            mysql.query("UPDATE `categorymaster` SET `IsDeleted`=1,`ModifiedDate`=? where `CategoryId`=?", [date,req.body.CategoryId] , function(err,result) {
            if (err) throw err;
            if(result.length === 0){
            res.send({success: false, message: 'Data not found' + req.body.CategoryId});
            console.log("Data not found for this CategoryID_ " + req.params.CategoryId)
            } else{
                console.log("Deleted Skill Category for CategoryID_" +req.body.CategoryId);
            res.send("Deleted Skill Category ");
            console.log(result);
            }
            });
            }catch (err) {
            console.error(err);
            }
        }
    }

