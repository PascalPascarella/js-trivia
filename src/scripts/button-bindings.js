/* 
============================================================
 Author: Code Star
 Date: April 2020
 Description: The button-bindings file is responsible
 		for assigning click events to buttons using jQuery's
 		.on() method. Then the respective code is run after each
 		press. 
===========================================================
*/
$(document).ready(function() {
	/*
	 ---------- Settings Modal Bindings ----------
	*/
		$(document.body).on("click", "#settingsTrigger", function() {
			settingsModal.initialize(settings);
		});
		$(document.body).on("click", ".settings-close", function() {
			settingsModal.destroy();
		});
		$(document.body).on("click", ".settings-save", function() {
			saveSettings(settings, $("#settings-form"));
		});
	/*
	 ---------- NAVBAR Bindings ----------
	*/
		$(document.body).on("click", ".navbar-home", function() {
			navigate("Home");
		});
		$(document.body).on("click", ".actionButton", function() {
			navigate("actionButton");
		});
		$(document.body).on("click", ".navbar-quizzes", function() {
			navigate("quizzes");
		});
		$(document.body).on("click", ".navbar-results", function() {
			navigate("results");
		});
		$(document.body).on("click", ".navbar-resources", function() {
			navigate("resources");
		});
		$(document.body).on("click", ".navbar-about", function() {
			navigate("about");
		});
	/*
	  ---------- Home Component Bindings ----------
	 */
		$(document.body).on("click", ".home-start-button", function() {
			ViewModel.start();
		});
	/*
	  ---------- Quiz Component Bindings ----------
	*/
		$(document.body).on("click", ".question-next-button", function() {
			console.log('clicked');
			ViewModel.progress();
		});
		$(document.body).on("click", ".question-back-button", function() {
			console.log('clicked');
			ViewModel.regress();
		});
	/*
	   ---------- Results Component Bindings ----------
	*/
		$(document.body).on("click", ".results-print-button", function() {
			window.print();
		});
		$(document.body).on("click", ".results-again-button", function() {
			ViewModel.start();
		});
	/*
	   ---------- Quizzes Component Bindings ----------
	*/
		$(document.body).on("click", ".quizzes-item-button", function() {
			quizzesActionButton();
		});
 });