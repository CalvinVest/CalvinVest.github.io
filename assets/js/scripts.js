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

    var step = "#0F0F0F";

    switch (bodyId) {
        case 'red-page': {
            document.documentElement.style.setProperty('--page-darkest', 'var(--red-darkest)');
            document.documentElement.style.setProperty('--page-darker', 'var(--red-darker)');
            step = "#0F0D0D";
            break;
        }
        case 'yellow-page': {
            document.documentElement.style.setProperty('--page-darkest', 'var(--yellow-darkest)');
            document.documentElement.style.setProperty('--page-darker', 'var(--yellow-darker)');
            step = "#0F0F0D";
            break;
        }
        case 'green-page': {
            document.documentElement.style.setProperty('--page-darkest', 'var(--green-darkest)');
            document.documentElement.style.setProperty('--page-darker', 'var(--green-darker)');
            step = "#0D0F0D";
            break;
        }
        case 'teal-page': {
            document.documentElement.style.setProperty('--page-darkest', 'var(--teal-darkest)');
            document.documentElement.style.setProperty('--page-darker', 'var(--teal-darker)');
            step = "#0D0F0F";
            break;
        }
        case 'blue-page': {
            document.documentElement.style.setProperty('--page-darkest', 'var(--blue-darkest)');
            document.documentElement.style.setProperty('--page-darker', 'var(--blue-darker)');
            step = "#0D0D0F";
            break;
        }
        case 'purple-page': {
            document.documentElement.style.setProperty('--page-darkest', 'var(--purple-darkest)');
            document.documentElement.style.setProperty('--page-darker', 'var(--purple-darker)');
            step = "#0F0D0F";
            break;
        }
    }

    var darkest = getComputedStyle(document.documentElement).getPropertyValue('--page-darkest');
    var darker = getComputedStyle(document.documentElement).getPropertyValue('--page-darker');
    var nextColors = extrapolatePageColors(darkest, darker);
    document.documentElement.style.setProperty('--page-dark', nextColors[0]);
    document.documentElement.style.setProperty('--page-neutral', nextColors[1]);
    document.documentElement.style.setProperty('--page-light', nextColors[2]);
    document.documentElement.style.setProperty('--page-lighter', nextColors[3]);
    document.documentElement.style.setProperty('--page-lightest', nextColors[4]);

    const academicsButton = document.getElementById("academics-button");
    if (academicsButton) {
        const academicsDropdown = academicsButton.nextElementSibling;
        if (academicsDropdown) {
            academicsDropdown.classList.add("academics-drop");
        }
    }
    const genealogyButton = document.getElementById("genealogy-button");
    if (genealogyButton) {
        const genealogyDropdown = genealogyButton.nextElementSibling;
        if (genealogyDropdown) {
            genealogyDropdown.classList.add("genealogy-drop");
        }
    }
    const programmingButton = document.getElementById("programming-button");
    if (programmingButton) {
        const programmingDropdown = programmingButton.nextElementSibling;
        if (programmingDropdown) {
            programmingDropdown.classList.add("programming-drop");
        }
    }
});

function extrapolatePageColors(first, second) {
    var firstR = parseInt(first.slice(1, 3), 16);
    var firstG = parseInt(first.slice(3, 5), 16);
    var firstB = parseInt(first.slice(5, 7), 16);
    var secondR = parseInt(second.slice(1, 3), 16);
    var secondG = parseInt(second.slice(3, 5), 16);
    var secondB = parseInt(second.slice(5, 7), 16);
    var deltaR = secondR - firstR;
    var deltaG = secondG - firstG;
    var deltaB = secondB - firstB;

    var thirdR = Math.round(secondR + deltaR);
    var thirdG = Math.round(secondG + deltaG);
    var thirdB = Math.round(secondB + deltaB);

    var fourthR = Math.round(thirdR + deltaR);
    var fourthG = Math.round(thirdG + deltaG);
    var fourthB = Math.round(thirdB + deltaB);

    var fifthR = Math.round(fourthR + deltaR);
    var fifthG = Math.round(fourthG + deltaG);
    var fifthB = Math.round(fourthB + deltaB);

    var sixthR = Math.round(fifthR + deltaR);
    var sixthG = Math.round(fifthG + deltaG);
    var sixthB = Math.round(fifthB + deltaB);

    var seventhR = Math.round(sixthR + deltaR);
    var seventhG = Math.round(sixthG + deltaG);
    var seventhB = Math.round(sixthB + deltaB);

    var third = "#" + (1 << 24 | thirdR << 16 | thirdG << 8 | thirdB).toString(16).slice(1).toUpperCase();
    var fourth = "#" + (1 << 24 | fourthR << 16 | fourthG << 8 | fourthB).toString(16).slice(1).toUpperCase();
    var fifth = "#" + (1 << 24 | fifthR << 16 | fifthG << 8 | fifthB).toString(16).slice(1).toUpperCase();
    var sixth = "#" + (1 << 24 | sixthR << 16 | sixthG << 8 | sixthB).toString(16).slice(1).toUpperCase();
    var seventh = "#" + (1 << 24 | seventhR << 16 | seventhG << 8 | seventhB).toString(16).slice(1).toUpperCase();

    return [third, fourth, fifth, sixth, seventh];
}
