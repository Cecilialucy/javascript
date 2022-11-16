// Replace
let str1 = "minha string";
console.log(str1.replace("i", "o"));
console.log(str1);


// indexOf - lastIndexOf
console.log(str1.indexOf("string"));
console.log(str1.lastIndexOf("string"));
console.log(str1.lastIndexOf("hoje"));  // retorna -1

// includes
console.log(str1.includes("minha")); // true
console.log(str1.indexOf("minha"));
console.log(str1.indexOf("minha") >= 0);

// slice e substring
console.log(str1.slice(2, 7));
console.log(str1.substring(2, 7));

// toLowerCase e toUpperCase
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

//valueOf
let strAsObj = new String("Minha string como objeto");
console.log(strAsObj);
console.log(strAsObj.valueOf());
console.log(strAsObj.toString());

// trim
str1 = "      " + str1 + "       ";
console.log(str1);
console.log(str1.trim());
console.log(str1.trimEnd());
console.log(str1.trimStart());
console.log(str1);

// padStart e padEnd
str1 = "0123456789";
console.log(str1.padStart(20));
console.log(str1.padStart(20, "*"));
console.log(str1.padEnd(20, "*"));

// startsWith e endsWith
let str2 = "Hoje é sábado.";
console.log(str2.startsWith("Hoje", 1));
console.log(str2.endsWith("sábado."));

// charAt e charCodeAt
let str3 = "abcdefgh";
console.log(str3.charAt(1));
console.log(str3.charCodeAt(0));// retorna unicode 97
console.log(str3.charCodeAt(1)); // 98 





