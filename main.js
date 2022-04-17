
var contentBlock = document.getElementById("overmij");
var Projects = [
`<div class="overmij animation" style="margin-left: 0%;">
<p id="map"><b>Klik hier naast op een van de mapjes om projecten te openen!</b><p>
<h2>Over Mij</h2>
<img src="pic/selfie.png" alt="">
<p>Mijn naam is Floris Puts en ben 20 jaar.Nadat ik de mbo opleiding elektrotechniek heb afgerond, ben ik gestart op Sint Lucas in Eindhoven.Ik volg daar de opleiding software development. Ik woon in Koningsbosch samen met mijn ouders en broertje. Ik zit op scouting als leider van de scouts en progammeer soms in mijn vrije tijd.</p>
</div>`,
`<div class="animation">
<h2>Arcadegame</h2>
<img src="pic/arcade1.png" alt="">
<p>In het 2de jaar van mijn studie heb ik met een groepje studenten (2 software developers en 3 gameartists) een isometrisch top down shooter (arcade game) gemaakt. Ik vond dit een leuke opdracht omdat het verzinnen en maken van deze game en het samenwerken leuk vond. Dit hebben we gemaakt in Unity met C#.</p>
<img src="pic/arcade6.png" alt="">
<p>In de game is het de bedoeling om in elk level de verlichting aan te krijgen. Je moet daarvoor een schakelaar vinden om de verlichting in te schakelen. In elk level zijn er enemys die je aanvallen en als je dood bent begint het level opnieuw.(het spel duur ongeveer 10 minuten)</p>
<video width="100%" height="auto" autoplay loop muted><source src="pic/arcadevideo.mp4" type="video/mp4"></video>
<p>Ik heb de enemy, levels, sceneswitcher en het schieten gemaakt. De andere developer het lopen en de toolkit om sommige schakelaars mee over te halen..</p>
</div>`,
`<div class="animation">
<h2>VR Draw</h2>
<img src="pic/vrdraw.png" alt="">
<p>In dit project heb ik een vr game gemaakt waar je in een 3d kubus zit. Overal waar je kijkt ben je aan het tekenen, je hoeft alleen te kijken. Als je boven je kijkt kun je naar een kleur kijken om die kleur te selecteren. Je kunt ook dunnere of dikke lijnen selecteren. Dit project heb ik gemaakt in Unity met C#</p>
</div>`,
`<div class="animation">
<h2>TODO List</h2>
<img src="pic/todolist.png" alt="">
<p>In dit project heb ik een site gebouwd waarmee je een todo list bij kan houden van jezelf. Je kunt tekst toevoegen, bewerken en verwijderen. je hoeft het niet perse als todo list te gebruiken. ik heb het hier bijvoorbeeld gebruikt om reviews van mijn site te laten zien. Dit word op je locale pc opgeslagen, dus het wordt niet online opgeslagen. Gemaakt met HTML, CSS en JavaScript</p>
</div>`,
`<div class="animation">
<h2>Log In</h2>
<img src="pic/login.png" alt="">
<p>Hier zie je een site die ik heb gemaakt waar je alleen kan inloggen. het checkt of de gebruikersnaam en wachtwoord overeen komen met de local mysql server. Ik heb ook een regist linkje gemaakt waar je een nieuwe gebruiker toevoegt aan de server. deze login pagina heb ik ook gemaakt met behulp van react. Dus een project met mysql en nog een zelfde project maar dan met react.</p>
</div>`,
`<div class="animation">
<h2>Shine</h2>
<img src="pic/shine.png" alt="">
<p>Dit was een van de laatste projecten van mijn eerste jaar. Hier moest ik laten zien waar ik trots op was van alle projecten die ik in het eerste jaar gemaakt had. Je moet hier een site bij maken  en ik vond het leuk om te reflecteren naar de vorige projecten. Je kan dan echt zien hoeveel je bent gegroeid in een jaar terwijl je dat het hele jaar nog niet door had. Dit heb ik als site moeten presenteren.</p>
</div>`,
`<div class="animation">
<h2>Huis Maker</h2>
<img src="pic/housemaking1.png" alt="">
<p>Deze game heb ik gemaakt met een game-jam waar ik aan mee deed. Deze game heb ik in een paar uurtjes gemaakt. De bedoeling is dat je zo snel mogelijk het huis probeert af te maken door het dak op het huis te slepen. Dit heb ik gemaakt in Unity met C#.</p>
<img src="pic/housemaking2.png" alt="">
</div>`,
`<div class="animation">
<h2>Scouting site</h2>
<img src="pic/scoutingweb.png" alt="">
<p>Ik zit op scouting als leiding en doe de opleiding software developer. Onze orginele site kunnen wij niet meer aanpassen dus werd ik gevraagd om een nieuwe site te maken voor onze scouting. De site is nog niet af, ik ben er nog aan het werken. Het uiteindelijke doel is dat wij berichten op de site kunnen zetten, dat leden foto's kunnen bekijken en kleding kunnen bestellen.</p>
<a target="_blank" href="https://scoutingkoningsbosch.000webhostapp.com/">link van de scouting site</a>
</div>`,
`<div class="animation">
<h2>IP kleur</h2>
<img src="pic/ipcolor1.jpg" alt="">
<p>Dit project haalt je ip op en laat daarbij jou "ip kleur" zien. Dit doet hij door je ip te pakken en te verdelen in 4 nummers. Deze nummers maken een rgbt kleur aan. Rood, groen, blauw en transaparant. Zo krijgt ieder ip zijn eigen "ip kleur". Dit heb ik gemaakt in Unity met C#.</p>
<img src="pic/ipcolor2.jpg" alt="">
</div>`,
`<div class="animation">
<h2>Data Visualisatie</h2>
<img src="pic/datavisualisatie.png" alt="">
<p>In deze opdracht heb ik een array visueel gemaakt. Zo kun je makkelijk zien via een grafiek hoe het zich over de tijd afspeelt. Ik heb het gemiddelde en een mediaan toegevoegd. Dit heb ik gemaakt in Python.</p>
</div>`,
`<div class="animation">
<h2>Arduino, Pi-top</h2>
<img src="pic/arduino.png" alt="">
<p>Op school hebben we ook met de arduino en de Pi-top-4 gewerkt. Ik had hier al wat ervaring mee omdat ik voor deze opleiding een elektro opleiding heb gedaan waar we ook al met arduino's moesten werken. Ze zijn leuk om mee te werken en het is ook iets anders dan coderen zelf. Met dit kun je een robot bouwen wat zelf kan bewegen/ dingen doen.</p>
<img src="pic/pi-top-4.jpg" alt="">
</div>`,
`<div class="animation">
<h2>Javascript</h2>
<img src="pic/javascript.png" alt="">
<p>We hebben meerdere opdrachten gekregen waarbij de opdrachten steeds moeilijker werden met javascript. Hier boven zie je een site die ik heb gemaakt waarbij we objects, classes en array's hebben gebruikt.</p>
</div>`,
`<div class="animation">
<h2>Portfolio</h2>
<img src="pic/selfie.png" alt="">
<p>Met deze site heb ik heel wat geleerd met javascipt, css en html. Ik heb elementen gebruikt die ik nog nooit gebruikt heb. Door deze site te maken heb ik niet alleen een portfolio maar ook een goed overzicht over wat ik kan en hoe ver ik ben gekomen. Dat geeft mij meer motivatie om steeds niewe projecten te starten of niewe idee&#235;n te bedenken. </p>
</div>`
];

function overmij(i,p) {
  if (i) {
    contentBlock.innerHTML = Projects[p];
    contentBlock.style.marginLeft = "0%";
    contentBlock.style.width = "100%";
    return;  
  }
  contentBlock.style.marginLeft = "150%";
  contentBlock.style.width = "300%";
  setTimeout(`overmij(true,${p})`,800);
}
