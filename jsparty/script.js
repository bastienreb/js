// function sayHello() {
//   console.log("Bonjour le monde !");
// }

// sayHello();


// let firstname = prompt("Quel est ton prénom ?");
// console.log(`Bonjour ${firstname});

// let nb = prompt("De quel nombre veux-tu la fonction factorielle ?");
// let res = 1
// for(let count = 1; count <= nb; count++)
// res = res*count
// console.log(`Le résultat est ${res}`)

// let total_floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
// console.log("Voici ta pyramide :");
// for (let i = 1; i <= total_floor; i++) {
//    let current_floor = ''
//    for(let space = 1 ; space <=(total_floor - i); space++){
//      current_floor += ' '
//    }
//    for (let hashtag = 1 ; hashtag <= i ; hashtag++){
//     current_floor += "#"
//   }
//    console.log(current_floor)
// }

// const entrepreneurs = [
//   { first: 'Steve', last: 'Jobs', year: 1955 },
//   { first: 'Oprah', last: 'Winfrey', year: 1954 },
//   { first: 'Bill', last: 'Gates', year: 1955 },
//   { first: 'Sheryl', last: 'Sandberg', year: 1969 },
//   { first: 'Mark', last: 'Zuckerberg', year: 1984 },
//   { first: 'Beyonce', last: 'Knowles', year: 1981 },
//   { first: 'Jeff', last: 'Bezos', year: 1964 },
//   { first: 'Diane', last: 'Hendricks', year: 1947 },
//   { first: 'Elon', last: 'Musk', year: 1971 },
//   { first: 'Marissa', last: 'Mayer', year: 1975 },
//   { first: 'Walt', last: 'Disney', year: 1901 },
//   { first: 'Larry', last: 'Page', year: 1973 },
//   { first: 'Jack', last: 'Dorsey', year: 1976 },
//   { first: 'Evan', last: 'Spiegel', year: 1990 },
//   { first: 'Brian', last: 'Chesky', year: 1981 },
//   { first: 'Travis', last: 'Kalanick', year: 1976 },
//   { first: 'Marc', last: 'Andreessen', year: 1971 },
//   { first: 'Peter', last: 'Thiel', year: 1967 }
// ];

// console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
// var seventies_array = []

// for (var i=0 ; i < entrepreneurs.length; i++){
//    if (entrepreneurs[i].year >= 1970 &&  entrepreneurs[i].year <= 1979){
//   seventies_array.push(entrepreneurs[i].first)}
//    }
// console.log(seventies_array)

// console.log("une array qui contient le prénom et le nom des entrepreneurs")
// array_names= []
// for(var i=0; i < entrepreneurs.length;i++){
// 	array_names[i] = entrepreneurs[i].first + " " +entrepreneurs[i].last
// }

// console.log(array_names)

// console.log("âge de chaque inventeur aujourd'hui")
// let current_year = 2019
// let current_age_array = []
// for(var i=0; i < entrepreneurs.length; i++){
// 	current_age_array[i] = array_names[i] + ": " + (current_year - entrepreneurs[i].year) + " balais"
// }
// console.log(current_age_array)

// console.log("entrepreneurs par ordre alphabétique du nom de famille")
// let lastname_array = []
// for (var i=0 ; i < entrepreneurs.length; i++){
// 	lastname_array[i]=entrepreneurs[i].last
// }

// console.log(lastname_array.sort())

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
for(var i=0 ; i < books.length; i++){
  switch (books[i].rented){
    case 0:
      console.log("Non");
      break;
    default:
      console.log("Oui");
      break;
  }
}

console.log("le plus emprunté")
let max_rented = books[0].rented
let max_rented_title = books[0].title
for (var i=1; i < books.length; i++)
{
  if (books[i].rented > max_rented)
  {
    max_rented = books[i].rented;
    max_rented_title = books[i].title;
  }
}
console.log(max_rented_title)



console.log("le moins emprunté")
let min_rented = books[0].rented
let min_rented_title = books[0].title
for (var i=1; i < books.length; i++)
{
  if (books[i].rented < min_rented)
  {
    min_rented = books[i].rented;
    min_rented_title = books[i].title;
  }
}
console.log(min_rented_title)


console.log("livre avec l'ID: 873495i")
let book_with_873495i_ID = []

 for(var i=0; i< books.length; i++){
  if(books[i].id == 873495 ) { book_with_873495i_ID = books[i].title }
}
 console.log(book_with_873495i_ID)


console.log("Supprime le livre avec l'ID: 133712")
for(var i=0 ; i < books.length; i++){
  if(books[i].id == 133712) {delete books[i]}
 }
console.log(books)



console.log("Voici les livres triés par ordre alphabétique (il faut cliquer sur la petite flèche grise).")
books.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
})
console.log(books)





