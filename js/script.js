btnAbrir = document.getElementById("seta-cima");
btnFechar = document.getElementById("seta-baixo");
modal = document.getElementById("assistencia");

btnAbrir.addEventListener("click", ()=>{
    modal.showModal();
})

btnFechar.addEventListener("click", ()=>{
    modal.close();
})

