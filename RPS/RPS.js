$(document).ready(function(){
$('.results').fadeTo('fast',.00001)

var computerChoice = Math.random();
if (computerChoice <= 0.33) {
	computerChoice = "rock";
	var compChoice = $('#comprock')
} else if(computerChoice >= 0.66) {
	computerChoice = "paper";
	var compChoice = $('#comppaper')
} else {
	computerChoice = "scissors";
	var compChoice = $('#compscissors')
} console.log("Computer chooses: " + computerChoice);


var compare = function(choice1, choice2) { 
    if (choice1===choice2) {
        var result = $('#tie')
	result.fadeTo('fast',.99)
	return "The result is a tie!"
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
        var result = $('#win')
	result.fadeTo('fast',.99)            
	return "player wins"
            }else { 
         var result = $('#lose')
	result.fadeTo('fast',.99)              
	 return "computer wins"
                }
    } else if (choice1 === "paper") {
	if (choice2 === "rock") {
        var result = $('#win')
	result.fadeTo('fast',.99)		
	return "player wins"
	}else {
        var result = $('#lose')
	result.fadeTo('fast',.99)	
	return "computer wins"
        }
    }else if (choice1 === "scissors") {
	if (choice2 ==="paper"){
	var result = $('#win')
	result.fadeTo('fast',.99)
	return "player wins"
	}else {
        var result = $('#lose')
	result.fadeTo('fast',.99)        
	return "computer wins"
        }
    }
}  
                            
$('.player > div').mouseenter(function(){
    $(this).addClass('highlight')   
})

$('.player > div').mouseleave(function(){
    $(this).removeClass('highlight')   
})

	$('#rock').click(function(){
		var playerChoice = "rock"
		console.log(compare(playerChoice,computerChoice))
		$('#rock').fadeTo('fast',.00001)
		compChoice.fadeTo('slow',.00001)
		$('.results').fadeTo('slow',1)
		$('.results > p').fadeTo('fast',.0001)
		compare(playerChoice,computerChoice)
		$('#rock').removeAttr('id')
		$('#paper').removeAttr('id')
		$('#scissors').removeAttr('id')
		compare = ""
	});
	$('#paper').click(function(){
		var playerChoice = "paper"
		console.log(compare(playerChoice,computerChoice))
		$('#paper').fadeTo('fast',.00001)
		compChoice.fadeTo('slow',.00001)
		$('.results').fadeTo('slow',1)
		$('.results > p').fadeTo('fast',.0001)
		compare(playerChoice,computerChoice)
		$('#rock').removeAttr('id')
		$('#paper').removeAttr('id')
		$('#scissors').removeAttr('id')
		compare=""
	});
	$('#scissors').click(function(){
		var playerChoice = "scissors"
		console.log(compare(playerChoice,computerChoice))
		$('#scissors').fadeTo('fast',.00001)
		compChoice.fadeTo('slow',.00001)
		$('.results').fadeTo('slow',1)
		$('.results > p').fadeTo('fast',.0001)
		compare(playerChoice,computerChoice)
		$('#rock').removeAttr('id')
		$('#paper').removeAttr('id')
		$('#scissors').removeAttr('id')
		compare= ""

	});


	$('button').click(function(){
		location.reload()
	})


})