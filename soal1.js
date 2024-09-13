const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];

function groupAnagrams(words) {
  const result = [];
  const grouped = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    let sortedWord = word
      .split("")
      .sort((a, b) => {
        return a.charCodeAt(0) - b.charCodeAt(0);
      })
      .join("");

    if (grouped[sortedWord]) {
      grouped[sortedWord].push(word);
    } else {
      grouped[sortedWord] = [word];
    }
  }

  for (let key in grouped) {
    result.push(grouped[key]);
  }

  return result;
}

const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);
