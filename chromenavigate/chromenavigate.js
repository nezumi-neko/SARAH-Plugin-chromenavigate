exports.init = function(SARAH, SARAH2){
    info('[ chromenavigate ] is initializing ...');
}

exports.action = function(data, callback, config, SARAH) {
 
 // Si on utilise Scribe
  SARAH.context.scribe.activePlugin('chromenavigate');
  
  var config = Config.modules.chromenavigate;
  var name = config.votre_prenom;
  
  var exec = require('child_process').exec;
 
    switch (data.val) {
		
        case "runchrome": //lance chrome le raccourcis de votre navigteur est a modifier dans le fichier .bat nomé en dessous.
            var process = '%CD%/plugins/chromenavigate/bin/runchrome.bat';
            var Txt = new Array;
            Txt[0] = "j'ouvre chrome";
            Txt[1] = "je lance chrome";
            Txt[2] = "bon surf" + name ;
            Txt[3] = "tout de suite";
            Txt[4] = "c'est fait";
            break;

        case "closechrome": //ferme google chrome
            var process = '%CD%/plugins/chromenavigate/bin/closechrome.bat';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "je l'ai fermé";
            Txt[2] = "chrome fermé";
            break;

        case "opennewwindows": //ouvre une nouvelle fenetre google chrome
            var process = '%CD%/plugins/chromenavigate/bin/chromeopennewwindows.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "nouvelle fenêtre ouverte";
            Txt[2] = "j'ouvre une nouvelle fenêtre";
            break;

        case "privatenav": //ouvre une nouvelle fenetre google chrome
            var process = '%CD%/plugins/chromenavigate/bin/chromeopenprivatenav.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "nouvelle fenêtre ouverte";
            Txt[2] = "j'ouvre une nouvelle fenêtre";
            break;

		case "ongletclose": //ferme l'onglet
            var process = '%CD%/plugins/chromenavigate/bin/ongletclose.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "onglet fermé";
            Txt[2] = "je ferme l'onglet";
            break;

		case "ongletclosereopen": //ré-ouvrir l'onglet fermé
            var process = '%CD%/plugins/chromenavigate/bin/ongletclosereopen.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "onglet réouvert";
            Txt[2] = "je réouvre l'onglet";
            break;

		case "ongletdownload": //ouvre les téléchargement
            var process = '%CD%/plugins/chromenavigate/bin/ongletdownload.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "voici les téléchargements";
            Txt[2] = "j'ouvre les téléchargements";
            break;

		case "onglethistory": //ouvre l'historique
            var process = '%CD%/plugins/chromenavigate/bin/onglethistory.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "voici l'historique";
            Txt[2] = "j'ouvre l'historique";
            break;

		case "ongletnew": //ouvre un nouvel onglet
            var process = '%CD%/plugins/chromenavigate/bin/ongletnew.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "voici un nouvel onglet";
            Txt[2] = "j'ouvre un nouvel onglet";
            break;

		case "ongletnext": //onglet suivant
            var process = '%CD%/plugins/chromenavigate/bin/ongletnext.vbs';
            var Txt = new Array;
            Txt[0] = "le voici";
            Txt[1] = "onglet précédent";
            Txt[2] = "voila";
            break;
		
		case "ongletprevious": //onglet précédent
            var process = '%CD%/plugins/chromenavigate/bin/ongletprevious.vbs';
            var Txt = new Array;
            Txt[0] = "le voici";
            Txt[1] = "onglet suivant";
            Txt[2] = "voila";
            break;
		
		case "ongletrefresh": //raffraichir l'onglet
            var process = '%CD%/plugins/chromenavigate/bin/ongletrefresh.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "onglet raffraichit";
            Txt[2] = "voila";
            break;
		
		case "ongletsavefavori": //ajouter l'onglet au favori
            var process = '%CD%/plugins/chromenavigate/bin/ongletsavefavori.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "onglet mit dans les favori";
            Txt[2] = "voila";
            break;
		
		case "ongletsearch": //ajouter l'onglet au favori
            var process = '%CD%/plugins/chromenavigate/bin/ongletsearch.vbs';
            var Txt = new Array;
            Txt[0] = "c'est fait" + name ;
            Txt[1] = "voici la barre de recherche";
            Txt[2] = "voila";
            break;
			
		case "ongletf4": //sert a naviguer dans la vue aéro ou autre
			var process = '%CD%/plugins/chromenavigate/bin/ongletf4.vbs';
			var Txt = new Array; 
			Txt[0] = "onglet fermé";
			break;
			
		case "onglet1": //sert a naviguer dans chrome : affiche onglet 1
			var process = '%CD%/plugins/chromenavigate/bin/onglet1.vbs';
			var Txt = new Array; 
			Txt[0] = "premier onglet";
			break;

		case "onglet2": //sert a naviguer dans chrome : affiche onglet 2
			var process = '%CD%/plugins/chromenavigate/bin/onglet2.vbs';
			var Txt = new Array; 
			Txt[0] = "deuxième onglet";
			break;

		case "onglet3": //sert a naviguer dans chrome : affiche onglet 3
			var process = '%CD%/plugins/chromenavigate/bin/onglet3.vbs';
			var Txt = new Array; 
			Txt[0] = "troisième onglet";
			break;

		case "onglet4": //sert a naviguer dans chrome : affiche onglet 4
			var process = '%CD%/plugins/chromenavigate/bin/onglet4.vbs';
			var Txt = new Array; 
			Txt[0] = "quatrième onglet";
			break;

		case "onglet5": //sert a naviguer dans chrome : affiche onglet 5
			var process = '%CD%/plugins/chromenavigate/bin/onglet5.vbs';
			var Txt = new Array; 
			Txt[0] = "cinquième onglet";
			break;

		case "onglet6": //sert a naviguer dans chrome : affiche onglet 6
			var process = '%CD%/plugins/chromenavigate/bin/onglet6.vbs';
			var Txt = new Array; 
			Txt[0] = "sixième onglet";
			break;

		case "onglet7": //sert a naviguer dans chrome : affiche onglet 7
			var process = '%CD%/plugins/chromenavigate/bin/onglet7.vbs';
			var Txt = new Array; 
			Txt[0] = "septième onglet";
			break;

		case "onglet8": //sert a naviguer dans chrome : affiche onglet 8
			var process = '%CD%/plugins/chromenavigate/bin/onglet8.vbs';
			var Txt = new Array; 
			Txt[0] = "huitième onglet";
			break;
 
     }

    var child = exec(process, function(error, stdout, stderr) {
        console.log(process);
    });
    Choix = Math.floor(Math.random() * Txt.length);
    callback({
        'tts': Txt[Choix]
    });

}
 