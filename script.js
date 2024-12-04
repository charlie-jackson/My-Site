const submit = document.getElementById('submit');
const correctOption = document.getElementById('knitting');

submit.addEventListener("click", function() {
    if (correctOption.checked) {
        alert('Well done, this is a lie!');
    } else {
        alert('Sorry, this is actually true! Please try again...');
    }
});

// document.getElementById('submit').addEventListener('click', () => {
//     alert(document.getElementById('knitting').checked ? "Well done, this is a lie!" : "Sorry, that's actually true! Try again...");
// });




let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
})