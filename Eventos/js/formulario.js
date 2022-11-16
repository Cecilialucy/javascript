(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo");
    const btn = document.getElementById("btn");
    const formCadastro = document.querySelector(".formCadastro");


    //btn.addEventListener("click", function (e) {




    formCadastro.addEventListener("submit", function (e) {
        console.log(txtTitulo.value);
        if (!txtTitulo.value) {
            showErrorMessage("Preencha o campo título", function () {
                txtTitulo.focus();
            });
            e.preventDefault();

        }

    })


    const feedbackMessage = document.getElementById("feedbackMessage");
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0];

    function showErrorMessage(msg, cb) {
        // alert(msg)
        // feedbackMessage.setAttribute("class", "show")
        feedbackMessage.classList.add("show");
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg;

        feedbackMessageCloseBtn.focus();


        function hideErrorMessage() {
            feedbackMessage.classList.remove("show");
            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage);
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn);

            if (typeof cb === "function") {
                cb()

            }
        }

        function pressedKeyboardOnBtn(e) {
            if (e.keyCode === 27) {
                hideErrorMessage()
            }




        }

        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage);
        feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn)
    }

    feedbackMessageCloseBtn.addEventListener("click", function () {
        feedbackMessage.classList.remove("show");
    })





    const txtDescricao = document.getElementById("txtDescricao");
    const contadorContainer = document.getElementById("contador");
    const resta = contadorContainer.getElementsByTagName("span")[0];
    const maxima = txtDescricao.maxLength;

    mostrarCaracteresRestantes(maxima);


    //contadorContainer.removeAttribute("style");
    contadorContainer.style.display = "block";


    function checkLength() {
        let numeroLetrasDigitadas = this.value.length;
        let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
        resta.textContent = caracteresRestantes;
        mostrarCaracteresRestantes(caracteresRestantes);
    }

    function mostrarCaracteresRestantes(n) {
        resta.textContent = n
    }

    txtDescricao.addEventListener("input", checkLength);

    btn.disabled = true;

    const chkAceito = document.getElementById("chkAceito");
    chkAceito.addEventListener("change", function () {
        btn.disabled = !this.checked
    })



})()



