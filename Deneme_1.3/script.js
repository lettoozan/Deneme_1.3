function searchWordOnGoogle(){
    var searchWord = document.getElementById("search_text").value; //for getting input value
    var url = "https://www.google.com/search?q=" + searchWord;
    window.open(url,"_self");
}
function settings_click(){//made clickable dropdown manu
    document.getElementById("settings_dropdown").classList.toggle("show");//for open the settings dropdown menu
}
window.onclick = function(event){//for close the settings dropdown menu
    if (!event.target.matches('.settings_style')){
        var dropdowns = document.getElementsByClassName("settings_tools");
        for(let i = 0; i < dropdowns.length; i++){
            dropdowns[0].classList.remove();
        }
    }
}