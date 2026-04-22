document.getElementById("blend-btn").addEventListener("click", function () {

    let output = document.getElementById("output");
    output.innerHTML = "";
    let surname = document.getElementById("surname").value;
    if (!surname) 
        return; 
    let font = document.getElementById("font").value;
    let colour = document.getElementById("Colour").value;
    let fontSize = document.getElementById("size").value || 16;

    let pos = "sequential"; 
    

    let letters = surname.split("");

    if (pos === "reverse") {
        letters = letters.reverse();
    }

    letters.forEach(function (letter, index) {
       let span = document.createElement("span");
        span.textContent = letter;

        span.style.position   = "absolute";
        span.style.fontFamily = font;
        span.style.fontSize   = fontSize + "px";
        span.style.color      = colour;

        if (pos === "sequential" || pos === "reverse") {
            let step = (index + 1) * 15;
            span.style.left = step + "px";
            span.style.top  = step + "px";
        } else {
            span.style.left = Math.random() * 300 + "px";
            span.style.top  = Math.random() * 100 + "px";
        }

        output.appendChild(span);
    });

});