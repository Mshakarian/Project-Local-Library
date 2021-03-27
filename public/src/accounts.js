// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  return books
    .map(
      (book) => book.borrows.filter((borrow) => borrow.id === account.id).length
    )
    .reduce((acc, eachBookBorrow) => acc + eachBookBorrow, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  function findAuthorById(authors, id) {
    return authors.find((author) => author.id === id);
  }
  return books
    .filter(
      (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
    )
    .map((book) => {
      let authorDetail = findAuthorById(authors, book.authorId);
      return { ...book, author: authorDetail };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
