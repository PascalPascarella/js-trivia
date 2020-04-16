/*
============================================
 Author: Code Star
 Date: April 2020
 Description: The home-component.js file
    holds the VM and the template for the
    homecomponent component. 
===========================================
*/
ko.components.register("homecomponent", {
	viewModel: function(){
		var self = this;
		self.vm = ViewModel;    // Reference the main App VM.
		/*
		 * Determines whether the big button should say
		 * resume or start. Bases decision off of the
		 * initialized observable from the main app viewModel.
		*/
		self.quizMessage = ko.computed(function(){
			if(self.vm.initialized() === false){
				return "START QUIZ";
			}else{
				return "RESUME QUIZ";
			}
		}, self);
	},
	template:
 '<div class="home-main">\
		<div class="home-background"></div>\
			<div class="home-text-box">\
				<div class="home-title">TRY/CATCH!</div>\
				<div class="home-tagline">AN SPA QUIZZER FOR JAVASCRIPT ENTHUSIASTS</div>\
				<div data-bind="text: quizMessage" role="button" class="home-start-button unselectable">START QUIZ</div>\
	</div>'
});
