function searchWordOnGoogle(){
    var searchWord = document.getElementById("search_text").value; //for getting input value
    var url = "https://www.google.com/search?q=" + searchWord;
    window.open(url,"_self");
}