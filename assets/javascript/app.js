$(document).ready(function () {
    var firstScreen;
    var gameScreen;
    var counter = 30;
    
    // ----- START BUTTON ----- //
    function firstScreen() {
        gameScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>START QUIZ!</a></p>";
        $("#contentHead").html(gameScreen);
    }
    firstScreen();
    $("body").on("click", ".start-button", function (event) {
        startQuiz();
       // timer();//
    });
    // ----- WINS ----- //
    var correct = 0;
    console.log("CORRECT: " + correct)
    // ----- LOSSES ----- //
    var incorrect = 0;
    console.log("INCORRECT: " + incorrect)
    // ----- TIMEOUTS ----- //
    var timeouts = 0;
    console.log("TIMEOUTS: " + timeouts)
    // ----- QUESTIONS ARRAY ----- //
    var questionsArray = [
        "1. WHAT TYPE OF LIQUOR IS USED TO MAKE A MOSCOW MULE?",
        "2. WHICH U.S. STATE DOES MOST BOURBON COME FROM?",
        "3. WHAT TYPE OF LIQUOR IS USED TO MAKE A MOJITO?",
        "4. IF A LIQUOR IS 100 PROOF, WHAT'S IT'S ALCOHOL CONTENT BY PERCENTAGE?",
        "5. WHAT TYPE OF LIQUOR <U>ISN'T</U> IN A LONG ISLAND ICED TEA?",
        "6. WHAT TYPE OF LIQUOR IS USED TO MAKE AN OLD FASHIONED?",
        "7. WHAT TIME DO BARS CLOSE IN ARIZONA?",
        "8. WHAT WAS FRANK SINATRA'S FAVORITE DRINK?",
        "9. WHAT MAKES A WHITE WINE WHITE?",
        "10. WHAT YEAR DID ALCOHOL PROHIBITION END?"
    ];
    console.log("QUESTIONS: " + questionsArray)
    var questionsCounter = 0;
    console.log("QUESTION: " + questionsCounter)
    // ----- CHOICES ARRAY ----- //
    var optionsArray = [
        ["A. VODKA", "B. GIN", "C. TEQUILA", "D. RUM"],
        ["A. TEXAS", "B. TENNESSEE", "C. KENTUCKY", "D. OKLAHOMA"],
        ["A. VODKA", "B. GIN", "C. TEQUILA", "D. RUM"],
        ["A. 25%", "B. 50%", "C. 75%", "D. 100%"],
        ["A. RUM", "B. TEQUILA", "C. GIN", "D. BOURBON"],
        ["A. RUM", "B. TEQUILA", "C. GIN", "D. BOURBON"],
        ["A. 12:00 MIDNIGHT", "B. 1:00 A.M.", "C. 2:00 A.M.", "D. 3:00 A.M."],
        ["A. MOSCOW MULE", "B. JACK DANIELS AND WATER", "C. BACARDI AND COKE", "D. DIRTY GREY GOOSE MARTINI"],
        ["A. THE GRAPES WERE WHITE", "B. THE AGE OF THE WINE", "C. THE GRAPES WERE PEELED", "D. THE GRAPES WERE RIPE"],
        ["A. 1920", "B. 1923", "C. 1928", "D. 1933"]
    ];
    console.log("OPTIONS: " + optionsArray)
    console.log("QUESTION: ")
    // ----- ANSWERS ARRAY ----- //
    var answersArray = [
        "A. VODKA",
        "C. KENTUCKY",
        "D. RUM",
        "B. 50%",
        "D. BOURBON",
        "D. BOURBON",
        "C. 2:OO A.M.",
        "B. JACK DANIELS AND WATER",
        "C. THE GRAPES WERE PEELED",
        "D. 1933"
    ];
    console.log("ANSWERS: " + answersArray)
    // ----- QUESTIONS TIMER ----- //
    // ----- RESULT TIMER ----- //
    function timer() { }
    // ----- USER CHOICE ----- //
    $("body").on("click", "")



    // ----- FUNC- QUESTIONS ----- //
    function startQuiz() {
        quiz = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionsArray[questionsCounter] + "</p><p class='first-answer answer'>A. " + answersArray[questionsCounter][0] + "</p><p class='answer'>B. " + answersArray[questionsCounter][1] + "</p><p class='answer'>C. " + answersArray[questionsCounter][2] + "</p><p class='answer'>D. " + answersArray[questionsCounter][3] + "</p>";
        $("#contentHead").html(startQuiz);
    };
    var choice;
    /* for (let i = 0; i < answersArray.length; i++) {
         // ----- WIN ADD ----- //
         if (choice[j] === answers[i]) {
             wins++;
         }
         // ----- LOSS ADD ----- //
         else if (choice[j] !== answers[i]) {
             losses++;
         }
         // ----- TIMEOUT ADD ----- //
         else {
             timeouts++;
         }
     }*/
});

// ----- FUNCTION - QUESTIONS ----- //

function finalScreen() {
	gameScreen = "<p class='text-center timer-p'>TIME REMAINING: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>LETS SEE HOW YOU DID!" + "</p>" + "<p class='summary-correct'>CORRECT ANSWERS: " + correct + "</p>" + "<p>INCORRECT ANSWERS: " + incorrect + "</p>" + "<p>TIMEOUTS: " + timeouts + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>RESET THE GAME!</a></p>";
	$("#contentHead").html(gameScreen);
}


// ----- FUNCTION - GAME RESET ----- //
$("body").on("click", ".reset-button", function (event) {
    resetGame();
});
function resetGame() {
    questionCounter = 0;
    correct = 0;
    incorrect = 0;
    timeouts = 0;
    counter = 30;
    startQuiz();
    timer();
};