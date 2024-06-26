//create the objects

const circle_user = {
    user_class : "Circle",
    userID : 1258223,
    username : "Circle",
    lastname : "Quarts",
    fullname : function() {
        return this.username + " " +  this.lastname;
    },
    age : 45,
    country : "Sweden",
    language : "German",
    hair_color : "brown",
    eyes_color : "black",
    hobbies_word : "Hobbies",
    hobbies_ul : {
        hobbies_01 : "Read books",
        hobbies_02 : "play videogames",
        hobbies_03 : "programming",
        hobbies_04 : "watch videos"
    },
    fav_animals_word : "Favourite Animals",
    fav_animals_ul : {

        fav_animals_01 : "Elephant",
        fav_animals_02 : "Squirrel",
        fav_animals_03 : "Dolphing",
        fav_animals_04 : "Snake"
    },
    fav_fruits_word : "Favourite Fruits",
    fav_fruits_ul : {
        fav_fruits_01 : "Apple",
        fav_fruits_02 : "Pear",
        fav_fruits_03 : "Watermelon",
        fav_fruits_04 : "Orange"
    }
}

// display data

document.querySelector('.userclass').innerHTML = circle_user["user_class"];
document.querySelector('.user_ID').innerHTML = circle_user.userID;
document.querySelector('.show_username').innerHTML = circle_user.username;
document.querySelector('.show_lastname').innerHTML = circle_user.lastname;
document.querySelector('.show_fullname').innerHTML = circle_user.fullname();
document.querySelector('.show_age').innerHTML = circle_user.age;
document.querySelector('.show_country').innerHTML = circle_user.country;
document.querySelector('.show_language').innerHTML = circle_user.language;
document.querySelector('.show_hair_color').innerHTML = circle_user.hair_color;
document.querySelector('.show_eyes_color').innerHTML = circle_user.eyes_color;

// list data

document.querySelector('.show_hobbies_title').innerHTML = circle_user.hobbies_word;

document.querySelector('.show_hobbies_01').innerHTML = circle_user.hobbies_ul.hobbies_01;
document.querySelector('.show_hobbies_02').innerHTML = circle_user.hobbies_ul.hobbies_02;
document.querySelector('.show_hobbies_03').innerHTML = circle_user.hobbies_ul.hobbies_03;
document.querySelector('.show_hobbies_04').innerHTML = circle_user["hobbies_ul"]["hobbies_04"];

document.querySelector('.show_fav_animals_title').innerHTML = circle_user.fav_animals_word;

document.querySelector('.show_fav_animals_01').innerHTML = circle_user["fav_animals_ul"]["fav_animals_01"];
document.querySelector('.show_fav_animals_02').innerHTML = circle_user["fav_animals_ul"]["fav_animals_02"];
document.querySelector('.show_fav_animals_03').innerHTML = circle_user["fav_animals_ul"]["fav_animals_03"];
document.querySelector('.show_fav_animals_04').innerHTML = circle_user["fav_animals_ul"]["fav_animals_04"];

document.querySelector('.show_fav_fruits_title').innerHTML = circle_user.fav_fruits_word;

let mq = circle_user.fav_fruits_ul;

let mw = mq.fav_fruits_01;

document.querySelector('.show_fav_fruits_01').innerHTML = mw;

let me = circle_user.fav_fruits_ul;

let mr = me.fav_fruits_02;

document.querySelector('.show_fav_fruits_02').innerHTML = mr;

let mt = circle_user.fav_fruits_ul;

let my = mt.fav_fruits_03;

document.querySelector('.show_fav_fruits_03').innerHTML = my;

let mu = circle_user.fav_fruits_ul;

let mi = mu.fav_fruits_04;

document.querySelector('.show_fav_fruits_04').innerHTML = mi;