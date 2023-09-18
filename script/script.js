function inviaTesto() {
    let paragrafo = document.getElementById("name");
    let nome = document.getElementById("nome").value;
    
    paragrafo.innerHTML = "Benvenuto " + nome;
}
