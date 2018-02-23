$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var randomAuthor;
 getQuote();
  function getQuote(){
   
    var quotes =["Never Give up is my Magic.!", "You don't die for your friends, you life for them.!", "You trusted me, so I'll trust you too. That's what being friends means, doesn't it.?", "How can you move forward if you keep regreting the past.!", "The moment people come to know about love, they run the risk of carrying hate.!", "Trying to improve by learning from others that is what call friendship.!", "Back then, if we could have heard each other's voices, everything would have been so much better.!", "You can run from your past all you want, but it will always follow you. forever and ever.!", "None of us really changes over time, we only become more fully what we are.!", "Being alone is better than being with the wrong person.!", "Falling down is not an embarassment, The true embarrassment is not standing after such a fall.!" ];
    var author1 =["-Asta_Black Clover", "-Natsu_Fairy Tail", "-Okumura Rin", "-Edward Elric", "-Obito Uchiha", "-Shino Aburame", "-Shouya Ishida", "-Izaya Orihara", "-Ken Kaneki", "-L_Death Note", "-Shintarou Midorima" ];
    
    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = author1[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
        }
  $("#tweet").on("click", function(){  
 window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + randomAuthor);
  });
      
  $("#newQuote").on("click", function(){
    getQuote();
  });
             
      
});