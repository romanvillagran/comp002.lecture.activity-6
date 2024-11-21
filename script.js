const form = document.getElementById('forms')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputValue = document.getElementById('userInput').ariaValueMax;
    console.log("Form submission prevented. Input value:", inputValue);
});

