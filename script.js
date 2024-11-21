const form = document.getElementById('forms')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputValue = document.getElementById('userInput').value;
    console.log("Form submission prevented. Input value:", inputValue);
});

const colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input', function(event){
    const colorValue = colorInput.value;

    console.log("Color selected:", colorValue);
})

