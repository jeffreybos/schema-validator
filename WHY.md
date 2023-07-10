# Uitleg keuzes

Ik programmeer zelf het liefst in TypeScript. De grootste reden hiervoor is dat ik het fijn vind dat de IDE direct foutmeldingen geeft als ik een verkeerde methode aanroep of bijvoorbeeld een verkeerde parameter doorgeef. Daarnaast zorgt TypeScript ervoor dat de code beter leesbaar is en vermindert het de kans op "spaghetti" code, omdat TypeScript van nature meer gestructureerd is.

Ik ben een voorstander van het gebruik van goede open-source libraries, bij voorkeur met geteste code. Als ik alleen een library had gebruikt, zou ik binnen 15 minuten klaar zijn geweest, maar dan had ik niet kunnen laten zien dat ik de ins en outs van JavaScript begrijp. Bij een klant zou ik wel een third-party library gebruiken, omdat dit (vaak) de ontwikkeling versnelt.

Daarom heb ik twee versies gemaakt: een versie die ik bij een opdrachtgever zou gebruiken waarbij ik de YUP-library heb gebruikt. Zoals je kunt zien, vereist dit slechts 33 regels code om alles af te dekken.
Daarnaast heb ik mijn eigen validator geschreven, wat overigens erg leuk was om te doen en misschien ga ik deze later nog uitbreiden. Ik gekozen om de validaties in aparte bestanden te plaatsen. Op dit moment zijn het eenvoudige validaties, maar het kan nu ook worden uitgebreid met complexere validaties, zonder dat het onleesbaar wordt.

Ik heb nog overwogen om het class-based te maken, maar dat vond ik nu een beetje overdreven en zou onnodig extra tijd hebben gekost.
