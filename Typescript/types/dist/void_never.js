"use strict";
function showFeedback(message, type) {
    alert(type.toUpperCase() + ": " + message);
}
const feedback = showFeedback("olá", "info");
function showError(message) {
    throw new Error("Função marcada com never nunca retorna nada");
}
const error = showError("mensagem de erro");
