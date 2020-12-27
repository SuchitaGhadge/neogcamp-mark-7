var txtInput = document.querySelector('#input-txt');
var btnTranslate = document.querySelector('#btn-translate');
var outputDiv = document.querySelector('#output-txt');

// server link
serverURL = 'https://api.funtranslations.com/translate/quenya.json'

function getTransaltionURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error occured!" + error )
    alert("Somethinng went wrong. Plz try after some time!")
}

function clickHandler(){
    // taking input
    var inputText = txtInput.value;
    
    // calling server for processing
    fetch(getTransaltionURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        //error handling
        .catch(errorHandler) 
}

btnTranslate.addEventListener("click", clickHandler);

// footer position
document.getElementById("footer").style.position="fixed";
