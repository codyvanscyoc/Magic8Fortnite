const answers = [
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "I told my son to stop acting like a flamingo. He put his foot down!",
    "Yes, but only if you say 'pretty please' first!",
    "What do you call fake spaghetti? An impasta!",
    "In Fortnite, build high and fast—dads don’t dawdle!",
    "I’d tell you a joke about pizza, but it’s too cheesy!",
    "Why don’t eggs tell jokes? They’d crack up!",
    "No, but I’ll give you a hug instead!",
    "Fortnite tip: Land at Salty Springs for quick loot—dad approved!",
    "I’m not saying yes, but I’m not saying no either!",
    "Why did the tomato turn red? It saw the salad dressing!",
    "Ask your mom, she’s the boss of me!",
    "What do you call cheese that isn’t yours? *Nacho* cheese!",
    "Sure, as soon as pigs sprout wings!",
    "Why don’t programmers prefer dark mode? The light attracts bugs!",
    "Fortnite advice: Always carry a shotgun—close fights win games!",
    "What’s orange and sounds like a parrot? A carrot!",
    "Not today, but try again tomorrow!",
    "Why did the banana go to the doctor? It wasn’t peeling well!",
    "Only if you can catch me first!",
    "What do you call a bear with no teeth? A gummy bear!",
    "In Fortnite, don’t camp too long—dads move with the storm!",
    "Why don’t dads tell secrets? They’re afraid of the punchline!",
    "Yes, but only if you laugh at this first!",
    "What’s brown and sticky? A stick!",
    "No way, Jose—unless your name’s not Jose!",
    "Fortnite tip: Harvest mats early—dads don’t run out of wood!",
    "Maybe later, I’m udderly busy right now!",
    "What do you call a fish with no eyes? A fsh!",
    "Ask me again when I’m not this hilarious!",
    "Why don’t programmers play Fortnite? Too many bugs in the code!",
    "What’s a dad’s favorite Fortnite dance? The Floss—because it’s timeless!",
    "Yes, but only if you drop a Victory Royale first!",
    "Why did the tomato refuse to play Fortnite? It didn’t want to ketchup!",
    "Fortnite advice: Use headphones—hear those sneaky footsteps!",
    "What do you call a Fortnite player with no V-Bucks? A default dad!",
    "Why don’t chickens play Fortnite? They’d just egg-scape the storm!",
    "Sure, if you can find me a llama in real life!",
    "What’s a dad’s favorite Fortnite weapon? The pun-isher!",
    "Why did the Fortnite bush move? It heard my jokes coming!",
    "In Fortnite, edit builds fast—dads don’t mess around!",
    "Why don’t dads tilt in Tilted Towers? We’re already leaning!",
    "What do you call a Fortnite dad joke? A legendary drop!",
    "Yes, but only if you thank the bus driver first!",
    "Fortnite tip: Drop hot, win big—dads don’t play safe!",
    "I’d answer, but I’m stuck in the storm!",
    "What’s a dad’s favorite Fortnite skin? The one that’s free!",
    "Why don’t skeletons play Fortnite? No backbone for the fight!",
    "Sure, but only if you build me a ramp to the answer!",
    "Fortnite advice: Aim for the head—dads don’t miss!",
    "Why did the cow cross the Fortnite map? To graze on both sides!",
    "No, but I’ll drop you a cheesy shield potion!",
    "What’s a dad’s favorite Fortnite spot? Dusty Dad-pot!",
    "Fortnite tip: Stock up on shields—dads stay healthy!",
    "Yes, but only if you emote for me first!",
    "Why did the Fortnite player bring a ladder? To climb out of my jokes!",
    "In Fortnite, don’t panic-build—keep it cool like dad!",
    "Maybe, but I’m too busy looting your laughter!",
    "Why don’t dads play Fortnite duos? We’re solo jokers!",
    "Fortnite advice: Rotate early—dads don’t get caught in the storm!"
];

function shakeBall() {
    const container = document.querySelector('.spider-container');
    const answerDiv = document.getElementById('answer');
    const shakeSound = document.getElementById('shake-sound');
    
    shakeSound.play();
    container.classList.add('shake');
    
    setTimeout(() => {
        container.classList.remove('shake');
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerDiv.textContent = answers[randomIndex];
    }, 700);
}
