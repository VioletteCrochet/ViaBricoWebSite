function preload(){
    // JSON dans variable
    var json = $.getJSON("https://viabricosrm.herokuapp.com/api/fournisseur", function(json) {
        console.log(json);
        var iter = 0;
        // Pour chaque élément du JSON
        json.forEach(element => {
            // Création du texte
            var texte1 = document.createTextNode(json[iter].nom);
            var texte2 = document.createTextNode("Description : "+json[iter].description);
            var texte3 = document.createTextNode("Adresse : "+json[iter].adresse);
            var texte4 = document.createTextNode("Téléphone : "+json[iter].telephone);
            var texte5 = document.createTextNode("Modifier");
            var texte6 = document.createTextNode("Supprimer");

            // Création de la structure
            var balise0 = document.createElement("tr");
            balise0.className = "table table-hover";
            var balise1 = document.createElement("th");
            balise1.scope = "row";
            var balise2 = document.createElement("td");
            var balise3 = document.createElement("td");
            var balise4 = document.createElement("td");
            var balise5 = document.createElement("td");
            var balise6 = document.createElement("td");
            var balise7 = document.createElement("button");
            balise7.type = button;
            balise7.className = "btn btn-warning";
            var balise8 = document.createElement("button");
            balise7.type = button;
            balise8.className = "btn btn-warning";

            // Affilitation des variables texte aux balises

            balise2.appendChild(texte1);
            balise3.appendChild(texte2);
            balise4.appendChild(texte3);
            balise5.appendChild(texte4);
            balise7.appendChild(texte5);
            balise8.appendChild(texte6);

            // Les structures apprennent les balises de texte
            balise0.appendChild(balise1);
            balise0.appendChild(balise2);
            balise0.appendChild(balise3);
            balise0.appendChild(balise4);
            balise0.appendChild(balise5);
            balise0.appendChild(balise6);
            balise6.appendChild(balise7);
            balise6.appendChild(balise8);

            var run = document.getElementsByClassName("tbody");
            run.appendChild(balise0);
            iter++;
        });
})}
preload()