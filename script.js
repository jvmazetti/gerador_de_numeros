const button = document.querySelector('.generate');

button.addEventListener('click', function() {
    const min = parseInt(document.querySelector('#min').value);
    const max = parseInt(document.querySelector('#max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(isNaN(result)) {
        result = 'Valor Inválido'
    }

    document.querySelector('.resultado > span').textContent = result;
});