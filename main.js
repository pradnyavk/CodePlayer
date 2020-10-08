$(".toggleButton").hover(function(){
    $(this).addClass("highlightedButton");
},
function(){
    $(this).removeClass("highlightedButton");
});
$(".toggleButton").click( function() {
    var panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");
    $(".panel").width(($(window).width() / (4 - $(".hidden").length)) - 8);
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
});
$(".panel").height($(window).height() - $("#header").height() );
// $(".panel").width(($(window).width() /4) - 6);

$("textarea").on('change keyup paste',function(){
    $("#outputPanel").contents().find("html").html("<html><head><style type='text/css'> "+ $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
});