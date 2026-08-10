<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/404.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <link rel="icon" href="imagenes/escudo.png" type="image/png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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
<?php include 'header.php'; ?>
<body>

    <div class="full-div-body">
        <div class="div-404-title">
            <h1><label>Página en progreso. Visita más tarde!</label></h1>
        </div>
        <div class="div-404-descripcion">
            <h3><label><a href="/index.php">Click aquí para volver al inicio.</a></label></h3>
        </div>
    </div>

</body>
<?php include 'footer.php'; ?>
</html>