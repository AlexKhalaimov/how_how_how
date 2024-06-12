var select = document.querySelector('.custom-select');
var selected = document.querySelector('.select-selected');
var items = document.querySelector('.select-items');
var hiddenInput = document.getElementById('user-gender');

selected.addEventListener('click', function () {
    items.classList.toggle('select-hide');
    selected.classList.toggle('select-arrow-active');
});

var options = items.getElementsByTagName('div');
for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
        console.log(1);
        var value = this.getAttribute('data-value');
        selected.innerHTML = this.innerHTML + '<span class="select-arrow"></span>';
        hiddenInput.value = value;
        items.classList.add('select-hide');
        selected.classList.remove('select-arrow-active');
    });
}

document.addEventListener('click', function (e) {
    console.log(2);
    if (!select.contains(e.target)) {
        items.classList.add('select-hide');
        selected.classList.remove('select-arrow-active');
    }
});