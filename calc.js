let buttonconatiner = document.querySelector(".buttons");
let display = document.getElementById("display");

const buttons = ["C", "/", "*", "-", "7", "8", "9", "+", "4", "5", "6", "=", "1", "2", "3", "0"];

buttons.forEach(value =>{
    const btn = document.createElement("button");
    btn.textContent= value;
    btn.onclick = () => value === "C" ? cleardisplay() : value === "="?  calculateresult() : appendvalue(value);
    buttonconatiner.appendChild(btn);
})

const cleardisplay = ()=>{
    display.value = '';
}

const calculateresult = () =>{
    try{display.value = eval(display.value)}
    catch{alert("invalid expression")}
};

const appendvalue = value =>{
    display.value += value;
}