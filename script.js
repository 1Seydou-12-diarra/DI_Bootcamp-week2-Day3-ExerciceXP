// Exercise 1 : List Of People

const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays

delete people[0];
people.splice(3, 1, 'Jason');
console.log(people);
people.push("diarrassouba");
console.log(people);
console.log(people.indexOf('Mary'));
console.log(people.slice(1));
// lre resultat est -1 car FOO n'existe pas dans le tableau,d'oû il na pas d'indice dans le tableau
console.log(people.indexOf('FOO'));

let last ="diarrassouba";
// part 2
people.forEach(element => console.log(element));

// ******************************************************************************************************


// exercice2
 const  colors =["rouge","rose","bleu","orange","pink"];
for(let i =0 ; i<colors ; i++){
    console.log(`my ${i+ 1} choice is ${colors[i]}`);
}
// bonnus
const  order =["1st","2nd","3rd","4th"];
for(let j = 0; j< order; j++){
    console.log(`my ${oder[i]} choice is ${colors[i]}`);
}

// ******************************************************************************************************

//exercice3
let user = prompt("Entrer  user for a number");
// trouver le type de la chaînes 
 console.log(`le type ${typeof(user)} `);

 while( user < 10){
     user = prompt(" entrer un autre nombre");
 }
 // ******************************************************************************************************
// exercice4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },

}
console.log(building.numberOfFloors);
console.log(`le nombre d'appartement de l'etage 1 est:${building.numberOfAptByFloor.firstFloor}`);
console.log(`le nombre d'appartement de l'etage 3 est:${building.numberOfAptByFloor.thirdFloor}`);
 console.log(`le nom du deuxieme locataire est :${building.nameOfTenants[1]} et le nombre de piece qu'il possède est:${building.numberOfRoomsAndRent.dan[0]}`);

 let Loyersarah =900;
 let Loyerdavid =500;
 let loyerdan =1000;
 let sommeloyer=parseInt(Loyersarah) +parseInt(Loyerdavid);
 console.log(`la somme des loyers de sarah et david est:${sommeloyer}`);
 if(sommeloyer > loyerdan){
  loyerdan = loyerdan + 200;
  
 }
 console.log( `le  nouveau loyer de: ${loyerdan}`);
// ******************************************************************************************************

//  exrecice5

const famille ={
    père:"diarrassouba",
    frère:"said",
    cousine:"kassoum"
}
for(property in famille){
    console.log("les clés de l'objet :" + property);
    
}

for(property in famille){
    console.log( "les valeurs de l'objet:" + famille[property])
}
// ******************************************************************************************************
// exrecice6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
 }
 let tdetails = Object.entries(details);

 for (let i = 0; i < tdetails.length; i++) {
    for (let j = 0; j < tdetails[i].length; j++) { 
        console.log(tdetails[i][j]);
    }

}


//  ******************************************************************************************************

//  exerice7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let odrealphabetique =`${names[0][0]}${names[1][0]}${names[2][0]}${names[3][0]}${names[4][0]}${names[5][0]}`;
console.log(`le nom de leur société secrète est :${odrealphabetique}`);



  