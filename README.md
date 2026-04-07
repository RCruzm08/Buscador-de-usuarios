# 🔍 GitHub Challenger

> Analise qualquer perfil do GitHub com estilo.

Um aplicativo web elegante, inspirado em terminais, para pesquisar perfis de usuários do GitHub. Desenvolvido como parte do projeto **The KingsMan**.

---

## ✨ Recursos

- Busca qualquer nome de usuário do GitHub em tempo real
- Exibe avatar, nome, biografia, repositórios, seguidores e usuários que segue
- Link direto para o perfil do usuário no GitHub
- Estado de carregamento animado e tratamento de erros
- Interface escura com estética cyberpunk/monoespaçada

---

## 🛠️ Tecnologias

- **HTML5 / CSS3 / JavaScript puro** — sem frameworks, sem dependências
- **API REST do GitHub** — `https://api.github.com/users/{username}`
- **Google Fonts** — Share Tech Mono + Syne

---

## 🚀 Como usar

1. Clone o repositório:

``bash

git clone https://github.com/RCruzm08/Buscador-de-usuarios.git

```
2. Abra o arquivo `index.html` no seu navegador — pronto. Nenhuma etapa de compilação necessária.

---

## 📁 Estrutura
```
├── index.html
├── style.css
└── script.js
```
---

## 📌 Observações

- Requisições não autenticadas à API do GitHub são limitadas a **60 requisições/hora** por IP.

- Para aumentar esse limite, adicione um token de acesso pessoal aos cabeçalhos de busca.

---
