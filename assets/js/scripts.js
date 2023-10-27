document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".collapse-section-toggle");

    buttons.forEach(function (button) {
        var targetId = button.getAttribute("data-target");
        var targetContent = document.querySelector('[data-content="' + targetId + '"]');
        var buttonImg = button.querySelector("i");
        var initScrollHeight = targetContent.scrollHeight + 100;

        // Check if the section should start collapsed
        if (targetContent.parentElement.classList.contains("expanded")) {
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

    if (bodyId === 'red-page') {
        document.documentElement.style.setProperty('--page-lightest', 'var(--red-lightest)');
        document.documentElement.style.setProperty('--page-lighter', 'var(--red-lighter)');
        document.documentElement.style.setProperty('--page-light', 'var(--red-light)');
        document.documentElement.style.setProperty('--page-neutral', 'var(--red-neutral)');
        document.documentElement.style.setProperty('--page-dark', 'var(--red-dark)');
        document.documentElement.style.setProperty('--page-darker', 'var(--red-darker)');
        document.documentElement.style.setProperty('--page-darkest', 'var(--red-darkest)');
    } else if (bodyId === 'yellow-page') {
        document.documentElement.style.setProperty('--page-lightest', 'var(--yellow-lightest)');
        document.documentElement.style.setProperty('--page-lighter', 'var(--yellow-lighter)');
        document.documentElement.style.setProperty('--page-light', 'var(--yellow-light)');
        document.documentElement.style.setProperty('--page-neutral', 'var(--yellow-neutral)');
        document.documentElement.style.setProperty('--page-dark', 'var(--yellow-dark)');
        document.documentElement.style.setProperty('--page-darker', 'var(--yellow-darker)');
        document.documentElement.style.setProperty('--page-darkest', 'var(--yellow-darkest)');
    } else if (bodyId === 'green-page') {
        document.documentElement.style.setProperty('--page-lightest', 'var(--green-lightest)');
        document.documentElement.style.setProperty('--page-lighter', 'var(--green-lighter)');
        document.documentElement.style.setProperty('--page-light', 'var(--green-light)');
        document.documentElement.style.setProperty('--page-neutral', 'var(--green-neutral)');
        document.documentElement.style.setProperty('--page-dark', 'var(--green-dark)');
        document.documentElement.style.setProperty('--page-darker', 'var(--green-darker)');
        document.documentElement.style.setProperty('--page-darkest', 'var(--green-darkest)');
    } else if (bodyId === 'teal-page') {
        document.documentElement.style.setProperty('--page-lightest', 'var(--teal-lightest)');
        document.documentElement.style.setProperty('--page-lighter', 'var(--teal-lighter)');
        document.documentElement.style.setProperty('--page-light', 'var(--teal-light)');
        document.documentElement.style.setProperty('--page-neutral', 'var(--teal-neutral)');
        document.documentElement.style.setProperty('--page-dark', 'var(--teal-dark)');
        document.documentElement.style.setProperty('--page-darker', 'var(--teal-darker)');
        document.documentElement.style.setProperty('--page-darkest', 'var(--teal-darkest)');
    } else if (bodyId === 'blue-page') {
        document.documentElement.style.setProperty('--page-lightest', 'var(--blue-lightest)');
        document.documentElement.style.setProperty('--page-lighter', 'var(--blue-lighter)');
        document.documentElement.style.setProperty('--page-light', 'var(--blue-light)');
        document.documentElement.style.setProperty('--page-neutral', 'var(--blue-neutral)');
        document.documentElement.style.setProperty('--page-dark', 'var(--blue-dark)');
        document.documentElement.style.setProperty('--page-darker', 'var(--blue-darker)');
        document.documentElement.style.setProperty('--page-darkest', 'var(--blue-darkest)');
    } else if (bodyId === 'purple-page') {
        document.documentElement.style.setProperty('--page-lightest', 'var(--purple-lightest)');
        document.documentElement.style.setProperty('--page-lighter', 'var(--purple-lighter)');
        document.documentElement.style.setProperty('--page-light', 'var(--purple-light)');
        document.documentElement.style.setProperty('--page-neutral', 'var(--purple-neutral)');
        document.documentElement.style.setProperty('--page-dark', 'var(--purple-dark)');
        document.documentElement.style.setProperty('--page-darker', 'var(--purple-darker)');
        document.documentElement.style.setProperty('--page-darkest', 'var(--purple-darkest)');
    }

    const academicsButton = document.getElementById("academics-button");
    const academicsDropdown = academicsButton.nextElementSibling;

    if(academicsDropdown) {
        academicsDropdown.classList.add("academics-drop");
    }

    const genealogyButton = document.getElementById("genealogy-button");
    const genealogyDropdown = genealogyButton.nextElementSibling;

    if(genealogyDropdown) {
        genealogyDropdown.classList.add("genealogy-drop");
    }

    const programmingButton = document.getElementById("programming-button");
    const programmingDropdown = programmingButton.nextElementSibling;

    if(programmingDropdown) {
        programmingDropdown.classList.add("programming-drop");
    }
});
