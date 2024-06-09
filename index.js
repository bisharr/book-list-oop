// all functions

//store class: Handle storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }
  static remove(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

//Book class represents a Book
const errorMsgEl = document.querySelector('.error-massage');
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class: handle Ui Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookTolist(book));
  }
  static addBookTolist(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = `    <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="danger">❌</td>`;
    list.append(row);
  }
  static clearFeilds() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#ISBN').value = '';
  }

  static showMassage(massage, classs) {
    errorMsgEl.textContent = massage;
    errorMsgEl.className = `${classs}`;
    setTimeout(() => errorMsgEl.remove(), 3000);
  }
}

//Event: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#ISBN').value;

  //validate

  if (title === '' || author === '' || isbn === '') {
    UI.showMassage('Please fill all fields', 'massage-red');
  } else {
    //instatiate book
    const book = new Book(title, author, isbn);
    console.log(book);

    // Add book ui
    UI.addBookTolist(book);

    //add book to store
    Store.addBook(book);

    UI.clearFeilds();
    UI.showMassage('Book succesfully added', 'massage-green');
  }
});

//Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.classList.contains('danger')) {
    e.target.parentElement.remove();

    //remove Book from the Store
    Store.remove(e.target.parentElement.previousElementSibling.textContent);

    UI.showMassage('Book succesfully Removed', 'massage-green');
  }
});

/* emplementing Languages */
const myBook = document.querySelector('.my-book');
const titleSpan = document.querySelector('.title-span');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const isbnInput = document.querySelector('.isbn-input');
const submitBtn = document.querySelector('.btn-submit');

const thTitle = document.querySelector('.th-title');
const thAuthor = document.querySelector('.th-author');
const thisbn = document.querySelector('.th-isbn');
const thCancel = document.querySelector('.th-cancel');
const languageEl = document.getElementById('language');
const englishLabel = document.querySelector('.languuage');

console.log(languageEl);

languageEl.addEventListener('change', function (e) {
  console.log(e.target.value);
  if (e.target.value === 'somali') {
    englishLabel.textContent = 'Luuqad';
    myBook.textContent = '📘gayga';
    titleInput.textContent = 'Cinwaan';
    authorInput.textContent = 'Qoraa';
    submitBtn.value = 'Ku dar Book';
    thAuthor.textContent = 'Qoraa';
    thTitle.textContent = 'Cinwaan';
    thCancel.textContent = 'Tirtir';

    console.log(titleSpan);
  } else {
  }
});
