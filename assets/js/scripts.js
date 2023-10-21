document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".hidden-toggle");
    var contents = document.querySelectorAll(".hidden-content");
    var originalHeights = []; // Store original heights

    // Initialize original heights and set initial styles
    contents.forEach(function (content) {
        originalHeights.push(content.scrollHeight);
        content.style.maxHeight = "0";
        content.style.overflow = "hidden";
    });

    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            if (contents[index].style.maxHeight === "0px" || contents[index].style.maxHeight === "") {
                contents[index].style.maxHeight = originalHeights[index] + "px";
                contents[index].style.padding = "10px";
                button.textContent = "Collapse";
            } else {
                contents[index].style.maxHeight = "0px";
                contents[index].style.padding = "0px";
                button.textContent = "Expand";
            }

        });
    });
});