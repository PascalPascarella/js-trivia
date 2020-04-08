/*
============================================
 Author: Code Star
 Date: April 2020
 Description: The results-component.js file
		contains the VM and template for the
		resultscomponent component
===========================================
*/
ko.components.register("resultscomponent", {
	viewModel: function() {
		var self = this;
		self.vm = ViewModel;
		self.completedQuizObject = self.vm.completedQuizObject;
		self.questionArray = ko.observableArray();

		self.score = ko.observable();
		self.rank = ko.observable();
		self.scoreColor = ko.observable();
		self.categories = ko.observableArray();
		/*
		 * A Helper function which determines if the key
		 * is a key to question object, like "q1" or "q3".
		*/
		self.verifyQuestionObject = function(key){
		    return (key != "questionCount" && key.length <= 3);
		}
		/**  
		 * A Helper function which determines if the object
		 * passed to it is a ko observable.
		*/
		self.verifyKoObject = function(object){
		    if(typeof object == "function"){
		        return true;
		    }else{
		        return false;
		    }
		}
		/*
		 * The prof function is the main grading function
		 * for the application. It iterates through the completed
		 * quiz object and tallies up the correct and incorrect
		 * answers. The prof function also contains a switch
		 * statement which determines what color to use based on
		 * the percentage score for contextual styling. 
		*/
		self.prof = function(){
			var questionCount = self.vm.testObject.questionCount();
			var completedObj = self.completedQuizObject;
			var correctQuestions = 0;
			var incorrectQuestions = 0;
			var categoryArray = [];
			$.each(completedObj, function(key, value){
				if( self.verifyQuestionObject(key) ){
					if( self.verifyKoObject(completedObj[key].selected) ){
						if(completedObj[key].selected() == completedObj[key].answer()){
							correctQuestions += 1;
						}else{
							incorrectQuestions += 1;
						}
					}else{
						incorrectQuestions += 1;
					}
				}
			});
			console.log(correctQuestions);
			var percentage = ((correctQuestions / questionCount) * 100).toFixed(2);
			var percentageTxt = percentage.toString() + "%";
			var scoreText = "" + correctQuestions + "/" + questionCount + " (" + percentageTxt + ")";
			var rankTxt = "";
			var scoreColor = "";
			console.log(percentage <= 60);
			console.log(percentage <= 80);
			switch(true){
			    case (percentage <= 30.00):
			        rankTxt = "BEGINNER";
			        scoreColor = "#c84318";
			        break;
			    case (percentage <= 60.00):
			        rankTxt = "BEGINNER";
			        scoreColor = "#da891a";
			        break;
			    case (percentage <= 80.00):
			        scoreColor = "#cbda1a";
			        rankTxt = "NOVICE";
			        break;
			    case (percentage <= 100.00):
			        rankTxt = "EXPERT";
			        scoreColor = "#1ada89";
			        break;
			    default:
			        console.log("default");
			}
			self.rank(rankTxt);
			self.score(scoreText);
			self.scoreColor(scoreColor);
		}
		self.prof();    // Call the prof function

		self.arrayLoader = function( ){
			$.each(self.completedQuizObject, function(key, value){
				if(self.verifyQuestionObject(key)){
					self.questionArray.push(self.completedQuizObject[key]);  
				}
			});
		}
		/*
		 * The disabled function checks to make sure both values are observables, and then
		 * checks to see if the value of the current answer is the same as the selected.
		 * If it is not, then the radio button is disabled ensuring that only the selected
		 * radio button is not disabled.
		*/
		self.disabled = function(txtValue, selected){
			if(typeof txtValue == "function" && typeof selected == "function"){
				if(txtValue() == selected()){
					return false;
				}else{
					return true;
				}
			}else{
				return true;
			}
		}
		self.arrayLoader();
		/*
		 * The isQuestionCorrect function checks to see if the user
		 * selected the right answer. If they did, then this function
		 * returns green styling and red if they missed the question. 
		*/
		self.isQuestionCorrect = function(answer, selected){
			var correct = "15px solid #1ada89";
			var incorrect = "15px solid #c84318";
			if( typeof answer == "function" && typeof selected == "function"){
				if( selected() == answer() ){
					return correct;
				}else{
					return incorrect;
				}
			}else{
				return incorrect;
			}
		}
		/*
		 * The check function places a small green checkmark 
		 * next to the correct answer. 
		*/
		self.check = function(current, answer){
			if(typeof current == "function" && typeof answer == "function"){
				if(current() == answer()){
					return true;
				}else{
					return false;
				}
			}else{
				return false;
			}
		}
		/*
		 * The wrong function places a small red x next to the selected 
		 * value if it is incorrect.
		*/
		self.wrong = function(current, selected, answer){
			if(typeof selected == "function" && typeof answer == "function" && typeof current == "function"){
				if( current() !== answer() ){
					if( selected() == current()){
						return true;
					}
				}else{
					return false;
				}
			}else{
				return false;
			}
		}
		/*
		 * The truFalse function hides the two extra unused answers for true false questions.
		*/
		self.trueFalse = function(value){
			if(value == "!!TF"){
				return false
			}else{
				return true;
			}
		}
	},
	template:
 '<div class="results-wrapper">\
		<div class="results-questions-wrapper">\
			<div data-bind="foreach: questionArray" class="results-question">\
				<div data-bind="style: {borderLeft: $parent.isQuestionCorrect(answer, selected)}" class="results-question-heading">\
					<h1>QUESTION <!-- ko text:($index() + 1) --> <!-- /ko -->:</h1> \
					<div data-bind="html: question" class="results-question-text"></div>\
				</div>\
				<div data-bind="if: $parent.trueFalse(a1())" class="results-answer-wrapper">\
					<div class="check-container">\
						<span data-bind="if: $parent.check(a1, answer)" class="check" ><img src="./media/images/check.PNG" /></span>\
						<span data-bind="if: $parent.wrong(a1, selected, answer)" class="wrong"><img src="./media/images/wrong.PNG" /></span>\
					</div>\
					<input data-bind="checkedValue: a1, checked: selected, disable: $parent.disabled(a1, selected) " type="radio" class="results-radio-button">\
					<label data-bind="text: a1" >This is an answer</label>\
				</div>\
				<div data-bind="if: $parent.trueFalse(a2())" class="results-answer-wrapper">\
					<div class="check-container">\
						<span data-bind="if: $parent.check(a2, answer)" class="check" ><img src="./media/images/check.PNG" /></span>\
						<span data-bind="if: $parent.wrong(a2, selected, answer)" class="wrong"><img src="./media/images/wrong.PNG" /></span>\
					</div>\
					<input data-bind="checkedValue: a2, checked: selected, disable: $parent.disabled(a2, selected) " type="radio" class="results-radio-button">\
					<label data-bind="text: a2">This is an answer</label>\
				</div>\
				<div data-bind="if: $parent.trueFalse(a3())" class="results-answer-wrapper">\
					<div class="check-container">\
						<span data-bind="if: $parent.check(a3, answer)" class="check" ><img src="./media/images/check.PNG" /></span>\
						<span data-bind="if: $parent.wrong(a3, selected, answer)" class="wrong"><img src="./media/images/wrong.PNG" /></span>\
					</div>\
					<input data-bind="checkedValue: a3, checked: selected, disable: $parent.disabled(a3, selected) " type="radio" checked class="results-radio-button">\
					<label data-bind="text: a3">This is an answer</label>\
				</div>\
				<div data-bind="if: $parent.trueFalse(a4())" class="results-answer-wrapper">\
					<div class="check-container">\
						<span data-bind="if: $parent.check(a4, answer)" class="check" ><img src="./media/images/check.PNG" /></span>\
						<span data-bind="if: $parent.wrong(a4, selected, answer)" class="wrong"><img src="./media/images/wrong.PNG" /></span>\
					</div>\
					<input data-bind="checkedValue: a4, checked: selected, disable: $parent.disabled(a4, selected) " type="radio" class="results-radio-button" >\
					<label data-bind="text: a4">This is an answer</label>\
				</div>\
			</div>\
		</div>\
		<div class="results-score-aside">\
			<div class="results-score-display">\
				<h2 class="results-score-header">RESULTS</h2>\
				<h1 data-bind="text: score(), style: {color: scoreColor()}" class="results-score-number">0/0</h1>\
			</div>\
			<div class="results-score-display">\
				<h2 class="results-rank-header">RANK</h2>\
				<h1 data-bind="text: rank(), style: {color: scoreColor}" class="results-rank-text">EXPERT</h1>\
			</div>\
			<div class="results-button-group">\
				<div class="results-print-button unselectable" role="button">PRINT RESULTS</div>\
				<div class="results-again-button unselectable" role="button">TAKE AGAIN</div>\
			</div>\
		</div>\
	</div>'
});