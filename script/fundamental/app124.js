// https://www.codewars.com/kata/577ff15ad648a14b780000e7/

// function greet(language) {
//  const dataBase={
//     english: 'Welcome',
//     czech: 'Vitejte',
//     danish: 'Velkomst',
//     dutch: 'Welkom',
//     estonian: 'Tere tulemast',
//     finnish: 'Tervetuloa',
//     flemish: 'Welgekomen',
//     french: 'Bienvenue',
//     german: 'Willkommen',
//     irish: 'Failte',
//     italian: 'Benvenuto',
//     latvian: 'Gaidits',
//     lithuanian: 'Laukiamas',
//     polish: 'Witamy',
//     spanish: 'Bienvenido',
//     swedish: 'Valkommen',
//     welsh: 'Croeso'
//   }
//   return dataBase[language]
// }

function greet(language) {
    let greet = 'hi';
   switch (language) {
     case 'english': greet = 'Welcome'; break;
     case 'czech': greet = 'Vitejte'; break;
     case 'danish': greet = 'Velkomst'; break;
     case 'dutch': greet = 'Welkom'; break;
     case 'estonian': greet = 'Tere tulemast'; break;
     case 'finnish': greet = 'Tervetuloa'; break;
     case 'flemish': greet = 'Welgekomen'; break;
     case 'french': greet = 'Bienvenue'; break;
     case 'german': greet = 'Willkommen'; break;
     case 'irish': greet = 'Failte'; break;
     case 'italian': greet = 'Benvenuto'; break;
     case 'latvian': greet = 'Gaidits'; break;
     case 'lithuanian': greet = 'Laukiamas'; break;
     case 'polish': greet = 'Witamy'; break;
     case 'spanish': greet = 'Bienvenido'; break;
     case 'swedish': greet = 'Valkommen'; break;
     case 'welsh': greet = 'Croeso'; break;
    }
    return greet;
  }