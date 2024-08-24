const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
  }
  
function addBookToLibrary(book) {
    library.push(book)
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');

const PhilosopherStone = new Book("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', '223', 'read');

// document.addEventListener('DOMContentLoaded', addBookToLibrary(theHobbit));
// document.addEventListener('DOMContentLoaded', showLibrary());

addBookToLibrary(theHobbit);
addBookToLibrary(PhilosopherStone);

const container = document.getElementById('container');

library.forEach((book)=> {
    let content = `
      <div class="card">
        <div class="cardContent">
          <h4><b>'${book.title}'</b></h4>
          <p>Author : ${book.author}</p>
          <p>Pages : ${book.pages}</p>
          <p>Read? : ${book.read}</p>
        </div>
      </div>`
    container.innerHTML += content; })


// function showLibrary(){
//   library.forEach(function(book){
//     let card = document.createElement('div');
//     card.classList = 'card';

//     let content = `
//       <div class="container">
//         <h4><b>'${this.title}'</b></h4>
//       </div>`

//     card.innerHTML += content;
//   })
// }