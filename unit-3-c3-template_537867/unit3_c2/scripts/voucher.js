

async function searchVoucher()
{
    try{
        var total = localStorage.getItem("wallet");
        document.querySelector("#wallet_balance").innerText=total;

    let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;
    let res = await fetch(url);
    let data = await res.json();
    data = data[0].vouchers;
    console.log(data);
    appendVoucher(data);
    }
    catch(err)
    {
        console.log("Error");
    }
}

window.onload=searchVoucher();

async function appendVoucher(data)
{

    data.forEach(function (el) {

        let vouchercard = document.createElement("div");
        vouchercard.className = "voucher";

        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("p");
        name.innerText = el.name;
        let price = document.createElement("p");
        price.innerText = el.price;
        let buy = document.createElement("button");
        buy.innerText = "Buy Voucher";
        buy.className = "buy_voucher";
        buy.addEventListener("click",function(){
            compareFun(el.price,el.image,el.name);  
        });

        vouchercard.append(image,name,price,buy);

        document.querySelector("#voucher_list").append(vouchercard);

        
    });
}

 function compareFun(price,im,nm){
    // console.log(price);
   let getUser = JSON.parse(localStorage.getItem("user"));
//    console.log(getUser[0].amount);
  
   getUser.forEach(function(ele){
    
       if(ele.amount>=price)
       {
           alert("Hurray! purchase successful")
       
           ele.amount=(ele.amount-price);
           console.log("am=",ele.amount);
        //    console.log(getUser);
           localStorage.setItem("user",JSON.stringify(getUser));
           voucherlocal(price,im,nm);

       }
       else{
           alert("amount is insufficient");
       }
   });
}

var arrvouch=[];
function voucherlocal(pri,img,nam)
{
    var obj1={};
    obj1.image=img;
    obj1.name=nam;
    obj1.price=pri;
    arrvouch.push(obj1);
    localStorage.setItem("purchase",JSON.stringify(arrvouch));
}