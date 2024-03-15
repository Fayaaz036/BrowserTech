document.getElementById('belastingform').addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(document.getElementById('belastingform'));

    formData.forEach(function(value, key) {
        localStorage.setItem(key, value);
    });

    alert('Gegevens zijn opgeslagen in de local storage');
});

document.addEventListener('DOMContentLoaded', function() {
    var formElements = document.querySelectorAll('#belastingform input, #belastingform textarea');

    formElements.forEach(function(element) {
        var storedValue = localStorage.getItem(element.name);

        if (storedValue) {
            element.value = storedValue;
        }
    });
});
