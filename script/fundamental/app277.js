// Welcome! - https://www.codewars.com/kata/577ff15ad648a14b780000e7

// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.


function greet(lang) {
  let welk = {
     'english': 'Welcome',
     'czech': 'Vitejte',
     'danish': 'Velkomst',
     'dutch': 'Welkom',
     'estonian': 'Tere tulemast',
     'finnish': 'Tervetuloa',
     'flemish': 'Welgekomen', 
     'french': 'Bienvenue',
     'german': 'Willkommen', 
     'irish': 'Failte',
     'italian': 'Benvenuto',
     'latvian': 'Gaidits',
     'lithuanian': 'Laukiamas',
     'polish': 'Witamy',
     'spanish': 'Bienvenido',
     'swedish': 'Valkommen',
     'welsh': 'Croeso'
    }
  //   console.log(welk[lang])
    return welk[lang] === undefined ? 'Welcome' : welk[lang];
  }
  
  
  function greet(lang) {
    return langs[lang]||langs['english'];
  }
  
  var langs = {
  'english': 'Welcome',
  'czech': 'Vitejte',
  'danish': 'Velkomst',
  'dutch': 'Welkom',
  'estonian': 'Tere tulemast',
  'finnish': 'Tervetuloa',
  'flemish': 'Welgekomen',
  'french': 'Bienvenue',
  'german': 'Willkommen',
  'irish': 'Failte',
  'italian': 'Benvenuto',
  'latvian': 'Gaidits',
  'lithuanian': 'Laukiamas',
  'polish': 'Witamy',
  'spanish': 'Bienvenido',
  'swedish': 'Valkommen',
  'welsh': 'Croeso'
  };