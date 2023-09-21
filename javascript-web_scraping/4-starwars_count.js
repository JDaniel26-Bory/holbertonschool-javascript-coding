#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body).results;
    const count = data.filter((movie) =>
      movie.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
    );
    console.log(count.length);
  }
});
