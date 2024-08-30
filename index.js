let btn = document.querySelectorAll('#btn')
let hidePara = document.querySelectorAll('.hide')
let qaDiv = document.querySelectorAll('.question-div')


let qaDivs = document.querySelectorAll('.question-div');
document.querySelectorAll('.question-div').forEach((qaDiv) => {
    qaDiv.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName === 'BUTTON' || target.closest('.question-div')) {
            let hideParagraph = qaDiv.querySelector('p');
            let plusIcon = qaDiv.querySelector('.icon-plus');
            let minusIcon = qaDiv.querySelector('.icon-minus');
            let isHidden = hideParagraph.classList.contains('hide');
            
   
            hideParagraph.classList.toggle('hide', !isHidden);
            console.log(!isHidden,hideParagraph.classList, "this is classname")


            if (isHidden) {
                plusIcon.classList.add('hide');
                minusIcon.classList.remove('hide');
            } else {
                plusIcon.classList.remove('hide');
                minusIcon.classList.add('hide');
            }
        }
    });
});
