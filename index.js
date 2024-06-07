const languageEl = document.getElementById('language');
const welcomeEl = document.querySelector('.welcome');
console.log(languageEl);

languageEl.addEventListener('change', function (e) {
  console.log(e.target.value);
  if (e.target.value === 'english') {
    welcomeEl.textContent = 'Welcome';
  } else {
    welcomeEl.textContent = 'soo dhowoow';
  }
});

// all functions

//Book class represents a Book

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
    const storedBook = [
      {
        title: 'Book One',
        author: 'John Doe',
        isbn: '327356',
      },
      {
        title: 'Book Two',
        author: 'hane Doe',
        isbn: '383732',
      },
    ];
    const books = storedBook;

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
  // static deleteEl(el) {
  //   if (e.el.classList.contains('danger')) {
  //     console.log('hey its right');
  //     e.el.parentElment.remove();
  //   }
  // }
}

//store class: Handle storage

//Event: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#ISBN').value;

  //instatiate book
  const book = new Book(title, author, isbn);
  console.log(book);

  // Add book ui
  UI.addBookTolist(book);
  UI.clearFeilds();
});

//Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.classList.contains('danger')) {
    e.target.parentElement.remove();
  }
});
