let heading=document.getElementById ("heading");
let input=document.getElementById ("inputText");
let para=document.getElementById ("para");

document.getElementById ("changeTextBtn").onclick=
function () {
    heading.innerText=input.value;
};

input.oninput=function () {
    console;log ("Input changed:", input.value);
};

document.getElementById ("bgColorBtn").onclickaddEventListener ("click", function () {
      document.body.style.backgroundColor="lightblue";
});

document.getElementById ("fontSizeBtn").addEventListener("click", function () {
    heading.style.fontSize="40px";
});
