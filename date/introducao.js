const data = new Date();
console.log(data);

// getDay
console.log(data.getDay()); // dia da semana

// getDate
console.log(data.getDate()); // dia do mês

// getMonth
console.log(data.getMonth()); // número do mês

// getTime
console.log(data.getTime()); // número de milisegundos desde 1 de janeiro de 1970 às 00:00h

// getFullYear
console.log(data.getFullYear()); // ano

// getHours
console.log(data.getHours()); // hora

// getUTCHours
console.log(data.getUTCHours()); // número de horas de acordo com horário universal

// setDate
//console.log(data.setDate(19)); // número de milisegundos entre 1 de janeiro ...

console.log("---------")

// toString
console.log(data.toString());

// toDateString
console.log(data.toDateString());

// toIsoString
console.log(data.toISOString());

// toLocaleDateString
console.log(data.toLocaleDateString());

// toLocaleString
console.log(data.toLocaleString());
console.log(data.toLocaleString("en-US", { month: "long", weekday: "long", day: "numeric" }));
console.log(data.toLocaleString("pt-BR", { month: "long", weekday: "short", day: "numeric", year: "numeric" }));

// toUTCString
console.log(data.toUTCString());

