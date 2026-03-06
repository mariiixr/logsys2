// Encontra os elementos pelo id
const listaPedidos = document.getElementById("lista-pedidos");
const listaEntregas = document.getElementById("lista-entregas");
const listaNotificacoes = document.getElementById("lista-notificacoes");

// 2. Popula os pedidos recentes
pedidosRecentes.forEach(function(pedido) {
  listaPedidos.innerHTML += `
    <li>
      <strong>${pedido.id}</strong> — ${pedido.cliente}
    </li>
  `;
});

// Popula as entregas pendentes
entregasPendentes.forEach(function(entrega) {
  listaEntregas.innerHTML += `
    <li>
      <strong>${entrega.id}</strong> — Previsão: ${entrega.previsao}
    </li>
  `;
});

// Popula as notificações
notificacoes.forEach(function(notif) {
  listaNotificacoes.innerHTML += `
    <li>${notif.mensagem}</li>
  `;
});

// Métricas
document.getElementById("total-pedidos").textContent = pedidosRecentes.length;

const receita = pedidosRecentes.reduce((soma, p) => soma + p.valor, 0);
document.getElementById("total-receita").textContent = "R$ " + receita.toLocaleString("pt-BR");

document.getElementById("total-clientes").textContent = clientesAtivos.length;


// Saudação dinâmica
const hora = new Date().getHours();
let saudacao = "";

if (hora >= 5 && hora < 12) {
  saudacao = "Bom dia";
} else if (hora >= 12 && hora < 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

document.querySelector(".welcome-card h2").innerHTML = 
  `${saudacao}, <span>USUÁRIO</span>`;

document.getElementById("total-pedidos").textContent = pedidosRecentes.length;

// Gráfico
const ctx = document.getElementById("grafico-pedidos").getContext("2d");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: pedidosPorStatus.labels,
    datasets: [{
      data: pedidosPorStatus.valores,
      backgroundColor: pedidosPorStatus.cores,
      borderWidth: 0
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#888888",
          font: { size: 13 }
        }
      }
    }
  }
});