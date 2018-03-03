document.addEventListener('paste', function (e) {
  var data

  // event.preventDefault();

  // IE
  if (window.clipboardData) {
    data = window.clipboardData.getData('Text')

    // Standard-compliant browsers
  } else {
    data = e.clipboardData.getData('text')
  }

  console.log('paste', ': ' + data)
  console.log(e)
})

document.addEventListener('copy', function (event) {
  var data

  // event.preventDefault();

  // IE
  if (window.clipboardData) {
    data = window.clipboardData.getData('Text')

    // Standard-compliant browsers
  } else {
    data = event.clipboardData.getData('text')
  }

  console.log('copy', ': ' + data)
  console.log(event.clipboardData)
})

document.addEventListener('cut', function (i) {
  var data
  data = i.clipboardData.getData('text')
  console.log('cut', ': ' + data)
})
// Path access to outerText of the codeBlock events
//  .target.firstChild.parentNode.offsetParent.outerText

/**
function clickRealm(monitorEvents) {

    var clicks = [];
    var clickIds = 1;
    var i, marker;

    function numClicker() {

        var clicker = monitorEvents(document.body, 'click');

        clicker.id = clickIds;
        clickIds++;
        clicks.push(clicker);
    }

    for (i = 0;
        (marker = clicks[i]); i++) {
        console.log(clicks[i].document.child);
    }

    numClicker();
}
clickRealm(monitorEvents);
**/
