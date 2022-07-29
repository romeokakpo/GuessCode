// Fonction qui génère des nombres aléatoires
function randfunc(min ,max){
	return Math.floor(Math.random()*(max+1))+min;
}
//Principale
$(function(){
	// Choix du nombre
	let tab =[], ind = ['','','','','','','','','','','','','.','.','.','.'];
	let m = 0,n = 0,o = 0, error = 0, nombre = 0, p = 0, items = '', q = 0;
	for(let i = 0; i < 4; i++){
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
	// 1 -Deux chiffres correct et bien placés
	do{
		o = randfunc(0,3);
		p = randfunc(0,3);
		error = 0;
		if(o==p){
			error = 1;
		}
	}while(error);
	ind[o] = tab[o];
	ind[p] = tab[p];
	for(let i = 0; i< 4; i++){
		if(i!=o && i!=p){
			do{
				n = randfunc(0,9); error = 0;
				for(let j = 0 ; j < 4; j++){
					if(tab[j]===n || ind[j]===n) error = 1;
				}
			}while(error);
			ind[i]=n;
		}
	}
	// 2 - Un chiffre est correct et mal placé
	do{
		n = randfunc(0,3);
		m = randfunc(0,3);
		error = 0;
		if(n!=m){
			ind[n+4]=tab[m];
		}
		else
			error = 1;
	}while(error);
	for(let i = 4; i< 8; i++){
		if(i!=n+4){
			do{
				m = randfunc(0,9); error = 0;
				for(let j = 0 ; j < 4; j++){
					if(tab[j]===m || ind[j+4]===m)
						error = 1;
				}
			}while(error);
			ind[i]=m;
		}
	}
	//3 -Les chiffres qui sont pas dans le tableau
	for(let i = 0; i < 4; i++){
		do{
			n=randfunc(0,9);
			error = 0;
			for(let j = 0 ; j < 4; j++){
				if(tab[j]===n|| ind[j+8]===n) error = 1;
			}
		}while(error);
		ind[i+8] = n;
	}
	//4 -Les deux chiffres correct et mal placé
	do{
		n = randfunc(0,3);
		m = randfunc(0,3);
		error = 0;
		if(m!=n && m!=0){
			ind[n+12]=tab[m];
			ind[m+12]=tab[0];
		}
		else
			error = 1;
	}while(error);
	//Choix des deux autres valeurs
	for(let i = 0; i < 2;i++){
		do{// Choix de chiffre hors des valeurs vraies
			o = randfunc(0,9);
			error = 0;
				for(let j = 0 ; j < 4; j++){
					if(tab[j]===o || ind[j+12] === o) error = 1;
				}
		}while(error);
		if(i==1){
			for(let j = 0; j < 4; j++){
				if(isNaN(ind[j+12])){//Si la case est vide
					ind[j+12] = o;
				}
			}
		}
		else{
			do{
				p = randfunc(0,3);error=0;
				if(p === m || p=== n) 
					error = 1;
			}while(error);
			ind[p+12] = o;
		}
	}

//Ajout à la page
	$('.cell').html(ind[0]);
	for(let i = 1;i < 16; i++){
		items = ".cell"+i;
		$(items).html(ind[i]);
	}
	$("#formulaire").bind("submit",function(e){
		if($("#form").val()){
			if(nombre == $("#form").val()){
				alert('Bravo, vous avez trouvez le code !');
				e.preventDefault();
				document. location. reload()
			}
			else{
				alert('Code incorrect !\n Réessayez');
				if(confirm("Obtenir le résultat ?")){
					alert(nombre);
					document. location. reload()
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
