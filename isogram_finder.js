const IsogramFinder = function (word) {
  this.word = word;

}

IsogramFinder.prototype.isIsogram = function () {

  const wordArray = this.word.toLowerCase().split('');
  const uniqueLettersList = [...new Set(wordArray)]

  if (uniqueLettersList.length === wordArray.length) {
    return true
  } else {
    return false
  }
}

module.exports = IsogramFinder;