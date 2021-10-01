# Teknisk oppgave

Vi vil gjerne at du løser denne hjemmeoppgave: Det er altså ikke noe tidsbegrensning på oppgaven, men vi forventer ikke at du skal bruke mer enn totalt ca. 4 timer på å lage en løsning.

Følgende API-kall lister noen av de mest populære JavaScript-repositoryene på GitHub: https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100  (N.B. Vi ønsker ikke at du endrer på per_page parameteren. La den stå på per_page=100.)

Lag en nettside som presenterer repositoryene i en stylet tabell med minst 4 kolonner med informasjon om repositoryene. Tabellen skal kun vise 20 repositories omgangen, men det skal være mulig å bla gjennom alle repositoryene API-kallet returnerer ved hjelp av paginering.

## Noen krav:
• Selve logikken til paginering ønsker vi at du skriver uten bruk av et paginerings bibliotek/plugin.
• Vi forventer at tabellen og resten av innholdet på siden skal være stylet.
• Løsningen trenger kun å støtte moderne nettlesere (Chrome, Edge, Firefox, etc).
• Kjente feil/mangler/tolkninger bør redegjøres ved levering.

## Noen tips:
• Det er lov å bruke biblioteker til utvikling av siden (f.eks. React, Vue, Angular, etc).
• Bruk ES2015 så lenge du er komfortabel med det (N.B. dette er ikke et krav).
• Bruk heller tid på å gjøre koden lesbar og modulær framfor å bruke tid på "fancy" funksjonalitet/styling
• Siden løsningen kun skal støtte moderne nettlesere, burde det ikke være behov for biblioteker som jQuery.
