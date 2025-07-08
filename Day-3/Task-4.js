document.addEventListener("keydown", function(event) {
    let message = `ASCII Code: ${event.keyCode}`;
    if (event.altKey) {
        message += " : alt key pressed";
    }
    if (event.ctrlKey) {
        message += " : ctrl key pressed";
    }
    if (event.shiftKey) {
        message += " : shift key pressed";
    }
    alert(message);
});