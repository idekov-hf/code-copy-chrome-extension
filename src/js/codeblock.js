var CodeBlock = (function() {
    
    var codeElements;
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
        button.classList.add('copy-button');
        button.textContent = 'Copy Code';
        buttonContainer.appendChild(button);
        
        return buttonContainer;
    }
    
    function setupListeners() {
        codeElements.forEach(function(element) {
            var parentNode = element.parentNode;
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
        codeElements = document.querySelectorAll('pre code');
        
        setupListeners(codeElements);
    }
    
    return {
        init: init
    };

})();