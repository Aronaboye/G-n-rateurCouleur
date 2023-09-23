setInterval(()=>{
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const color = `rgb(${red},${green},${blue})`;
    console.log(color);

    const body = document.querySelector("body");
    body.style.background = color;
    body.innerHTML = `<div><h2>${color}</h2></div>`;
},1000);

