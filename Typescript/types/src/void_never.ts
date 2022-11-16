function showFeedback(message: string, type: string): void {
    alert(type.toUpperCase() + ": " + message)
}

const feedback = showFeedback("olá", "info")

function showError(message: string): never {
    throw new Error("Função marcada com never nunca retorna nada")
}

const error = showError("mensagem de erro")
