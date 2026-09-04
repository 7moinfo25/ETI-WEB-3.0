const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();
const Professor = require('../models/Professor');

// POST /register
router.post('/register', async (req, res) => {
  const { nombre, email, contrasena } = req.body;

  try {
    // ✅ Cambiado de 'Profesor' a 'Professor'
    const existe = await Professor.findOne({ email });
    if (existe) {
      return res.status(400).json({ success: false, message: 'Ya existe un usuario con ese email' });
    }

    const contrasenaHasheada = await bcrypt.hash(contrasena, 10);

    const nuevoProfessor = new Professor({ nombre, email, contrasena: contrasenaHasheada });
    await nuevoProfessor.save();

    res.status(201).json({ success: true, message: 'Registro exitoso' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al registrar usuario' });
  }
});

// POST /login
router.post('/login', async (req, res) => {
  console.log('🔵 SE EJECUTÓ LA RUTA LOGIN');
  const { email, contrasena } = req.body;

  try {
    const profesor = await Professor.findOne({ email });
    if (!profesor) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    const match = await bcrypt.compare(contrasena, profesor.contrasena);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: profesor._id, nombre: profesor.nombre, email: profesor.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ success: true, message: 'Login exitoso', token });
} catch (error) {
    console.error('❌ ERROR LOGIN:', error);
    res.status(500).json({
        success: false,
        message: 'Error del servidor',
        error: error.message
    });
}
});

module.exports = router;
