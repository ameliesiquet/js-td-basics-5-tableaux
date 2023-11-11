/*
TABLEAUX - PRÉPA 1 : Les trois mousquetaires
1. Créez un tableau nommé 'mousquetaires' contenant les noms des trois mousquetaires, Athos, Porthos et Aramis.
2. Utilisez une boucle 'for' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Voici les Trois Mousquetaires :".
3. Ajoutez au tableau le mousquetaire d'Artagnan.
4. Utilisez la méthode 'forEach()' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Ils sont quatre à présent :".
5. Supprimez Aramis du tableau.
6. Utilisez une boucle 'for-of' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Le pauvre Aramis est mort…".
*/

const mosquetaires  =["Athos", "Porthos", "Aramis"];
console.log("Voici les trois mosquetaires: ");
for (i=0; i<mosquetaires.length; i++){
    console.log(mosquetaires[i])
}

mosquetaires.push("d'Artagnan");

console.log("Ils sont quatres à présent :");
mosquetaires.forEach(function (mosquetaire){
    console.log(mosquetaire)
});


const removeAramis = mosquetaires.indexOf("Aramis");
if (removeAramis !== -1) {
    mosquetaires.splice(removeAramis, 1);
}


console.log("Le pauvre Aramis est mort…")
for(const nom of mosquetaires){
    console.log(nom)
}