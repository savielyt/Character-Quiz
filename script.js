$(".q1-r").hide();
$(".q2-r").hide();
$(".q3-r").hide();
$(".box").hide();
$(".Enter").hide();
$(".Bubbles").hide();
$(".Blossom").hide();
$(".Buttercup").hide();
$(".Professor").hide();
$(".Reset").hide();

$(".start-button").click(function() {
	$(".intro").hide();
    $(".start-button").hide();
    $(".q1-r").show();
    $(".box").show();
    $(".q2-r").show();
    $(".Enter").show();
    $(".Reset").show();
});

$(".Enter").click(function() {
    var ans1 = $(".answer").val();
    var ans2 = $(".answer2").val();

    if (ans1 === "Sweet") {
        if (ans2 >= 6) {
    $(".Blossom").show();
    $("p").text("You're Blossom!");
    $(".q1-r").hide();
    $(".box").hide();
    $(".q2-r").hide();
    $(".Enter").hide();
    $("h1").hide();
            
        }}
    
    if (ans1 === "Sweet") {
        if (ans2 < 6) {
    $(".Bubbles").show();
    $("p").text("You're Blossom!");
    $(".q1-r").hide();
    $(".box").hide();
    $(".q2-r").hide();
    $(".Enter").hide();
    $("h1").hide();
  }}
    
    
    if (ans1 === "Critical") {
        if (ans2 >= 6) {
         $(".Professor").show();
    $("p").text("You're Professor!");
    $(".q1-r").hide();
    $(".box").hide();
    $(".q2-r").hide();
    $(".Enter").hide();
    $("h1").hide();
        }}
   
            if (ans1 === "Critical") {
        if (ans2 < 6) {
              $(".Buttercup").show();
    $("p").text("You're Buttercup!");
    $(".q1-r").hide();
    $(".box").hide();
    $(".q2-r").hide();
    $(".Enter").hide();
    $("h1").hide();

  
            
  
     }}
});



$(".Reset").click(function() {
$(".q1-r").hide();
$(".q2-r").hide();
$(".q3-r").hide();
$(".box").hide();
$(".Enter").hide();
$(".Bubbles").hide();
$(".Blossom").hide();
$(".Buttercup").hide();
$(".Professor").hide();
$(".Reset").hide();
$(".start-button").show();
$("p").hide();
$(".intro").show();
$("h1").show();

});
  