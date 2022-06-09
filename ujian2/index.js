document.addEventListener('DOMContentLoaded',function () {
    if (isStorageExist) { 

    }
    console.log('workk')
    const submit = document.getElementById('bookSubmit')
    submit.addEventListener('click',function (event) {
        event.preventDefault()
        addBook()
        console.log(books)
    })
})

function isStorageExist() {
    if (typeof(Storage) === null) {
        alert('Browser anda tidak mendukung ')
        return false
    }
    return true
}
function addBook() {
    const title = document.getElementById('bookTitle').value
    const author = document.getElementById('bookAuthor').value
    const year = document.getElementById('bookYear').value
    const id = generateID()
    const book = generateObject(id,title,author,year,false)
    books.push(book)
    document.dispatchEvent(new Event(RENDER_EVENT))
    saveData()
}
function generateID() {
    return +new Date
}
function generateObject(id,title,author,year,isCompleted) {
    return{
        id,
        title,
        author,
        year,
        isCompleted
    }
}
const books = []
const RENDER_EVENT = 'render-book'
document.addEventListener(RENDER_EVENT,function () {
    const finishRead = document.getElementById('finish')
    finishRead.innerHTML = ''

    const unFinishedRead = document.getElementById('not-finish')
    unFinishedRead.innerHTML = ''

    for (const b of books) {
        const book = makeBook(b)
        if (!b.isCompleted) {
            unFinishedRead.append(book)
        }else{
            finishRead.append(book)
        }
    }

})
const STORAGE_KEY = 'books'
const SAVED_EVENT = 'saved-book'
function makeBook(bookObject) {
    const textTitleBook = document.createElement('h3')
    textTitleBook.innerText = bookObject.title

    const textAuthorBook = document.createElement('h5')
    textAuthorBook.innerText = bookObject.author

    const textYearBook = document.createElement('h5')
    textYearBook.innerText = bookObject.year

    const item = document.createElement('div')
    item.classList.add('item-card')
    item.append(textTitleBook,textAuthorBook,textYearBook)

    const card = document.createElement('div')
    card.classList.add('item','shadow')
    card.append(item)

    return card
}
function saveData() {
    if (isStorageExist()) {
        const parsed = JSON.stringify(books)
        localStorage.setItem(STORAGE_KEY,parsed)
        document.dispatchEvent(new Event(SAVED_EVENT))
    }
}