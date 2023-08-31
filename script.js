window.onload = () => {
    const moreButtons = document.querySelectorAll('.show-back');

    moreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const parentElement = this.parentElement;
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            const isVisible = targetElement.style.display === 'flex';
            const subElements = parentElement.querySelectorAll('.serves-img, .serves-title, .serves-price');
            
            subElements.forEach(element => {
                element.style.display = isVisible ? 'block' : 'none';
            });

            this.textContent = isVisible ? 'More' : 'Less';
            targetElement.style.display = isVisible ? 'none' : 'flex';
        });
    });

    const sideScrollContainers = document.querySelectorAll('.side-scroll-container');

    sideScrollContainers.forEach(container => {
        let isMouseDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', function (e) {
            isMouseDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        document.addEventListener('mousemove', function (e) {
            if (!isMouseDown) return;

            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 3;
            container.scrollLeft = scrollLeft - walk;
        });

        document.addEventListener('mouseup', function () {
            isMouseDown = false;
        });
    });

    var showSidebarButton = document.querySelector('.show-sidebar');
    var sidebar = document.getElementById('sidebar');

    showSidebarButton.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
    var switchLightMode = document.querySelector('.switch-light-mode input[type="checkbox"]');
    var root = document.documentElement;

    switchLightMode.addEventListener('change', function() {
        if (this.checked) {
            root.style.setProperty('--background-color-3', '#222222');
            root.style.setProperty('--black-color', '#fff');
        } else {
            root.style.setProperty('--background-color-3', '#D4E6F1');
            root.style.setProperty('--black-color', '#222');
        }
    });

};
