/**1. 
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%. */


const player = ['codice','name','surname','age','scoreMedium','successXcent']
console.log(player)

const letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z']
console.log(letter);


//Generazione codice giocatore
  //Gen letter
  let stringa_random = generateRandomString(3);
  console.log(stringa_random);

  //Gen number
  let numbers_random = generateRandomNumbers(3);
  console.log(numbers_random);

  //Codice
  const codex = numbers_random + stringa_random;
  console.log(codex)

//Functions

function generateRandomString(iLen) {
    let sRnd = '';
    let sChrs = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    for (let i = 0; i < iLen; i++) {
      let randomPoz = Math.floor(Math.random() * sChrs.length);
      sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    }
    return sRnd;
  }

  function generateRandomNumbers(numLen) {
    let sRnd2 = '';
    let sChrs2 = "0123456789";
    for (let i = 0; i < numLen; i++) {
      let randomPoz = Math.floor(Math.random() * sChrs2.length);
      sRnd2 += sChrs2.substring(randomPoz, randomPoz + 1);
    }
    return sRnd2;
  }



