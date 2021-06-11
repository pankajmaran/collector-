const cheerio=require('cheerio');
const fetch=require('node-fetch');
const saveFile=require('./makeFile');
const url='https://www.codechef.com/users/';
const username=["pankajmaran", "amolgupta7", "sauravgpt", "yashkaril4", "mayank0010", "ryugaraj"];
const result=[];
username.forEach( start);

function getFromCodeChef(resp, user_nm){
    const new_url=url+user_nm;
    fetch(new_url)
    .then( res => res.text())
    .then( body=> resp(body) );
    
}


function getDetails(data){
    const $=cheerio.load(data);
    // children('header').children('h2').text();
    let details=[];
    let username = $('.user-details >ul> li > span > span' ).text();
     details.push({ "username" : username});
     let stars = $('.user-details >ul> li > span> span ' ).html();
     details.push({ "stars" : stars});
     let name = $('.user-details-container > header > h2').text();
     details.push({ "name" : name});
     let rating= $('.rating-number').text();
     details.push({ "rating" : rating});
     let highestRating= $('.rating-header > small ').text();
     details.push({ "Highest_rating" : highestRating});

     let questionSolvedFully= $('.content > h5 ').text();
     details.push({ "question_Solved" : questionSolvedFully});
    // console.log(details);
    //data path
     result.push(details);
      console.log(result);
    saveFile(details, "codechef.txt");
    return details;
}



function start( username)
{

    getFromCodeChef(getDetails, username);
// console.log(result);
    
}


const express = require('express')
const app = express()

app.get('/', (req, res) => res.download('codechef.txt'))
app.listen(3000, () => console.log('Server ready'))