function addBaliza() {
    let bal = this.value;
    console.log(bal);
    cambioSit();
    document.getElementById("MiLista").innerHTML += "<li>" + bal + "</li>";
    localStorage.setItem("baliza1", bal);
}

//# sourceMappingURL=index.6d8fae21.js.map
