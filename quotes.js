const quotes = [
        "The power of imagination makes us infinite. —John Muir",
        "Shoot for the moon and if you miss, you will still be among the stars. —Les Brown",
        "If you can dream it, you can do it. —Tom Fitzgerald",
        "Keep your eyes on the stars, and your feet on the ground. —Theodore Roosevelt",
        "Not all who wander are lost. —J.R.R. Tolkien",
        "It is better to be hated for what you are than to be loved for what you are not. —André Gide",
        "All endings are also beginnings. We just don't know it at the time. —Mitch Albom",
        "When you are imagining, you might as well imagine something worthwhile. —Lucy Maud Montgomery",
        "The worst enemy to creativity is self-doubt. —Sylvia Path",
        "Yes, I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world. —Oscar Wilde",
        "We are all in the gutter, but some of us are looking at the stars. —Oscar Wilde",
        "I dream. Sometimes I think that's the only right thing to do. —Haruki Murakami",
        "It is sometimes an appropriate response to reality to go insane. —Philip K. Dick",
        "If I got rid of my demons, I'd lose my angels. —Tennessee Williams",
        "One day I will find the right words, and they will be simple. —Jack Kerouac",
        "Whatever you do in life, surround yourself with smart people who'll argue with you. —John Wooden",
        "Do not go where the path may lead, go instead where there is no path and leave a trail. —Ralph Waldo Emerson",
        "The only true wisdom is in knowing you know nothing. —Socrates",
        "The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark. —Michelangelo",
        "If you don't know where you are going, any road will get you there. —Lewis Carroll",
    ];

    let currentIndex = 0;
    
    function displayQuote(index) {
        const quoteParts = quotes[index].split(" —");
        document.getElementById("quote").innerHTML = quoteParts[0];
        document.getElementById("author").innerHTML = quoteParts[1];
    }

    const INTERVAL = 6 * 60 * 60 * 1000;

    function prevQuote() {
        currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
        displayQuote(currentIndex);
    }
    
    function nextQuote() {
        currentIndex = (currentIndex + 1) % quotes.length;
        displayQuote(currentIndex);
    }
    
    window.onload = function () {
        displayQuote(currentIndex);
        setInterval(nextQuote, INTERVAL);
        document.getElementById("prev-button").addEventListener("click", prevQuote);
        document.getElementById("next-button").addEventListener("click", nextQuote);
};
        
