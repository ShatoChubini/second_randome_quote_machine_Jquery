 $( document ).ready(function() { 
    
    getNextQuote();

    // new-quote generation
    $("#new-quote").click(function(){
        getNextQuote(text, author);        
    }); 
    
        
    function getNextQuote(){             
        var quotesNumber = QUOTES.length;
        var randomIndex = Math.floor(Math.random() * Math.floor(quotesNumber));
        var randomeQuoteData = QUOTES[randomIndex];    

        $("#text").html(randomeQuoteData.text);
        $("#author").html(
            (randomeQuoteData.author === "") ? randomeQuoteData.author = "Author isn't defined :(" : randomeQuoteData.author
            ); 
            
        // twitter link generation
        let twitterLink = "https://twitter.com/intent/tweet?";
            twitterLink += "text="; 
            twitterLink += randomeQuoteData.text;
            twitterLink += "%20";
            twitterLink += randomeQuoteData.author;           

        $("#tweet-quote").on("click", function(){
            $("#tweet-quote").attr("href", twitterLink);        
        });                
        
    } 
});