const tmntQuotes = [
    `"Forgiveness Is Devine, But Never Pay Full Price For A Late Pizza." -Michelangelo`,
    `"Class Is Pain 101, Instructor Is Casey Jones." -Casey Jones`,
    `"Cowabunga!"`,
    `"Go Ninja, Go Ninja, Go!" -Vanilla Ice`,
    `"You Guys Must Be Studying The Abridged Book Of Ninja Fighting." -Raphael`,
    `"Anger Clouds The Mind. Turned Inward, It Is An Unconquerable Enemy." -Splinter`,
    `"I Challenge." -Shredder`,
];

const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * tmntQuotes.length);
    return tmntQuotes[randomIndex];
}

export { getRandomQuote, tmntQuotes }