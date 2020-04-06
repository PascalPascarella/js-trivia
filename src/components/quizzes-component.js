/*
============================================
 Author: Code Star
 Date: April 2020
 Description: The quizzes-component.js file
    contains the VM and template for the 
    quizzescomponent component
===========================================
*/
ko.components.register("quizzescomponent", {
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

        self.state = ko.computed(function(){
            if(self.initialized()){
                return "RESUME QUIZ";
            }else{
                return "START QUIZ";
            }
        }, self);

        self.buttonColor = ko.computed(function(){
            if(self.initialized()){
                return "#6fac46";
            }
        }, self);
        
        
    },
    template:
    '<div class="home-background"></div>\
    <div class="quizzes-backdrop" ></div>\
    <div class="quizzes-title">AVAILABLE QUIZZES</div>\
    <div class="quizzes-item-container">\
        <h1 class="quizzes-item-header">BASIC JAVASCRIPT </h3>\
        <div data-bind="text: state, style: {borderColor: buttonColor, color: buttonColor}" class="quizzes-item-button unselectable"></div>\
    </div>'
});