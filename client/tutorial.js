Session.set('tutorialEnabled', true);
var emitter = new EventEmitter();


var homeTutorialSteps = [
  {
    template: Template.tutorial_step1,
    onLoad: function() { console.log("The tutorial has begun !"); },
    spot: ".tut1",
  },
  {
    template: Template.tutorial_step2,
    spot: ".tut2"
  }
];

var wordsTutorialSteps = [
  {
    template: Template.tutorial_step3,
    spot: ".tut3",
   
  },
  {
    template: Template.tutorial_step4,
    spot: ".tut4"
  },
  {
    template: Template.tutorial_step5,
    spot: ".tut5"
  },
  {
    template: Template.tutorial_step6,
    spot: ".tut6"
  },
  {
    template: Template.tutorial_step7,
    spot: ".tut7"
  },
  {
    template: Template.tutorial_step8,
    spot: ".tut8"
  },
];