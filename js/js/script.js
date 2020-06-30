"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    estimation = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = estimation; 

console.log(personalMovieDB);