// Je calcule le panier
// je stock et je selectionne

const btnPlus = document.querySelector('.panier1');
console.log(btnPlus, "bouton Plus");
const btnMoins = document.querySelector('.panier');
console.log(btnMoins, "bouton Moins");
let panier = document.querySelector('.span');
console.log(panier, "ecrire");
let compteur = 0;
console.log(compteur, "compteur au démarage");
let totalPanier = 0;
let totalPanier2 = 0;
let panierTotal = document.querySelector('.panierTotal');
let panierTotal2 = document.querySelector('.panierTotal2')
let totalArticle = document.querySelector('.spanTotal');
let totalItems = 0;


//je soumet le btn plus a une action

btnPlus.addEventListener('click', function(){
    //incriminer le panier de 1
    compteur = compteur + 1;
    panier.innerHTML = compteur;
    total.style.display = 'block';
    totalPanier = totalPanier + 1.20;
    panierTotal.innerHTML = totalPanier;
    totalItems = totalItems + 1;
    totalArticle.innerHTML = totalItems;
    totalPanier2 = totalPanier2 + 1.20;
    panierTotal2.innerHTML = totalPanier2;
    
});

btnMoins.addEventListener('click', function(){
    //incriminer le panier de 1
    compteur = compteur - 1;
    console.log(compteur, "compteur apres click");
    panier.innerHTML = compteur;
    totalPanier = totalPanier - 1.20;
    panierTotal.innerHTML = totalPanier;
    totalItems = totalItems - 1;
    totalArticle.innerHTML = totalItems;
    if(totalPanier < 0) {
        panierTotal.innerText = 0;
    }
    if(totalItems < 0) {
        totalArticle.innerText = 0;
    }
});

function addPanier(){
    compteur = compteur + 1;
    compteur = compteur - 1;
}