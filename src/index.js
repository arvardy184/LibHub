
const searchInput = document.getElementById("search");
const genreSelect = document.getElementById("genre");
const year = document.getElementById("year");
const rating = document.getElementById("rating");
const resultContainer = document.getElementById("result");
    function populateSelect() {
      
    
      booksData.then(books => {
        // Mengumpulkan semua genre dari buku
        const allGenres = books.reduce((genres, book) => {
          if (book.genre && !genres.includes(book.genre)) {
            genres.push(book.genre);
          }
          return genres;
        }, []);
    
        // Menambahkan opsi default (semua genre)
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '-- Semua Genre --';
        genreSelect.appendChild(defaultOption);
    
        // Menambahkan opsi untuk setiap genre
        allGenres.forEach(genre => {
          const option = document.createElement('option');
          option.value = genre.toLowerCase();
          option.textContent = genre;
          genreSelect.appendChild(option);
        });
      });
    }
    function searchBook() {
        resultContainer.classList.remove('hidden')
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
  
    
    function displayResults(books) {
      resultContainer.innerHTML = "";
  
      if (books.length === 0) {
        resultContainer.innerHTML = `<p class="text-white font-semibold">Tidak ada hasil yang cocok</p>`;
        return;
      }
  
      books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.innerHTML = `
           <div class="flex flex-row max-w-xl border-none">
      <button id="all" onclick="menuBuku('${book.name}')" class="border-none transition-all scales relative gap-2 flex">
        <img src="${book.imageLink}" alt="${book.name}" class="h-auto object-cover rounded-lg shadow-md w-60 mb-2">
      <div class="flex flex-col">
        <button class="bg-black">reservasi</button>
        <div class="mt-2 bg-white p-4 rounded-lg shadow-lg w-96 mb-2 h-fit  ">
          <h3 class="text-lg font-semibold justify-center items-center flex">${book.name}</h3>
          <p class="text-gray-600">Penulis: ${book.author}</p>
          <p class="text-gray-600">Tahun Terbit: ${book.year}</p>
        </div>
      </div>
      
      </button>
     
      
    </div>
        `;
        resultContainer.appendChild(bookCard);
      });
    }
function  munculcari(){
  resultContainer.classList.add("hidden")
  populateSelect()
  pencarian.classList.remove("hidden")
}
const pencarian=document.getElementById("pencarian");
function hilangkan(){
  genreSelect.innerHTML="";
    searchInput.value=""
    year.value=""
    rating.value=""
    pencarian.classList.add("hidden")
}
pencarian.addEventListener("click",function(event){
  if (!event.target.closest('#filter')&&!event.target.closest('#cari')&&!event.target.closest('#result')) {
    hilangkan()
  }
  
})
function scrolling() {
  const scrollContainer = document.getElementById('bookScroll1');
  // Scroll ke kiri sejauh 300px, atau sesuaikan dengan ukuran buku Anda
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  
}

function scrollRight() {
  const scrollContainer = document.getElementById('bookScroll1');
  // Scroll ke kanan sejauh 300px, atau sesuaikan dengan ukuran buku Anda
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}
function scrolling2() {
  const scrollContainer = document.getElementById('bookScroll2');
  // Scroll ke kiri sejauh 300px, atau sesuaikan dengan ukuran buku Anda
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function scrollRight2() {
  const scrollContainer = document.getElementById('bookScroll2');
  // Scroll ke kanan sejauh 300px, atau sesuaikan dengan ukuran buku Anda
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}
const menu=document.getElementById("menu")
const menuContainer=document.getElementById("chatcontent")
const booksData = fetch("buku.json")

    .then(response => response.json())
    .then(data => data.books);
function p(){
  menu.classList.add("hidden")
}
function menuBuku(param){
  menu.classList.remove('hidden')
  
  const filteredBooks = booksData.then(books => books.filter(book => {
    const matchesSearchTerm = !param || 
      book.name.toLowerCase().includes(param.toLowerCase()) 
     ;
    return matchesSearchTerm;
    
  }));
  filteredBooks.then(displaymenus);
}

function displaymenus(books){
menuContainer.innerHTML=""
menuContainer.scrollTop=0;

  books.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.innerHTML = `
    <div class="w-full flex flex-col border-none group overflow-auto">
    <div id="${book.name}"  class="border-none max-w-xs place-self-center">
    <img src="${book.imageLink}" alt="${book.name}" class="w-full h-auto object-cover rounded-lg shadow-md ">
    </div>
    <div class="mt-2 bg-black p-4 rounded-lg shadow-lg ">
    <h3 class="font-semibold text-center justify-center items-center flex text-xl">${book.name}</h3>
    <p class="text-white text-lg">Penulis: ${book.author}</p>
    <p class="text-white text-lg">Tahun Terbit: ${book.year}</p>
    <p class="text-white text-lg">Penerbit: ${book.publisher}</p>
    <p class="text-white text-lg">Genre: ${book.genre}</p>
    <p class="text-white text-lg text-justify">Rating: ${book.rating}</p>
    <p class="text-white text-lg">Jumlah halaman: ${book.halaman}</p>
    <p class="text-white text-lg">Bahasa: ${book.bahasa}</p>
    <p class="text-white text-lg">ISBN: ${book.isbn}</p>
    <p class="text-white text-lg">Stok: ${book.stok}</p>
    <p class="text-white text-lg">Deskripsi:</p>
    <p class="text-white text-lg text-justify">${book.description}</p>
    <h3 class="font-semibold text-center justify-center items-center flex text-xl">Ingin meminjam buku? <a href="register.html" class="text-blue-400 hover:underline">Daftar Sekarang</a> </h3>
  </div>
    
  </div>
    `;
    menuContainer.append(bookCard);
  });
}
function display(books){
  const booksContainer = document.getElementById('bookScroll1');
  books.forEach(book => {
    const bookCard = `
    <div class="flex-none w-60 border-none group ">
    <button id="${book.name}" onclick="menuBuku('${book.name}')" class="border-none transition-all scales">
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
}
menubuku1()
menubuku2()
function menubuku1(){
  booksData.then(books => {
    // Lakukan shuffle pada array buku
    shuffleArray(books);

    // Ambil 5 buku pertama setelah diacak
    const randomBooks = books.slice(0, 8);

    // Tampilkan hasil
    display(randomBooks);
  });
}
function menubuku2(){
  var date=new Date();
  const filteredBooks = booksData.then(books => books.filter(book => {
    const matchesSearchTerm = 
      (book.year==2023) 
     ;
    return matchesSearchTerm;
    
  }));
  filteredBooks.then(function(books){
    const booksContainer = document.getElementById('bookScroll2');
    books.forEach(book => {
      const bookCard = `
      <div class="flex-none w-60 border-none group">
      <button id="${book.name}" onclick="menuBuku('${book.name}')" class="border-none transition-all scales">
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
  });
}
  

searchBook()
  
            
  // main.js

    // Ambil data buku dari JSON

  
    // Ambil elemen HTML
    
  
    // Fungsi untuk mencari buku berdasarkan filter
    
    
    // Panggil fungsi pencarian saat tombol di klik

  