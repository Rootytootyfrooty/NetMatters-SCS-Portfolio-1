<!DOCTYPE html>
<html lang="en">
    <?php require('partials/head.view.php') ?>
    <body id="top">
        <?php require('partials/svgs.php') ?>
        <?php require('partials/sidebar.view.php') ?>
        <button id="burger" class="burger" aria-label="Open Sidebar">
            <div id="mid" class="mid"></div>
        </button>
<main id="examples" class="containerid">
            <div class="container-default">
                <h2>Coding Examples</h2>
                <div class="example-carousel">
                    <div class="example-1">
                        <div class="example-wrapper">
                        <h3>Using SCSS to control colours</h3>
                        <p>First I write the basic structure of the elements in HTML that I want to style:</p>
                        <div class="code-cont" id="code-cont-1">
                            
                                <pre><code id="cb-1" class="language-html">&lt;div class="btn-big"&gt;
        &lt;span class="btn-logo btn-logo--dev-grey"&gt;
            &lt;svg class="icon"&gt; &lt;use href="svg/icon-laptop"&gt; &lt;/use&gt; &lt;/svg&gt;
        &lt;/span&gt;
        &lt;h2&gt;Consultancy &amp; development&lt;/h2&gt;
        &lt;span class="btn-sm btn-sm--dev-yellow"&gt;Read More&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="btn-big"&gt;
        &lt;span class="btn-logo btn-logo--support-blue"&gt;
            &lt;svg class="icon"&gt; &lt;use href="svg/icon-laptop"&gt; &lt;/use&gt; &lt;/svg&gt;
        &lt;/span&gt;
        &lt;h2&gt;IT Support&lt;/h2&gt;
        &lt;span class="btn-sm btn-sm--support-blue"&gt;Read More&lt;/span&gt;
    &lt;/div&gt;</code></pre><div id="definitions1" class="definitions">Hover over the code to learn more &#8593;</div>
                        </div>
                    
                        <p>I then make a sass map for the respective button colours:</p>
                        <div class="code-cont" id="code-cont-2">
                            
                            <pre><code id="cb-2" class="language-scss">$btn-colors: (
    dev-yellow:        #f7b322,
    dev-grey:          #67809f,
    support-blue:      #4183d7,
    market-green:      #2ecc71,
    telecoms-red:      #d64541,
    design-purple:     #926fb1,
    security-pink:     #f62459,
    training-orange:   #ce4125
    );</code></pre>
                                <span id="colours"></span>
                                <div id="definitions2" class="definitions">Hover over the code to learn more &#8593;</div>
                            </div>
                            <p>Finally I make an @each rule, targeting the variable pairs in the colour map to assign set colours to each button and style them and their hover effects with a short amount of code:</p>
                            <div class="code-cont" id="code-cont-3">
                                
                                <pre><code id="cb-3" class="language-scss">.btn-logo {
    @each $name, $color in $btn-colors {
    &amp;--#{$name} {
        display: inline-grid;
        min-height: 65px;
        min-width: 65px;
        border-radius: 50%;
        background-color: $color;
        fill: $bg-white;
        border-color: transparent;
        align-self: center;
        &amp; svg {  
        justify-self: center;
        align-self: center;
        height: 32px;
        width: 32px;
        }
        }
    }
    }</code></pre><div id="definitions3" class="definitions">Hover over the code to learn more &#8593;</div></div>
                </div>
                    </div>
                    <div id="example-2" class="example-1">
                        <div class="example-wrapper">
                        <h3>JavaScript Cookie Logic</h3>
                        <p>First I declare a function that accepts one parameter- a name. The function will check if any cookies exist with the 
                        value of the name I pass the function. I then declare a variable called "accepted" and call the function 
                        getCookie() and I pass it the name "cookie_accepted". An if statement then checks if cookie_accepted= true in the 
                        list of document cookies. If it's not, then the cookie popup appears on the page and adds a click event to the 'accept' 
                        button. If the user clicks 'accept' then the current date and time is noted, and the expiration on the cookie 
                        is set 7 days (or 604,800 milliseconds) from that point. If the cookie has been accepted, the user will not see the 
                        cookie popup until it expires or is deleted manually.
                        </p>
                        <div class="code-cont" id="code-cont-ex-2-js">
                            <pre><code id="code-block-js" class="language-javascript">const accept = document.getElementById("accept-cookie");
    const cookieAll = document.getElementById("cookie-cont");


    function getCookie(name) {
        return document.cookie
            .split("; ")
            .map(c => c.trim())
            .find(row => row.startsWith(name + "="))
            ?.split("=")[1];
    }

    const accepted = getCookie("cookie_accepted");

    if (accepted !== "true") {
        cookieAll.style.display ="block";
        accept.addEventListener("click", () => {
            let date = new Date(Date.now() + 604800e3);
            document.cookie = `cookie_accepted=true; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
            cookieAll.style.display ="none";
        });
    } else {
        cookieAll.style.display = "none";
    }</code></pre>
    <!-- <div id="definitions4" class="definitions">Hover over the code to learn more &#8593;</div> -->
    </div>
                </div>
                    </div>
                    <div id="example-3" class="example-1">
                        <div class="example-wrapper">
                        <h3>PHP Forloop &amp; database query</h3>
                        <p>Below I've use a PHP for loop and a database query to populate the content and styling of a news section on a website.</p>
                        <div class="code-cont" id="code-cont-ex-3-js">
<pre><code id="code-block-php" class="language-php">
&lt;?php
    require 'Database.php';
    $db = new Database();

    foreach ($db->queryAll('SELECT  
                articles.title, 
                articles.article_id,
                articles.date,
                articles.png,
                articles.excerpt,
                
                authors.author_id AS author_id,
                authors.name AS author_name,
                authors.author_png,
                authors.png_alt,
                styling.tooltip,
                styling.button,
                styling.title_colour FROM articles
                JOIN authors ON authors.author_id = articles.author_id
                JOIN styling ON styling.article_id = articles.article_id') as $article) :
?&gt;
&lt;a href="#" class="news-link"&gt;
&lt;div class="article news article&lt;?= $article['article_id'] ?&gt;"&gt;
    &lt;div class="image"&gt;
        &lt;?=  $article['tooltip']; ?&gt;
        &lt;span class="news-img"&gt;
            &lt;img src="&lt;?=  $article['png']; ?&gt;" class="news-image" alt="Increase Exit Value With 
            Bespoke Software- Our Key Strategies"&gt;
        &lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="news-txt"&gt;
        &lt;h3 class="&lt;?=  $article['title_colour']; ?&gt;"&gt;
        &lt;span&gt;&lt;?= $article['title']; ?&gt;&lt;/span&gt;&lt;/h3&gt;
        &lt;p&gt;&lt;?=  $article['excerpt']; ?&gt;&lt;/p&gt;
        &lt;div class="&lt;?=  $article['button']; ?&gt;"&gt;&lt;p&gt;Read More&lt;/p&gt;&lt;/div&gt;
    


        &lt;div class="poster"&gt;
            &lt;div class="post-pic"&gt;
                &lt;img class="news-logo" src="&lt;?= $article['author_png']; ?&gt;" 
                alt="The Netmatters Logo"&gt;
            &lt;/div&gt;
            &lt;div class="post-deet"&gt;
                &lt;p class="nm"&gt;
                    &lt;strong&gt;Posted by &lt;?= $article['author_name']; ?&gt;&lt;/strong&gt;
                &lt;/p&gt;
                &lt;p class="date"&gt;
                    &lt;?=  $article['date']; ?&gt;
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/a&gt;
&lt;?php endforeach ?&gt;
                        </code></pre>
                    </div>
                </div>
            </div>
        </div>
</div>

    </main>

    <?php require('partials/footer.view.php') ?>
    <script src="js/prism.js"></script>
    <script src="js/prism-start.js"></script>
    <script src="js/portfolio.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="js/jqueryslick.js"></script>
</body>
</html>