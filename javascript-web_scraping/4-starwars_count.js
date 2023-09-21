#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    const counter = data.results.flatMap(movie => movie.characters)
  .filter(character => character.slice(-3, -1) === '18')
  .length;
    console.log(counter);
  }
});
