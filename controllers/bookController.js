const Book = require('../models/Book');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.findAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los libros' });
    }
  },

  createBook: async (req, res) => {
    try {
      // Obtener los datos del libro desde el cuerpo de la solicitud
      const { title, author, libraryId } = req.body;

      // Crear el libro en la base de datos
      const book = await Book.create({ title, author, libraryId });

      res.json(book);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el libro' });
    }
  },

  getBookById: async (req, res) => {
    try {
      const bookId = req.params.id;

      const book = await Book.findByPk(bookId);
      if (!book) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      res.json(book);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el libro' });
    }
  },

  updateBook: async (req, res) => {
    try {
      const bookId = req.params.id;
      const { title, author, libraryId } = req.body;

      const book = await Book.findByPk(bookId);
      if (!book) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      // Actualizar los campos del libro
      book.title = title;
      book.author = author;
      book.libraryId = libraryId;

      await book.save();

      res.json(book);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el libro' });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const bookId = req.params.id;

      const book = await Book.findByPk(bookId);
      if (!book) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }

      // Marcar el libro como borrado
      book.deleted
