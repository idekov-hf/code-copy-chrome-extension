const CodeBlock = (function() {

    let copyButton;
    let preElements;
    let preIndex;

    function selectText(element) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function addButtonClickListener(button) {
        button.addEventListener('click', () => {
            const preElement = preElements[preIndex];
            const codeElement = preElement.children[0];
            selectText(codeElement);
            document.execCommand("copy");
        });
    }

    function createCopyButton() {
        const button = document.createElement('button');
        button.classList.add('copy-button');
        button.textContent = 'Copy Code';

        addButtonClickListener(button);

        return button;
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
        codeContainer.appendChild(copyButton);
    }

    function hideCopyButton(codeContainer) {
        codeContainer.removeChild(copyButton);
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
        copyButton = createCopyButton();
        preElements = document.querySelectorAll('.post-text pre');
        handlePreElements(preElements);
    }

    return {
        init: init
    };

})();
