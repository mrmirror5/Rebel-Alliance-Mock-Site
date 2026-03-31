let mouseX;
let mouseY;
const mousePointer = document.getElementById("mousePointer");


onmousemove = (e) => {
    
    mouseX = e.clientX;
    mouseY = e.clientY

    objectBg = getComputedStyle(e.target).backgroundColor;


    mousePointer.style.top = mouseY-12+"px";
    mousePointer.style.left = mouseX-12+"px";

    if (e.target.tagName === "BUTTON") {
        mousePointer.style.backgroundColor = invertColor(objectBg);
    } 
    else {
        mousePointer.style.backgroundColor = "blue";
    }
    };

console.log(mouseX)



function invertColor(og_color) {
    // Return inverted color

    number_list = og_color.split("(")[1].slice(0,-1).split(",");

    r = Number(number_list[0]);
    g = Number(number_list[1]);
    b = Number(number_list[2]);

    console.log(r, g, b)

    return `rgb(${255-r},${255-g},${255-b})`
}