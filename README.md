# ssw-promise2023

Lo handler collegato al bottone acquisice il dato in input e invoca una funzione "slowRoot" che restituisce una promise. Nel suo metodo "then" vengono specificate le due continuazioni: in caso di successo visualizza il risultato accompagnato da una descrizione, in caso di errore visualizza la diagnostica ricevuta.

Lo handler procede poi impostando un valore di attesa nello spazio di input che verrà poi riempito dalle visualizzazioni dette sopra.

La funzione "slowRoot" prende il parametro e restituisce subito una promise, che utilizza il dato passato come parametro per l'esecuzioone del calcolo, rallentato artificialmente. In caso di errore invoca il metodo di fallimento con parametro una breve diagnostica, altrimenti invoca il metodo di successo passando il risultato del calcolo.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-eajznc)
