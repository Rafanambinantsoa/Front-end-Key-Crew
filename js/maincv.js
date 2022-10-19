/* Changer dynamiquement la photo, le nom et le prenom */

const photo = document.querySelector('.photoProfils');
const nom = document.querySelector('.nom');
const prenom = document.querySelector('.prenom');
const role = document.querySelector('.role');
const tel = document.querySelector('.telCv');
const email = document.querySelector('.emailCv');

console.log(role)
// recuperer le hash element
const hash = window.location.hash
// Changer la photo
photo.src = `img/${hash.slice(1,hash.length)}.jpg`;
// Changer le nom prenom

if (hash === '#Arnel') {
    nom.textContent = 'MAHERIMANAMPISOA';
    prenom.textContent = 'Sarobidy Arnel';
    role.textContent = 'Web dev'
    email.textContent = 'Jharinel10@gmail.com';
    tel.textContent = '033 90 290 07';
} else if (hash === '#Karim') {
    nom.textContent = 'RAFANAMBINANTSOA';
    prenom.textContent = 'Maminirina Karim';
    role.textContent = 'Developpeur PHP';
    email.textContent = 'Karim@gmail.com';
    tel.textContent = '033 15 936 52';
} else if (hash === '#Safidy') {
    nom.textContent = 'RAHERINOTOAVINA';
    prenom.textContent = 'Safidy Mariel';
    role.textContent = 'Developpeur JS et PYTHON';
    email.textContent = 'raherinotoavinasa@gmail.com';
    tel.textContent = '034 51 143 23';
}