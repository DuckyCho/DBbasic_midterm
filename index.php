<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <link rel="shortcut icon" href="./image/favi/favi.ico">
    <?php
        define('__PATHMD__','./Mobile_Detect.php');
        
        require_once(__PATHMD__);
        $detect = new Mobile_Detect;
        $deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');
        $scriptVersion = $detect->getScriptVersion();
        if( strcmp($deviceType,'computer') == 0){
            echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/style.css\">";
        }
        else{
            echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"./css/mobilestyle.css\">";
        }
                        
    ?>


    <title>VAN DE OOST</title>
</head>
<body>
   
    
    <div id="wrapper">
        
        <header>
           <div id="logo"></div>
            <div id="introduction">
                <?php
                    if( strcmp($deviceType,'computer') == 0){
                        echo "<p>\" the sun rises in the east \"</p>";
                    }
                ?>
            </div>
        </header>
        <nav status="close">
            <ul>
                <li>news</li>
                <li>releases</li>
                <li>artists</li>
                <li>about us</li>
                <li>contact</li>
            </ul>
            <?php
                if( strcmp($deviceType,'computer') == 0){
                    echo "<button id=\"nav_button\"></button>";
                }
            ?>
        </nav>
        <div id="main">
            <section></section>
        </div>
    </div>
    
    <footer>
        <?php
        if( strcmp($deviceType,'computer') == 0){
            echo "COPYRIGHT(C) 2014 VAN DE OOST RECORDS ALL RIGHTS RESERVED CONTACT<br> info@vandeoost.com";
        }
       
        else{
            echo "<div id=\"footerComment\">CONTACT : info@vandeoost.com<br><br>COPYRIGHT(C) 2014 VAN DE OOST RECORDS ALL RIGHTS RESERVED</div>";
        }
        ?>
    </footer>
    
</body>
    <?php
    if( strcmp($deviceType,'computer') == 0){
        echo "<script type=\"text/javascript\" src=\"./js/animation.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/aboutUs.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/artists.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/news.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/article.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/releases.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/contact.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/index.js\"></script>";
    }
    else{
        echo "<script type=\"text/javascript\" src=\"./js/mobile/mAboutUs.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/mobile/mContact.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/mobile/mNews.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/mobile/mReleases.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/mobile/mArtists.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/mobile/mArticle.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/mobile/mSwipe.js\"></script>";
        echo "<script type=\"text/javascript\" src=\"./js/mobile/mIndex.js\"></script>";
            
    }
    
    
    ?>

</html>