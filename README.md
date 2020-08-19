# SARAH-Plugin-chromenavigate
Plugin pour SARAH permettant de naviguer entre les onglets de google chrome

Le plugin permet de simuler les raccourcis clavier les plus utiles sur Google Chrome

Ouvrir un nouvel onglet : Ctrl + T 
Fermer l'onglet actif : Ctrl + W 
Rouvir l'onglet fermé : Ctrl + Maj + T 
Afficher l'onglet suivant : Ctrl + Tab 
Ouvrir un lien dans un nouvel onglet : Ctrl + Clic
Ouvrir un lien dans une nouvelle fenêtre : Maj + Clic
Placer le curseur dans la barre de recherche : Maj + Clic 
Actualiser la page active : Ctrl + R 
Ouvrir la barre de recherche : Ctrl + F
Accéder aux mots-clés suivants dans la barre de recherche : Ctrl + G
Accéder aux mots-clés précédents dans la barre de recherche :</i><b>  Ctrl + Maj + G
Enregistrer la page dans les favoris :</i><b>  Ctrl + D
Ouvrir la page des téléchargements :</i><b>  Ctrl + J
Ouvrir une nouvelle fenêtre :</i><b>  Ctrl + N
Fermé la fenêtre active :</i><b>  Ctrl + Maj + W 
Ouvrir un onglet de navigation privée :</i><b>  Ctrl + Maj + N
Accéder à l'historique de navigation :</i><b>  Ctrl + H

Fonctionnement du plugin :

Le xml se compose de commande de ce genre :
<item>[commande]<tag>out.action.val="[valeur]"</tag></item>
	
commande : suite de mors reconnus par le client.
valeur : valeur lu dans par le fichier js qui renseigne au fichier js ce qu'on lui demande.

Voiçi un exemple :
<item>Onglet suivant<tag>out.action.val="ongletnext"</tag></item>

Dans le fichier js les commandes sont lus de cette façon :
case "[valeur]":
var process = '%CD%/plugins/jarvis/bin/[fichier cible]';
var Txt = new Array;
Txt[0] = "phrase 1";
Txt[1] = "phrase 2";
Txt[2] = "phrase 3";
Txt[3] = "phrase 4";

Sarah exécutera alors le fichier .vbs que pointeras le fichier .js, et simuleras les raccourcis clavier correspondant à l'action demandé.
