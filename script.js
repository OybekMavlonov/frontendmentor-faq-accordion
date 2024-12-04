const listItems = document.querySelectorAll(".faq-list__item")

listItems.forEach((li) => {
    li.addEventListener('click', () => {
        const answer = li.querySelector(".answer") // Get the .answer the clicked li
        const minusIcon = li.querySelector(".minus-icon") // Get the .answer the clicked li
        const plusIcon = li.querySelector(".plus-icon") // Get the .answer the clicked li

        // Toggle the content's max-height for smooth opening and closing
        if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
            answer.style.maxHeight = '0';
        } else {
            answer.style.maxHeight = '100px';
        }

        // Toggle visibility of the icons
        plusIcon.classList.toggle('hidden');
        minusIcon.classList.toggle('hidden');
    })
})

