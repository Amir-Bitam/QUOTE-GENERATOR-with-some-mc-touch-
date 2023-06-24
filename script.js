// Get DOM elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const favoritesList = document.getElementById("favorites-list");
const favButton = document.getElementById("favorite-btn")

// JSON data with quotes zethom men 3endi ykono fun principalement special b mc
const customQuotes = [
  {
    quote: "acad w isisl??? ana na3ref isis... w na3ref acab",
    author: "Stenx",
  },
  {
    quote: "ana nadir ne9ra miv... and im a blender artist",
    author: "nadirTe3Showroom",
  },
  { quote: "ya lequiiiipe...", author: "haru" },
  { quote: "Tagla3 is infini", author: "Miko" },
  {
    quote: "Hadoma ako tshufo fyhom hadoma gae tw3iii",
    author: "Anis Adlaoui",
  },
  {
    quote: "je suis le plus beau président au monde",
    author: "Monsieur Anis f educteck",
  },
  { quote: "dok ntefilek dow", author: "Anyone from IRH department" },
  { quote: "Chkoun nta", author: "Mahdi team assiste" },
  {
    quote:
      "كي تتناقش مع واحد، ولا الواحد راه يقولك حاجة لب تقلقك، نتايا انسى هو، متزعفش عليه، هو ركز غير على هو واش يقول، ما تتنارفاش عليه هو، هو عندو رأي ناقش الفكرة ما دورش عليه",
    author: "Mnanouk",
  },
  { quote: "One piece taj rassak", author: "Ramzy" },
  { quote: "Just go ask chat gpt", author: "ayoub" },
  { quote: "bing is chad", author: "Soheib" },
  { quote: "O.P.S , mak bounadaem", author: "Mina" },
  { quote: "it is what it is", author: "Sifo" },
  { quote: "li kra kra bekri ki kan tableau k7al", author: "Nanovic" },
  { quote: "Achri dhab, la7dayad lachdayad", author: "A wise mother" },
  {
    quote: "we work in the dark to serve the light.",
    author: "Sofiane chikhi",
  },
  { quote: "semhouli khawti mais ntouma hayawanat", author: "MAHDI OPS : )" },
  { quote: "Li yhabek yhabek b cringek", author: "Kamie" },
  { quote: "cha tgoli ??", author: "haru" },
  { quote: "7yatek", author: "MC members" },
  { quote: "Multimedia ta3i", author: "Sameleon The Godfather of Multimedia" },
  { quote: "Multimedia wadna w ndiro rayna", author: "الأحمر" },
];

// Fetch a random quote from the API kont ndor f chat te3 training 9rit wa7ed dar b api I said why not
async function fetchRandomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data;
}

// Generate a random quote from either the custom quotes or the API but.... rani hab quotes taw3i ybano kter donc jai fais en sorte que the rate of apperance te3 quotes te3 la list 60% et api 40%
async function generateRandomQuote() {

  const randomIndex = Math.floor(Math.random() * 10);
  if (randomIndex < 6) {
    return customQuotes[Math.floor(Math.random() * customQuotes.length)];
  } else {
    return await fetchRandomQuote();
  }
}

// Display the quote and author on the page
function displayQuote(quoteData) {
  let quote, author;

  if (quoteData.hasOwnProperty("quote") && quoteData.hasOwnProperty("author")) {
    quote = quoteData.quote;
    author = quoteData.author;
  } else {
    quote = quoteData.content;
    author = quoteData.author;
  }

  quoteElement.textContent = `"${quote}"`;
  authorElement.textContent = `- ${author}`;
}

// Handle click event for the "New Quote" button
newQuoteButton.addEventListener("click", async () => {
  // Generate a random quote from either the custom quotes or the API
  const randomQuote = await generateRandomQuote();

  // Display the quote and author on the page
  displayQuote(randomQuote);
});

// Add the current quote to favorites
favButton.addEventListener("click", () => {
  const quoteText = quoteElement.textContent.trim();
  const authorText = authorElement.textContent.trim();

  // Check if the quote is already in favorites
  const isQuoteInFavorites = Array.from(favoritesList.children).some((item) =>
  item.textContent.includes(quoteText)
);

if (!isQuoteInFavorites) {
  const favoriteQuote = document.createElement("li");
  favoriteQuote.textContent = `${quoteText} ${authorText}`;
  favoritesList.appendChild(favoriteQuote);
}
})






