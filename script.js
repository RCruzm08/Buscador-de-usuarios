async function buscarUsuario() {
    const username = document.getElementById('in-user').value.trim();
    const divResultado = document.getElementById('result');
    const loading = document.getElementById('loading');

    divResultado.innerHTML = "";

    if (!username) {
        divResultado.innerHTML = `<div class="alert warning">⚠ Enter a username.</div>`;
        return;
    }

    loading.classList.remove('d-none');

    try {
        const resposta = await fetch(`https://api.github.com/users/${username}`);

        if (!resposta.ok) throw new Error("User not found on GitHub.");

        const dados = await resposta.json();

        divResultado.innerHTML = `
            <div class="card">
                <div class="card-top">
                    <img src="${dados.avatar_url}" alt="avatar">
                    <div class="card-info">
                        <h2>${dados.name || username}</h2>
                        <span class="handle">@${dados.login}</span>
                        <p class="bio">${dados.bio || "No biography."}</p>
                    </div>
                </div>
                <div class="stats">
                    <div class="stat">
                        <span class="stat-value">${dados.public_repos}</span>
                        <span class="stat-label">Repos</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${dados.followers}</span>
                        <span class="stat-label">followers</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${dados.following}</span>
                        <span class="stat-label">following</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${dados.location}</span>
                        <span class="stat-label">following</span>
                    </div>
                </div>
                <a class="profile-link" href="${dados.html_url}" target="_blank">View profile on GitHub ↗</a>
            </div>
        `;

    } catch (erro) {
        divResultado.innerHTML = `<div class="alert danger">✖ ${erro.message}</div>`;
    } finally {
        loading.classList.add('d-none');
    }
}

document.getElementById('in-user').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') buscarUsuario();
});
