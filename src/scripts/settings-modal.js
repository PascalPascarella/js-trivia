/*
============================================
 Author: Code Star
 Date: April 2020
 Description: The script which handles the 
    settings modal which allows user to select
    settings. Uses jQuery.
===========================================
*/ 

var jst = new JsTriva();

var settingsModal = {
  destroy: function() {
    $(".settings-cover").remove();
    $(".settings-modal").remove();
    console.clear();
  },
  initialize: function(testObject) {
    jst = new JsTrivia();
    var modal = new Markup();
    $("body").append(modal.completeMarkup);
    settingsHandler(modal, testObject);
  }
};

function settingsHandler(markupObject, testObject) {
  var settingObjArray = Object.keys(testObject);
  settingObjArray.forEach((v, i, a) => {
    var inputMarkup = markupObject.buildSettingsMarkup(
      testObject,
      testObject[v]["settingText"],
      testObject[v]["type"],
      testObject[v]["options"],
      v
    );
    $("#settings-form").append(inputMarkup);
  });
}


var settings = {
  scrambleAnswers: {
    settingText: "Scramble the order of the answers?",
    type: "select",
    options: {
      true: "true",
      false: "false",
      selected: jst.getScrambleAnswers()
    }
  },
  scrambleQuestions: {
    settingText: "Scramble the order of the questions?",
    type: "select",
    options: {
      true: "true",
      false: "false",
      selected: jst.getScrambleQuestions()
    }
  }
};

function Markup() {
  this.coverMarkup = "<div class='settings-cover'>";
  this.modalMarkup = "<div class='settings-modal'>";
  this.closeDiv = "</div>";
  this.saveButtonMarkup = "<button id='save-settings' class='settings-save'>SAVE</button>";
  this.closeButtonMarkup = "<button id='close-settings' class='settings-close'>CLOSE</button>";
  this.buttonWrapperMarkup =
    "<div class='settings-button-wrapper'>" + this.closeButtonMarkup + this.saveButtonMarkup + this.closeDiv;
  this.formMarkup = "<form id='settings-form'></form>";
  this.headingMarkup = "<h1 class='settings-header'>Settings</h1>";
  this.completeMarkup =
    this.coverMarkup +
    this.closeDiv +
    this.modalMarkup +
    this.headingMarkup +
    this.formMarkup +
    this.buttonWrapperMarkup +
    this.closeDiv;
  this.buildSettingsMarkup = function(testObject, settingText, type, options, name) {
    inputMarkup = "";
    var optionsArray = Object.keys(options);
    switch (type) {
      case "select":
        inputMarkup += buildSettingsSelect(testObject, settingText, type, options, name, optionsArray);
        break;
      default:
        console.log("default");
    }
    return inputMarkup;
  };
}

function buildSettingsSelect(testObject, settingText, type, options, name, optionsArray) {
  var selectOpt = "<div class='settings-set'><label for='" + name + "'>" + settingText + "</label>";
  selectOpt += "<select class='settings-" + type + "' name='" + name + "'>";
  optionsArray.forEach(x => {
    if (x != "selected") {
      if( testObject[name]["options"][x] == testObject[name]["options"]["selected"]){
        selectOpt += "<option selected value='" + x + "'>" + x + "</option>";
      }else{
        selectOpt += "<option value='" + x + "'>" + x + "</option>";
      }
    }
  });
  selectOpt += "</select></div>";
  return selectOpt;
}

function saveSettings(testObject, formObject){
    var vm = ViewModel;   // Local Reference to the main App ViewModel
    var updatedSettings = jQuery.extend({}, testObject);
    if( vm.initialized() === false){
      $(".settings-modal").append("<p class='save-message'>Settings have been saved! Please reload the page to Apply Settings</p>");
    }else{
      $(".settings-modal").append("<p class='save-message'>Reload the page before next quiz to apply settings!</p>");
    }
    jst.save($('select[name=scrambleAnswers').val(), $('select[name=scrambleQuestions').val() );
}