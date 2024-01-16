import { getRandomQuote, tmntQuotes } from '../lesson-1';


/* Arrange, Act, Assert */

test('getRandomQuote returns a quote from tmntQuotes', () => {
    const quote = getRandomQuote();
    expect(typeof quote).toBe('string');
    expect(tmntQuotes).toContain(quote);
});