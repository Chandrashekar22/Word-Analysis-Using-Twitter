let b1 = document.getElementsByTagName("header")[0].clientHeight;
let b2 = document.getElementsByClassName("new-section")[0].clientHeight;
let b3 = document.getElementsByClassName("scroll-animations")[0].clientHeight;
let aw = document.getElementById("the-navbar");

google.charts.load('current', {'packages':['corechart']});

// $("#output-area").css("height", "calc(100vh - " + (b1-b2));
$("#output-area").css("height", "calc(100vh - " + (b2+b3-50+10) + "px");
$("#output-area").css("top", (b1 + b2 + b3 + 10) + "px");
$("#output-area").css("width", (aw.clientWidth - 20) + "px");

$("#tweet-cloud-btn").click(function(e){
	e.preventDefault();
	console.log("yaho");
    //$("body").append("<img src='{{url_for('static', filename='img/stylecloud.png')}}'>");
    $("#output-area").html("<img src='/static/img/stylecloud.png'>");     
});

$("#senti-btn").click(function(e){
	e.preventDefault();
	$.get("/senti-button", function(data){
		console.log(data);
		google.charts.setOnLoadCallback(function(){
			data1 = google.visualization.arrayToDataTable(data);
		    let options = {
		      title: 'Sentiment Pie-Chart'
		    };

		    let chart = new google.visualization.PieChart(document.getElementById('output-area'));

		    chart.draw(data1, options);

		});
	});
	
    // google.charts.setOnLoadCallback(drawChart);

});

$("#source-btn").click(function(e){
	e.preventDefault();
	$.get("/source-button", function(data){
		console.log(data);
		console.log(data.slice(0,10));
		google.charts.setOnLoadCallback(function(){
			data1 = google.visualization.arrayToDataTable(data.slice(0,10));
		    let options = {
		      title: 'Source Donut-Chart',
		      pieHole: 0.4
		    };

		    let chart = new google.visualization.PieChart(document.getElementById('output-area'));

		    chart.draw(data1, options);

		});
	});
	// google.charts.load('current', {'packages':['corechart']});
});

$("#hashtag-btn").click(function(e){
	e.preventDefault();
	$.get("/hashtag-button", function(data){
		console.log(data);
		hashtagLinks = ""
		data.forEach(function(ele){
			hashtagLinks += "<a href='https://twitter.com/search?q=%23" + ele + "&src=typeahead_click'>#" + ele + "</a><br>";
		});
		$("#output-area").html(hashtagLinks);
	});
});
/*function drawChart(data) {

    data = google.visualization.arrayToDataTable(data);

    var options = {
      title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}*/
// use below in case event does not register
/*$(document).on('click','#tweet-cloud-btn',function(e){
	e.preventDefault();
	console.log("yaho");
    // $("body").append("<img src='{{url_for('static', filename='img/stylecloud.png')}}'>");    
    $("body").append("<img src='/static/img/stylecloud.png'>"); 
});*/