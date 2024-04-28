
// Animation collapse accordion
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (accordionButtons[index].classList.contains('plus-rotate-icon-active')) {
            accordionButtons[index].classList.remove('plus-rotate-icon-active');
        } else {
            accordionButtons[index].classList.add('plus-rotate-icon-active');
        }

        if (accordionButtons[index].classList.contains('circle-rotate-icon-active')) {
            accordionButtons[index].classList.remove('circle-rotate-icon-active');
        } else {
            accordionButtons[index].classList.add('circle-rotate-icon-active');
        }
    })
});

// Animation move partners list by mouse move
const scrollWrapper = document.querySelector('.scroll-wrapper');
const scrollWrapperContent = scrollWrapper.querySelector('.scroll-wrapper__content');
const minTranslateX = scrollWrapper.offsetWidth - scrollWrapperContent.offsetWidth;
let mouseMoveX = 0;
let isMouseDown = false;

function getCurrentTranslateX(){
    let transformStyle = window.getComputedStyle(scrollWrapperContent).getPropertyValue("transform");

    if (transformStyle && transformStyle !== 'none') {
        let transformMatrix = transformStyle.split('(')[1].split(')')[0].split(',');
        let translateX = parseInt(transformMatrix[4]);
        
        return translateX;
    } else {
        return 0;
    }
}

scrollWrapper.addEventListener("mousedown", function (event) {
    isMouseDown = true;
    mouseMoveX = event.clientX;
});

scrollWrapper.addEventListener("mouseup", function () {
    isMouseDown = false;
});

scrollWrapper.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

scrollWrapper.addEventListener("mousemove", function (e) {
    if(isMouseDown){
        let newMouseMoveX = e.clientX;
        let translateX = newMouseMoveX - mouseMoveX + getCurrentTranslateX();

        if (translateX >= minTranslateX && translateX <= 0) {
            scrollWrapperContent.style.transform = `translateX(${translateX}px)`;
        }
        // Cập nhật giá trị của mouseMoveX
        mouseMoveX = newMouseMoveX;
    }
});
// End: Animation scroll