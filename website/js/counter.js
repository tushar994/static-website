
console.log('Start');

var n = localStorage.getItem('counter');
if (n === null) {
    n = 0;
} else {
    n++;
}

var what= document.createElement("p");
what.style.color = "red";
what.style.fontSize = "30px";
what.innerHTML = "I see you have been here " + n + " times";
document.body.appendChild(what);

localStorage.setItem("counter", n);



console.log('End');