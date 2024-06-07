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

  static showMassage(massage, classs) {
    errorMsgEl.textContent = massage;
    errorMsgEl.className = `${classs}`;
    setTimeout(() => errorMsgEl.remove(), 3000);
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

  //validate

  if (title === '' || author === '' || isbn === '') {
    UI.showMassage('Please fill all fields', 'massage-red');
  } else {
    //instatiate book
    const book = new Book(title, author, isbn);
    console.log(book);

    // Add book ui
    UI.addBookTolist(book);
    UI.clearFeilds();
    UI.showMassage('Book succesfully added', 'massage-green');
  }
});

//Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.classList.contains('danger')) {
    e.target.parentElement.remove();
    UI.showMassage('Book succesfully Removed', 'massage-green');
  }
});
