document.addEventListener("DOMContentLoaded", function () {
  if (isStorageExist) {
    loadData();
  }
  const submit = document.getElementById("bookSubmit");
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    addBook();
  });
  const search = document.getElementById("search");
  search.addEventListener("click", function () {
    const query = document.getElementById("search-field").value;
    document.dispatchEvent(
      new CustomEvent(RENDER_EVENT, {
        detail: {
          eventName: "search",
          searchQuery: query,
        },
      })
    );
  });
});

function isStorageExist() {
  if (typeof Storage === null) {
    alert("Browser anda tidak mendukung ");
    return false;
  }
  return true;
}
function addBook() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const year = document.getElementById("bookYear").value;
  const id = generateID();
  const isDone = document.getElementById("is-done")
  const book = generateObject(id, title, author, year, false);
  if (isDone.checked) {
    book.isComplete = true
  }
  books.push(book);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}
function generateID() {
  return +new Date();
}
function generateObject(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
}
const books = [];
const RENDER_EVENT = "render-book";
document.addEventListener(RENDER_EVENT, function (event) {
  const finishRead = document.getElementById("finish");
  finishRead.innerHTML = "";

  const unFinishedRead = document.getElementById("not-finish");
  unFinishedRead.innerHTML = "";

  if (event.detail && event.detail.searchQuery !== '') {
    const { detail } = event;
    if (detail.eventName = "search") {
      const searchResult = books.filter(
        (books) => books.title === detail.searchQuery
      );
      showBooks(searchResult, unFinishedRead, finishRead);
      return;
    }
  }

  showBooks(books, unFinishedRead, finishRead);
});
const STORAGE_KEY = "books";
const SAVED_EVENT = "saved-book";
function makeBook(bookObject) {
  const textTitleBook = document.createElement("h3");
  textTitleBook.innerText = bookObject.title;

  const textAuthorBook = document.createElement("h5");
  textAuthorBook.innerText = bookObject.author;

  const textYearBook = document.createElement("h5");
  textYearBook.innerText = bookObject.year;

  const item = document.createElement("div");
  item.classList.add("item-card");
  item.append(textTitleBook, textAuthorBook, textYearBook);

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("button-delete");
  buttonDelete.addEventListener("click", function () {
    removeBook(bookObject.id);

  });
  buttonDelete.innerText = "delete book";

  const card = document.createElement("div");
  card.classList.add("item", "shadow");
  card.setAttribute("id", `book-${bookObject.id}`);
  card.append(item);

  if (bookObject.isComplete === true) {
    const buttonUndoFinish = document.createElement("button");
    buttonUndoFinish.classList.add("button-undo-finish");
    buttonUndoFinish.innerText = "belum selesai dibaca";
    buttonUndoFinish.addEventListener("click", function () {
      undoFinish(bookObject.id);
    });
    card.append(buttonUndoFinish,buttonDelete);
  } else {
    const buttonFinish = document.createElement("button");
    buttonFinish.classList.add("button-finish");
    buttonFinish.innerText = "Selesai dibaca";
    buttonFinish.addEventListener("click", function () {
      finish(bookObject.id);
    });
    card.append(buttonFinish,buttonDelete);
  }


  return card;
}

function showBooks(books, finish, unFinish) {
  for (const b of books) {
    const book = makeBook(b);
    if (!b.isComplete) {
      finish.append(book);
    } else {
      unFinish.append(book);
    }
  }
}
function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}
function loadData() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const d of data) {
      books.push(d);
    }
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
}
function findBookIndex(id) {
  for (const b in books) {
    if (books[b].id === id) {
      return b;
    }
  }
  return -1;
}
function removeBook(id) {
  const bookTargetIndex = findBookIndex(id);

  if (bookTargetIndex === -1) {
    return;
  }
  alert('buku berjudul ' + books[bookTargetIndex].title + ' telah dihapus')
  books.splice(bookTargetIndex, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}
function findBook(id) {
  for (const b of books) {
    if (b.id === id) {
      return b;
    }
  }
  return null;
}
function undoFinish(id) {
  const bookTarget = findBook(id);
  if (bookTarget === null) {
    return;
  }
  bookTarget.isComplete = false;

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}
function finish(id) {
  const bookTargetIndex = findBookIndex(id);
  if (bookTargetIndex === -1) {
    return;
  }
  books[parseInt(bookTargetIndex, 16)].isComplete = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}
