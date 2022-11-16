(function (n1, n2, n3) {
    let isValid = false
    console.log('menu', isValid, n1, n2, n3)

    function init() {
        console.log('init do menu')
    }
    init()

})(10, 25, 30)


    // Outra forma de passar parâmetros para uma função auto-invocável:


    (function (win, doc) {
        let isValid = false
        win.alert('Olá!!')
        console.log('menu', isValid)

        function init() {
            console.log('init do menu')
        }
        init()

    })(window, document)





