<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Horarios</title>
  <link rel="stylesheet" href="css/horarios.css">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="icon" href="imagenes/escudo3.png" type="image/png">
</head>
<header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <a href="index.php">
                        <img src="imagenes/escudo.png" alt="Escudo de la Escuela Técnica">
                        <h1>Escuela Técnica N°1</h1>
                    </a>
                </div>
                <div class="search-container">
                    <input type="text" placeholder="Buscar..." class="search-input">
                    <button class="search-button"><i class="fas fa-search"></i></button>
                </div>
            </div>
        </div>
    </header>
<body>
  <?php include 'header.php'; ?>
  <div class="container">
    <h1>Horarios</h1>
    <div class="controls">
      <div class="year-selector">
        <label for="year-select">Seleccionar Año:</label>
        <select id="year-select">
          <option value="1">1er Año</option>
          <option value="2">2do Año</option>
          <option value="3">3er Año</option>
          <option value="4">4to Año</option>
          <option value="5">5to Año</option>
          <option value="6">6to Año</option>
          <option value="7">7mo Año</option>
        </select>
      </div>
      
      <div class="specialty-selector" id="specialty-container">
        <label for="specialty-select">Especialidad:</label>
        <select id="specialty-select">
          <option value="informatica">Informática</option>
          <option value="electromecanica">Electromecánica</option>
        </select>
      </div>
    </div>
    
    <div class="schedule-container">
      <table id="schedule-table" class="schedule-table">
        <thead>
          <tr>
            <th>Horario</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody id="schedule-body">
          <!-- El contenido de la tabla se generará dinámicamente con JavaScript -->
        </tbody>
      </table>
    </div>
  </div>

  <script src="js/horarios.js"></script>
</body>
<?php include 'footer.php'; ?>
</html>
