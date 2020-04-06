/*
Title: Javascript Quiz
Author: Brendan Mulhern, Pascal Pascarella, Joann Saeou, Jeff Lindel
Date: 8 March 2020
Modified By: Brendan Mulhern, Pascal Pascarella, Joann Saeou, Jeff Lindel
Description: This is the javascript quiz for the group project.
*/
//constant quiz container
const quizContainer = document.getElementById("quiz");

//constant result
const resultsContainer = document.getElementById("results");

//constant submit button
const submitButton = document.getElementById("submit");

function buildQuiz() {}

function showResults() {}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);





//jQuery star rating

$(function() {

    $("#rateYo").rateYo({
        rating: 3.6
    });

});