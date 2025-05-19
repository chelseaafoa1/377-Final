function quoteDisplay(){
    fetch("https://zenquotes.io/api/random/9d37e36685009a0daa662617d3288c54")
    .then((resp) => resp.json())
    .then((data) => {  
        const quote=data[0].q;
        const author = data[0].a;

      document.getElementById("quoteshown").innerHTML = `"${quote}"<br>—${author}`
    })

.catch((error) => {
    console.error("Error fetching quote:", error);
    document.getElementById("quoteshown").innerText = "Failed to load quote.";
});
}




document.addEventListener("DOMContentLoaded", () =>{
    new Typed("#quoteshown", { //QUOTESHOWN
        strings: ["Your Quote Of The Day!"],
        typeSpeed: 50,
        showCursor: false,
    });
});

function saveQuote(quote, author){ //SAVEQUOTE
    fetch('http://localhost:3000/api/addFavs', { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({quote, author})
    })
    .then(res => res.json())
    .then(data => alert("saved"))
    .catch (err => console.error(err));
}

function saveRecentQuote() { //SAVERECENTQUOTE
  const quoteBlock = document.getElementById("quoteshown").innerText;
  if (!quoteBlock.includes("—")) return alert("no quote loaded");

  const [text, author] = quoteBlock.split("—");
  const cleanedQuote = text.replace(/"/g, "").trim();
  const cleanedAuthor = author.trim();

  console.log("Trying to save:", cleanedQuote, cleanedAuthor); // 
  saveQuote(cleanedQuote, cleanedAuthor);
}


if(annyang){
    const commands= {
        'quote': quoteDisplay,
        'save': saveRecentQuote,
        'new quote': quoteDisplay
    };
    annyang.addCommands(commands);
    annyang.start();
}
