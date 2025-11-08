# Cardápio Digital (Desenvolvido com React)

Este é um projeto de front-end que demonstra o uso do **React.js** para criar um cardápio digital interativo. A aplicação permite que o usuário selecione itens, adicione-os a um carrinho e finalize o pedido, que é formatado para envio direto via WhatsApp.

Este projeto serve como uma prova de conceito prática para gerenciamento de estado (client-side) e componentização com React.

## 🚀 Funcionalidades Principais

* **Componentização:** Interface construída com componentes React (`App.jsx`).
* **Gerenciamento de Estado:** Uso do Hook `useState` para gerenciar o estado do carrinho de compras em tempo real.
* **Cálculo de Total:** Lógica em JavaScript (`reduce`) para calcular o total do pedido dinamicamente.
* **Integração com API do WhatsApp:** Ao finalizar, o pedido é formatado e enviado para a API pública do WhatsApp (`wa.me`), abrindo o aplicativo com a mensagem pronta.

## 🛠️ Tecnologias Utilizadas

* **React** (com Hooks: `useState`)
* **JavaScript (ES6+)**
* **CSS3** (Estilização pura, via `App.css`)

## ⚙️ Como Rodar Localmente

1.  Clone este repositório.
2.  Instale as dependências: `npm install`
3.  Execute o servidor de desenvolvimento: `npm run dev`