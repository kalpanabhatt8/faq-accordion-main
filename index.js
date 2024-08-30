let btn = document.querySelectorAll('#btn')
let hidePara = document.querySelectorAll('.hide')
let qaDiv = document.querySelectorAll('.question-div')


let qaDivs = document.querySelectorAll('.question-div');
document.querySelectorAll('.question-div').forEach((qaDiv) => {
    qaDiv.addEventListener('click', (event) => {
        // Determine the target element
        let target = event.target;
        
        // Check if the click was on the button or within the question-div
        if (target.tagName === 'BUTTON' || target.closest('.question-div')) {
            // Find the paragraph and icons within the current qaDiv
            let hideParagraph = qaDiv.querySelector('p');
            let plusIcon = qaDiv.querySelector('.icon-plus');
            let minusIcon = qaDiv.querySelector('.icon-minus');

            // Check if the paragraph is currently hidden
            let isHidden = hideParagraph.classList.contains('hide');
            
            // Toggle the paragraph visibility based on its current state
            hideParagraph.classList.toggle('hide', !isHidden);
            console.log(!isHidden,hideParagraph.classList, "this is classname")


            // Toggle icons based on the paragraph's new state
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
