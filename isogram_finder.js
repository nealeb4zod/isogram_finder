const IsogramFinder = function (word) {
  this.word = word;

}

IsogramFinder.prototype.isIsogram = function () {

  const wordArray = this.word.split('');
  const wordArrayLowerCase = wordArray.map(letter => letter.toLowerCase());

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const isogram = wordArrayLowerCase.filter(onlyUnique)

  if (isogram.length === wordArrayLowerCase.length) {
    return true
  } else {
    return false
  }
}

module.exports = IsogramFinder;