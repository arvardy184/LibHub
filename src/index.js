
fetch('./buku.json')
  .then(response => response.json())
  .then(data => {
    const booksContainer = document.getElementById('bookScroll1');
    data.books.forEach(book => {
      const bookCard = `
      <div class="flex-none w-60 border-none">
      <button id="${book.name}" class="border-none  transition-transform">
      <img src="${book.imageLink}" alt="${book.name}" class="w-full h-auto object-cover rounded-lg shadow-md ">
      
      <div class="mt-2 bg-white p-4 rounded-lg shadow-lg">
        <h3 class="text-lg font-semibold justify-center items-center flex">${book.name}</h3>
        <p class="text-gray-600">Penulis: ${book.author}</p>
        <p class="text-gray-600">Tahun Terbit: ${book.year}</p>
      </div>
      </button>
     
      
    </div>
      `;
      booksContainer.innerHTML += bookCard;
    });
  })
  .catch(error => console.error('Error:', error));
function scrollLett() {
    const scrollContainer = document.getElementById('bookScroll1');
    // Scroll ke kiri sejauh 300px, atau sesuaikan dengan ukuran buku Anda
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    
  }
  
  function scrollRight() {
    const scrollContainer = document.getElementById('bookScroll1');
    // Scroll ke kanan sejauh 300px, atau sesuaikan dengan ukuran buku Anda
    window.ff="g"
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  }
  
            
  // main.js

    // Ambil data buku dari JSON
    const booksData = fetch("buku.json")
      .then(response => response.json())
      .then(data => data.books);
  
    // Ambil elemen HTML
    const searchInput = document.getElementById("search");
    const genreSelect = document.getElementById("genre");
    const year = document.getElementById("year");
    const rating = document.getElementById("rating");
    const resultContainer = document.getElementById("result");
  
    // Fungsi untuk mencari buku berdasarkan filter
    searchBook();
    function searchBook() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = genreSelect.value.toLowerCase();
        const selectedYear = year.value;
        const selectedRating = rating.value;
      
        // Filter data berdasarkan kriteria
        const filteredBooks = booksData.then(books => books.filter(book => {
          const matchesSearchTerm = !searchTerm || 
            book.name.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) 
            
           ;
      
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
      
          return matchesSearchTerm &&  matchesGenre && matchesYear && matchesRating;
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
    

  