// je stock et je selectionne
const btnValider = document.querySelector('.valider');
const succes = document.querySelector('.paiementAccepter');
const ticket = document.querySelector('.buyticket');
const utiliser = document.querySelector('.btn');
const monTicket = document.querySelector('.myTravel');
const btnFermer = document.querySelector('.fermer');
const validation = document.querySelector('.validate');
const metro = document.querySelector('.metro');
const metro2 = document.querySelector('.metro2');
const myTicket = document.querySelector('.myTicket');
const infos = document.querySelector('.text-correspondance');
const qrCode = document.querySelector('.qrCode');
const btnCroix = document.querySelector('.croix1');
const infosIcone = document.querySelector('.infosIcone');
const text = document.querySelector('.text-correspondance');
const header = document.querySelector('.header');
const checkbox = document.querySelector('.checkbox');

btnValider.addEventListener('click', function(){
    succes.style.display = 'block';
    payment.style.display = 'none';
    achatTitres.style.display = 'none';
    achatBillet.style.display ='none';
})

// fermer la fenetre et utiliser son ticket

btnFermer.addEventListener('click', function(){
    succes.style.display = 'none';
    ticket.style.display = 'block';
});

utiliser.addEventListener('click', function(){
monTicket.style.display ='block';
ticket.style.display = 'none';
validation.style.display = 'block';
})

metro.addEventListener('click', function(){
    qrCode.style.display = 'block';
    myTicket.style.display = 'none';
    header.style.display = 'none';

})

btnCroix.addEventListener('click', function(){
    myTicket.style.display = 'block';
    qrCode.style.display = 'none';
})

infosIcone.addEventListener('click', function(){
text.style.display = 'block';
myTicket.style.display = 'none';
});
// redirection vers la page de paiement
checkbox.addEventListener('change', function(){
    if (checkbox.checked) {
        btnPayer.style.backgroundColor = '#d33a20';
    }

});




