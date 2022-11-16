"use strict";
// enum Sizes {
//     SMALL, NORMAL, LARGE
// }
var Sizes;
(function (Sizes) {
    Sizes["SMALL"] = "12px";
    Sizes["NORMAL"] = "16px";
    Sizes["LARGE"] = "24px";
})(Sizes || (Sizes = {}));
console.log(Sizes.SMALL); //12px
