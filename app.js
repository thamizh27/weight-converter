document.getElementById("output").style.visibility = "hidden";


document.getElementById("input").addEventListener("input",function(e) {
    document.getElementById("output").style.visibility = "visible";

    let prop = document.getElementById("input").value;

    if (prop === "") {
        document.getElementById("output").style.visibility = "hidden";
    }

    let tham = e.target.value;
    console.log(tham);

    document.getElementById("g-output").innerHTML = tham / 0.0022046;
    document.getElementById("k-output").innerHTML = tham / 2.2046;
    document.getElementById("oz-output").innerHTML = tham * 16;
    

})