console.log("amk")

// JS type safe değildir

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

console.log(dolarDun)

//const, sabit. eğer bir değer atarsan bir daha değiştiremezsin
const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi","aq"]

console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>")
    
}
console.log("</ul>")


console.log(konutKredileri)