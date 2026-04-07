async function buscarUsuario() {
    const username = document.getElementById('in-user').value.trim();
    const divResult = document.getElementById('result');
    const loading = document.getElementById('loading');

    divResultado.innerHTML = "";

    if (!username) {
        divResultado.innerHTML = `<div class="alert alert-warning">Digite um nome de usuário.</div>`;
        return;
    }

    loading.classList.remove('d-none');

    try {
        const resposta = await fetch(`https://api.github.com/users/${username}`);

        if (!resposta.ok) {
            throw new Error("Usuário não encontrado no GitHub!");
        }

        const dados = await resposta.json();

        divResultado.innerHTML = `
            <div class="card bg-secondary p-3">
                <img src="${dados.avatar_url}" width="120" class="rounded-circle mx-auto mb-3">
                <h3>${dados.name || username}</h3>
                <p>Seguidores: ${dados.followers}</p>
            </div>
        `;

    } catch (erroTratado) {
        console.error(erroTratado);
        divResultado.innerHTML = `<div class="alert alert-danger">${erroTratado.message}</div>`;

    } finally {
        loading.classList.add('d-none');
    }
}
