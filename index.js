let nome = window.document.getElementById("nome");
let preco = window.document.getElementById("preco");
let btnadd = window.document.getElementById("add");
btnadd.addEventListener("click", adicionar);
function adicionar() {
  if (nome.value == "" || preco.value <= 0)
    window.alert("[erro] campo nao preenchido");
  else {
    let ulista = window.document.getElementById("ulista");
    let lista = window.document.createElement("li");
    let btndell = window.document.createElement("button");
    btndell.textContent = "Apagar";

    btndell.addEventListener("click", deletar);
    function deletar() {
      lista.remove();
    }

    ulista.appendChild(lista);
    lista.innerHTML = `Produto : ${nome.value} <p>Valor R$ : ${preco.value} `;
    lista.appendChild(btndell);
  }
  nome.value = ``;
  preco.value = ``;
}
