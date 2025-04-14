// Zadanie 5

let output = document.getElementById("output")

let potegowanie = new Array(100);
let mocDwoch = new Array(100);
let sekwencje = new Array(100);

potegowanie[0] = 0;
potegowanie[1] = 1;

for (let i = 2; i < 100; i++) {
    potegowanie[i] = potegowanie[i - 1] + potegowanie[i - 2];
}

for (let i = 0; i < 100; i++) {
    mocDwoch[i] = Math.pow(2, i);
}

for (let i = 0; i < 100; i++) {
    sekwencje[i] = 3 + i * 3;
}

output.innerHTML += `Ciąg Fibonacciego: ${potegowanie.join(", ")}<br>` + `Potęgi liczby 2: ${mocDwoch.join(", ")}<br>` + `Sekwencja: ${sekwencje.join(", ")}<br>`;