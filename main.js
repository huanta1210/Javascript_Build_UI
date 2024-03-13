const tabItems = document.querySelectorAll('.tab-item');
const tabPanes = document.querySelectorAll('.tab-pane');
const itemActive = document.querySelector('.tab-item.active');
const line = document.querySelector('.tabs .line');
line.style.left = itemActive.offsetLeft + 'px';
line.style.width = itemActive.offsetWidth + 'px'; 


tabItems.forEach((tabs, index) => {
    tabs.onclick = function() {

        const pune = tabPanes[index];
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px'; 

        this.classList.add('active');
        pune.classList.add('active');

    }
});