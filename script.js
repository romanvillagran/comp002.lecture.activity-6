const form = document.getElementById('forms')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputValue = document.getElementById('userInput').value;
    console.log("Form submission prevented. Input value:", inputValue);
});


window.addEventListener('load', function() {
    const savedColor = this.localStorage.getItem('selectedColor');
    if (savedColor){
        console.log("stored color in local Storage:", savedColor);
        this.document.getElementById('colorInput').value = cavedColor;
    }
});

const colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input', function(event){
    const colorValue = colorInput.value;

    console.log("Color selected:", colorValue);

    localStorage.setItem('selectedColor', colorValue);
});

