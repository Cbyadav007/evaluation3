var total1 = localStorage.getItem("wallet");
document.querySelector("#wallet_balance").innerText=total1;


var pur = JSON.parse(localStorage.getItem("purchase"));
console.log(pur);
pur.forEach(function (elem){
    let box = document.createElement("div");
    box.className = "box";

    let im = document.createElement("img");
    im.src = elem.image;
    let nam = document.createElement("p");
    nam.innerText = elem.name;
    let pr = document.createElement("p")
    pr.innerText = elem.price;

    box.append(im,nam,pr);
    document.querySelector("#purchased_vouchers").append(box);
});

let bal = JSON.parse(localStorage.getItem("user"));
// console.log(bal);
bal.forEach(function (eleme){
    document.querySelector("#balance").innerText=eleme.amount;
});