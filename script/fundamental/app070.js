//Check palindrom

function checkPalindrom() {
    // let string = prompt("Введіть для перевірки: ")
    let str = prompt("Введіть щось -_-").toLowerCase();
    let counter = 0;

    let strLn = str.length;

    console.log(strLn);

    if(strLn%2 === 1 || strLn%2 === 0 ){
    
        console.log("lets start");
        for (let i = 0; i < Math.floor(strLn/2); i++) {
            if (str[i] === str[strLn-1-i]) {
                // console.log(str[i]);
                counter++;    
            }
            else{
                console.log("notin to ad.");
            }
        }
    }
    else{
        console.log("")
    }

    if (strLn === 0) {
        alert("empty emty emt mt");
    }
    else if (counter === Math.floor(strLn/2)) {
        alert("palindrom")
    }
    else{
        alert("fak you");
    }
}


/*!3 months progression!*/

function palindromCheck(str) {
    const mutatedStr = str.toString().toLowerCase();
    return mutatedStr === mutatedStr.split("").map(item => item).reverse().join("");
}

console.log(palindromCheck("Nenen"));