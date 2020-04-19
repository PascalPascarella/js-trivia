/*
============================================
 Author: Code Star
 Date: April 2020
 Description: The quiz-component.js file
    contains the VM and template for the
    quizcomponent component.
===========================================
*/
ko.components.register("quizcomponent", {
	viewModel: function(questionObject) {
		var self = this;

		self.vm = ViewModel;

		self.progressTracker = ko.computed(function(){
			return self.vm.progressTracker()
		}, self);

		self.currentQuestionObject = ko.computed(function(){
			return self.vm.currentQuestionObject()
		}, self);

		/*
		 * Determines if the next button should display
		 * NEXT QUESTION or SUBMIT QUIZ by doing some comparison.
		*/
		self.nextText = ko.computed(function(){
			if(self.vm.currentQuestionNumber() == self.vm.testObject["questionCount"]()){
				return "SUBMIT QUIZ";
			}else{
				return"NEXT QUESTION";
			}
		}, self);

		self.question = ko.computed(function(){
			return self.currentQuestionObject().question();
		}, self);

		self.a1 = ko.computed(function(){
			return self.currentQuestionObject().a1();
		}, self);
			
		self.a2 = ko.computed(function(){
			return self.currentQuestionObject().a2();
		}, self);
			
		self.a3 = ko.computed(function(){
			return self.currentQuestionObject().a3();
		}, self);

		self.a4 = ko.computed(function(){
			return self.currentQuestionObject().a4();
		}, self);
			
		self.selected = ko.computed(function(){
			return self.currentQuestionObject().selected();
		}, self);
		/*
		 * The clicked function is bound to the ko click binding.
		 * When the user clicks on an option a bit of jQuery retrieves
		 * the selected value and then the selected property of the
		 * current object is set to that value.
		*/
		self.clicked = function(){
			var value = $('input[name=\'option\']:checked').val();
			self.currentQuestionObject().selected(value);
			return true;
		}
		/* 
		 * The trueFalse function determines if the value of the current answer
		 * is equal to !!TF. If so it returns false. This function is utilized 
		 * in a KO if binding that controls whether that answer shows up as
		 * a possible choice. The need for this arises when you have a true or false
		 * question which only requires two options. You can disable the other two
		 * options by setting their value to !!TF. This approach is repeated in the
		 * resultscomponent. 
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
 '<div class="wrapper">\
 		<div class="question-main">\
			<div class="question-box">\
				<div class="card" id="card">\
					<input type="checkbox" id="card1" class="more" aria-hidden="true">\
						<div class="content">\
							<div class="front">\
								<div class="inner" style="font-weight: 600;">\
									<div class="question-header">\
										<h2 class="question-header-text">QUESTION:  </h2>\
											<div data-bind="html: question" class="question-text">What is a closure used for?</div>\
									</div>\
									<div class="question-button-set">\
										<div role="button" class="question-back-button unselectable">BACK</div>\
										<div data-bind="text: nextText()" role="button" class="question-next-button unselectable">NEXT QUESTION</div>\
									</div>\
									<div data-bind="text: progressTracker" class="question-counter" style="color: white;">QUESTION 1 OF 10</div>\
									<label for="card1" class="button" aria-hidden="true">\
										TRY!\
									</label>\
								</div>\
							</div>\
							<div class="back">\
								<div class="inner" style="font-weight: 600;">\
								<div class="description">\
									<div class="question-set">\
										<!-- ko if: trueFalse(a1()) -->\
										<div class="question-answer-wrapper">\
											<input id="a1" data-bind="checkedValue: a1, checked: selected, click: clicked" type="radio" class="question-radio-button" name="option">\
											<label for="a1" data-bind="text: a1" >self is an answer</label>\
										</div>\
										<!-- /ko -->\
										<!-- ko if: trueFalse(a2()) -->\
										<div  class="question-answer-wrapper">\
											<input id="a2" data-bind="checkedValue: a2, checked: selected, click: clicked" type="radio" class="question-radio-button" name="option">\
											<label for="a2" data-bind="text: a2">self is an answer</label>\
										</div>\
										<!-- /ko -->\
										<!-- ko if: trueFalse(a3()) -->\
										<div  class="question-answer-wrapper">\
											<input id="a3" data-bind="checkedValue: a3, checked: selected, click: clicked" type="radio" class="question-radio-button" name="option">\
											<label for="a3" data-bind="text: a3">self is an answer</label>\
										</div>\
										<!-- /ko -->\
										<!-- ko if: trueFalse(a4()) -->\
										<div class="question-answer-wrapper">\
											<input id="a4" data-bind="checkedValue: a4, checked: selected, click: clicked" type="radio" class="question-radio-button" name="option">\
											<label for="a4" data-bind="text: a4">self is an answer</label>\
										</div>\
										<!-- /ko -->\
									</div>\
									<div class="question-button-set">\
										<div role="button" class="question-back-button unselectable">BACK</div>\
										<div data-bind="text: nextText()" role="button" class="question-next-button unselectable">NEXT QUESTION</div>\
									</div>\
									<div data-bind="text: progressTracker" class="question-counter">QUESTION 1 OF 10</div>\
								</div>\
								<label for="card1" class="button return" aria-hidden="true">\
									<i class="fas fa-arrow-left">CATCH!</i>\
								</label>\
							</div>\
						</div>\
				</div>\
			</div>\
		</div>\
	</div>'
	});