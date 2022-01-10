function addBaliza(){
    let bal=this.value;
    console.log(bal);
    cambioSit();
    document.getElementById("MiLista").innerHTML+="<li>"+bal+"</li>";
    localStorage.setItem("baliza1",bal)
}