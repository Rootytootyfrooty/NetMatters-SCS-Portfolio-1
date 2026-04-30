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
            <div class="container-default about-page">
                <h2>About Me</h2>
                <p>
                    My name is Kathryn Root. I live in Suffolk and I'm a junior full-stack developer in training, with a focus
                    on building responsive and user-friendly web applications.
                    I primarily work with HTML, CSS/SCSS, JavaScript, PHP, and SQL, and I'm expanding my skillset with Laravel 
                    and Wordpress.
                </p>
                <p>
                    With a background in art, I have a decent sense of design alongside technical development skills. I'm actively 
                    seeking junior developer opportunities where I can continue to learn and contribute to real-world projects.
                </p>
            </div>
</main>
        <?php require('partials/footer.view.php') ?>
    <script src="../js/portfolio.js"></script>
    <script src="../js/jqueryslick.js"></script>
</body>
</html>