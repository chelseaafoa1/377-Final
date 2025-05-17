
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

/*function quoteLife(){
    fetch("https://zenquotes.io/api/quotes/9d37e36685009a0daa662617d3288c54")
        .then((resp) => resp.json())
        .then((data) => {  
            const keyword=prompt("enter a word");
            const found=data.find(q=> q.q.toLowerCase().includes(keyword.toLowerCase()));

        if (found){
            const quote=found.q;
            const author=found.a;
            document.getElementById("quoteshown").innerHTML = `"${quote}"<br>—${author}`;
        } else {
            document.getElementById("quoteshown").innerText="no quote for keyword";
        }
    })

     .catch((error) => {
        console.error("Error fetching quote:", error);
        document.getElementById("quoteshown").innerText = "Failed to load quote.";
     });
    }

/* function quoteAuthor(){
    // const author = prompt("enter author's name");
    //if (!author) return;

    const encodedHash="9d37e36685009a0daa662617d3288c54";
    const encodedAuthor=encodeURIComponent(author.trim());

    fetch(`https://zenquotes.io/api/quotes/author/${encodedAuthor}/${encodedHash}`)
        .then((resp) => resp.json())
        .then((data) => {  
           if (data.length >0) {
            const quote = data[0].q;
            const authorName = data[0].a;
            document.getElementById("quoteshown").innerHTML = `"${quote}"<br>—${authorName}`;
           } else {
            document.getElementById("quoteshown").innerText ="no quotes";
           }
           
    })

     .catch((error) => {
        console.error("Error fetching quote:", error);
        document.getElementById("quoteshown").innerText = "Failed to load quote.";
     });
    }
*/
document.addEventListener("DOMContentLoaded", () =>{
    new Typed("#quoteshown", {
        strings: ["Your Quote Of The Day!"],
        typeSpeed: 50,
        showCursor: false,
    });
});

function saveQuote(quote, author){
    fetch('/api/addFavs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({quote, author})
    })
    .then(res => res.json())
    .then(data => alert("saved"))
    .catch (err => console.error(err));
}

function saveRecentQuote(){
    const quote = document.getElementById("quoteshown").innerText;
    if (!quote.includes("—")) return alert("no quote loaded");
    const [text, author] = quote.split("—");
    saveQuote(text.replace(/"/g, "").trim(), author.trim());
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