var pos = 0, test, test_status, questions,  choice, choices, chA, chB, chC, correct = 0; 
	var questions = [
		["Who created python flask?", "Armin Ronacher", "Jude Suares", "Adrian Mercurio", "A" ],
		["Who created javascript?", "Brendan Eich", "Kimmy Matillano", "Saxon Ong", "A"],
		["Who created java?", "James Gosling", "Princely Ceasar", "July King Kadayuna", "A"],
		["Who created c# language?", "Microsoft Corporation", "Google Company", "You Tube Corporation", "A"],
		["Who created php?", "Rasmus Lerdorf", "Grace Patulada", "Nikko Curaza", "A"],
		["Who created itsourcecode.com?", "Charlotte Villanueva", "Joken Villanueva", "Niko Embang", "B"],
		["Who created laravel?", "Boknoi Villaflor", "Taylor Otwell", "Ryan Manaay", "B"],
		["Who created database?", "Edgar Frank Codd", "Paul Niar", "Given Bariacto", "A"],
		["Who created c++ language?", "Kirk Eriman", "Bjarne Stroustrup", "Jomhel Dulla", "B"],	
		["Who created c language?", "Dennis Ritchie", "Daniel Bandiola", "Carlan Pellobello", "A"]
	];
	function _(x){
		return document.getElementById(x);
	}
	function renderQuestion(){
		test = _("test");
		if(pos >= questions.length){
			test.innerHTML = "<h3>You got "+correct+" of "+questions.length+" questions correct</h3>";
			_("test_status").innerHTML = "Exam Completed";
			pos = 0;
			correct =0;
			return false;
		}
		_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
		question = questions[pos][0];
		chA = questions[pos][1];
		chB = questions[pos][2];
		chC = questions[pos][3];
		
		
		test.innerHTML = "<h3>"+question+"</h3>";
		test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";

		test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";	
	}
	function checkAnswer(){
		choices = document.getElementsByName("choices");
		for(var i=0; i<choices.length; i++){
			if(choices[i].checked){
				choice = choices[i].value;
			}
		}
		if (choice == questions[pos][4]){
			correct++;
		}
		pos++;
		renderQuestion();
	}
	window.addEventListener("load", renderQuestion, false);