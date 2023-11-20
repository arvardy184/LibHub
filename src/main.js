// main.js
document.addEventListener("DOMContentLoaded", function () {
    // Ambil data buku dari JSON
    const booksData = fetch("buku.json")
      .then(response => response.json())
      .then(data => data.books);
  
    // Ambil elemen HTML
    const searchInput = document.getElementById("search");
    const genreSelect = document.getElementById("genre");
    const yearInput = document.getElementById("year");
    const ratingInput = document.getElementById("rating");
    const resultContainer = document.getElementById("result");
  
    // Fungsi untuk mencari buku berdasarkan filter
    function searchBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = genreSelect.value.toLowerCase();
        const selectedYear = year.value;
        const selectedRating = rating.value;
      
        // Filter data berdasarkan kriteria
        const filteredBooks = booksData.then(books => books.filter(book => {
          const matchesSearchTerm = !searchTerm || 
            book.name.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm) ||
            (book.publisher && book.publisher.toLowerCase().includes(searchTerm));
      
          const matchesGenre = selectedGenre === "" || book.genre.toLowerCase() === selectedGenre;
      
          const matchesYear = !selectedYear || (
            (selectedYear === "baru" && book.year === 2023) ||
            (selectedYear === "2015" && book.year >= 2015) ||
            (selectedYear === "2010" && book.year >= 2010) ||
            (selectedYear === "dibawah2010" && book.year < 2010)
          );
      
          const matchesRating = !selectedRating || (
            (selectedRating === "4" && book.rating >= 4.0) ||
            (selectedRating === "3" && book.rating >= 3.0) ||
            (selectedRating === "bawah3" && book.rating < 3.0)
          );
      
          return matchesSearchTerm && matchesGenre && matchesYear && matchesRating;
        }));
      
        // Tampilkan hasil pencarian
        filteredBooks.then(displayResults);
      }
  
    // Fungsi untuk menampilkan hasil pencarian
    function displayResults(books) {
      resultContainer.innerHTML = "";
  
      if (books.length === 0) {
        resultContainer.innerHTML = "Tidak ada buku yang cocok dengan kriteria pencarian.";
        return;
      }
  
      books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.innerHTML = `
          <div class="book-card">
            <h2>${book.name}</h2>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>Tahun Terbit: ${book.year}</p>
            <p>Rating: ${book.rating}</p>
          </div>
        `;
        resultContainer.appendChild(bookCard);
      });
    }
  
    // Panggil fungsi pencarian saat tombol di klik
    document.querySelector("button").addEventListener("click", searchBooks());
  });
  