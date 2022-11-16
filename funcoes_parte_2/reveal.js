const calcRevealPattern = (function () {
    let n = 0

    function _checkNumber(n) {
        if (typeof n !== "number") {
            throw TypeError("precisa passar número")
        }
    }

    function somar(_n) {
        n += _n
        return this
    }

    function subtrair(_n) {
        n -= _n
        return this
    }

    function log() {
        console.log(n)
        return this
    }
    return {
        somar,
        subtrair,
        log
    }
})()
calcRevealPattern.somar(5).somar(7).subtrair(2).log();
calcRevealPattern.log()