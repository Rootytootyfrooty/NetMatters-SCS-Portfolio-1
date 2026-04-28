<!DOCTYPE html>
<html lang="en">
    <?php require('partials/head.view.php') ?>
    <body id="top">
        <?php require('partials/svgs.php') ?>
        <?php require('partials/sidebar.view.php') ?>
        <button id="burger" class="burger" aria-label="Open Sidebar">
            <div id="mid" class="mid"></div>
        </button>
            <main id="scs" class="containerid">
            <div class="container-default">
                <h2>Netmatters</h2>
                <div class="articles">
                    <article class="scs">

                            <h3>Introduction to Scion Coalition Scheme</h3>
                            <p>The Scion Coalition Scheme is an intensive, specially tailored training program
                                run by Netmatters in order to give willing candidates the opportunity to enter
                                the industry as web developers. Under the supervision of senior web developers,
                                scions generally aim to complete training within six to nine months. The 
                                course is intensive and therefore the level of learning achieved is extensive
                                in a short space of time.</p>

                    </article>
                    <article class="scs">

                            <h3>Team Treehouse</h3>
                            <p>Treehouse is an online learning community, featuring videos covering a number of
                                topics from basic HTML to C# programming, iOS development, data analysis, and more.
                                By completing courses users can earn points, allowing them to track their progress 
                                and see how much they've covered in certain areas.</p>
                            <a href="https://teamtreehouse.com/profiles/kathrynroot2">Team Treehouse Score: 5,785</a>
                    </article>
                    <article class="scs">

                            <h3>About NetMatters</h3>
                            <p>Established in 2008
                            Norfolk's leading technology company
                            Winner of the Princess Royal Training Award
                            Winner of EDP Skills of Tomorrow Award
                            80+ staff, 2 locations across Norfolk
                            Digital Marketing, Website & Software development & IT Support
                            Broad spectrum of clients, working nationwide
                            Operate to strict company values.</p>

                    </article>
                </div>
            </div>
        </main>
        <?php require('partials/footer.view.php') ?>
    <script src="../js/portfolio.js"></script>
    <script src="../js/jqueryslick.js"></script>
</body>
</html>