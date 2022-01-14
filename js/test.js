/*var myimg=document.querySelector("p")
var mybutton=document.querySelector("button")
function check(){
if(myimg.classList.contains(mybutton.textContent)){
    document.getElementById("test").innerHTML="<br>yes that is true"
}else{
    document.getElementById("test").innerHTML="<br>no that is false"   
}

}
  return x
}*/
/*var num1= document.getElementById("f1"),
num2=  document.getElementById("f2"),
result=document.getElementById("result");
function add(){
    result.innerHTML=parseInt( num1.value) +parseInt( num2.value)
}
function sutracrt(){
    result.innerHTML= num1.value -num2.value
}
function multi(){
    result.innerHTML= num1.value *num2.value
}
function divide(){
    result.innerHTML= num1.value /num2.value
}*/
var mybutton = document.getElementById("icon"),
mybody=document.getElementsByTagName("body");
mybutton.style.marginTop="700px";
mybutton.style.position="fixed";
mybutton.title="go up";
mybutton.onclick=function(){
   document.documentElement.scrollTo(0,0)
 
}

    




var head = document.querySelector("nav");
window.addEventListener("scroll",function(){
    head.classList.toggle("sticky" , window.scrollY > 50)
})