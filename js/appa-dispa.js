// je selectionne et je stocke 
// je fais apparaître la page achat et fais disparaitre la page achat titre

const achatTitres = document.querySelector('.titres');
const achat = document.querySelector('.achatBillet');
//const achat = document.querySelector('.buyticket');
//const achat1 = document.querySelector('.infosTravel');
const bouton1 = document.querySelector('.titre');
const total = document.querySelector('.total');

bouton1.addEventListener('click', function(){
    achatTitres.style.display = 'none';
    achat.style.display = 'block';
    total.style.display = 'none';
    navBar.style.display = 'none';
    //achat1.style.display ='block';
});

// je selectionne le btn acheter pour faire apparaitre une autre page

const acheter = document.querySelector('.acheter');
const checkbox = document.querySelector('.checkbox');
const btnUtiliser = document.querySelector('.btn');
const achatBillet = document.querySelector('.achatBilletConf');
const btnPayer = document.querySelector('.payer');
const payment = document.querySelector('.payment');
const infosCard = document.querySelector('.qstt');
const infosCard2 = document.querySelector('.qst2');
const infosCard3 = document.querySelector('.question1');
const infosCard4 = document.querySelector('.qstCrypto');
const cloose = document.querySelector('.close');
const cloose2 = document.querySelector('.close2');
const navBar = document.querySelector('.nav');

acheter.addEventListener('click', function(){
    achatBillet.style.display ='block';
    checkbox.style.display ='block';
    achat.style.display = 'none';
    navBar.style.display = 'none';
})

btnPayer.addEventListener('click', function(){
    payment.style.display = 'block';
    navBar.style.display = 'none';
})

infosCard.addEventListener('click', function(){
    infosCard3.style.display = 'block';
    infosCard4.style.display = 'none';
})

infosCard2.addEventListener('click', function(){
    infosCard4.style.display = 'block';
    infosCard3.style.display = 'none';
})
//clique sur la croix infos card
cloose.addEventListener('click', function(){
    infosCard3.style.display = 'none';
})

//clique sur la croix2 infos card
cloose2.addEventListener('click', function(){
    infosCard4.style.display = 'none';
    
})

//ticket utiliser




