/*
============================================
 Author: Code Star
 Date: April 2020
 Description: The navbar-component.js file
    holds the VM and template for the
    navbarcomponent component. 
===========================================
*/
ko.components.register("navbarcomponent", {
	viewModel: function(){
		var self = this;
		self.vm = ViewModel;    // Local Reference to Main App ViewModel

		self.initialized = ko.computed(function(){
			console.log(this.vm.initialized());
			return self.vm.initialized();
		}, self);
		self.activeComponent = ko.computed(function(){
			return self.vm.activeComponent();
		}, self);
		self.actionButtonText = ko.computed(function(){
			if(self.activeComponent() !== "quizcomponent"){
				return "RESUME QUIZ";
			}else{
				return "QUIT QUIZ";
			}
		}, self);
		self.actionButtonColor = ko.computed(function(){
			if(self.activeComponent() !== "quizcomponent"){
				return "#6fac46";
			}else{
				return "#c84318";
			}
		}, self);
	},
	template:
 '<div class="navbar">\
		<div class="navbar-logo">TRY/CATCH</div>\
		<div class="navbar-home left-option unselectable">HOME</div>\
		<div class="navbar-quizzes left-option unselectable">QUIZZES</div>\
		<div class="navbar-resources left-option unselectable">JS RESOURCES</div>\
		<div class="navbar-results left-option unselectable">RESULTS (debug)</div>\
		<div class="navbar-about left-option unselectable">ABOUT US</div>\
		<!-- ko if: initialized -->\
		<div data-bind="text: actionButtonText, style: {color: actionButtonColor}" class="navbar-actionButton left-option unselectable actionButton">Test</div>\
		<!-- /ko -->\
		<div class="navbar-settings">\
			<img role="button" draggable="false" ondragstart="return false;" aria-label="settings" \
				id="settingsTrigger" alt="Settings Icon" class="settings-icon" src="media/images/settings.svg" />\
		</div>\
	</div>'
});