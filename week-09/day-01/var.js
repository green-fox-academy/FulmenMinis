// var - értékváltoztataás vele működik a hoisting dolog
const a=1;
if (a===1) {
  var petike = 'petike'
}

console.log(petike) //-> undefined jön WebKitCSSMatrix

// JS a gyakorlatban a scope tetején deklarálja a vart, (if nem scope)
//ugyanez érvényes a functionökre is, az összes létrejön ha megindul a kód

const a=0;
if (a===1) {
  let petike = 'petike'
}

console.log(petike) //-> nem jön létre, error, nem működik lettel a hoisting dolog
//ha belemegyek a blokkba akkor sem érvényes, más a scopeja

//constnak nem adhatunk új értéket, let counter += 1 lehet, de a const fix értékű és az is marad

const array= [];
array.push(1); //-> ezt lehet csinálni, nem értékváltoztatás!!!!!!!!!!

const MAX_HEALTH = //-> constans elnevezést alkalmazni
//de functionnél már nem kötelező a névstyle
//ha 2x uazt a nevet használjuk function létrehozására az alsót fogja meghívni

// vertical alignment cssben
// A LÉNYEG H A PADDING ÉS MARGIN KI LEGYEN 0-VA
// margin: 0px;
// padding: 0px;

// body, 
// html {
//   height: 100%;
// }
// .div {
//   height: 100%;
//   background: blue;
// }