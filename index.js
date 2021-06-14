let nome = window.document.getElementById("nome");
let preco = window.document.getElementById("preco");
let btnadd = window.document.getElementById("add");
btnadd.addEventListener("click", adicionar);
function adicionar() {
  if (nome.value == "" || preco.value <= 0)
    window.alert("[erro] campo nao preenchido");
}
