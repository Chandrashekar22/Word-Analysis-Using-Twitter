let b1 = document.getElementsByTagName("header")[0].clientHeight;
let b2 = document.getElementsByClassName("new-section")[0].clientHeight;
let b3 = document.getElementsByClassName("scroll-animations")[0].clientHeight;
let aw = document.getElementById("the-navbar");

$.ajaxSetup({ cache: false });

google.charts.load('current', {'packages':['corechart']});

// $("#output-area").css("height", "calc(100vh - " + (b1-b2));
$("#output-area").css("height", "calc(100vh - " + (b2+b3-50+10) + "px");
$("#output-area").css("top", (b1 + b2 + b3 + 10) + "px");
$("#output-area").css("width", (aw.clientWidth - 20) + "px");

$("#tweet-cloud-btn").click(function(e){
	e.preventDefault();
	const srt = sessionStorage.getItem("searchTerm");
	const imgPath = "<img src='/static/img/stylecloud_" + srt + ".png'>";
	console.log("yaho",imgPath);
  $("#output-area").html(imgPath);   
});

$("#senti-btn").click(function(e){
	e.preventDefault();
	$.get("/senti-button", function(data){
		console.log(data);
		const srt = sessionStorage.getItem("searchTerm");
		google.charts.setOnLoadCallback(function(){
			data1 = google.visualization.arrayToDataTable(data);
		    let options = {
		      title: 'Sentiment Pie-Chart: ' + srt
		    };

		    let chart = new google.visualization.PieChart(document.getElementById('output-area'));

		    chart.draw(data1, options);

		});
	});
});

$("#source-btn").click(function(e){
	e.preventDefault();
	$.get("/source-button", function(data){
		console.log(data);
		console.log(data.slice(0,10));
		const srt = sessionStorage.getItem("searchTerm");
		google.charts.setOnLoadCallback(function(){
			data1 = google.visualization.arrayToDataTable(data.slice(0,10));
		    let options = {
		      title: 'Source Donut-Chart: ' + srt,
		      pieHole: 0.4
		    };

		    let chart = new google.visualization.PieChart(document.getElementById('output-area'));

		    chart.draw(data1, options);

		});
	});
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

$("#search-form").submit(function(e){
	e.preventDefault();
	const st = $(".searchInput").val();
	console.log(st);
	sessionStorage.setItem("searchTerm", st);
	$.post("/search-form", {search: st}, function(data){
	 	console.log("value posted and server returned" + JSON.stringify(data));
	 },"json");
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