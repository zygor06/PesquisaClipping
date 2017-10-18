jQuery( function(){

	var a = [
		"projeto Defesa Cibernética",
		"Sistema Proteger exercito",
		"SISFRON",
		"Guarani exercito",
		"projeto Defesa Antiaérea",
		"Projeto OCOP",
		"sistema de defesa Astros 2020",
		"FAB",
		"Marinha Brasil",
		"Defesa Nacional Brasil",
		"Segurança Publica Brasil",
		"Sistema carcerario brasil"
	];

	function abrirLinks(){
		var base = "https://www.google.com.br/search?q=";
		var sufix = "&num=100&newwindow=1&safe=active&rlz=1C1GGRV_enBR752BR752&tbm=nws&source=lnt&tbs=qdr:m&sa=X&ved=0ahUKEwih-Mzcz-bWAhUIgpAKHfblASkQpwUIHg&biw=1920&bih=950&dpr=1";
		
		for(var i = 0; i < a.length; i++){
			var link = base + a[i].replace(" ", "+") + sufix;
			window.open(link);
		}	
	}

	function writeUserData(userId, name, email, imageUrl) {
	  firebase.database().ref('users/' + userId).set({
	    username: name,
	    email: email,
	    profile_picture : imageUrl
	  });
	}

	var database = firebase.database();
	console.log("Database é:");
	console.log(database);

	//abrirLinks();
	//close();

});