document.addEventListener('paste', function (event) {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    const trimmed = paste.trim();
    event.preventDefault();
    if (event.target.isContentEditable || event.target.tagName.toLowerCase() === 'textarea' || (event.target.tagName.toLowerCase() === 'input' && ['text', 'search', 'url', 'tel', 'password'].indexOf(event.target.type.toLowerCase()) > -1)) {
        document.execCommand('insertText', false, trimmed);
    }
});
