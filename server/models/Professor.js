const { Schema, model, SchemaType } = require('mongoose');

// Se define la estructura
const profesorSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true }
});

// Se crea el modelo (que representa la colección "professors")
const Professor = model('Professor', profesorSchema);
module.exports = Professor;