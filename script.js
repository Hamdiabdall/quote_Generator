const quote_text = document.querySelector(".text");
const quote_autheur = document.querySelector(".autheur");
const quote_tweet = document.querySelector(".tweet");
const quote_btn = document.querySelector(".btn");

let listQuote = [];

newsQuote();
quote_btn.addEventListener("click", () => {
  if (quote_autheur.textContent === null) {
    quote_autheur.textContent = "Unknown";
  } else {
    quote_autheur.textContent = listQuote.author;
  }
  quote_text.textContent = listQuote.text;
});

quote_btn.addEventListener("click", () => {
  quotes()
});

quote_tweet.addEventListener("click", () => {
  window.open(`https://twitter.com/intent/tweet?text=${quote_text.textContent} - \n${quote_autheur.textContent}`, '_blank');
});

async function newsQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    listQuote.push(...data);
    quotes();
    
  } catch (error) {
    console.log(error);
  }
}

function quotes() {
  const quote = listQuote[Math.floor(Math.random() * listQuote.length)];
  quote_text.textContent = quote.text;
  quote_autheur.textContent = quote.author;
}