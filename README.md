# SARAH-Plugin-chromenavigate
Plugin pour SARAH permettant de naviguer entre les onglets de google chrome

<p>
<h2>Le plugin permet de simuler les raccourcis clavier les plus utiles sur Google Chrome</h2><br/>
			<br/>
			<ul>
				<li><i>Ouvrir un nouvel onglet :</i><b> Ctrl + T </b></li>
				<li><i>Fermer l'onglet actif :</i><b>  Ctrl + W </b></li>
				<li><i>Rouvir l'onglet fermé :</i><b>  Ctrl + Maj + T </b></li>
				<li><i>Afficher l'onglet suivant :</i><b>  Ctrl + Tab </b></li>
				<li><i>Ouvrir un lien dans un nouvel onglet :</i><b>  Ctrl + Clic </b></li>
				<li><i>Ouvrir un lien dans une nouvelle fenêtre :</i><b>  Maj + Clic </b></li>
				<li><i>Placer le curseur dans la barre de recherche :</i><b>  Maj + Clic </b></li>
				<li><i>Actualiser la page active :</i><b>  Ctrl + R </b></li>
				<li><i>Ouvrir la barre de recherche :</i><b>  Ctrl + F </b></li>
				<li><i>Accéder aux mots-clés suivants dans la barre de recherche :</i><b>  Ctrl + G </b></li>
				<li><i>Accéder aux mots-clés précédents dans la barre de recherche :</i><b>  Ctrl + Maj + G </b></li>
				<li><i>Enregistrer la page dans les favoris :</i><b>  Ctrl + D </b></li>
				<li><i>Ouvrir la page des téléchargements :</i><b>  Ctrl + J </b></li>
				<li><i>Ouvrir une nouvelle fenêtre :</i><b>  Ctrl + N </b></li>
				<li><i>Fermé la fenêtre active :</i><b>  Ctrl + Maj + W </b></li>
				<li><i>Ouvrir un onglet de navigation privée :</i><b>  Ctrl + Maj + N </b></li>
				<li><i>Accéder à l'historique de navigation :</i><b>  Ctrl + H </b></li>
			</ul>	
	<h2>Fonctionnement du plugin :</h2></br>
      		Le xml se compose de commande de ce genre :</br>
      			<item>[commande]<tag>out.action.val="[valeur]"</tag></item></br>
	<br/>
			<b>commande :</b> suite de mors reconnus par le client.</br>
			<b>valeur :</b> valeur lu dans par le fichier js qui renseigne au fichier js ce qu'on lui demande.</br>
			<br/>
			Voiçi un exemple
			<item>Onglet suivant<tag>out.action.val="ongletnext"</tag></item></br>
			<br/>
			Dans le fichier js les commandes sont lus de cette façon :</br>
      			case "[valeur]":<br/>
			var process = '%CD%/plugins/jarvis/bin/[fichier cible]';<br/>
			var Txt = new Array;</br>
			Txt[0] = "phrase 1";</br>
			Txt[1] = "phrase 2";</br>
			Txt[2] = "phrase 3";</br></br>
			Txt[3] = "phrase 4";</br>
			<br/>			
			<b>Sarah exécutera alors le fichier .vbs que pointeras le fichier .js, et simuleras les raccourcis clavier correspondant à l'action demandé.</b></br>
			
      		</p>
