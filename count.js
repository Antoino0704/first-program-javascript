var i = 0;

function add()
{
    Return();
    i++;
    document.getElementById("contatore").innerHTML = "count: " + i;
    if (i == 100)
    {
        avviso();
    }
}


function avviso()
{
    document.getElementById("ss").src = "https://video.hentai-ita.net/wp-content/uploads/2020/04/le-mie-vicine-milf-hentai-1.jpg"
    window.alert("Hai raggiunto i 100 click");
    document.getElementById("background").style.backgroundColor = "blue";
}


function Return()
{
    document.getElementById("background").style.backgroundColor = "black";
    document.getElementById("ss").src = "https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2"
}