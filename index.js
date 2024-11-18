// function clk(){
//         console.log("button is spired");
//     }

//     const mybtn = document.getElementById("btn");
//     mybtn.addEventListener("click" , clk);

//     const mybox = document.getElementById("box");
//     mybox.style.height ="300px";
//     mybox.style.backgroundColor="green"
//     mybox.addEventListener("mouseover", clk);

function clk() {
    console.log("Button or box event triggered!");
}

// Button Event
const mybtn = document.getElementById("btn");
if (mybtn) {
    mybtn.addEventListener("click", clk);
} else {
    console.error("Button with id 'btn' not found in the DOM.");
}

// Box Style and Event
const mybox = document.getElementById("box");
if (mybox) {
    mybox.style.height = "300px";
    mybox.style.backgroundColor = "green";
    mybox.addEventListener("mouseover", clk);
} else {
    console.error("Box with id 'box' not found in the DOM.");
}
