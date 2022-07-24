// $("h1").css("color","red");  // Change styles with jQuery

$("h1").addClass("big-title margin-50");  // Add classes with jQuery

$("h1").text("Hello World");     // Add text in any attribute 
$("h1").html("<em>--</em>")  // Modify the innerHTML of the tag

// $("a").attr("href","https://duckduckgo.com/")  // Manipulating attributes with jQuery

// $("a").attr("class","searchEngine");   // Adding class with attr because class is also an attribute

$("button.btn1").click(function(){
    $("h1").css("color","black");
});

$("button.btn2").click(function(){
    $("h1").css("color","White");
});

// $("button.btn-cls").click(function(){
//     $("h1").text("--");
//     $("h1").css("color","rgb(10, 150, 89)");
// });


$(document).keypress(function(event){
     $("h1").text(event.key);
});

$("button.btn-cls").on("click",function(){     // On is An eventlistener method which take two parameter and listen for almost every event
    $("h1").text("--");
    $("h1").css("color","rgb(10, 150, 89)");
});


// To remove elements from web pages 

// $("tag-select").remove();

// Website Animation with jQuery

// $("button").on("click",function(){
//     $("h1").hide();
//     $("h1").show();
//     $("h1").toggle();
//     $("h1").fadeout();
//     $("h1").fadein();
//     $("h1").slideup();
//     $("h1").slidedown();
//     $("h1").slidetoggle();
// });



