function up_zoom()
{
    // document.getElementById("nl").style.font-size = '15px';
    // color: rgb(166, 166, 166);
    // document.getElementById("nl").style.fontSize = '20px';
    // document.getElementById("nl").style.color = 'rgb(255, 255, 255)';
    document.getElementsByClassName("nav-link").style.fontSize = '20px';
    document.getElementsByClassName("nav-link").style.color  = 'rgb(255, 255, 255)';
}

function normal()
{
    document.getElementById("nl").style.fontSize = '15px';
    document.getElementById("nl").style.color = 'rgb(166, 166, 166)';
}