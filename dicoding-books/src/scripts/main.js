function main() {
  const getBook = () => {
    // Tuliskan kode di sini!
  };

  const insertBook = (book) => {
    // Tuliskan kode di sini!
  };

  const updateBook = (book) => {
    // Tuliskan kode di sini!
  };

  const removeBook = (bookId) => {
    // Tuliskan kode di sini!
  };

  /*
    PERINGATAN: Jangan ubah kode di bawah ini!
  */

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector('#listBook');
    listBookElement.innerHTML = '';

    books.forEach((book) => {
      listBookElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h5>(${book.id}) ${book.title}</h5>
              <p>${book.author}</p>
              <button
                type="button"
                class="btn btn-danger btn-delete"
                data-id="${book.id}"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      `;
    });

    const deleteButtonElements = document.querySelectorAll('.btn-delete');
    deleteButtonElements.forEach((button) => {
      button.addEventListener('click', (event) => {
        const bookId = event.target.dataset.id;

        removeBook(bookId);
      });
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.querySelector('form');

    const inputBookId = bookForm.elements.inputBookId;
    const inputBookTitle = bookForm.elements.inputBookTitle;
    const inputBookAuthor = bookForm.elements.inputBookAuthor;

    bookForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      switch (event.submitter.textContent) {
        case 'Save':
          insertBook(book);
          break;

        case 'Update':
          updateBook(book);
          break;
      }
    });

    getBook();
  });
}

export default main;
