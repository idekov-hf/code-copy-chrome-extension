 
document.addEventListener('paste', function (e) {
    
    var data;
    
    // e.preventDefault();
    
    // IE
     if (window.clipboardData) {
       data = window.clipboardData.getData('Text');
        
    // Standard-compliant browsers
    } else {
        data = e.clipboardData.getData('text');
     }
    
    console.log('paste', data);
    
});

document.addEventListener('copy', function (e) {
 
    
    console.log('copy', data);
});

document.addEventListener('cut', function (e) {

    
    console.log('cut', data);
});

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