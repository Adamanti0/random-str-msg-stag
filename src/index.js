const messages = [
  "1 This is where it all begins...",
  "2 Commit committed",
  "3 Version control is awful",
  "4 COMMIT ALL THE FILES!",
  "5 The same thing we do every night, Pinky - try to take over the world!",
  "6 Lock S-foils in attack position",
  "7 This commit is a lie",
  "8 I'll explain when you're older!",
  "9 Here be Dragons",
  "10 Reinventing the wheel. Again.",
  "11 This is not the commit message you are looking for",
  "12 Batman! (this commit has no parents)"
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit
};
