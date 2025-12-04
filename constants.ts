
import { Category, Strategy, SubjectTip } from './types';

export const STRATEGIES: Strategy[] = [
  {
    id: 'flashcards',
    title: 'Flashcards',
    category: Category.TEST_JEZELF,
    shortDescription: 'Oefenkaartjes met op de ene kant een concept/vraag en op de andere kant de verklaring/antwoord.',
    howTo: [
      'Neem een stapel kaartjes (ca. 20) of gebruik een app.',
      'Lees het begrip of de vraag op de ene kant.',
      'Formuleer het antwoord of noteer het op een kladblad.',
      'Draai het kaartje om en controleer je antwoord.',
      'Laat alle kaartjes in de stapel zitten, zelfs die waarvoor je een juist antwoord formuleerde. Werk de stapel af tot je elk kaartje minstens één keer correct hebt beantwoord.',
      'Herhaal tijdens een volgende studiesessie dezelfde stapel kaartjes, maar verander de volgorde.',
      'Als je minstens drie keer het juiste antwoord kon formuleren in verschillende sessies, mag je het kaartje even uit de stapel halen. Voeg het bij een groter herhalingsmoment weer toe.'
    ],
    attention: 'Voor sommige onderdelen (woordenschat, formules) moet je het antwoord opschrijven om de spelling te controleren. Gebruik flashcards niet alleen voor feiten, maar ook om verbanden te leggen (bijv. toetsvragen op de kaartjes).',
    iconName: 'Layers',
    actionButton: {
      label: 'Maak & Print Flashcards',
      url: 'https://flashcards-maken-app.vercel.app/'
    }
  },
  {
    id: 'braindump',
    title: 'Braindumps',
    category: Category.TEST_JEZELF,
    shortDescription: 'Neem een leeg blad en noteer alles wat je je herinnert over een bepaald onderwerp. Je dumpt je geheugen op papier.',
    howTo: [
      'Sluit je boek.',
      'Wacht enkele minuten of - beter - uren.',
      'Neem een leeg blad papier.',
      'Noteer het lesonderwerp of de titel waarover je jezelf wil testen.',
      'Geef jezelf 3 à 5 minuten de tijd om alles te noteren wat je je herinnert. Gebruik losse woorden, korte zinnen, een mindmap of tekeningen/symbolen.',
      'Geef niet te snel op, blijf nadenken. Er komt vast nog meer bovendrijven.',
      'Neem je boek erbij en controleer. Belangrijke begrippen die je was vergeten, vul je aan met een andere kleur pen.'
    ],
    attention: 'Het is niet erg als je je niet onmiddellijk veel herinnert. Als je nadien je boeken erbij neemt en jezelf controleert, blijft de nieuwe leerstof nog zo gemakkelijk kleven!',
    iconName: 'Brain'
  },
  {
    id: 'vragen',
    title: 'Jezelf Vragen Stellen',
    category: Category.HERKNEED,
    shortDescription: 'Je herkneedt de leerstof door er vragen bij te bedenken die je daarna gedetailleerd beantwoordt.',
    howTo: [
      'Vertrek vanuit je lesmateriaal en krijg zicht op de structuur (inhoudsopgave, titels).',
      'Lees een aantal alinea’s of bekijk een deel van een video.',
      'Stel jezelf vragen over wat je net hebt gelezen (Wie, Wat, Waarom, Wanneer, Waar, Hoe?). Zoek naar verschillen en overeenkomsten.',
      'Noteer de vragen in een samenvatting, op flashcards of in de kantlijn van je boek.',
      'Formuleer een uitgebreid antwoord (mondeling of schriftelijk) zonder te spieken. Schrijf antwoorden niet direct bij de vragen.',
      'Controleer je antwoord en vul aan indien nodig.',
      'Gebruik de vragen om jezelf bij een volgende studiesessie opnieuw te toetsen.'
    ],
    attention: 'Stel vragen die overeenkomen met wat je eigenlijk moet leren. Als het gaat om toepassen van concepten, stel dan niet enkel kennisvragen.',
    iconName: 'MessageCircleQuestion'
  },
  {
    id: 'tekenen',
    title: 'Tekenen',
    category: Category.HERKNEED,
    shortDescription: 'Je maakt een tekening tijdens het verwerken van de leerstof om een proces of concept te verduidelijken.',
    howTo: [
      'Vertrek vanuit je lesmateriaal en krijg zicht op de structuur.',
      'Lees een aantal alinea’s grondig door.',
      'Sluit je boek en wacht liefst een aantal minuten. Verwerk wat je gelezen hebt in een tekening. Combineer woord en beeld.',
      'Gebruik de tekening daarna om voor jezelf het proces of concept te verklaren (zie strategie "Uitleggen").',
      'Controleer of je tekening (en eventuele verklaring) juist en volledig is.'
    ],
    attention: 'De focus ligt op het leren. Hoe mooi je tekening is, is niet van belang. Verspil hier geen tijd aan.',
    iconName: 'PenTool'
  },
  {
    id: 'uitleggen',
    title: 'Uitleggen',
    category: Category.HERKNEED,
    shortDescription: 'Je legt de leerstof (oefening, begrip of proces) uit aan iemand anders of aan jezelf. Dit verplicht je om diep na te denken.',
    howTo: [
      'Vertrek vanuit je lesmateriaal (tekst, oefening of video).',
      'Lees een aantal alinea’s grondig door.',
      'Verklaar aan jezelf (of een ander) wat er staat. Doe dit per alinea in eigen woorden, zonder te spieken. Bij oefeningen: redeneer hardop bij elke stap.',
      'Controleer je verklaring of uitleg op basis van je lesmateriaal.'
    ],
    attention: 'Het gaat hier om uitleggen en verklaren met veel details, niet om enkel herformuleren (en al zeker niet om overschrijven of aflezen).',
    iconName: 'Mic'
  },
  {
    id: 'mappen',
    title: 'Mappen (Mindmap)',
    category: Category.HERKNEED,
    shortDescription: 'Je maakt een visueel schema dat de verbanden in je leerstof duidelijk maakt (mindmap, schema, tabel).',
    howTo: [
      'Vertrek vanuit het lesmateriaal en bekijk de structuur.',
      'Laat de leerstof rusten voor een paar minuten (of uren).',
      'Neem een leeg blad. Noteer het hoofdonderwerp in het midden en de kerngedachten daarrond.',
      'Voeg per kerngedachte vertakkingen toe met begrippen en voorbeelden. Benoem de verbanden.',
      'Ga niet overschrijven! Lees een stukje, denk na, en bouw zo je map op.',
      'Controleer met je lesmateriaal: staan de belangrijkste concepten en verbanden erin?'
    ],
    attention: 'Combineer deze strategie met zelftesten, pas dan is ze echt effectief. Als je gewoon leerstof overschrijft, is het weggegooide tijd.',
    iconName: 'Network'
  },
  {
    id: 'cornell',
    title: 'Cornell Methode',
    category: Category.HERKNEED,
    shortDescription: 'Je maakt een samenvatting waarbij je kernvragen en een korte samenvatting toevoegt om jezelf later te testen.',
    howTo: [
      'Verdeel je blad in drie delen: een brede rechterkolom, een smalle linkerkolom en een vlak onderaan.',
      'Noteer bovenaan het onderwerp.',
      'Maak tijdens het lezen/luisteren beknopte aantekeningen in de rechterkolom (schema\'s, kernwoorden).',
      'Noteer daarna in de linkerkolom vragen of kernwoorden die aansluiten bij de notities rechts.',
      'Vat de kern van de les kort samen in het vlak onderaan (2 zinnen).',
      'Dek de rechterkolom af en test jezelf aan de hand van de linkerkolom.',
      'Controleer je antwoord.',
      'Herhaal dit testen bij volgende studiesessies.'
    ],
    attention: 'Verval niet in overschrijven, zorg dat het een actief proces is. De grootste leerwinst zit in wat je nadien met de samenvatting doet: jezelf testen.',
    iconName: 'FileText'
  },
  {
    id: 'voorbeelden',
    title: 'Uitgewerkte Voorbeelden',
    category: Category.OEFEN_SLIM,
    shortDescription: 'Een oefening waarbij de oplossing helemaal is uitgewerkt en stappen verklaard worden.',
    howTo: [
      'Zoek een uitgewerkt voorbeeld (in boek of video) dat toont hoe je een oefening oplost.',
      'Bestudeer het voorbeeld nauwgezet. Begrijp de opeenvolgende stappen en verklaar waarom je ze zet.',
      'Dek bij een volgend voorbeeld de laatste stap(pen) af en probeer zelf aan te vullen.',
      'Probeer daarna zelfstandig te oefenen en controleer jezelf direct na elke oefening.'
    ],
    attention: 'Uitgewerkte voorbeelden zijn vooral handig als je niet meer weet hoe je een bepaalde werkwijze moet toepassen (bijv. wiskunde, chemie, grammatica).',
    iconName: 'ListChecks'
  },
  {
    id: 'afwisselen',
    title: 'Afwisselen',
    category: Category.OEFEN_SLIM,
    shortDescription: 'Wissel af tussen verschillende types oefeningen in plaats van gegroepeerd te oefenen.',
    howTo: [
      'Zet de eerste stappen door een aantal oefeningen van hetzelfde type te maken (gegroepeerd) om de basis te leren.',
      'Schakel daarna over naar afwisselend oefenen: maak oefeningen van verschillende types door elkaar.',
      'Hierdoor moet je bij elke opgave nadenken over WELKE strategie je moet kiezen, niet alleen hoe je hem toepast.',
      'Je hoeft niet méér te oefenen, enkel slimmer.'
    ],
    attention: 'Dit voelt moeilijker aan omdat je dieper moet nadenken, maar dat is net de bedoeling! Het voorkomt dat je op automatische piloot werkt.',
    iconName: 'Shuffle'
  },
  {
    id: 'gespreid',
    title: 'Gespreid Studeren',
    category: Category.PLANNING,
    shortDescription: 'Studeer de leerstof tijdens verschillende momenten, zodat je het een aantal keer herhaalt.',
    howTo: [
      'Bekijk je planning en bereken hoeveel tijd je hebt tot de toets.',
      'Splits de tijd die je wil spenderen op in kleinere sessies (bijv. 3 sessies van 30 minuten i.p.v. 1 van 1,5 uur).',
      'Plan sessies voor dezelfde leerstof met tussenpozen (bijv. dag 2, dag 5 en dag 9).',
      'Als je weinig tijd hebt (1-2 dagen), is dit lastig, maar probeer toch pauzes in te lassen.'
    ],
    attention: 'Kies tijdens de herhalingsmomenten voor effectieve strategieën (zoals jezelf testen). Ga niet drie keer herlezen. Het gaat om het herhalen van het *ophalen* van informatie.',
    iconName: 'CalendarClock'
  }
];

export const SUBJECT_TIPS: SubjectTip[] = [
  // AARDRIJKSKUNDE
  { subject: "Aardrijkskunde", strategyId: "tekenen", tip: "Teken bijv. een vulkaan, delta of waterkringloop om processen visueel te maken en beter te onthouden. Gebruik bij voorkeur alleen beeldtaal en geen tekst." },
  { subject: "Aardrijkskunde", strategyId: "flashcards", tip: "Maak flashcards van begrippen zoals 'migratie' of 'verstedelijking'. Gebruik ze ook om de lesstof aan iemand anders uit te leggen." },
  { subject: "Aardrijkskunde", strategyId: "braindump", tip: "Na iedere les of na het leren voor een toets: schrijf alles op wat je nog weet over bijv. platentektoniek zonder boek. Controleer daarna." },
  { subject: "Aardrijkskunde", strategyId: "mappen", tip: "Gebruik mindmaps voor processen. Bijv: zeewater -> verwarming -> verdamping -> wolken -> neerslag. Gebruik pijlen voor oorzaak-gevolg." },
  { subject: "Aardrijkskunde", strategyId: "vragen", tip: "Stel inzichtsvragen in plaats van alleen begripsvragen. Vraag 'Waardoor verandert dit?' of 'Wat is het gevolg van X voor Y?'" },
  { subject: "Aardrijkskunde", strategyId: "gespreid", tip: "Verdeel het werk: paragraaf per dag + herhaling vorige dag. Ideaal voor het leren van topografie." },
  
  // WISKUNDE
  { subject: "Wiskunde", strategyId: "flashcards", tip: "Leer formules en begrippen uit je hoofd. Zet diagrammen of grafieken op kaartjes om verschillende representatievormen te koppelen." },
  { subject: "Wiskunde", strategyId: "braindump", tip: "Noteer alles over een leerdoel (bijv. 'Stelling van Pythagoras'). Schrijf het stappenplan en de formules op die erbij horen." },
  { subject: "Wiskunde", strategyId: "afwisselen", tip: "Oefen vaardigheden door elkaar. Maak na 5 opgaven van type A een opgave van type B. Dit daagt je brein uit." },
  { subject: "Wiskunde", strategyId: "voorbeelden", tip: "Bestudeer de theorieblokken en uitgewerkte voorbeelden. Dek de laatste stap af en probeer die zelf in te vullen." },
  { subject: "Wiskunde", strategyId: "mappen", tip: "Teken grafieken en figuren en geef zoveel mogelijk kenmerken en eigenschappen aan met kleuren." },

  // GESCHIEDENIS
  { subject: "Geschiedenis", strategyId: "flashcards", tip: "Voorkant: Begrip/Persoon/Keerpunt. Achterkant: Betekenis in eigen woorden. Overhoor elkaar." },
  { subject: "Geschiedenis", strategyId: "braindump", tip: "Schrijf per tekstkopje (A, B, C) alles op. Deel in categorieën: sociaal-economisch, politiek-militair, cultureel." },
  { subject: "Geschiedenis", strategyId: "vragen", tip: "Stel bij afbeeldingen de vragen: Wie, Wat, Waar, Wanneer, Waarom? Zoek naar oorzaken, gevolgen, continuïteit en verandering." },
  { subject: "Geschiedenis", strategyId: "mappen", tip: "Maak een tijdlijn of mindmap met begrippen en personen. Verbind ze met pijlen (oorzaak-gevolg)." },
  { subject: "Geschiedenis", strategyId: "cornell", tip: "Maak een Cornell-samenvatting per paragraaf. Noteer kernbegrippen links en uitleg rechts." },
  { subject: "Geschiedenis", strategyId: "gespreid", tip: "Oriëntatiekennis is herhaling. Leer onderwerp 1. Later: herhaal 1, leer 2. Later: herhaal 1+2, leer 3." },

  // ENGELS & MVT
  { subject: "Engels", strategyId: "tekenen", tip: "Teken de woorden die je moet leren, zodat je makkelijker kunt beschrijven wat iets is zonder te vertalen." },
  { subject: "Engels", strategyId: "flashcards", tip: "Noteer niet alleen NL-EN, maar ook synoniemen, antonymen en de woordvorm. Oefen ook literaire begrippen." },
  { subject: "Engels", strategyId: "vragen", tip: "Maak zelf toetsvragen over je leesboek of artikel. Stel elkaar aan het begin van de les 1 vraag over de vorige les." },
  { subject: "Engels", strategyId: "uitleggen", tip: "Leg het plot van je boek of film uit aan jezelf in het Engels (hardop!)." },
  { subject: "Engels", strategyId: "mappen", tip: "Maak een 'Plot Hill' of mindmap van literary elements (setting, point of view, context)." },
  { subject: "Engels", strategyId: "afwisselen", tip: "Grammatica: Oefen tijden (tenses) door elkaar. Vaardigheden: Wissel lezen af met luisteren (TED talk) over hetzelfde onderwerp." },
  
  // MODERNE VREEMDE TALEN (MVT)
  { subject: "Moderne Vreemde Talen", strategyId: "flashcards", tip: "Leer woorden en zinnen met flashcards. Dit kan digitaal, maar het liefst nog op papier." },
  { subject: "Moderne Vreemde Talen", strategyId: "tekenen", tip: "Bij grammatica en boektoetsen kun je verbanden aangeven door deze schematisch weer te geven." },
  { subject: "Moderne Vreemde Talen", strategyId: "uitleggen", tip: "Leg aan jezelf uit hoe je een grammaticaregel toe moet passen." },
  { subject: "Moderne Vreemde Talen", strategyId: "voorbeelden", tip: "Bij ontleden en toepassing van naamvallen: geef zelf een voorbeeldzin waarbij je de zinsdelen aangeeft met kleuren." },
  { subject: "Moderne Vreemde Talen", strategyId: "gespreid", tip: "Verdeel woordenlijsten in kleinere stukken en herhaal regelmatig (meerdere malen dagelijks)." },
  { subject: "Moderne Vreemde Talen", strategyId: "afwisselen", tip: "Wissel af: schrijf woordjes, maar laat jezelf ook horen. Maak rubrieken of een verhaal met de te leren woorden." },

  // NATUURKUNDE
  { subject: "Natuurkunde", strategyId: "flashcards", tip: "Maak kaartjes met grootheden, eenheden en symbolen. Gebruik ze om formules te leren." },
  { subject: "Natuurkunde", strategyId: "tekenen", tip: "Maak bij elke vraag een schets van de situatie. Dit helpt je hersenen de stof te begrijpen." },
  { subject: "Natuurkunde", strategyId: "mappen", tip: "Maak per paragraaf een concept map van alle begrippen met de bijbehorende formules." },
  { subject: "Natuurkunde", strategyId: "braindump", tip: "Doe een braindump direct na het lezen van een paragraaf. Herhaal dit na 1 dag." },
  { subject: "Natuurkunde", strategyId: "voorbeelden", tip: "Oefen de systematische probleemaanpak: Gegeven, Gevraagd, Formule, Berekening, Eenheid." },

  // SCHEIKUNDE
  { subject: "Scheikunde", strategyId: "flashcards", tip: "Leer symbolen en elementen. Of begrippen per hoofdstuk." },
  { subject: "Scheikunde", strategyId: "vragen", tip: "Vraag bij een opgave: Welke oplossingsstrategie heb ik nodig? Welke basiskennis hoort hierbij?" },
  { subject: "Scheikunde", strategyId: "mappen", tip: "Maak per paragraaf een mindmap van belangrijke begrippen en formules." },
  { subject: "Scheikunde", strategyId: "voorbeelden", tip: "Schrijf reactievergelijkingen en structuurformules volledig uit bij het oefenen. Controleer elke stap." },
  { subject: "Scheikunde", strategyId: "afwisselen", tip: "Maak aan het eind van het hoofdstuk opgaven door elkaar (Test jezelf)." },

  // BIOLOGIE
  { subject: "Biologie", strategyId: "vragen", tip: "Stel de vragen: Wat is de functie van het geheel? Hoe werken onderdelen samen? Wat is het nadeel als een onderdeel ontbreekt?" },
  { subject: "Biologie", strategyId: "vragen", tip: "Jojoën: Verbind processen aan organisatieniveaus (Cel -> Orgaan -> Organisme -> Ecosysteem)." },
  { subject: "Biologie", strategyId: "mappen", tip: "Maak een conceptmap waarin je verschillende biologische concepten uit het hoofdstuk verbindt." },
  { subject: "Biologie", strategyId: "tekenen", tip: "Maak een tekening van processen zoals fotosynthese. Combineer woord en beeld; je brein verwerkt de leerstof dan twee keer." },

  // NEDERLANDS
  { subject: "Nederlands", strategyId: "voorbeelden", tip: "Bekijk voorbeeldteksten. Let op opbouw, signaalwoorden en argumentatie. Vergelijk jouw tekst met het model." },
  { subject: "Nederlands", strategyId: "braindump", tip: "Schrijf alles op wat je weet over tekststructuren, spellingregels of stijlfiguren. Vul daarna aan." },
  { subject: "Nederlands", strategyId: "afwisselen", tip: "Wissel af tussen lezen, schrijven en spelling. Gebruik de Pomodoro techniek." },
  { subject: "Nederlands", strategyId: "cornell", tip: "Vat tekststructuren of grammaticaregels samen in een Cornell-schema." },

  // KUNST ALGEMEEN (Previously BEVO / KUBE)
  { subject: "Kunst Algemeen", strategyId: "voorbeelden", tip: "Bestudeer beeldaspecten aan de hand van visuele voorbeelden. Hoe is het toegepast?" },
  { subject: "Kunst Algemeen", strategyId: "gespreid", tip: "Oefen regelmatig met reflecteren op wat je ziet of gemaakt hebt." },
  
  // MUZIEK
  { subject: "Muziek", strategyId: "uitleggen", tip: "Leer de theorie en check jezelf door luistervragen te maken." },
  { subject: "Muziek", strategyId: "oefenen", tip: "Oefen je speelpartij altijd met een beat/metronoom voor de juiste flow en timing." },

  // ALGEMEEN
  { subject: "Algemeen", strategyId: "flashcards", tip: "Gebruik voor begrippen, woordjes (NL-Vreemde taal) of symbolen." },
  { subject: "Algemeen", strategyId: "braindump", tip: "Dump je geheugen op papier voor je begint met leren om te zien wat je al weet." },
  { subject: "Algemeen", strategyId: "cornell", tip: "Gebruik Cornell voor aantekeningen tijdens de les. Dek rechts af en toets jezelf links." },
  { subject: "Algemeen", strategyId: "afwisselen", tip: "Wissel vakken en type opdrachten af voor betere concentratie en dieper leren." }
];
