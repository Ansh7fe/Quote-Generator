const text=document.querySelector('.quote') ;
const author=document.querySelector('.author') ;
const next=document.querySelector('.next');
 
 
 const getquote= async()=> {
   const response= await fetch('https://type.fit/api/quotes');
   const quotes=await response.json();
   const number=Math.floor(Math.random()*quotes.length);
   const item=quotes[number];
//    console.log(item);
const quote=item.text;
const authorName=item.author;
text.innerText=quote
author.innerText=authorName;
next.addEventListener('click',getquote); 
}
getquote( )