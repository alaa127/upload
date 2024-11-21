let btn = document.getElementById('btn');
let out = document.getElementById('out');
let quote = [ "","Resentment is like drinking poison and waiting for your enemies to die.--Nelson Mandela",
    "It's not what happens to you, but how you react to it that matters.",
        "The best revenge is massive success.",
        "You miss 100% of the shots you don't take."]


btn.addEventListener('click' ,function(){
    let randomQuote = quote[Math.floor(Math.random()* quote.length)]
    out.innerHTML=randomQuote;
})