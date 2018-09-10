function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;

	var correct = 0;


	if (question1 == "No son el mismo lenguaje") {
		correct++;
}
	if (question2 == "Todas las anteriores") {
		correct++;
}
if (question3 == "Se puede utilizar en todas las plataformas mencionadas") {
  correct++;
}
if (question4 == "Brendan Eich") {
  correct++;
}
if (question5 == "1995") {
  correct++;
}
if (question6 == "Pittsburgh, Pennsylvania") {
  correct++;
}
if (question7 == "Ninguno de los anteriores") {
  correct++;
}
if (question8 == "Todas las anteriores") {
  correct++;
}
if (question9 == "Un lenguaje de programación") {
  correct++;
}
if (question10 == "19") {
  correct++;
}


	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

	}
