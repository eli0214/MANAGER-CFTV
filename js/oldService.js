const listaRegistros = document.getElementById("listaRegistros");

let registros = JSON.parse(localStorage.getItem("registros")) || [];

registros.forEach((registro, index) => {

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${registro.nome}</td>
        <td>${registro.email}</td>
        <td>${registro.senhaEmail}</td>
        <td>${registro.appAcessoExterno}</td>
        <td>${registro.senhaDVR}</td>
        <td>${registro.dataInstalacao}</td>
        <td>${registro.rua}</td>
        <td>${registro.numeroCasa}</td>
        <td>${registro.bairro}</td>
        <td>${registro.cidade}</td>
        <td>
            <button onclick="editarRegistro(${index})">Editar</button>
            <button onclick="excluirRegistro(${index})">Excluir</button>
        </td>
    `;

    listaRegistros.appendChild(linha);

});

function excluirRegistro(index) {

    if (!confirm("Deseja realmente excluir este registro?")) {
        return;
    }

    registros.splice(index, 1);

    localStorage.setItem("registros", JSON.stringify(registros));

    location.reload();
}

function editarRegistro(index) {

    localStorage.setItem("registroEditar", index);

    window.location.href = "newService.html";
}