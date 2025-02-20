# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi har en overordnet mappe, der hedder T07. Inden under det, har vi så 4 undermapper (css, img, js, fonts) og så ligger vores html løst udenfor undermapperne
- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  Vi har to forskellige undermapper til både CSS og Javascript-filer, der bruges
- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  Ved ikke helt hvad der menes med dette

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller _)
  Vores forside hedder index, som i alle andre opgaver. Den side, man trykker videre til, efter forsiden, valgte vi at kalde overview, da det både er der vores filtrering er, og der hvor man kan se overblikket over, hvilket kategorier vi har. Efter overview har vi product list, som vi fik inspiration fra den første dynamiske side, hvor det bare er en liste over produkter (her en liste over opskrifter). Når man så trykker ind på en opskrifte, har vi kaldt det produkt, da det er der man ser et single produkt. Vi har ingen mellemrum eller _, da vi alle har oplevet problemer med, når man navngiver sine filer med disse. Udover det, bruger vi kun små bogstaver, og det var et helt underbevist valg.
- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  De html, css og javascript sider der hænger sammen, hedder det sammen (eksempelvis produkt.html, produkt.css, produkt.js)

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  Vi placerer script referencer i <head>, da det er det vi har brugt i 1 semester

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  Vi var alle sammen om at designe og code forsiden, hvorefter vi opdelte siderne, så alle fik en side hver, og kunne arbejde i hver deres branch. Vi navngav derfor bare branchen det samme som den side vi arbejder på.

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Som skrevet, arbejder alle i hver deres branch og så merger vi til sidst til "main" branch så alt er samlet til sidst
- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Vi committer ikke for ofte, så derfor når vi skriver commit-beskeder, skriver vi eksempelvis "næsten alle ændringer" eller "tilføjet footer"
- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Vi laver ingen ændringer i main-branchen før vi føler vi alle er klar og ellers skriver vi en messenger besked eller venter til vi fysisk er samlet

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Vi bruger function keyword, da det er det der har virkede bedst for os
- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Vi bruger classes til CSS
- Skal filer have korte forklaringer som kommentarer?
  Det kan de sagtens, men det har vi ikke gjort, da vi tit sidder sammen og forklarer hvad hver kode kan

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
  Hentning af data/produkter fra API foregår på alle sider, udover forsiden
- Filtrering af produkter baseret på brugerens valg.
  Hvis brugeren gerne vil se, hvilke desserter man kan lave, filtrer vores API, til kun at vise desserter (det samme med appetizers og mains)
- Dynamisk visning af produkter i HTML.
  Ja, det har vi gjort.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)
  https://dummyjson.com/recipes/${id}
  'https://dummyjson.com/recipes'
  https://dummyjson.com/recipes/meal-type/${mealType}

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
  function showProduct(
  Denne funktion opbygger en HTML-struktur med de modtagne data.
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
  const params = new URLSearchParams(window.location.search); => henter query-parametrene fra URL'en og gør det muligt at hente værdien af bestemte parametre.
  const id = params.get("id"); => henter værdien af id-parameteren (f.eks. hvis URL'en er
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
  Funktionen showProduct(data) returnerer ikke en værdi. Den manipulerer udelukkende DOM’en ved at ændre innerHTML på webForm-elementet.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:
  <!-- funktionens kode: -->

  function showProduct(data) {
  const markup = `<h1>${data.name}</h1>
    <img src="${data.image}" alt="${data.name}" />
    <h2>Ingredients</h2>
    <ul>${data.ingredients.map(ing => <li>${ing}</li>).join("")}</ul>
    <p>${data.instructions}</p>`;

  webForm.innerHTML = markup;
  }

<!-- hvordan funktionen kaldes: -->

const webForm = document.querySelector(".webForm");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(https://dummyjson.com/recipes/${id})
.then(response => response.json())
.then(showProduct);
