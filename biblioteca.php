<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca - Escuela Técnica</title>
    <link rel="stylesheet" href="css/informatica.css">
    <link rel="stylesheet" href="css/biblioteca.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="imagenes/escudo3.png" type="image/png">
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
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
                    <div class="mobile-menu">
                        <button class="menu-button" id="mobile-menu-btn"><i class="fas fa-bars"></i></button>
                    </div>
                </div>
            </div>
        </header>
            <!-- Desktop Navigation -->
        <?php include 'header.php'; ?>
</body>
    <main>
        <div class="container">
            <section class="intro-section">
                <div class="section-header">
                    <h2>Biblioteca</h2>
                </div>
                <div class="intro-content">
                    <p>Bienvenido a la biblioteca, Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Mollitia ipsa doloribus autem quibusdam quia tempore ut animi ipsum, possimus porro libero iste voluptatibus veniam aliquid.
                    Ipsum, officiis maiores. At, autem?<br><strong>Tiene libros, sillas y mesas</strong> </p>
                </div>
            </section>
            <img src="imagenes/biblioteca/falvio.jpg" alt="biblioteca" class="imagen-central">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/M9NEYzqRyPw?si=gOSOdoNR7LACneG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <!-- Desktop Navigation -->
        <?php include 'footer.php'; ?>
    </main>
</body>
</html>