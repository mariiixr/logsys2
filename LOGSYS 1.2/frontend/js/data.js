// dados mockados para o dashboard

const pedidosRecentes = [
  { id: "PED-001", cliente: "TechCorp Ltda", valor: 8990, status: "entregue" },
  { id: "PED-002", cliente: "Inova Solutions", valor: 2350, status: "pendente" },
  { id: "PED-003", cliente: "Grupo Nexus", valor: 15670, status: "transito" },
  { id: "PED-004", cliente: "MyChainz CO", valor: 12345, status: "pendente" },
];

const entregasPendentes = [
  { id: "PED-002", cliente: "Inova Solutions", previsao: "14/03/2026" },
  { id: "PED-003", cliente: "Grupo Nexus", previsao: "16/03/2026" },
];

const notificacoes = [
  { mensagem: "Estoque de Monitor LG abaixo do mínimo", tipo: "alerta" },
  { mensagem: "Pedido PED-001 entregue com sucesso", tipo: "sucesso" },
  { mensagem: "Novo cliente cadastrado: Alfa Sistemas", tipo: "info" },
];

const clientesAtivos = [
  { nome: "TechCorp Ltda" },
  { nome: "Inova Solutions" },
  { nome: "Grupo Nexus" },
  { nome: "Alfa Sistemas" },
];

const pedidosPorStatus = {
  labels: ["Entregue", "Em Trânsito", "Processando", "Pendente"],
  valores: [8, 3, 5, 2],
  cores: ["#00e89d", "#f0c040", "#5b8fff", "#ff6b6b"]
};