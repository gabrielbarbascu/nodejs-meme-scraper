//var axios = require('axios')
import axios from 'axios';
import cheerio from 'cheerio';
import chunk from 'chunk';
import fs from 'fs';
import https from 'https';

//const https = require('https');
//const cheerio = require('cheerio');
//const fs = require('fs');

//const https = require('https');
//const cheerio = require('cheerio');

const path = 'memes';

fs.access(path, (error) => {
  // To check if the given directory
  // already exists or not
  if (error) {
    // If current directory does not exist
    // then create it
    fs.mkdir(path, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('New Directory created successfully !!');
      }
    });
  } else {
    console.log('Given Directory already exists !!');
  }
});
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (res) {
    console.log(res);
    // ... do something with the response
  })
  .catch(function (error) {
    console.log(error);
  });
const url = 'https://memegen-link-examples-upleveled.netlify.app/';
https.get(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    const $ = cheerio.load(data);

    const images = [];

    $('img').each((index, element) => {
      images.push($(element).attr('src'));
    });
    images.length = 10;
    console.log(images);
  });
});
