/*
============================================
 Author: Code Star
 Date: April 2020
 Description: A script which handles navigation
    in the application.
===========================================
*/
const CONFIRM_MESSAGE = "Are you sure you would like to return home? " +
     "Answers will not be saved!";

function navigate(target){
    switch( target ){
        case "Home": 
            ViewModel.activeComponent("homecomponent");
            break;
        
        case "actionButton":
            actionButton();
            break;
        
        case "quizzes":
            ViewModel.activeComponent("quizzescomponent");
            break;
        
        case "resources":
            ViewModel.activeComponent("resourcescomponent");
            break;
        
        case "results":
            ViewModel.activeComponent("resultscomponent");
            break;

        case "about":
            ViewModel.activeComponent("aboutcomponent");
            break;        
    }
}
function navigateAway(){
    try{
        if( ViewModel.activeComponent() == "quizcomponent"){
            if( confirm(CONFIRM_MESSAGE) == true){
                return true;
            }else{
                console.log("Navigation Canceled");
                return false;
            }
        }
    }catch(err){
        console.log(err);
        console.log("ViewModel likely wasn't instantiated");
        location.reload();
    }
}
function actionButton(){
    if(ViewModel.activeComponent() === "quizcomponent"){
        if(confirm("Are you sure you want to quit?")){
            ViewModel.quit();
        }
        
    }else{
        ViewModel.activeComponent("quizcomponent");
    }
}
function quizzesActionButton(){
    if(ViewModel.initialized()){
        ViewModel.activeComponent("quizcomponent");
    }else{
        ViewModel.start();
    }
}