/*
============================================
 Author: Code Star
 Date: April 2020
 Description: The main app script which 
		calls the main appViewModel. All other
		viewmodels base at least some of their 
		observables off of observables found in
		this file. 
===========================================
*/
$(function() {
	/*
	 * The main App ViewModel.
	 */
	function AppViewModel() {
		var self = this;
		self.JST = "";
		self.testObject = "";
		self.questionCount = "";

		self.completedQuizObject = self.testObject;		// Overridden in self.completeQuiz()
		self.activeComponent = ko.observable("homecomponent");
		self.navBar = ko.observable("navbarcomponent");
		self.initialized = ko.observable(false);	// Keeps track of whether the user has started a quiz yet

		self.currentQuestionNumber = "";
		self.progressTracker = "";
		self.currentQuestionObject = "";

		/*
		 * The start function performs much of the tasks
		 * required to start a quiz such as loading a new
		 * testObject based on what the js-quizzer file
		 * returns.
		 */
		self.start = function() {
			self.activeComponent("quizcomponent");
			if (!self.initialized()) {
				self.initialized(true);
				self.JST = new JsTriva();
				self.testObject = ko.mapping.fromJS(self.JST.testObject);
				self.questionCount = self.testObject["questionCount"];
				self.currentQuestionNumber = ko.observable(1).extend({ notify: "always" });
				self.progressTracker = ko.computed(function() {
					return "QUESTION " + self.currentQuestionNumber() + " OF " + self.questionCount();
					}, self)
					.extend({ notify: "always" });
				self.currentQuestionObject = ko.computed(function() {
					return self.testObject["q" + self.currentQuestionNumber()];
					}).extend({ notify: "always" });
			}
		};

		/*
		 * The quit function handles the graceful exit from
		 * the quiz. The testObject is overwritten to reset
		 * selected answers, the current question number is 
		 * reset to 1, and the homecomponent becomes the 
		 * active component.
		 */
		self.quit = function() {
			self.testObject = ko.mapping.fromJS(self.JST.testObject);
			self.currentQuestionNumber(1);
			self.initialized(false);
			self.activeComponent("homecomponent");
		};

		/*
		 * The progress function progresses the user to the 
		 * next question in the quiz. If they are on the last
		 * question, it progresses them to the resultscomponent
		 * via the self.completeQuiz(). 
		 */
		self.progress = function() {
			var current = self.currentQuestionNumber();
			var next = current + 1;
			if (next > self.questionCount()) {
				self.completeQuiz();
			} else {
				self.currentQuestionNumber(next);
			}
		};

		/*
		 * The regress function is simply the opposite
		 * of the progress function. It regresses the 
		 * user to the previous question. If the user
		 * is on the first question, the regress function
		 * sets the activecomponent to be the homecomponent.
		 */
		self.regress = function() {
			var current = self.currentQuestionNumber();
			var last = current - 1;
			if (last <= 0) {
				// If on first question, go to homepage on regress
				self.activeComponent("homecomponent");
			} else {
				self.currentQuestionNumber(last);
			}
		};

		/*
		 * The getAnsweredCount() function is a helper function which
		 * calculates how many questions the user has completed. Used 
		 * in the completeQuiz() function. 
		 */
		self.getAnsweredCount = function() {
			var JsTestObject = ko.mapping.toJS(self.testObject);
			var count = 0;
			$.each(JsTestObject, function(key, value) {
				if (key !== "questionCount") {
					if (JsTestObject[key]["selected"]) {
						count += 1;
					}
				}
			});
			return count;
		};

		/*
		 * The completeQuiz() function is called in the progress function
		 * when the user is on the last question. The completeQuiz()
		 * function checks to make sure all questions have been answered. 
		 * If they have, a completed quiz object is created. This object
		 * is then used in the resultscomponent viewmodel to grade the quiz.
		 * Other actions are performed to gracefully clean up the state much
		 * like the quit function.
		 */
		self.completeQuiz = function() {
			var answerCount = self.getAnsweredCount();
			var unanswered = self.testObject.questionCount() - self.getAnsweredCount();
			var confirmComplete =
				"Dear User," +
				"\n\n" +
				"You have unfortunately left " +
				unanswered +
				" question(s) blank. Please go back and answer them." +
				"\n\n" +
				"Best Regards," +
				"\n" +
				"Code Star Management";
			if (answerCount < self.questionCount()) {
				alert(confirmComplete);
			} else {
				self.completedQuizObject = self.testObject;
				self.activeComponent("resultscomponent");
				self.initialized(false);
				self.testObject = ko.mapping.fromJS(self.JST.testObject);
				self.currentQuestionNumber(1);
			}
		};
	}

	/*
	 * Create a new ViewModel object and apply it.
	*/
	ViewModel = new AppViewModel();
	ko.applyBindings(ViewModel);
});
