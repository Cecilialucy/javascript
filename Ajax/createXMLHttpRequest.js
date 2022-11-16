function createXMLHttpRequest(method, url, cb, data = null) {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send(data)
    xhr.onreadystatechange = verificaAjax

    function verificaAjax() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                console.log(xhr.responseText);
                const json = JSON.parse(xhr.responseText)

                if (typeof cb === "function") {
                    cb(json)
                }

            } else if (typeof cb === "function") {
                cb({
                    status: xhr.status,
                    message: "Algo errado com a conexão"

                })
            }
        }
    }
}