let b1 = document.getElementsByTagName("header")[0].clientHeight;
let b2 = document.getElementsByClassName("new-section")[0].clientHeight;
let b3 = document.getElementsByClassName("scroll-animations")[0].clientHeight;
let aw = document.getElementById("the-navbar");

// $("#output-area").css("height", "calc(100vh - " + (b1-b2));
$("#output-area").css("height", "calc(100vh - " + (b2+b3-50+10) + "px");
$("#output-area").css("top", (b1 + b2 + b3 + 10) + "px");
$("#output-area").css("width", (aw.clientWidth - 20) + "px");

$("#tweet-cloud-btn").click(function(e){
	e.preventDefault();
	console.log("yaho");
    //$("body").append("<img src='{{url_for('static', filename='img/stylecloud.png')}}'>");
    $("#output-area").append("<img src='/static/img/stylecloud.png'>");     
});

// use below in case event does not register
/*$(document).on('click','#tweet-cloud-btn',function(e){
	e.preventDefault();
	console.log("yaho");
    // $("body").append("<img src='{{url_for('static', filename='img/stylecloud.png')}}'>");    
    $("body").append("<img src='/static/img/stylecloud.png'>"); 
});*/