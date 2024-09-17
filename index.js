document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');
    const Btn = document.querySelector('#mybtn');
    const dialog = document.querySelector('#dialog');
    const submitBtn = document.querySelector('#submit');
    const svG = document.querySelector('#theSvg');

    const myLibrary = [];
    let nextId = 1; 

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = nextId++; 

        this.info = function() {
            return `Title: ${this.title}
                    Author: ${this.author}
                    Pages: ${this.pages}
                    Status: ${this.read}`;
        }
    }

    function addBookToLibrary() {
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const read = document.querySelector('input[name="read"]:checked').value;
        const newBook = new Book(title, author, pages, read);

        myLibrary.push(newBook);
    }

    function display(book) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.dataset.id = book.id; 
        const newP = document.createElement('p');

        bookDiv.appendChild(newP);
        container.appendChild(bookDiv);

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('del');
        btnDelete.textContent = 'Delete Book';
        bookDiv.appendChild(btnDelete);

        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.textContent = 'Change Status';
        bookDiv.appendChild(edit);

        newP.textContent = book.info();
    }

    Btn.addEventListener('click', () => {
        dialog.showModal();
    });

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault(); 
        addBookToLibrary();
        const latest = myLibrary[myLibrary.length - 1];
        display(latest);
        dialog.close();
        document.querySelector('form').reset(); 
    });

    container.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('del')) {
            const bookDiv = event.target.closest('.book');
            const bookId = bookDiv.dataset.id; 
            const indexToRemove = myLibrary.findIndex(book => book.id == bookId);
            if (indexToRemove > -1) {
                myLibrary.splice(indexToRemove, 1); 
            }
            bookDiv.remove(); 
        }

        if (event.target && event.target.classList.contains('edit')) {
            const bookDiv = event.target.closest('.book');
            const bookId = bookDiv.dataset.id;
            const book = myLibrary.find(book => book.id == bookId);
            if (book) {
                book.read = book.read === 'read' ? 'not read' : 'read';
                bookDiv.querySelector('p').textContent = book.info();
            }
        }
    });

    svG.addEventListener('click', () => {
        dialog.close();
    });

       
    });

    

   




