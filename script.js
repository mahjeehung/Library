let library = [];

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

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'no'));
addBookToLibrary(new Book("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', '223', 'yes'));

function isBookRead(book){
  if (book.read=='yes'){
      return `Read`;
  }   else    {
      return `Not Read Yet`;
  }
}

function refreshLibrary(){
  let removeDOM = document.getElementsByClassName('card');
  for (let i = 0; 0 <removeDOM.length; i){
    removeDOM[i].remove();
  } 
  library.forEach((book)=> {
    let content = `
      <div class="card">
        <div class="cardContent">
          <h4><b>'${book.title}'</b></h4>
          <p>Author : ${book.author}</p>
          <p>Pages : ${book.pages}</p>
          <button class="removeBook"  data-index-number="${library.indexOf(book)}">Remove this book</button>
          <button class='readStatus' data-index-number='${library.indexOf(book)}'>${isBookRead(book)}</button>
        </div>
      </div>`
      document.getElementById('container').innerHTML += content 
  });

let removeBookBtn = document.getElementsByClassName("removeBook");
  for (let i = 0; i <removeBookBtn.length; i++){
    removeBookBtn[i].addEventListener("click",removeBookFx);
  }
function removeBookFx(event){
  let getATTRIBUTE = event.target.getAttribute("data-index-number");
  library = library.slice(0, `${getATTRIBUTE}`).concat(library.slice(`${getATTRIBUTE}`+1));
  refreshLibrary();
}

let readStatusBtn = document.getElementsByClassName('readStatus');
    for (let i = 0; i <readStatusBtn.length; i++){
        readStatusBtn[i].addEventListener("click",toggleReadStatusFx);
    }
}
function toggleReadStatusFx(event){
    let getATTRIBUTE = event.target.getAttribute("data-index-number");
    if (library[`${getATTRIBUTE}`].read=='yes'){
      library[`${getATTRIBUTE}`].read='no';
        event.target.textContent = 'Not Read Yet'
    }   else    {
      library[`${getATTRIBUTE}`].read='yes';
        event.target.textContent = `Read`
    }
}

const newBookBtn = document.getElementById("newBookBtn");
const newBookDialog = document.getElementById("newBookDialog")
newBookBtn.addEventListener("click", () => {
  newBookDialog.showModal();
});

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newBookTitle = document.getElementById('title').value;
  let newBookAuthor = document.getElementById('author').value;
  let newBookPages = document.getElementById('pages').value;
  let newBookRead = document.getElementById('read').value;
  let newBook = new Book(newBookTitle,newBookAuthor,newBookPages,newBookRead);
  addBookToLibrary(newBook);
  newBookDialog.close();
  refreshLibrary();
});

refreshLibrary();