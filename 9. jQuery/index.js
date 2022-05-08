$(document).keypress(function(e){
    $("h1").text(e.key);
    console.log(e.key);
})