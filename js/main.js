window.onload = function ()
{
    changeLights();
};
function fnTimeInt()
{
    setTimeout(changeLights, 5000);
}
var indexl1 = 0;
var clrListLight1 = ['red', 'green'];
function changeLights()
{
    if (clrListLight1[indexl1] === "red")
    {
        document.getElementById("red-light").style.backgroundColor = "red";
        document.getElementById("yellow-light").style.backgroundColor = "black";
        document.getElementById("green-light").style.backgroundColor = "black";
        document.getElementById("red-light-2").style.backgroundColor = "black";
        document.getElementById("yellow-light-2").style.backgroundColor = "black";
        document.getElementById("green-light-2").style.backgroundColor = "green";
        setTimeout(changeLightsL2, 4000);
    }
    else if (clrListLight1[indexl1] === "green")
    {
        document.getElementById("red-light").style.backgroundColor = "black";
        document.getElementById("yellow-light").style.backgroundColor = "black";
        document.getElementById("green-light").style.backgroundColor = "green";
        setTimeout(changeLightsL1, 4000);
        document.getElementById("red-light-2").style.backgroundColor = "red";
        document.getElementById("yellow-light-2").style.backgroundColor = "black";
        document.getElementById("green-light-2").style.backgroundColor = "black";
    }
    indexl1++;
    if (indexl1 === 2)
    {
        indexl1 = 0;
    }
    fnTimeInt();
}
function changeLightsL2()
{
    document.getElementById("red-light-2").style.backgroundColor = "black";
    document.getElementById("yellow-light-2").style.backgroundColor = "yellow";
    document.getElementById("green-light-2").style.backgroundColor = "black";
}
function changeLightsL1()
{
    document.getElementById("red-light").style.backgroundColor = "black";
    document.getElementById("yellow-light").style.backgroundColor = "yellow";
    document.getElementById("green-light").style.backgroundColor = "black";
}