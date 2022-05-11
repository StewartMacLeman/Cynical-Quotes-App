use cynical_quotes;
db.dropDatabase();

db.quotes.insertMany([
  {
    quote: "All you need in life is ignorance and confidence and then success is sure.",
    quoter: "Mark Twain"
  },
  {
    quote: "Life is one long process of getting tired.",
    quoter: "Samuel Butler"
  },
  {
    quote: "Don't take life too seriously - you will never get out of it alive",
    quoter: "Elbert Hubbard"
  },
  {
    quote: "If two people love each other, there can be no happy end to it",
    quoter: "Ernest Hemingway"
  },
  {
    quote: "Of course it's possible to love a human being if you don't know them too well.",
    quoter: "Charles Bukowski"
  },
  {
    quote: "Peace on earth would mean the end of civilization as we know it.",
    quoter: "Joseph Heller"
  },
  {
    quote: "It is easy to settle the world upon a soap box.",
    quoter: "David Lloyd George"
  },
  {
    quote: "Where you stand depends on where you sit.",
    quoter: "Rufus Miles"
  },
  {
    quote: "Visits always give pleasure: if not in the arrival, then on the departure.",
    quoter: "Edouard Le Berquier"
  },
  {
    quote: "Let the meek inherit the earth - they have it coming to them.",
    quoter: "James Thurber"
  }
]);
