const slider = document.getElementById('slider');
const sliders = Array.from(slider.children);

slider.addEventListener('click', (event) => {
    if(event.target.classList.contains('slider-item')) {
        sliders.forEach(element => {
            element.classList.remove('active')
        });
        event.target.classList.toggle('active');
    }
})