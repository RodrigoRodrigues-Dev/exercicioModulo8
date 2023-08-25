const form = document.querySelector("form")
const inputNomeContato = document.getElementById("nomeContato")
const inputNumeroContato = document.getElementById("numeroContato")
const corpoTabela = document.querySelector("tbody")
const regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault()


    if (regex.test(inputNumeroContato.value)) {
        inputNomeContato.classList.remove('boxError')
        inputNumeroContato.classList.remove('boxError')
        document.querySelector('.messageError').style.display = 'none'
        
        atualizarLinhas()

    } else {
        inputNomeContato.classList.add('boxError')
        inputNumeroContato.classList.add('boxError')
        document.querySelector('.messageError').style.display = 'block'
    }

})

function atualizarLinhas() {
    
    let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>+${inputNumeroContato.value}</td>`;
        linha += '</tr>'

    linhas += linha

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

    corpoTabela.innerHTML = linhas
}
