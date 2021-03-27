// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const { getBooksPossessedByAccount } = require("./accounts");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  var borrowed = books.filter((book) => !book.borrows[0].returned);
  return borrowed.length;
}

function getMostCommonGenres(books) {
  return Object.entries(
    books.reduce((acc, book) => {
      acc[book.genre] = acc[book.genre] ? acc[book.genre] + 1 : 1;
      return acc;
    }, {})
  )
    .map(([name, count]) => {
      const reformattedGenreCount = { name: name, count: count };
      return reformattedGenreCount;
    })
    .sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      var reformattedBook = { name: book.title, count: book.borrows.length };
      return reformattedBook;
    })
    .sort((reformattedBookA, reformattedBookB) =>
      reformattedBookA.count < reformattedBookB.count ? 1 : -1
    )
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  return authors
    .reduce((acc, author) => {
      const thisAuthor = {
        name: `${author.name.first} ${author.name.last}`,
        count: 0,
      };
      books.forEach((book) => {
        if (book.authorId === author.id) {
          thisAuthor.count += book.borrows.length;
        }
      });
      acc.push(thisAuthor);
      return acc;
    }, [])
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
