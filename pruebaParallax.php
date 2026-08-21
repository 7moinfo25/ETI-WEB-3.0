<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section class="welcome-section">
        <div class="parallax-image"></div>

        <div class="contenido">
            <h1>Bienvenidos</h1>
            <p>Esta es nuestra escuela.</p>
        </div>
    </section>
    <div>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p> 
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

    <style>
        .welcome-section {
    position: relative;
    height: 500px;
    overflow: hidden;
}

.parallax-image {
    position: absolute;
    inset: -10% 0;

    background-image: url("../ETI-WEB-3.0/imagenes/escuelafoto.jpeg");
    background-size: cover;
    background-position: center;

    z-index: -2;
}

.contenido {
    position: relative;
    z-index: 1;
    color: white;
}
    </style>

    <script>
        window.addEventListener('scroll', function() {
            const parallaxImage = document.querySelector('.parallax-image');
            const scrollPosition = window.scrollY;
            parallaxImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });

</script>
</body>
</html>