import React, { useState } from "react";
import "./App.css"; // Optional: for styling

function App() {
  // Initial book list
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ]);

  const [searchTerm, setSearchTerm] = useState(""); // for search
  const [newTitle, setNewTitle] = useState("");     // for adding books
  const [newAuthor, setNewAuthor] = useState("");

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Add new book
  const handleAddBook = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;

    const newBook = {
      id: Date.now(), // unique id
      title: newTitle,
      author: newAuthor,
    };

    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  // Remove book
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Filtered books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Library Management</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />

      {/* Add Book Form */}
      <form onSubmit={handleAddBook} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>
          Add Book
        </button>
      </form>

      {/* Book List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredBooks.map((book) => (
          <li
            key={book.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "500px",
            }}
          >
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <button
              onClick={() => handleRemoveBook(book.id)}
              style={{ padding: "5px 10px", background: "red", color: "white", border: "none", borderRadius: "3px", cursor: "pointer" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {filteredBooks.length === 0 && <p>No books found.</p>}
    </div>
  );
}

export default App;
