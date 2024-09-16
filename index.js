document.addEventListener('DOMContentLoaded', () => {

const container = document.querySelector('.container')
const Btn = document.querySelector('#mybtn');
const dialog = document.querySelector('#dialog');
const submitBtn = document.querySelector('#submit');

const myLibrary = [];

function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
      return  `Title: ${this.title}
               Author: ${this.author}
               Pages: ${this.pages}  
               Read: ${this.read}`;
    }
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;
    const newBook = new Book(title,author,pages,read);
   
    myLibrary.push(newBook)
  }

  /*
let addAnother = true;

while(addAnother){
    addBookToLibrary()
    addAnother = prompt("Would you like to add another book? ") == 'yes';
}*/

function display(books){
        const book = document.createElement('div');
        book.classList.add('book');
        const newP = document.createElement('p');  

        book.appendChild(newP);
        container.appendChild(book);

        newP.textContent = books.info();
    }
   




Btn.addEventListener('click', () =>{
dialog.showModal();
});

submitBtn.addEventListener('click', (event) =>{
    addBookToLibrary();
    const latest = myLibrary[myLibrary.length - 1];
    display(latest);
    event.preventDefault();
    dialog.close();
    document.querySelector('form').reset();


});











});

