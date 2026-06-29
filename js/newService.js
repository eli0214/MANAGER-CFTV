
const formulario = document.getElementById("formRegistro");

const indiceEdicao = localStorage.getItem("registroEditar");

if (indiceEdicao !== null) {

    const registros = JSON.parse(localStorage.getItem("registros")) || [];
    const registro = registros[indiceEdicao];

    document.getElementById("nome").value = registro.nome;
    document.getElementById("email").value = registro.email;
    document.getElementById("senhaEmail").value = registro.senhaEmail;
    document.getElementById("appAcessoExterno").value = registro.appAcessoExterno;
    document.getElementById("senhaDVR").value = registro.senhaDVR;
    document.getElementById("dataInstalacao").value = registro.dataInstalacao;
    document.getElementById("rua").value = registro.rua;
    document.getElementById("numeroCasa").value = registro.numeroCasa;
    document.getElementById("bairro").value = registro.bairro;
    document.getElementById("cidade").value = registro.cidade;
}

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const registro = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senhaEmail: document.getElementById("senhaEmail").value,
        appAcessoExterno: document.getElementById("appAcessoExterno").value,
        senhaDVR: document.getElementById("senhaDVR").value,
        dataInstalacao: document.getElementById("dataInstalacao").value,
        rua: document.getElementById("rua").value,
        numeroCasa: document.getElementById("numeroCasa").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value
    };

    let registros = JSON.parse(localStorage.getItem("registros")) || [];

    if (indiceEdicao !== null) {
        registros[indiceEdicao] = registro;
        localStorage.removeItem("registroEditar");
    } else {
        registros.push(registro);
    }

    localStorage.setItem("registros", JSON.stringify(registros));

    window.location.href = "oldService.html";
});

