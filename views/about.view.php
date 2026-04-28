<!DOCTYPE html>
<html lang="en">
    <?php require('partials/head.view.php') ?>
    <body id="top">
        <?php require('partials/svgs.php') ?>
        <?php require('partials/sidebar.view.php') ?>
        <button id="burger" class="burger" aria-label="Open Sidebar">
            <div id="mid" class="mid"></div>
        </button>
        <main id="about" class="containerid">
            <div class="container-default">
                <h2>About Me</h2>
                <p>My name is Kathryn Root. I live in Suffolk and I'm learning how to be a web developer. </p>
                <p>I have experience in HTML, SCSS, JavaScript, and PHP</p>
                <p>I've been self-employed as an artist and artisan since 2018.</p>
            </div>
</main>
        <?php require('partials/footer.view.php') ?>
    <script src="../js/portfolio.js"></script>
    <script src="../js/jqueryslick.js"></script>
</body>
</html>