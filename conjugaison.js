let present= "<p><u>Présent de l'indicatif</u></p><p>Je XXXX<b>e</b></p><p>Tu XXXX<b>es</b></p><p>Il, elle XXXX<b>e</b></p><p>Nous XXXX<b>ons</b></p><p>Vous XXXX<b>ez</b></p>Ils, elles XXXX<b>ent</b></p>" ;
let imparfait = "<p><u>Imparfait de l'indicatif</u></p><p>Je XXXX<b>ais</b></p><p>Tu XXXX<b>ais</b></p><p>Il, elle XXXX<b>ait</b></p><p>Nous XXXX<b>ions</b></p><p>Vous XXXX<b>iez</b></p>Ils, elles XXXX<b>aient</b></p>" ;
let futur = "<p><u>Futur simple de l'indicatif</u></p><p>Je XXXX<b>erai</b></p><p>Tu XXXX<b>eras</b></p><p>Il, elle XXXX<b>era</b></p><p>Nous XXXX<b>erons</b></p><p>Vous XXXX<b>erez</b></p>Ils, elles XXXX<b>eront</b></p>";
let passe = "<p><u>Passe simple de l'indicatif</u></p><p>Je XXXX<b>ai</b></p><p>Tu XXXX<b>as</b></p><p>Il, elle XXXX<b>a</b></p><p>Nous XXXX<b>âmes</b></p><p>Vous XXXX<b>âtes</b></p>Ils, elles XXXX<b>èrent</b></p>";

function conjugue(){
    let choix = document.getElementById('choix').value;
    let vrb=document.getElementById('verbe').value;
    // test surr la nature du verbe
    if (choix == 1 && vrb.substr(-2)=="er") {
        document.getElementById('affiche').innerHTML=present.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
        document.getElementById('affiche').style.background= "grey";
 
    }else if(choix == 2 && vrb.substr(-2)=="er") {
    // test surr la nature du verbe
        document.getElementById('affiche').innerHTML=imparfait.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
        document.getElementById('affiche').style.background= "green";
        
    }else if(choix == 3 && vrb.substr(-2)=="er") {
        // test surr la nature du verbe
            document.getElementById('affiche').innerHTML=futur.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
            document.getElementById('affiche').style.background= "red";
            
        }else if(choix == 4 && vrb.substr(-2)=="er") {
            // test surr la nature du verbe
                document.getElementById('affiche').innerHTML=passe.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
                document.getElementById('affiche').style.background= "orange";
                
            }
    else {
        alert("Je ne sais pas conjuguer ce verbe\n qui n'appartient pas au 1er groupe !")
        };
 
}