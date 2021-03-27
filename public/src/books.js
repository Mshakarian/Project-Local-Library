// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let partitionedBooksByBorrowedStatus = [];
  let borrowedBooks = books.filter((book) => !book.borrows[0].returned);
  partitionedBooksByBorrowedStatus.push(borrowedBooks);
  let returnedBooks = books.filter((book) => book.borrows[0].returned);
  partitionedBooksByBorrowedStatus.push(returnedBooks);
  return partitionedBooksByBorrowedStatus;
}

function getBorrowersForBook(book, accounts) {
  function findAccountById(accounts, id) {
    return accounts.find((account) => account.id === id);
  }
  return book.borrows
    .map((borrows) => {
      let account = findAccountById(accounts, borrows.id);
      return { ...borrows, ...account };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
