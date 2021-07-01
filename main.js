var add = document.querySelector('.add');
var ivesti = document.querySelector('#ivesti');
var redaguoti = document.querySelector('#redaguoti');
var tbody = document.querySelector('tbody');
var eilute; // trynimui

var numeris = document.querySelector('#numeris');
var greitis = document.querySelector('#greitis');
var laikas = document.querySelector('#laikas');
var data = document.querySelector('#data');

var nr;
var speed;
var time;
var date;

var numerisEdit = document.querySelector('#numeris_edit');
var greitisEdit = document.querySelector('#greitis_edit');
var laikasEdit = document.querySelector('#laikas_edit');
var dataEdit = document.querySelector('#data_edit');

// esamu duomenu surinkimas ir patalpinimas i lentele
duomenys.forEach(duomenys => {
    let defaultRow = `<tr>
    <td id="numerisId">${duomenys.numeris}</td>
    <td id="greitisId">${duomenys.greitis}</td>
    <td id="laikasId">${duomenys.laikas}</td>
    <td id="dataId">${duomenys.data}</td>
    <td><button type="button" class="btn btn-success edit" data-bs-toggle="modal" data-bs-target="#edit_modal">Taisyti</button></td>
    <td><button type="button" class="btn btn-danger todelete" data-bs-toggle="modal" data-bs-target="#trinti_modalas">Trinti</button></td>
    </tr>`;
    tbody.innerHTML += defaultRow;
});

// nauju duomenu pridejimas
document.addEventListener('click', function(e) {
    if (e.target.matches('.add')) {
        // isitrinam pries tai buvusias vertes formoje
        numeris.value = "";
        greitis.value = "";
        laikas.value = "";
        data.value = "";
        // pries paspaudziant, uzhoverinam and mygtuko ir jau tada patikrina, ar vertes nelygios nuliui.

    } else if (e.target.matches('#ivesti')) {
        if (nr.length > 0 && speed.length > 0 && time.length > 0 && date.length > 0) {
            var newRow = `<tr>
        <td id="numerisId">${nr}</td>
        <td id="greitisId">${speed}</td>
        <td id="laikasId">${time}</td>
        <td id="dataId">${date}</td>
        <td><button type="button" class="btn btn-success edit" data-bs-toggle="modal" data-bs-target="#edit_modal">Taisyti</button></td>
        <td><button type="button" class="btn btn-danger todelete" data-bs-toggle="modal" data-bs-target="#trinti_modalas">Trinti</button></td>
        </tr>`;
            tbody.innerHTML += newRow;
        } else {
            if (numeris.value.length <= 0) {
                numeris.style.border = 'solid 2px red';
                numeris.classList.add('red');
                numeris.setAttribute('placeholder', 'Įveskite numerį');
            }
            if (greitis.value.length <= 0) {
                greitis.style.border = 'solid 2px red';
                greitis.classList.add('red');
                greitis.setAttribute('placeholder', 'Įveskite greitį');
                greitis.value = '';
            }
            if (laikas.value.length <= 0) {
                laikas.style.border = 'solid 2px red';
                laikas.classList.add('red');
                laikas.setAttribute('placeholder', 'Įveskite laiką');
                laikas.value = '';
            }
            if (data.value.length <= 0) {
                data.style.border = 'solid 2px red';
                data.classList.add('red');
                data.setAttribute('placeholder', 'Įveskite datą');
            }
        }
    }
});

ivesti.addEventListener('mouseover', function(event) {
    console.log('mouse over event!');
    nr = numeris.value;
    speed = greitis.value;
    time = laikas.value;
    date = data.value;
    if (nr.length > 0 && speed.length > 0 && time.length > 0 && date.length > 0) {
        event.target.setAttribute('data-bs-dismiss', 'modal');
    } else {
        event.target.removeAttribute('data-bs-dismiss');
    }
});

// trynimo mygtukas
document.addEventListener('click', function(e) {
    if (e.target.matches('.todelete')) {
        eilute = e.target.closest('tr');
    } else if (e.target.matches('#istrinti')) {
        eilute.remove();
    }
});

// duomenu keitimas
document.addEventListener('click', function(e) {
    if (e.target.matches('.edit')) {
        numeris = e.target.closest('tr').querySelector('#numerisId');
        greitis = e.target.closest('tr').querySelector('#greitisId');
        laikas = e.target.closest('tr').querySelector('#laikasId');
        data = e.target.closest('tr').querySelector('#dataId');
        var numerisText = numeris.innerText;
        var greitisText = greitis.innerText;
        var laikasText = laikas.innerText;
        var dataText = data.innerText;
        numeris_edit.value = numerisText;
        greitis_edit.value = greitisText;
        laikas_edit.value = laikasText;
        data_edit.value = dataText;
    } else if (e.target.matches('#redaguoti')) {
        if (numeris_edit.value.length > 0 && greitis_edit.value.length > 0 && laikas_edit.value.length > 0 && data_edit.value.length > 0) {
            numeris.innerText = numeris_edit.value;
            greitis.innerText = greitis_edit.value;
            laikas.innerText = laikas_edit.value;
            data.innerText = data_edit.value;
        } else { //paraudoninam tuos, kurie tusti
            if (numeris_edit.value.length <= 0) {
                numerisEdit.style.border = 'solid 2px red';
                numerisEdit.classList.add('red');
                numerisEdit.setAttribute('placeholder', 'Įveskite numerį');
            }
            if (greitis_edit.value.length <= 0) {
                greitisEdit.style.border = 'solid 2px red';
                greitisEdit.classList.add('red');
                greitisEdit.setAttribute('placeholder', 'Įveskite greitį');
                greitisEdit.value = '';
            }
            if (laikas_edit.value.length <= 0) {
                laikasEdit.style.border = 'solid 2px red';
                laikasEdit.classList.add('red');
                laikasEdit.setAttribute('placeholder', 'Įveskite laiką');
                laikasEdit.value = '';
            }
            if (data_edit.value.length <= 0) {
                dataEdit.style.border = 'solid 2px red';
                dataEdit.classList.add('red');
                dataEdit.setAttribute('placeholder', 'Įveskite datą');
            }
        }
    }
});

// pries paspaudziant, uzhoverinam and mygtuko ir jau tada patikrina, ar vertes nelygios nuliui.
redaguoti.addEventListener('mouseover', function(event) {
    console.log('mouse over event!');
    if (numeris_edit.value.length > 0 && greitis_edit.value.length > 0 && laikas_edit.value.length > 0 && data_edit.value.length > 0) {
        event.target.setAttribute('data-bs-dismiss', 'modal');
    } else {
        event.target.removeAttribute('data-bs-dismiss');
    }
});


// nuimti paraudoninimus, kai pradedama ivedineti teksta
numerisEdit.addEventListener('input', function() {
    numerisEdit.style.border = '';
    numerisEdit.setAttribute('placeholder', '');
    numerisEdit.classList.remove('red');
});

greitisEdit.addEventListener('input', function() {
    greitisEdit.style.border = '';
    greitisEdit.setAttribute('placeholder', '');
    greitisEdit.classList.remove('red');
});

laikasEdit.addEventListener('input', function() {
    laikasEdit.style.border = '';
    laikasEdit.setAttribute('placeholder', '');
    laikasEdit.classList.remove('red');
});

dataEdit.addEventListener('input', function() {
    dataEdit.style.border = '';
    dataEdit.setAttribute('placeholder', '');
    dataEdit.classList.remove('red');
});

numeris.addEventListener('input', function() {
    numeris.style.border = '';
    numeris.setAttribute('placeholder', '');
    numeris.classList.remove('red');
});

greitis.addEventListener('input', function() {
    greitis.style.border = '';
    greitis.setAttribute('placeholder', '');
    greitis.classList.remove('red');
});

laikas.addEventListener('input', function() {
    laikas.style.border = '';
    laikas.setAttribute('placeholder', '');
    laikas.classList.remove('red');
});

data.addEventListener('input', function() {
    data.style.border = '';
    data.setAttribute('placeholder', '');
    data.classList.remove('red');
});




//----------------------------SCRIPTO pabaiga----------------------------------
// var [pavadinimas] = [reiksme]; - kintamojo sukurimas
// console.log('c reiksme lygi:', c); - reiksmiu atvaizdavimas
// += - prideda prie jau buvusios reiksmes
// var ilgis = document.getElementById('ilgis'); - sukuria paemima elemento pagal ID is HTML
//elementas.innerHTML = h; - iraso reiksme HTMLE
// ** 2 - pakelt kvadratu
// ** 0.5 - istraukti kvadratine reiksme

// if ([logine salyga]) {
//     console.log([TRUE condition]);
// }else 
//     console.log([FALSE condition]);
// }
// vykdo, kol suveikia!
//  salygoje gali buti papildomu loginiu israisku. pvz, OR || arba AND &&.
//  jei nera skliaustu, o pirmiau parasyta ||, paskui &&, pirmiau vykdo &&. Jei uzdedami skliaustai, tada pirma vertina tai, kas skliaustuose
// if ([var_name]) { [salyga ]} - vykdo tik tada, kai 'var_name' egzistuoja

// Math.round({var_name}) - apvalina 
// Math.round([var_name] * 100) / 100; - grazina verte su kiek skaiciu po kableliu. PALIEKA SKAICIUMI
// [var_name]=[var_name].toFixed(2);  - 2 skaiciai po kablelio. VERCIA I TEKSTA!

// var [var_name] = []; - sukuriamas masyvas. gali buti tuscias
// var [var_name] = new Array (); - sukuriamas masyvas. analogikskai. prideti galime skliausteliuose vertes
// konsoleje matosi, 'length : 0' rodo masyvo dydi - lementu skaiciu. 
// kableliu atskiriam elemetus. gali buti masyvas masyve
// console.log([var_name][sekos numeris]);
// [var_name][sekos numeris] = [nauja reiksme] - pakeiciama konkretaus elemento verte i nauja
// 4 masyvu metodai:
// 1) [var_name].pop(); - isimti 1 paskutini elementa is masyvo
// var [new_var] = [var_name].pop(); -galim isimta elementa isideti i kitnama
// 2) [var_name].push([kasidedama i gala]); - pakeiciamas elementas gale
// 3) [var_name].shift(); - išimti pirmą elementą masyve
// 4) [var_name].unshift([ka idedame i prieki]); - atvirkscias pushui

// document.querySelector([adresas iki elemento, lygiai taip, kaip su CSS])
//  jei kartojasi (tipas arba klase), tai paimamas pirmas HTMLe nuo virsaus
// document.querySelectorAll ([tipas arba klase]) - paima visus, atitinkancius kriterijus


// CIKLAI

//WHILE

// WHILE paprastas

//kintamasis pagal kuri kontroliuojam cikla
// var i = 0;
// while (i < 5) {
//     console.log(i);
//     console.log('viso gero');
//     i++;
// }

// WHILE masyve

// var m = [1, 246, 54, 354184, 287651, 2541, 326787, 65498, 31468, 1268767]

// var j = 0;
// // kintamasis, kur bus saugoma suma
// var suma = 0;
// while (j < m.length) {
//     if (m[j] < 2542) {
//         // galim naudoti 'parseInt(m[j])', kad jei butu kabutese skaicius (realiai, tekstas), verstu i teksta
//         suma += m[j];
//     }
//     j++;
//     console.log(suma);
// }
// var vidurkis = suma / m.length;
// console.log('vidurkis: ' + vidurkis);

// FOR

// var m = [1, 7, 5, 8, 67, 78, 7, 5, 21, 7]

// // kad imtu is kito galo:
// for (var k = m.length - 1; k >= 0; k--) {
//     console.log(m[k]);
// }

// FOR su ciklu isvaizdavimu
// var j = 0
// var i, suma = 0;
// for (i = 1; suma < 5; i++) {
//     j++
//     suma += i;
//     i += 2;
//     console.log('ciklas: ', j, '| suma=', suma);
//     console.log('ciklas: ', j, '| i=', i);
// }


//FUNKCIJOS
// funkcijos sukurimas
// function [funkcijos pavadinimas](parametras1, parametras2, ...) {
//     [ka daro funkcija ];
// }

// funkcijos iskvietimas
// [funkcijos pavadinimas](parametras1, parametras2, ...)

// function kubu(x) {
// var a = x * x * x;
// //priskiriama reiksme funkcijai
// return a;}
// var skaicius = kubu(4);

// var [var_name] = function() {}  - sukuriama funkcija su var_name pavadinimu


// function musuFunkcija(x, y) {
//     document.querySelector('h1').innerHTML += x * y + '<br>';
//     console.log('Funkcija buvo iskviesta!');
// }

// musuFunkcija(3, 6);
// musuFunkcija(2, 5);
// musuFunkcija(100, 7);

// function kubu(z) {
//     var a = z * z * z;
//     return a;
// }
// var skaicius = kubu(4);
// console.log(z + 'kubu yra: ' + skaicius);

//EVENTAI

// kad ivykiai issauktu funkcijas
//  bet koks elemento paspaudimas gali tureti reakcija

//document.querySelector('.class').style.color = 'black';  - keiciam stiliu


// OBJEKTAI

// var var_name = {
//     key1: 'sring1',
//     key2: ['value1', 'value2'], - paprastas masyvas
//     key3: {}, - kitas objektas
//     key4: [{}, {}] - masyvas su objektais
// }
// Isikviesti is objektu masyvo konkretu elementa:
// console.log(masyvas[sekos_numeris].key1)

// užkeiciama verte tisiog prilyginant naujai
// masyvas[sekos_numeris].key1 = nauja_verte

// pridedam naują attributą (key)
// masyvas[sekos_numeris].key5 = verte
// gali buti prilygintas kazkokiam kintamjam, kuris susikurtas anskciau


// Trinam clickas - pasiimam ta clicka, kuris buo pasirinktas ir tam cardui trinam elementa
//  e.target yra ten, kur paspaudem

// document.addEventListener('click', function(e) {
//     if (e.target.matches('.delete')) {
//         // closest pasirinka artimiausia auksciau esanti elementa
//         e.target.closest('.col-3').remove();
//     }
// });

// isirenkam visus tagus po pasirinktu elementu. k - indeksas elemento
// var maxRow = lentele.getElementsByTagName('tr')[k];

// pridedam stiliu:
// variable.style.color = "red";

// TRINAM VISUS VIENOS RUSIES TAGUS
// var tds = document.getElementsByTagName('td');
// for (var l = tds.length - 1; l >= 0; l--) {
//     // trina pats save. td parent yra tr, o tr child yra td, todel trina td
//     tds[l].parentNode.removeChild(tds[l]);
// }

// specifinio cell'o vertes paemimas:
// lenta.rows[r].cells[c].innerHTML
// pavyzdys, kaip visas reiksmes issitraukti:
//function GetCellValues() {
//    var table = document.getElementById('mytable');
//    for (var r = 0, n = table.rows.length; r < n; r++) {/
//        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
//            alert(table.rows[r].cells[c].innerHTML);
//        }
//    }
//}

// DOM

// createElement - sukuria html elementa. per atskiras eilutes kuriama klase, vertes ir tt
// pvz., sukurti div'a:
// var elementas = document.createElement('div');
// pvz., sukurti klase:
// elementas.classList.add('klase');
// pvz., ideti verte
// elementas.innerText = 'verte';

// classList:
// elementas.classList.remove('isimtina_klase');
// elementas.classList.contains('patikritna_ar_egzistuoja_klase');

// pavyzdys - uzdedama klase (su stiliumi CSSe) po veiksmo (paspaudimo ant elemento)
// var p = document.getElementById('p');
// p.addEventListener('click', function () (
//     p.classList.toggle('uzdedamos_nuimamos_klases_pavadinimas')
// ));

// AppendChild
// jei norim dadeti i vidu kita HTML! lementa (kitnamaji) I GALA
// p.appendChild(elementas);
// I PRIEKi
// p.prepend(elementas);

// jei yra tevinis elementas, po kuriuo yra veiksmas, tai stopPropagation stabdo to veiksmo taikyma child elementui
// elementas.addEventListener('click', function(e){
// e.stopPropagation();
// });

// pasiimti atributa (viena)
// a.getAttribute('href');
// a.getAttribute('class');

// pakeisti atributa:
// a.setAttribute('id', 'kuom_ji_pakeisti');

// <button type="submit"... yra formos submitas. Perkrauna puslapi
// <form ... action="naujas.html" - ne tik perkrauna, bet ir nukreipia i nurodyta puslapi
// form_selected.addEventListener('submit', function (e) {
//	e.preventDefault();            - nuima defaultini elgesi (perkrovima, nukreipima)
//});

// let ir const
// globalus
// lokalus
// bloke {} - let veikimo zona
// const yra neperrasomas. net jei galim keisti tarkim array su push ar pop, bet niekad const nepataps kazkuom kitu nei array

// generga.lt - pavyzdys su menu skiltimi

// function musu(x) {
//     return x;
// }

// const kita = function(x) {
//     return x;
// }

// musu(1);
// kita(2);

// // ARROW funkcijos

// const dar = (x) => {
//     return x * x;
// }

// dar(3);

// const foo = y => y * y; // jei grazina tik y, tai return nereikia. po => gali buti ir kazkokia formulyte. foo daro lygiai ta pati, ka ir 'dar'

// foo(4);

// // var elementas = document.getElementsByTagName('body');
// // elementas.addEventListener('click', e => {
// //     musu(1);
// //     kita(2);
// //     dar(3);
// //     foo(4);
// // });

// // MASYVU METODAI

// const m = [1, 4, 5, 6, 7, 8, 9, 2, 2, 5];

// m.forEach(function(item, index) {
//     console.log(index, item);
// });

// // gali but prasukta ir per visus divus
// const divai = document.querySelectorAll('div');

// divai.forEach((div, index) => {
//     div.innerText = `pakeistas ${index}-iojo divo tekstas`;
// });

// const ps = Array.from(document.querySelectorAll('p')); // padaro arrayju is saraso paragrafu.  arrayjus turi daugiau metodu, kuriuos galim naudoti

// const figuros = [
//     { ilgis: 1, plotis: 4, aukstis: 3 },
//     { ilgis: 2, plotis: 3, aukstis: 4 },
//     { ilgis: 3, plotis: 2, aukstis: 5 },
//     { ilgis: 4, plotis: 1, aukstis: 6 },
//     { ilgis: 5, plotis: 5, aukstis: 7 },
// ]

// figuros.forEach(figura => { //pirmas parametras, nesvarbu, kaip ji pavadinsim, yra item'as
//     let turis = figura.plotis * figura.ilgis * figura.aukstis;
//     console.log(turis);
// });

// const skaiciai = [1, 4, 5, 6, 7, 8, 9, 2, 2, 5]; // isfiltruoja masyva pagal pritaikyta salyga
// const naujiSkaiciai = skaiciai.filter(skaicius => { // filter - ka atmesti
//     return skaicius > 4;
// })

// console.log(skaiciai);
// console.log(naujiSkaiciai);
// // kitas pavyzdys
// let user = 'Jonas';
// const users = ['antanas', 'Jonas', 'Gabriele'];
// const newUsers = users.filter(vardas => {
//     return vardas != user;
// })
// console.log(users);
// console.log(newUsers);

// // matematines funkcijos
// const greiciaiMs = [2, 5, 4, 3];
// const greiciaiKmh = greiciaiMs.map(item => { //sumapinam  viena masyva su kitu (kuriame dar ir veiksmai atliekami)
//     return item * 3.6;
// });