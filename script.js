function book(title, author, noOfPage, status) {
  this.title = title;
  this.author = author;
  this.noOfPage = noOfPage;
  this.status = status;
}
const library = [
  {
    title:'deep work',
    author:'aulia',
    noOfPage:23,
    status:'not read'
  },
  {
    title:'work is life',
    author:'lia',
    noOfPage:233,
    status:' read'
  }
];
displayBook(library);
function addToLibrary(library, newBook) {
  library.push(newBook);
  console.log(library);
  displayBook(library);
}
function displayBook(library) {
  const bookList = document.getElementById("book-list");
  const createCard = (book, index) => `
    <div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${book.title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${book.author}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${book.noOfPage}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${book.status}</p>
            <button class="remove-btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Remove
            </button>
        </div>
    </div>

`;
  bookList.innerHTML = library
    .map((book, index) => createCard(book, index))
    .join("");
  bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const card = e.target.closest(".card");
      const index = card.dataset.index;
      library.splice(index, 1); // Remove the book from the array
      card.remove(); // Remove the card from the DOM
    }
  });
}

document.getElementById("modal-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("page").value;
  const status = document.getElementById("status").value;

  if (title && author && pages && status) {
    const newBook = new book(title, author, pages, status);
    addToLibrary(library, newBook);
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('author').value = '';
    document.getElementById('page').value = '';
    document.getElementById('status').value = '';
  }
  
  
  
});
