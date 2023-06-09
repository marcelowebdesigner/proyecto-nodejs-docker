const libraryController = {
  createLibrary: async (req, res) => {
    try {
      const { name, address } = req.body;
  
      // Validar los datos
  
      // Crear una nueva instancia del modelo Library
      const newLibrary = new Library({
        name,
        address,
      });
  
      // Guardar la nueva librería en la base de datos
      const savedLibrary = await newLibrary.save();
  
      // Enviar la respuesta al cliente
      res.status(200).json({
        message: 'Library created successfully',
        library: savedLibrary,
      });
    } catch (error) {
      // Manejar cualquier error que ocurra durante la creación de la librería
      res.status(500).json({
        message: 'An error occurred',
        error: error.message,
      });
    }
  },

  getAllLibraries: async (req, res) => {
    try {
      // Obtener todas las librerías desde la base de datos
      const libraries = await Library.find();
  
      // Enviar la respuesta al cliente
      res.status(200).json({
        libraries,
      });
    } catch (error) {
      // Manejar cualquier error que ocurra durante la obtención de las librerías
      res.status(500).json({
        message: 'An error occurred',
        error: error.message,
      });
    }
  },

  getLibrary: async (req, res) => {
    try {
      const { libraryId } = req.params;
  
      // Obtener la librería con el ID proporcionado desde la base de datos
      const library = await Library.findById(libraryId);
  
      // Verificar si la librería existe
      if (!library) {
        return res.status(404).json({
          message: 'Library not found',
        });
      }
  
      // Enviar la respuesta al cliente
      res.status(200).json({
        library,
      });
    } catch (error) {
      // Manejar cualquier error que ocurra durante la obtención de la librería
      res.status(500).json({
        message: 'An error occurred',
        error: error.message,
      });
    }
  },

  updateLibrary: async (req, res) => {
    try {
      const { libraryId } = req.params;
      const { name, address } = req.body;
  
      // Obtener la librería con el ID proporcionado desde la base de datos
      let library = await Library.findById(libraryId);
  
      // Verificar si la librería existe
      if (!library) {
        return res.status(404).json({
          message: 'Library not found',
        });
      }
  
      // Actualizar los datos de la librería
      library.name = name;
      library.address = address;
  
      // Guardar los cambios en la base de datos
      library = await library.save();
  
      // Enviar la respuesta al cliente
      res.status(200).json({
        message: 'Library updated successfully',
        library,
      });
    } catch (error) {
      // Manejar cualquier error que ocurra durante la actualización de la librería
      res.status(500).json({
        message: 'An error occurred',
        error: error.message,
      });
    }
  },

  deleteLibrary: async (req, res) => {
    try {
      const { libraryId } = req.params;
  
      // Eliminar la librería de la base de datos
      await Library.findByIdAndDelete(libraryId);
  
      // Enviar la respuesta al cliente
      res.status(200).json({
        message: 'Library deleted successfully',
      });
    } catch (error) {
      // Manejar cualquier error que ocurra durante la eliminación de la librería
      res.status(500).json({
        message: 'An error occurred',
        error: error.message,
      });
    }
  },

  addBookToLibrary: async (req, res) => {
    try {
      const { libraryId } = req.params;
      const { bookId } = req.body;
  
      // Obtener la librería con el ID proporcionado desde la base de datos
      let library = await Library.findById(libraryId);
  
      // Verificar si la librería existe
      if (!library) {
        return res.status(404).json({
          message: 'Library not found',
        });
      }
  
      // Obtener el libro con el ID proporcionado desde la base de datos
      const book = await Book.findById(bookId);
  
      // Verificar si el libro existe
      if (!book) {
        return res.status(404).json({
          message: 'Book not found',
        });
      }
  
      // Agregar el libro a la librería
      library.books.push(bookId);
  
      // Guardar los cambios en la base de datos
      library = await library.save();
  
      // Enviar la respuesta al cliente
      res.status(200).json({
        message: 'Book added to library successfully',
        library,
      });
    } catch (error) {
      // Manejar cualquier error que ocurra durante la adición del libro a la librería
      res.status(500).json({
        message: 'An error occurred',
        error: error.message,
      });
    }
  },
};

module.exports = libraryController;
