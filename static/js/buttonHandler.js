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
		// hashtagLinks = ""
		let hashtagLinks = [];
		let hashtagTable = "<table class=\"hashtag-table\">"
		let i = 0
		data.forEach(function(ele){
			// hashtagLinks += "<a href='https://twitter.com/search?q=%23" + ele + "&src=typeahead_click'>#" + ele + "</a><br>";
			// hashtagLinks.append("<a href='https://twitter.com/search?q=%23" + ele + "&src=typeahead_click'>#" + ele + "</a>");
			i += 1;
			hashtagLink = "<a href='https://twitter.com/search?q=%23" + ele + "&src=typeahead_click'>#" + ele + "</a>";
			// console.log(hashtagLink, i);
			hashtagTable += "<tr><td>" + i +   "</td>" + "<td>" + hashtagLink + "</td></tr>";
		});
		hashtagTable += "</table>"
		// console.log(hashtagTable);
		$("#output-area").html(hashtagTable);
	});
});

/*$("#all-tweets-btn").click(function(e){
	e.preventDefault();
	$.get("/all-tweets-button", function(data){
		// $("#output-area").html("<iframe src='./templates/alltweets.html'></iframe>")
		$("#output-area").html("<iframe src=\"{{ url_for('static',filename='alltweets.html') }}\"></iframe>")

	});
	// $("#output-area").html("<iframe src='/templates/alltweets.html'></iframe>")
});*/

$("#search-form").submit(function(e){
	// e.preventDefault();
	console.log($(".searchInput").val());
	// $.post("/search-form", $(".searchInput").val(), function(data){
	// 	console.log("value posted" + data);
	// },"json");
});

$("#tweets-btn").click(function(e){
	e.preventDefault();
	console.log("Tweets btn clicked");
});

$("#the-navbar .menu-item > button").click(function(e){
	console.log("select drop down");
	console.log(e.target.id);
	const targetId = e.target.id;
	const targetIds = ["all-tweets-btn", "pos-tweets-btn", "neg-tweets-btn", "neut-tweets-btn"];
	const posTarget = +(targetIds.indexOf(e.target.id)) + 1
	console.log("Position of child: "+ posTarget);
	$.get("/tweets-button", posTarget.toString(), function(data){
		// console.log(data);
		$("#output-area").html(data);
		$("#output-area").css("overflow-y", "auto");
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