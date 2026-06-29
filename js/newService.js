const formulario = document.getElementById("formRegistro");

let registros = JSON.parse(localStorage.getItem("registros")) || [];
const indiceEdicao = localStorage.getItem("registroEditar");

// Se estiver editando
if (indiceEdicao !== null && registros[indiceEdicao]) {

    const registro = registros[indiceEdicao];

    document.getElementById("nome").value = registro.nome;
    document.getElementById("email").value = registro.email;
    document.getElementById("senhaEmail").value = registro.senhaEmail;
    document.getElementById("appAcessoExterno").value = registro.appAcessoExterno;
    document.getElementById("senhaApp").value = registro.senhaApp
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
        senhaApp: document.getElementById("senhaApp").value,
        senhaDVR: document.getElementById("senhaDVR").value,
        dataInstalacao: document.getElementById("dataInstalacao").value,
        rua: document.getElementById("rua").value,
        numeroCasa: document.getElementById("numeroCasa").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value
    };

    if (indiceEdicao !== null && registros[indiceEdicao]) {

        registros[indiceEdicao] = registro;
        localStorage.removeItem("registroEditar");

        alert("Registro atualizado com sucesso!");

    } else {

        registros.push(registro);

        alert("Registro salvo com sucesso!");
    }

    localStorage.setItem("registros", JSON.stringify(registros));

    formulario.reset();

    window.location.href = "oldService.html";
});