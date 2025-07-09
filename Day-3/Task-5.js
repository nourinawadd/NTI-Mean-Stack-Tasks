document.getElementById("myNumber").addEventListener("keydown", function(event) {
    // allow: backspace, delete, tab, escape, enter, arrows
    if (
        [8, 9, 13, 27, 46, 37, 38, 39, 40].includes(event.keyCode) ||
        // allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        ((event.ctrlKey || event.metaKey) && [65, 67, 86, 88].includes(event.keyCode))
    ) {
        return;
    }
    // allow: 0-9 (main keyboard) and 0-9 (numpad)
    if (
        (event.keyCode >= 48 && event.keyCode <= 57 && !event.shiftKey) ||
        (event.keyCode >= 96 && event.keyCode <= 105)
    ) {
        return;
    }
    // prevent all other keys
    event.preventDefault();
});