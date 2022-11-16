const delay = (ms) => {
    const starTime = new Date().getTime()
    while (new Date().getTime() - starTime <= ms) {
        //espera um pouco

    }
}
this.addEventListener("message", function (e) {
    delay(3000)
    this.self.postMessage("processo demorado finalizado")
})