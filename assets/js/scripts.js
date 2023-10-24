document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".hidden-toggle");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var targetId = button.getAttribute("data-target");
            var targetContent = document.querySelector('[data-content="' + targetId + '"]');

            if (targetContent.style.maxHeight) {
                targetContent.style.overflow = "hidden";
                targetContent.style.maxHeight = null;
                targetContent.style.padding = "0";
                button.textContent = "Expand";
            } else {
                var scrollHeight = targetContent.scrollHeight;
                var transitionDuration = Math.min(scrollHeight * 0.002, 1.0); // Adjust the multiplier as needed
                targetContent.style.overflow = "auto";
                targetContent.style.maxHeight = scrollHeight + 50 + "px"; // Set max height
                targetContent.style.padding = "10px"; // Set padding
                targetContent.style.transition = "max-height " + transitionDuration + "s," + "padding " + transitionDuration + "s"; // Set transition duration
                button.textContent = "Collapse";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".collapse-section-toggle");

    buttons.forEach(function (button) {
        var buttonImg = button.querySelector("i");
        button.addEventListener("click", function () {
            var targetId = button.getAttribute("data-target");
            var targetContent = document.querySelector('[data-content="' + targetId + '"]');

            if (targetContent.style.maxHeight == "0px") {
                targetContent.style.maxHeight = targetContent.scrollHeight + "px";
                targetContent.style.padding = "10px";
                buttonImg.classList.toggle("fa-up-right-and-down-left-from-center");
                buttonImg.classList.toggle("fa-down-left-and-up-right-to-center");
            } else {
                targetContent.style.maxHeight = "0px";
                targetContent.style.padding = "0px";
                buttonImg.classList.toggle("fa-down-left-and-up-right-to-center");
                buttonImg.classList.toggle("fa-up-right-and-down-left-from-center");
            }
        });
    });
});