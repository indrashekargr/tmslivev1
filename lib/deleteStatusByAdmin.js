'use strict';

var mysql=require('./mysqlConnection');

module.exports = {
    deleteStatusByAdmin: function(req,res){
        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        if (!req.body.Id){
        return res.status(401).send({success: false, message: 'StatusId required'});
        console.log("StatusId required");
        }
        try{
            console.log("Connection established for delete Status for Admin");
            mysql.query("UPDATE `statusmaster` SET `IsDeleted`=1,`ModifiedDate`=?,`ModifiedBy`=? where `Id`=?", [date,req.body.ModifiedBy,req.body.Id] , function(err,result) {
            if (err) throw err;
            if(result.length === 0){
            res.send({success: false, message: 'Data not found' + req.body.Id});
            console.log("Data not found for this StatusID_ " + req.params.Id)
            } else{
                console.log("Deleted Status for StatusID_" +req.body.Id);
            res.send("Deleted Status ");
            console.log(result);
            }
            });
            }catch (err) {
            console.error(err);
            }
        }
    }

