export function generateExcerpt(title, maxLength = 100) {
    if (!title) return ''; // Jika judul tidak ada, kembalikan string kosong
    
    // Jika panjang judul lebih pendek dari maxLength, kembalikan judul itu sendiri
    if (title.length <= maxLength) return title;
    
    // Jika tidak, potong judul dan tambahkan elipsis (...) di akhir
    return `${title.substring(0, maxLength)}...`;
  }
  