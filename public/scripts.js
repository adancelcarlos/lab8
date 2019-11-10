/* global $*/
/* global _*/
/* global localStorage*/

var score = 0;
var attempts = localStorage.getItem("quizAttempts") ? localStorage.getItem("quizAttempts") : 0;

//  Functions
function gradeQuiz(){
    $.ajax({
        method: "GET",
        url: "/gradeQuiz",
        dataType: "json",
        data: { 
            "q1": $("#q1").val(),
            "q2": $("#q2").val(),
            "q3a": $("#q3a").is(":checked"),
            "q3b": $("#q3b").is(":checked"),
            "q3c": $("#q3c").is(":checked"),
            "q3d": $("#q3d").is(":checked"),
            "q4": $("input[name=q4]:checked").val(),
            "q5": $("#q5").val(),
            "q6" : $("#q6").val(),
        	"q7" : $("input[name=q7]:checked").val(),
        	"q8" : $("#q8").val()
        },
        success: function(data) {
            // alert(data);
            updateQuiz(data);
        }
    });//ajax
};

function updateQuiz(quiz){
	//variables
	attempts++;
	localStorage.setItem("quizAttempts", attempts);
	
// 	alert(quiz.fback1);
	
   //Question 1
    if(quiz.fback1 == "Right!") {
        rightAnswer(1);
    }else {
        wrongAnswer(1);
    }

	//Question 2
	if(quiz.fback2 == "Right!") {
        rightAnswer(2);
	}
	else {
		wrongAnswer(2);
	}
	
	//Question 3
	if (quiz.fback3 == "Right!") {
		rightAnswer(3);
	} else {
		wrongAnswer(3);
	}
	
	//Question 4
	if(quiz.fback4 == "Right!") {
		rightAnswer(4);
	} else {
		wrongAnswer(4);
	}
	
	//Question 5
	if(quiz.fback5 == "Right!"){
		rightAnswer(5);
	}else{
		wrongAnswer(5);
	}
	
	//Question6
	if(quiz.fback6 == "Right!")
		rightAnswer(6);
	else
		wrongAnswer(6);
		
	//Question 7
	if(quiz.fback7 == "Right!") {
		rightAnswer(7);
	} else {
		wrongAnswer(7);
	}
	
	//Question 8
	if(quiz.fback8 == "Right!")
		rightAnswer(8);
	else
		wrongAnswer(8);
	
	
    if (quiz.score > 80) {
		$("#celebrate").html("Congratulations you passed!");
		$("#celebrate").css("color", "green");
	}
	$("#totalScore").html(`Total Score: ${quiz.score}`);  //string literals
}

function rightAnswer(index) {
	$(`#q${index}Feedback`).html("Correct!");  //using string literals
    $("#q" + index + "Feedback").attr("class", "bg-success text-white");
    $("#markQ" + index).html("<img src ='img/checkmark.png'>");
}

function wrongAnswer(index){
	$(`#q${index}Feedback`).html("Incorrect!");
    $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
    $("#markQ" + index).html("<img src ='img/xmark.png' alt='xmark'>");
}

function displayQ4(){
	let choices = ["Maine", "Rhode Island", "Maryland", "Delaware"];
	choices = _.shuffle(choices);
	choices.forEach(function (i)  {
// 		console.log(i)
		$("#choices").append(`<label for="${i}"><input type="radio" name="q4" id="${i}" value="${i}"> ${i} </label> `);
	});
}

displayQ4();

//Event Listeners
$(".q5choice").on("click", function(){
    $(".q5choice").css("background-color",""); //resets background color
    $(this).css("background-color","rgb(255, 255, 0)"); 
    $("#q5").val(this.alt);
});


$("#submitBtn").on("click", function(){
    gradeQuiz();
});//submitBtn
