// Fonction qui génère des nombres aléatoires
function randfunc(min ,max){
	return Math.floor(Math.random()*(max+1))+min;
}
//Principale
$(function(){
	// Choix du nombre
	let tab =[], ind = ['','','','','','','','','','','','','','',''];
	let m = 0,n = 0,o = 0, error = 0, nombre = 0, p = 0, items = '';
	for(let i = 0; i < 3; i++){
		do{
			n=randfunc(0,9);
			error = 0;
			for(let j = 0 ; j < i; j++){
				if(tab[j]===n) error = 1;
			}
		}while(error);
		tab[i] = n;
	}
	nombre = tab.join('');
	// 1 - Un chiffre correct et bien placé
	o = randfunc(0,2);
	ind[o] = tab[o];
	for(let i = 0; i< 3; i++){
		if(i!=o){
			do{
				n = randfunc(0,9); error = 0;
				for(let j = 0 ; j < 3; j++){
					if(tab[j]===n || ind[j]===n) error = 1;
				}
			}while(error);
			ind[i]=n;
		}
	}
	// 2 - Un chiffre est correct et mal placé
	do{
			n = randfunc(0,2);
			error = 0;
			if(n!=0){
				ind[n+3]=tab[0];
			}
			else
				error = 1;
	}while(error);
	for(let i = 3; i< 6; i++){
		if(i!=n+3){
			do{
				m = randfunc(0,9); error = 0;
				for(let j = 0 ; j < 3; j++){
					if(tab[j]===m || ind[j+3]===m)
						error = 1;
				}
			}while(error);
			ind[i]=m;
		}
	}
	//3 -Les deux chiffres correct et mal placé
		do{
			n = randfunc(0,2);
			m = randfunc(0,2);
			error = 0;
			if(m!=n && m!=1){
				ind[n+6]=tab[m];
				ind[m+6]=tab[1];
			}
			else
				error = 1;
		}while(error);
	do{// Choix du troisieme nombre hors des valeurs vraies
		o = randfunc(0,9); error = 0;
			for(let j = 0 ; j < 3; j++){
				if(tab[j]===o) error = 1;
			}
	}while(error);
	do{
		p = randfunc(0,2);error=0;
		if(p === m || p=== n) 
			error =1;
	}while(error);
	ind[p+6] = o;
	//4 -Les chiffres qui sont pas dans le tableau
	for(let i = 0; i < 3; i++){
		do{
			n=randfunc(0,9);
			error = 0;
			for(let j = 0 ; j < 3; j++){
				if(tab[j]===n|| ind[j+9]===n) error = 1;
			}
		}while(error);
		ind[i+9] = n;
	}
	// 5- Un chiffre est correct et mal placé
	do{
			n = randfunc(0,2);
			m = randfunc(0,2);
			error = 0;
			if(n!=m){
				ind[n+12]=tab[m];
			}
			else
				error = 1;
	}while(error);
	for(let i = 12; i< 15; i++){
		if(i!=n+12){
			do{
				m = randfunc(0,9); error = 0;
				for(let j = 0 ; j < 3; j++){
					if(tab[j]===m || ind[j+12]===m) error = 1;
				}
			}while(error);
			ind[i]=m;
		}
	}
	$('.cell').html(ind[0]);
	for(let i = 1;i < 15; i++){
		items = ".cell"+i;
		$(items).html(ind[i]);
	}
	//Vérification des résultats
	$("#formulaire").bind("submit",function(e){
	if($("#form").val()){
		if(nombre == $("#form").val()){
			alert('Bravo, vous avez trouvez le code !');
			e.preventDefault();
			document. location. reload();
		}
		else{
			alert('Code incorrect !\n Réessayez');
			if(confirm("Obtenir le résultat ?"))
			{
				alert(nombre);
				e.preventDefault();
				document. location. reload();
			}
				
			else
				e.preventDefault();
			}
	}
	else{
		alert('Entrez le code !');
		e.preventDefault();
	}
	});
});
//@Auteur: KAKPO Yaovi Roméo
