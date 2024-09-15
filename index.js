const p = document.querySelector('p');
const container = document.querySelector('.container')

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
    const promptTitle = prompt('Title: ');
    const promptAuthor = prompt('Author: ');
    const promptPages = prompt('Pages: ');
    const promptRead = prompt('Have you read it? (yes/no): ');

    const newBook = new Book(promptTitle, promptAuthor, promptPages, promptRead);
    myLibrary.push(newBook)
  }

let addAnother = true;

while(addAnother){
    addBookToLibrary()
    addAnother = prompt("Would you like to add another book? ") == 'yes';
}

function display(){

    myLibrary.forEach(lib => {
        const book = document.createElement('div');
        book.classList.add('book');
        const newP = document.createElement('p');  

        book.appendChild(newP);
        container.appendChild(book);

        newP.textContent = lib.info();
    })
   
}

display()






