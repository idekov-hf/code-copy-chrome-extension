const CodeBlock = (function() {

    let copyButtonContainer;
    let preElements;
    let preIndex;

    function selectText(element) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function createCopyButton() {
        const buttonContainer = document.createElement('div');
        const button = document.createElement('button');
        buttonContainer.classList.add('copy-button-container');
        button.textContent = 'Copy Code';
        buttonContainer.appendChild(button);

        button.addEventListener('click', () => {
            const preElement = preElements[preIndex];
            const codeElement = preElement.children[0];
            selectText(codeElement);
            document.execCommand("copy");
        });

        return buttonContainer;
    }

    function createNewContainer(element) {
        const parentNode = element.parentNode;
        const newContainer = document.createElement('div');
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
        newContainer.addEventListener('mouseenter', () => {
            displayCopyButton(newContainer);
            preIndex = index;
        });
        newContainer.addEventListener('mouseleave', () => {
            hideCopyButton(newContainer);
        });
    }

    function handlePreElements(preElements) {
        preElements.forEach((element, index) => {
            const newContainer = createNewContainer(element);

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