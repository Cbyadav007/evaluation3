document.querySelector("#submit").addEventListener("click",subFun);
var arrObj=[];

function subFun()
{
    var obj={};
    obj.name=document.querySelector("#name").value;
    obj.email=document.querySelector("#email").value;
    obj.address=document.querySelector("#address").value;
    obj.amount=document.querySelector("#amount").value;

    arrObj.push(obj);
    localStorage.setItem("user",JSON.stringify(arrObj));
   
    var wallet = document.querySelector("#amount").value;
    localStorage.setItem("wallet",wallet);
}