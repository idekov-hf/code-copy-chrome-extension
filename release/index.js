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