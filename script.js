document.title = "Calculator";
var input = document.getElementsByTagName("input")[0];
var btns = document.querySelectorAll("button");
var slider = document.getElementById("slider");

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


for (let i = 0; i < 11; i++) {
    const btn = btns[i];
    btn.addEventListener("click", () => {
        input.value += btn.innerText;
    });
}

btns[11].addEventListener("click", () => {
    input.value = eval(input.value);
    localStorage.setItem("val", input.value);
})

for (let i = 12; i < btns.length; i++) {
    let btn = btns[i];
    btn.style.background = "black";
    btn.style.color = "white";
    btn.addEventListener("click", () => {
        input.value += btn.value;
    })
    btns[12].addEventListener("click", () => {
        input.value = "";
        localStorage.removeItem("val");
    })

}
document.body.onload = () => {
    input.value = localStorage.getItem("val");
}

slider.addEventListener("click", () => {
    slider.classList.toggle("active");
    document.getElementById("item1").classList.toggle("active");
    document.getElementsByClassName("icon")[0].classList.toggle("active");
});

