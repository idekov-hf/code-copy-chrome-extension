var CodeBlock = (function() {
    
    var codeElements;
    
    function init() {
        codeElements = document.querySelectorAll('pre code');
        
        codeElements.forEach(function(element) {
			element.addEventListener('mouseenter', showCopyButton);
		});
    }
    
    function showCopyButton(evt) {
        console.log(evt);
    }
    
})();