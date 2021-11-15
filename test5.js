/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];

function result(words) {
  intrsc = undefined;
  for (const word in words) {
    intrsc = checkIntersect(intrsc, words[word]);
  }
  return intrsc;
}

function checkIntersect(word_1, word_2) {
  if (!word_1 || !word_2) return word_1 ? word_1 : word_2;

  tmp = [word_1, word_2];
  tmp = tmp.sort((a, b) => a.length - b.length);
  sameChare = "";
  [...tmp[0]].forEach((v, idx) => {
    if (v === tmp[1][idx]) sameChare = sameChare + v;
  });
  return sameChare;
}

console.log(result(words));
