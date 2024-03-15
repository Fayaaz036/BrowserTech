const inputFields = document.querySelectorAll('input[type="text"], input[type="radio"]');
inputFields.forEach(function (inputField){

    inputField.addEventListener("change", function(){
        const value = inputField.value;
        const key = 'dataSaved'+ inputFields.id;

        localStorage.setItem(key, value);

        alert("Data opgeslagen");
    })
})

window.addEventListener("load", function(){
    const key = 'dataSaved'+ inputFields.id;
    const dataSaved = localStorage.getItem(key);
    if (dataSaved !== null){
        inputFields.value = dataSaved;
        if (inputFields.value === dataSaved) {
            inputFields.checked = true;
        }
    }
})