var quotes = ["Be yourself; everyone else is already taken.<br> ― Oscar Wilde",

"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.<br> ― Albert Einstein",

"A room without books is like a body without a soul.<br> ― Marcus Tullius Cicero",

"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.<br> ― Bernard M. Baruch",

"Life is what happens to you while you're busy making other plans.<br> ― John Lennon",

"Be the change that you wish to see in the world.<br> ― Mahatma Gandhi",

"So many books, so little time.<br> ― Frank Zappa",

"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. <br> ― J.K. Rowling",

"Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend <br> ― Albert Camus"
];

function randomQuote() {
    var random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

