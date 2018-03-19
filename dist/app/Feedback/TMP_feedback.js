var ApiUrlPrefix = "/";

app.controller('feedbackcontroller', function ($rootScope, $scope, $http, $state, $stateParams,loginAuthentication, $interval, $window, $location, $timeout,$filter) {

    $scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
    console.log($scope.userinfodata);
    console.log($scope.userinfodata.EmployeeId);
    console.log($scope.userinfodata.BuId);
//console.log($scope.userinfodata.currentUser);
    $scope.state = $state;
    window.$scope = $scope;


    //Add Feedback Form
    $scope.addFeedbackform = function(bugtype,bugdetail) {

        if(bugtype== undefined && bugdetail== undefined){
            alert("Please select all the mandatory fields");
            $("#AddFeedbackModal").modal("show");
        }
        else if(bugtype== null || bugtype== undefined||bugtype==""){
            alert("Please select bug type");
        }
        else if(bugdetail== null || bugdetail== undefined||bugdetail==""){
            alert("Please enter details");
        }
        else
        {
            var newFeedback = {
                "EmployeeId": $scope.userinfodata.EmployeeId
                , "Type": bugtype
                , "Details": bugdetail
            };
            $http.post(ApiUrlPrefix + 'addFeedback', newFeedback).then(function (response) {
                if (response.data) {
                    alert("Thank you for your valuable feedback...");
                    $location.path( "/home" );
                    $("#FeedbackModal").modal("hide");
                    $("#AddSkillModal").modal("hide");
                }

            },function(error){
                console.log(error);
            });
        }
    }
});