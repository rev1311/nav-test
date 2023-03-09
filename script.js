const menu = document.querySelector('#menu-container')

Array.from(document.querySelectorAll('.menu-item'))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    })