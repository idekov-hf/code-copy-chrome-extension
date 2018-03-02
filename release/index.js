 
document.addEventListener('paste', function (e) {
    
    var data;
    
    // event.preventDefault();
    
    // IE
     if (window.clipboardData) {
       data = window.clipboardData.getData('Text');
        
    // Standard-compliant browsers
    } else {
        data = e.clipboardData.getData('text');
     }
    
    console.log('paste', ": " + data);
    console.log(e);
    
});

document.addEventListener('copy', function (event) {
    
    var data;
    
     // event.preventDefault();
    
    // IE
     if (window.clipboardData) {
       data = window.clipboardData.getData('Text');
        
    // Standard-compliant browsers
    } else {
        data = event.clipboardData.getData('text');
     }
 
    
    console.log('copy', ": " + data);
    console.log(event.clipboardData);
});

document.addEventListener('cut', function (i) {

    var data;
    data = i.clipboardData.getData('text');
    console.log('cut', ": " + data);
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
var CodeBlock = (function() {

    var copyButtonContainer;
    var preElements;
    var preIndex;

    function selectText(element) {
        var text = element;
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function createCopyButton() {
        var buttonContainer = document.createElement('div');
        var button = document.createElement('button');
        buttonContainer.classList.add('copy-button-container');
        button.textContent = 'Copy Code';
        buttonContainer.appendChild(button);

        button.addEventListener('click', function() {
            var preElement = preElements[preIndex];
            var codeElement = preElement.children[0];
            selectText(codeElement);
            document.execCommand("copy");
            var selection = window.getSelection();
            selection.removeAllRanges();
        });

        return buttonContainer;
    }

    function createNewContainer(element) {
        var parentNode = element.parentNode;
        var newContainer = document.createElement('div');
        newContainer.classList.add('new-container');
        newContainer.style.position = 'relative';
        newContainer.appendChild(element);
        parentNode.appendChild(newContainer);

        return newContainer;
    }

    function displayCopyButton(codeContainer) {
        codeContainer.appendChild(copyButtonContainer);
    }

    function hideCopyButton(codeContainer) {
        codeContainer.removeChild(copyButtonContainer);
    }

    function setupListeners(newContainer, index) {
        newContainer.addEventListener('mouseenter', function() {
            displayCopyButton(newContainer);
            preIndex = index;
        });
        newContainer.addEventListener('mouseleave', function() {
            hideCopyButton(newContainer);
        });
    }

    function handlePreElements(preElements) {
        preElements.forEach(function(element, index) {
            var newContainer = createNewContainer(element);

            setupListeners(newContainer, index);
        });
    }

    function init() {
        copyButtonContainer = createCopyButton();
        preElements = document.querySelectorAll('.post-text pre');
        handlePreElements(preElements);
    }

    return {
        init: init
    };

})();

document.addEventListener("DOMContentLoaded", function(event) {
    CodeBlock.init();
});

/**
var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent, $1 ) {
  alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    event.target === $1;
    event.firstChild.parentNode.style.display = "background-color: rgba(0,0,0,0.2), color:red outline: 9999px solid rgba(0,0,0,0.5)";
    alert("Copied text to clipboard: " + event.data["text/plain"] );
  } );
} );

**/