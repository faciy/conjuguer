<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="conjugaison.css">
  


    <link rel="stylesheet" href="file:///C:/wamp64/www/Conjugaison/fontawesome-free-5.12.1-web/css/all.css">

    <title>Document</title>
</head>
<body>


            <h3>CONJUGAISON DES VERBES DU 1er GROUPE</h3>

            <form action="">
                <select name="" id="choix">
                    <option disabled selected value="" >Choississez un temps</option>
                    <option value="1">PRESENT DE L'INDICATIF</option>
                    <option value="2">IMPARFAIT DE L'INDICATIF</option>
                    <option value="3">FURTUR SIMPLE DE L'INDICATIF</option>
                    <option value="4">PASSE SIMPLE DE L'INDICATIF</option>
                </select>
                <span id="temps">
                    <input type="text" name="" id="verbe" placeholder="ex:jouer">
                </span>

                <span id="button">
                    <input type="button" id="btn" value="AFFICHER LA CONJUGAISON" onclick="conjugue()">
                </span>
            
               <div id="affiche"></div>
               
           
            

            </form>
           
     


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="conjugaison.js" ></script>
    <script src="js/jquery-3.4.1.min.js" ></script>
    <script src="js/popper.min.js" ></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>