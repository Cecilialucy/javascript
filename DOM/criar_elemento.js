(function () {
    const nomeUsuario = 'Pedro'

    if (nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b></p>`

        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)

    }

}())