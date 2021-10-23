let tomb = [1,2,3,4]; //Egy tömb, aminek meg is adtuk az elemeit
console.log(tomb); //tömb kiíratása
console.log(tomb.length) //tömb hossza
console.log(tomb[0]); // első elem, szokásos 0 indexeléssel
console.log(tomb[tomb.length - 1]); //utolsó elem
//FONTOS: a tomb[-1] nem működik, mint más nyelveknél.

for (let szamok of tomb) {
    console.log(szamok);
} //kiíratjuk a tömb elemeit
