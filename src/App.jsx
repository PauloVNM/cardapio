import { useState } from 'react'
import './App.css'

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    let novoCarrinho = [...carrinho];

    if (itemExistente) {
      const itemIndex = novoCarrinho.findIndex(item => item.nome === nome);
      novoCarrinho[itemIndex].quantidade++;
    } else {
      novoCarrinho.push({
        nome: nome,
        preco: preco,
        quantidade: 1
      });
    }
    setCarrinho(novoCarrinho);
  }

  const totalCarrinho = carrinho.reduce((total, item) => {
    return total + (item.preco * item.quantidade);
  }, 0);

  // AQUI ENTRA A LÓGICA DO BOTÃO
  function finalizarPedido() {
    // Se o carrinho estiver vazio, não faz nada
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const numeroRestaurante = "5592911112222"; // << BOTE SEU NÚMERO AQUI
    let textoPedido = "Olá, gostaria de fazer o seguinte pedido:\n\n";

    // Mapeia o carrinho para gerar a lista de itens
    carrinho.forEach(item => {
      textoPedido += `*${item.quantidade}x* ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });

    // Adiciona o total
    textoPedido += `\n*Total: R$ ${totalCarrinho.toFixed(2)}*`;

    // Codifica o texto para a URL
    const linkWhatsApp = `https://wa.me/${numeroRestaurante}?text=${encodeURIComponent(textoPedido)}`;

    // Abre em uma nova aba
    window.open(linkWhatsApp, '_blank');
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>

      <div id="produtos">
        
        {/*
          ESTRUTURA CORRIGIDA: A <img> é 'irmã' do 'card-texto',
          e não 'filha' dela.
        */}
        <div className="item-cardapio card-red">
          <div className="card-texto">
            <h3>X-Bacon</h3>
            <p>Pão, hambúrguer, queijo, bacon e salada.</p>
            <button className="btn-adicionar" onClick={() => adicionarAoCarrinho('X-Bacon', 25.00)}>
              Adicionar
            </button>
          </div>
          <img src="/images/X-Bacon.png" alt="X-Bacon" className="card-imagem img-bacon" />
        </div>

        <div className="item-cardapio card-red">
          <div className="card-texto">
            <h3>Batata Frita</h3>
            <p>Porção de 300g com cheddar e bacon.</p>
            <button className="btn-adicionar" onClick={() => adicionarAoCarrinho('Batata Frita', 15.00)}>
              Adicionar
            </button>
          </div>
          <img src="/images/Batata Frita.png" alt="Batata Frita" className="card-imagem img-batata" />
        </div>

        <div className="item-cardapio card-blue">
          <div className="card-texto">
            <h3>Refrigerante Lata</h3>
            <p>Coca-Cola ou Guaraná.</p>
            <button className="btn-adicionar" onClick={() => adicionarAoCarrinho('Refrigerante Lata', 5.00)}>
              Adicionar
            </button>
          </div>
          <img src="/images/Refrigerante Lata.png" alt="Refrigerante" className="card-imagem img-refri" />
        </div>

      </div>

      <h2>Meu Carrinho</h2>

      <div id="carrinho-visual">
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((item, index) => (
            <p key={index}>
              {item.quantidade}x {item.nome} - R$ {(item.preco * item.quantidade).toFixed(2)}
            </p>
          ))
        )}
      </div>
      
      <strong id="carrinho-total">
        Total: R$ {totalCarrinho.toFixed(2)}
      </strong>

      {/* BOTÃO NOVO AQUI */}
      <button className="btn-finalizar" onClick={finalizarPedido}>
        Finalizar Pedido
      </button>

    </div>
  )
}

export default App