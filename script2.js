$(document).ready(function() {
    // Block right-click
    $(window).on("contextmenu", function(e) {
        e.preventDefault(); // Prevent the default context menu from appearing
    });

    // Block specific key combinations
    $(document).on("keydown", function(e) {
        // Check if the Control key (or Command key on Mac) is pressed
        if (e.ctrlKey || e.metaKey) {
            var c = e.which || e.keyCode; // Get key code
            switch (c) {
                case 83: // Block Ctrl+S
                case 87: // Block Ctrl+W (not effective in Chrome)
                case 73: // Block Ctrl+I
                case 67: // Block Ctrl+C
                case 123: // Block F12
                    e.preventDefault(); // Prevent the default action
                    break;
            }
        }
    });
});