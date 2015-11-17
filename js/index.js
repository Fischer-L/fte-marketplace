/* global FTEWizard
*/
'use strict';
(function(exports) {

  var tutorialContainer = document.getElementById('tutorialContainer');

  var tutorial = new FTEWizard('marketplaceTutorial');
  tutorial.init({
    container: tutorialContainer,
    pageClass: 'slide',
    buttonsClass: 'slide-button',
    propagateKeyEvent: true
  });

  exports.tutorial = tutorial;

})(window);
