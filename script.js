$("document").ready(function(){
	$(".box4-simple-btn").click(function(){
		let x = this.id;
		if (x == "box4-simple-btn1") {
			document.getElementById("box4-more1").style.display = "block";
			document.getElementById("box4-more2").style.display = "none";
			document.getElementById("box4-more3").style.display = "none";

			document.getElementById("box4-simple-btn1").style.backgroundColor = "#ddd";
			document.getElementById("box4-simple-btn2").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-btn3").style.backgroundColor = "#bbb";

			document.getElementById("box4-simple-content1").style.display = "block";
			document.getElementById("box4-simple-content2").style.display = "none";
			document.getElementById("box4-simple-content3").style.display = "none";

			document.getElementById("box4-simple-btn1").style.borderBottom = "none";
			document.getElementById("box4-simple-btn2").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-btn3").style.borderBottom = "solid #000 2px";
		}
		else if (x == "box4-simple-btn2"){
			document.getElementById("box4-more2").style.display = "block";
			document.getElementById("box4-more1").style.display = "none";
			document.getElementById("box4-more3").style.display = "none";

			document.getElementById("box4-simple-btn1").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-btn2").style.backgroundColor = "#ddd";
			document.getElementById("box4-simple-btn3").style.backgroundColor = "#bbb";

			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "block";
			document.getElementById("box4-simple-content3").style.display = "none";

			

			document.getElementById("box4-simple-btn1").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-btn2").style.borderBottom = "none";
			document.getElementById("box4-simple-btn3").style.borderBottom = "solid #000 2px";

		}
		else if (x == "box4-simple-btn3"){
			document.getElementById("box4-more3").style.display = "block";
			document.getElementById("box4-more1").style.display = "none";
			document.getElementById("box4-more2").style.display = "none";

			document.getElementById("box4-simple-btn1").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-btn2").style.backgroundColor = "#bbb";
			document.getElementById("box4-simple-btn3").style.backgroundColor = "#ddd";

			document.getElementById("box4-simple-content1").style.display = "none";
			document.getElementById("box4-simple-content2").style.display = "none";
			document.getElementById("box4-simple-content3").style.display = "block";

			document.getElementById("box4-simple-btn1").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-btn2").style.borderBottom = "solid #000 2px";
			document.getElementById("box4-simple-btn3").style.borderBottom = "none";

		}
	})
})

/*alert('мы не несем ответственность за вашы данные');
alert('мы серёзно');
alert('правда');
alert('не рискуйте');
alert('честно');
alert('строго 18+');
alert('так ты выйдешь?');
alert('выйди');
alert('звидси');
alert('розбийник');
alert('ну');
alert('нуу');
alert('нууу');
alert('иди');
alert('ты тут??');
alert('иди отсюда');
alert('лоооол');
alert('ладно');
alert('заходи');
alert('не бойся');
alert('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiKuLj6IfpvJhUlrYZdTr-Jq2d7IjpSL3zqiDKbQEpwAZ4H420')
*/





