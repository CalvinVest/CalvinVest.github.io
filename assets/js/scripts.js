window.addEventListener('scroll', function () {
    // Get the scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Get the sidebar and main content elements
    var sidebar = document.querySelector('.sidebar');
    var mainContent = document.querySelector('.main-content');

    // Adjust the position of the sidebar based on scroll
    sidebar.style.top = scrollPosition + 'px';
});