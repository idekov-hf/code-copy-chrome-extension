
//monitorEvents is passed through using the Console's API 

var clickRealm = function (monitorEvents) {
    
document.addEventListener('paste', function (e) {
    
    var data;
    
    e.preventDefault();
    
    // IE
    if (window.clipboardData) {
        data = window.clipboardData.getData('Text');
        
    // Standard-compliant browsers
    } else {
        data = e.clipboardData.getData('text');
    }
    
    console.log('paste', data);
    
});

document.addEventListener('copy', function (data) {
    console.log('copy', data);
});

document.addEventListener('cut', function (data) {
    console.log('cut', data);
});

/***
 *
 * 

    var clicks = [];
    var clickIds = 1; 
    var i, marker;
            
    function numClicker(){
                    
        var clicker = monitorEvents(document.body, 'click');
                            
        clicker.id = clickIds;
        clickIds++;
        clicks.push(clicker);
         }
             
    for (i = 0; (marker = clicks[i]); i++){
             console.log(clicks[i].document.child);
        }
***/                            
}


var CodeBlock = (function() {
    
    var copyButtonContainer;
    
    function displayCopyButton(codeContainer) {
        codeContainer.appendChild(copyButtonContainer);
    }
    
    function hideCopyButton(codeContainer) {
        codeContainer.removeChild(copyButtonContainer);
    }
    
    function createCopyButton() {
        var buttonContainer = document.createElement('div');
        var button = document.createElement('button');
        buttonContainer.classList.add('copy-button-container');
        button.textContent = 'Copy Code';
        buttonContainer.appendChild(button);
        
        return buttonContainer;
    }
    
    function setupListeners(codeElements) {
        codeElements.forEach(function(element) {
            var parentNode = element.parentNode;
            parentNode.style.position = 'relative';
			parentNode.addEventListener('mouseenter', function() {
			    displayCopyButton(parentNode);
			});
			parentNode.addEventListener('mouseleave', function() {
			    hideCopyButton(parentNode);
			});
		});
    }
    
    function init() {
        copyButtonContainer = createCopyButton();
        var codeElements = document.querySelectorAll('pre code');
        
        setupListeners(codeElements);
    }
    
    return {
        init: init
    };

})();
document.addEventListener("DOMContentLoaded", function(event) {
    CodeBlock.init();
});
