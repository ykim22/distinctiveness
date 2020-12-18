var alphabet = 'ABCDEFGHIKLMNOPQRSTUVWYZ'.split('')
function letterBlueprint(character) {
    // console.log(character)
    return `<span ondragstart="dragStart(event)" draggable="true" id="drag${character}"> ${character} </span> `
}
// Note: .map always returns array; .join attaches to array. 
var letterBank = document.querySelector('.letterBank')
function generateAlphabet(alphabet) {
    debugger
    letterBank.innerHTML = alphabet.map(function(character) {
        return letterBlueprint(character)
    }).join('')
}

generateAlphabet(alphabet)
// Note: Function generateAlphabet returns undefined, hence .join cannot be appended. 

var selectedLetters = []

//  Empties the inputs and regenerates the letters 
function resetLetterBank() {selectedLetters = []
    document.getElementById("userRuleInput").reset()
    var squares = document.querySelectorAll('.dropLetter')
    squares.forEach(function(square){
        square.innerHTML = ''
        generateAlphabet(alphabet)
    })
}

var LatinTestBtn = document.querySelector('#Latin-test-btn')

var ReturnFrmLatinTest = document.querySelector('#return-from-test')

var ReturnFrmLatinTestToRule = document.querySelector('#return-to-Latin-rule')

ReturnFrmLatinTestToRule.addEventListener('click',function(){
    LatinTest.classList.add('hide')
    LatinLocal.classList.remove('hide')
})

ReturnFrmLatinTest.addEventListener('click', function(){
    LatinTest.classList.add('hide')
    mainPage.classList.remove('hide')
})

// This is the global button for Latin.
var LatinBtn = document.querySelector('#Latin-btn')

// The following three select the specific sections of the HTML to enable hiding and displaying.
var mainPage = document.querySelector('#main-page')
var LatinRule = document.querySelector('#Latin-rule')
var LatinLocal = document.querySelector('#Latin-local')
var LatinTest = document.querySelector('#Latin-test')

// This is "Main page" button on the rule page.
var ReturnBtnFrmLatinRule = document.querySelector('#return-from-rule')

// This is "Main page" button on the local main page.
var ReturnBtnFrmLatinLocalMain = document.querySelector('#return-from-local')
 
// This is the "Make another rule" button on the local main page.
var ReturnToLatin = document.querySelector('#return-to-Latin')

// This is the "My Latin so far" button on the global main page.
var allLatinRules = document.querySelector('#allLatinRules')

// Pushes newly generated rules in an array. 
var rulesList = []
var rule = document.querySelector('#rule-description')
var addRule = document.querySelector('.add-rule')
var displayRuleList = document.querySelector('#rule-list-display')
displayList()
addRule.addEventListener('click', function(event) {
    LatinRule.classList.add('hide')
    LatinLocal.classList.remove('hide')  
    event.preventDefault()
    // .value NEEDS to be inside the function, since that is what is changing, even though the variable is defined globally
    rulesList.push(rule.value)
    displayList()
})

// Displays all rules users have generated so far. 
function displayList(){
    displayRuleList.innerHTML = ''
    for (var i = 0; i < rulesList.length; i++) {
        displayRuleList.innerHTML += "<li>" + rulesList[i] + "</li>" 
    }
}

// 
LatinTestBtn.addEventListener('click', function(){
    // event.preventDefault()
        LatinLocal.classList.add('hide')
        LatinTest.classList.remove('hide')

    
   
    var alphabet = 'ABCDEFGHIKLMNOPQRSTUVWYZ'.split('')
    letterBlueprint()
    debugger
    generateAlphabet(alphabet)
    
})

// From the global main page to the rule generating page for Latin.
LatinBtn.addEventListener('click', function() {
    mainPage.classList.add('hide')
    LatinRule.classList.remove('hide')
})

// From the rule generating page for Latin to the global main page.
ReturnBtnFrmLatinRule.addEventListener('click', function() {
    LatinRule.classList.add('hide')
    mainPage.classList.remove('hide')
})

// From the local main page for Latin to the global main page.
ReturnBtnFrmLatinLocalMain.addEventListener('click', function() {
    LatinLocal.classList.add('hide')
    mainPage.classList.remove('hide')
})

// From the local main page for Latin to the rule generating page for Latin.
ReturnToLatin.addEventListener('click', function() {
    LatinLocal.classList.add('hide')
    LatinRule.classList.remove('hide')
})

// From the global main page to the local main page for Latin. 
allLatinRules.addEventListener('click', function(){
    mainPage.classList.add('hide')
    LatinLocal.classList.remove('hide')
})


function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

// Note: letterSlots is a nodelist, not an array; .map is only available on arrays; converts from nodelist to array.
// Note: .trim removes whitespace; .filter(Boolean) removes all things that do not return a TF value. 
var letterSlots = document.querySelectorAll('.dropLetter') 
function getLetters(){
    return Array.from(letterSlots).map(function(slots){
        return slots.textContent.trim()
    }).filter(Boolean)
}

function drop(event) {
    event.preventDefault()
    var box = event.target
    var data = event.dataTransfer.getData("Text")
    var letter = document.getElementById(data)
    event.target.appendChild(letter)
    selectedLetters = getLetters()
    console.log(getLetters())
}


// Get the modal.
var showScore = document.getElementById("displayScore");

// Get the button that opens the modal.
var scoreBtn = document.getElementById("checkScore");

// Get the <span> element that closes the modal window.
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal window. 
scoreBtn.onclick = function() {
    showScore.style.display = "block";
}

// When the user clicks on <span> (x), close the modal window.
span.onclick = function() {
    showScore.style.display = "none";
}

// When the user clicks anywhere outside of the modal window, close it.
window.onclick = function(event) {
    if (event.target == showScore) {
        showScore.style.display = "none";
    }
}
