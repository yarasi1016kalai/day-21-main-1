var division=document.createElement("div")
division.setAttribute("class","container")
document.body.append(division)

var heading=document.createElement("h1")
heading.innerText="Covid-19 Report"
division.append(heading)

var lable=document.createElement("label")
lable.setAttribute("for","name")
lable.innerHTML="Enter Country Name:&nbsp;&nbsp"
division.append(lable)

var input=document.createElement("input")
input.setAttribute("id","name")
input.setAttribute("placeholder","e.g:india,south africa")
division.append(input)

var br=document.createElement("br")
division.append(br)

var br=document.createElement("br")
division.append(br)

var button1=document.createElement("button")
button1.addEventListener("click",foo())
button1.setAttribute("id","clk")
button1.innerHTML="check"
division.append(button1)

var head=document.createElement("h2")
head.setAttribute("id","output")
division.append(head)

var death=document.createElement("h2")
death.setAttribute("id","output1")
division.append(death)

var note=document.createElement("span")
note.innerText="Note:Please wait upto 10sec for output"
division.append(note)



 const btn = document.getElementById("clk");
 function foo(){

   let covid19= document.getElementById('name').value

   fetch(`https://api.covid19api.com/dayone/country/${covid19}`)
 
   .then((res) => res.json())
   .then((data) => {
   head.innerHTML = `${data}`
   console.log(data)
   let active = data.length-1;

   let activeCases = data[active].Active;
   document.getElementById("output").innerText=`Total Active Cases in ${covid19} : ${activeCases}`; 
   let deathRate = data[active].Deaths;
   document.getElementById("output1").innerText= `Total Deaths:${deathRate}`;

 })
 .catch((error) => {console.log(error);
 });
}
btn.addEventListener("click", foo);