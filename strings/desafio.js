let telefone1 = "91234-2345"; //"9****-**45"
let telefone2 = "4321-5432"; //"4***-**32"
function ocultarTelefone(numero) {
    let hifenPosicao = numero.indexOf("-");
    let numeroInicio = numero.slice(0, hifenPosicao);
    let numeroFinal = numero.slice(hifenPosicao + 1);
    let doisUltimosNumeros = numeroFinal.slice(-2);
    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosNumeros.padStart(numeroFinal.length, "*")}`
}

console.log(ocultarTelefone(telefone1));
console.log(ocultarTelefone(telefone2));