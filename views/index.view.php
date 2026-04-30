<!DOCTYPE html>
<html lang="en">
    
    <?php require('partials/head.view.php') ?>
    <?php 
        $firstName = $_POST['first-name'] ?? '';
        $number = $_POST['number'] ?? '';
        $email = $_POST['email'] ?? '';
        $subject = $_POST['subject'] ?? '';
        $message  = $_POST['message'] ?? ''; 
    ?>
    <body id="top">

    <?php require('views/partials/svgs.php') ?>
    <?php require('views/partials/sidebar.view.php') ?>
    <header id="backsplash" class="backsplash" title="A photograph of a beach at night">
        <button id="burger" class="burger" aria-label="Open Sidebar">
            <div id="mid" class="mid"></div>
        </button>
        <div id="introtext">
            <h1 class="anim-name">My Name is Kathryn Root</h1>
            <p>I'm a Web Developer</p>
        </div>
        <div id="scroll" class="scroll">
            <p>Scroll Down &#8595;</p>
        </div>
    </header>

    <main>
        <section id="portfolio" class="containerid">
            <div class="container-default">
                <h2>Portfolio</h2>
                <div class="porpro">
                    <a href="https://netmatters.kathryn-root.netmatters-scs.co.uk" target="_blank" class="project" rel="noopener noreferrer">
                        <div class="project1 proj">
                            <span class="css cl">CSS/Sass</span><span class="html cl">HTML</span>
                            <img src="img/project-1.png" alt="A picture of Project 1" />
                            <div class="project-text">
                                <h3 class="hover-split">
                                    <span>Netmatters Homepage</span>
                                    <span>Netmatters Homepage</span>
                                    <span>This project was to recreate the old Netmatters homepage. 
                                    I used HTML, sass-compiled CSS, and JavaScript.</span>
                                </h3>
                                <p class="view-project">View Project &#8594;</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/Rootytootyfrooty/NetMatters-SCS-Portfolio-1" target="_blank" class="project" rel="noopener noreferrer">
                        <div class="project2 proj">
                            <span class="css cl">CSS/Sass</span><span class="html cl">HTML</span>
                            <span class="js cl">JavaScript</span>
                            <img src="img/project-2.png" alt="A picture of Project 2" />
                            <div class="project-text">
                                <h3 class="hover-split">
                                    <span>Portfolio Project</span>
                                    <span>Portfolio Project</span>
                                    <span>This project is this portfolio itself. I've used HTML, CSS, and JavaScript.</span>
                                </h3>
                                <p class="view-project">View Project &#8594;</p>
                            </div>
                        </div>
                    </a>
                    <a href="#" target="_blank" class="project" rel="noopener noreferrer">
                        <div class="project3 proj">
                            <span class="pyt cl">Python</span>
                            <img src="img/project-3.png" alt="A picture of Project 3" />
                            <div class="project-text">
                                <h3 class="hover-split">
                                    <span>Improv Game</span>
                                    <span>Improv Game</span>
                                    <span>A random generator for an improv game using python.</span>
                                </h3>
                                <p class="view-project">View Project &#8594;</p>
                            </div>
                        </div>
                    </a>
                    <a href="#" target="_blank" class="project" rel="noopener noreferrer">
                        <div class="project4 proj">
                            <span class="pyt cl">Python</span>
                            <img src="img/project-4.png" alt="A picture of Project 4" />
                            <div class="project-text">
                                <h3 class="hover-split">
                                    <span>Random Story Ideas</span>
                                    <span>Random Story Ideas</span>
                                    <span>A random generator for story ideas using python</span>
                                </h3>
                                <p class="view-project">View Project &#8594;</p>
                            </div>
                        </div>
                    </a>
                    <a href="#" target="_blank" class="project "rel="noopener noreferrer">
                        <div class="project5 proj">
                            <span class="css cl">CSS/Sass</span><span class="html cl">HTML</span>
                            <img src="img/project-5.png" alt="A picture of Project 5" />
                            <div class="project-text">
                                <h3 class="hover-split">
                                    <span>Portfolio Project</span>
                                    <span>Portfolio Project</span>
                                    <span>This project is this portfolio itself. I've used HTML, CSS, and JavaScript.</span>
                                </h3>
                                <p class="view-project">View Project &#8594;</p>
                            </div>
                        </div>
                    </a>
                    <a href="#" target="_blank" class="project" rel="noopener noreferrer">
                        <div class="project6 proj">
                            <img src="img/project-6.png" alt="A picture of Project 6" />
                            <div class="project-text">
                                <h3 class="hover-split">
                                    <span>Personal Website</span>
                                    <span>Personal Website</span>
                                    <span>I didn't actually make this, I just needed another placeholder.</span>
                                </h3>
                                <p class="view-project">View Project &#8594;</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        
        <section id="contact" class="containerid">
            <div class="container-default">
                <div class="info">
                    <h2>Get in Touch</h2>
                    <p>Feel free to send me a message using the following contact form</p>
                    <address>kathryn.root@netmatters-scs.com</address>
                </div>
                <div class="formcont">
                    <form action="/#form" method="POST" id="form">
                        <div class="input-control" id="first-name">
                            <label for="ffname"><strong>*</strong> Name</label>
                            <input id="ffname" name="first-name" class="default-input <?= isset($errors['firstName']) ? 'error-php ' : '' ?>char-lim" 
                            value="<?= htmlspecialchars($firstName, ENT_QUOTES) ?>"></input>
                            <?php if (isset($errors['firstName'])) : ?>
                                <p class="error-msg"><?= $errors['firstName'] ?></p>
                            <?php endif; ?>
                        </div>

                        <div class="input-control" id="number">
                            <label for="flnumber"><strong>*</strong> Number</label>
                            <input id="flnumber" name="number" class="default-input <?= isset($errors['number']) ? 'error-php ' : '' ?>char-lim" 
                            value="<?= htmlspecialchars($number, ENT_QUOTES) ?>"></input>
                            <?php if (isset($errors['number'])) : ?>
                                <p class="error-msg"><?= $errors['number'] ?></p>
                            <?php endif; ?>
                        </div>

                        <div class="input-control" id="email">
                            <label for="femail"><strong>*</strong> Email</label>
                            <input id="femail" name="email" class="default-input <?= isset($errors['email']) ? 'error-php ' : '' ?>char-lim" 
                            value="<?= htmlspecialchars($email, ENT_QUOTES) ?>"></input>
                            <?php if (isset($errors['email'])) : ?>
                                <p class="error-msg"><?= $errors['email'] ?></p>
                            <?php endif; ?>
                        </div>

                        <div class="input-control" id="subject">
                            <label for="fsubject"><strong>*</strong> Subject</label>
                            <input id="fsubject" name="subject" class="default-input <?= isset($errors['subject']) ? 'error-php ' : '' ?>char-lim" 
                            value="<?= htmlspecialchars($subject, ENT_QUOTES) ?>"></input>
                            <?php if (isset($errors['subject'])) : ?>
                                <p class="error-msg"><?= $errors['subject'] ?></p>
                            <?php endif; ?>
                        </div>

                        <div class="input-control" id="message">
                            <label for="fmessage"><strong>*</strong> Message</label>
                            <textarea id="fmessage" name="message" class="default-input <?= isset($errors['message']) ? 'error-php ' : '' ?>" 
                            data-no-clear ><?= htmlspecialchars($message, ENT_QUOTES) ?></textarea>
                            <?php if (isset($errors['number'])) : ?>
                                <p class="error-msg"><?= $errors['message'] ?></p>
                            <?php endif; ?>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <?php if (isset($_SESSION['MSG'])) : ?>
                    <div id="success-container">
                        <div id="success-msg">
                            <h3>Thank you</h3>
                            <p id="p">I'll be in touch shortly</p>
                        </div>
                    </div>
                    <script>
                        window.location.href = "/#contact";
                        document.body.style.overflow = "hidden";
                        setTimeout(function() {
                            window.location.href = "/";
                        }, 1500);
                    </script>
                    <?php 
                        unset($_SESSION['MSG']);
                    endif ?>
                    </form>
                </div>
            </div>
        </section>
    </main>
    <?php require('views/partials/footer.view.php') ?>
    <script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"></script>
        <script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    
    <script src="js/scrollIn.js"></script>
    <script src="js/name-anim.js"></script>
    <script src="js/formvalidation.js"></script>
    <script src="js/portfolio.js"></script>
    <script src="js/jqueryslick.js"></script>
</body>
</html>