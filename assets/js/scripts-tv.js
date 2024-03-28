document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".collapse-section-toggle");

    buttons.forEach(function (button) {
        var targetId = button.getAttribute("data-target");
        var targetContent = document.querySelector('[data-content="' + targetId + '"]');
        var buttonImg = button.querySelector("i");
        var initScrollHeight = targetContent.scrollHeight + 100;

        targetContent.style.display = "none";

        // Check if the section should start collapsed
        if (targetContent.parentElement.classList.contains("expanded")) {
            targetContent.style.display = "flex";
            targetContent.style.overflow = "auto";
            targetContent.style.maxHeight = initScrollHeight + "px";
        } else {
            targetContent.style.maxHeight = 0;
            targetContent.style.margin = 0;
            targetContent.style.padding = 0;
            targetContent.style.overflow = "hidden";
            targetContent.style.display = "none";
        }

        button.addEventListener("click", function () {
            if (targetContent.style.maxHeight != "0px") {
                targetContent.style.margin = 0;
                targetContent.style.padding = 0;
                targetContent.style.maxHeight = 0;
                targetContent.style.overflow = "hidden";
                setTimeout(function () {
                    targetContent.style.display = "none";
                }, 300);
            } else {
                targetContent.style.display = "flex";
                targetContent.style.overflow = "auto";
                setTimeout(function () {
                    targetContent.style.margin = "10px";
                    targetContent.style.padding = "10px";
                    targetContent.style.maxHeight = initScrollHeight + "px";
                }, 1);

            }
            buttonImg.classList.toggle("fa-chevron-down");
            buttonImg.classList.toggle("fa-chevron-up");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bodyId = document.body.id;

    if (bodyId == "tv-page") {
        document.documentElement.style.setProperty('--page-darkest', 'var(--tv-darkest)');
        document.documentElement.style.setProperty('--page-darker', 'var(--tv-darker)');
        document.documentElement.style.setProperty('--page-dark', 'var(--tv-dark)');
        document.documentElement.style.setProperty('--page-neutral', 'var(--tv-neutral)');
        document.documentElement.style.setProperty('--page-light', 'var(--tv-light)');
        document.documentElement.style.setProperty('--page-lighter', 'var(--tv-lighter)');
        document.documentElement.style.setProperty('--page-lightest', 'var(--tv-lightest)');
    }
});