// variables to indicate quotes and quotes author elements
var quotesPlace = document.getElementById("quotesPlace");
var quotesAuthors = document.getElementById("quotesAuthor");

var copyButton = document.getElementById("copyButton");

// Variables for Dark/Light Modes
var bodyId = document.getElementById("body");
var moonId = document.getElementById("moonDark");
var sunId = document.getElementById("sunLight");

// Object that contains generated quote and author to copy it
var quotePrinted;


var quotesCollection = [
    {
        quote : "“Be yourself; everyone else is already taken.”",
        author : '― Oscar Wilde'
    },
    {
        quote : "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author : '― Mahatma Gandhi'
    },
    {
        quote : "“We accept the love we think we deserve.”",
        author : '― Stephen Chbosky'
    },
    {
        quote : "“Without music, life would be a mistake.”",
        author : '― Friedrich Nietzsche'
    },
    {
        quote : "“They couldn't get me if I couldn't get got.\" - A Proverb”",
        author : '― Kierra C.T. Banks',
    },
    {
        quote : "“All you ever had to do was STAND UP.”",
        author : '― Kierra C.T. Banks',
    },
    {
        quote : "“It does not do to dwell on dreams and forget to live.”",
        author : '― J.K. Rowling',
    },
    {
        quote : "“Life is what happens to us while we are making other plans.”",
        author : '― Allen Saunders',
    },
    {
        quote : "“I have not failed. I've just found 10,000 ways that won't work.”",
        author : '― Thomas A. Edison',
    }
] 


function getQuote()
{
    var quotesRandom = Math.round(Math.random() * (quotesCollection.length - 1) );
    quotesPlace.innerHTML = quotesCollection[quotesRandom].quote;
    quotesAuthors.innerHTML = quotesCollection[quotesRandom].author;

    // copy button change visibility from hidden to visible
    copyButton.style.visibility = "visible";

    //put quote generated and it's author into object to copy it! 
    quotePrinted = {
        quote : quotesPlace.innerHTML,
        author : quotesAuthors.innerHTML
    }
}


function copyQuote()
{
        navigator.clipboard.writeText(quotePrinted.quote + quotePrinted.author);
        window.alert(`Copied content is: ${JSON.stringify(quotePrinted.quote + quotePrinted.author)}`);
}

// Functions for dark and light Modes ==> by adding and removing classes from specific elements
function darkMode()
{
    bodyId.classList.add("bdarkMode");
    moonId.classList.add("d-none");
    sunId.classList.remove("d-none");
    sunId.classList.add("d-block");
}

function lightMode()
{
    bodyId.classList.remove("bdarkMode");
    moonId.classList.remove("d-none");
    moonId.classList.add("d-block");
    sunId.classList.add("d-none");
}