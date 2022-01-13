const pesquisarCEP = document.querySelector("#botaoPesquisar");

pesquisarCEP.addEventListener("click", event => {

    event.preventDefault();

    const cepDigitado = document.querySelector("#cep");
    const valorCep = cepDigitado.value;
    const url = `https://viacep.com.br/ws/${valorCep}/json/`;
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    };

    fetch(url, options).then(response => {
        return response.json();
    }).then(data => {
        if (data.erro) {
            alert("Cep Digitado está inválido");
            return;
        }
        console.log(data);
        atribuirdados(data);
    });
});

function atribuirdados(data) {
    const rua = document.querySelector("#rua");
    const complemento = document.querySelector("#complemento");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");

    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
};

const LimparDados = document.querySelector("#botaoLimpar");

LimparDados.addEventListener("click", () => {
    const cep = document.querySelector("#cep");

    cep.value = "";
    rua.value = "";
    complemento.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
});