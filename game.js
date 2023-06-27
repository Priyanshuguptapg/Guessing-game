let squares = document.querySelectorAll('.square'); 
let answer = '';
let mainbanner = document.querySelector('.headings');

const resetgame = (numofsquares) =>{
   for(let obj of squares){
      let r = Math.floor(Math.random()*256);
      let g = Math.floor(Math.random()*256);
      let b = Math.floor(Math.random()*256);
   
      obj.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
   }
   
   let randIdx = Math.floor(Math.random()*numofsquares);
   let ansSquare = squares[randIdx];
   answer = ansSquare.style.backgroundColor;
   
   let hintcolor = document.querySelector('.colorr');
   hintcolor.innerText = answer.toUpperCase();
   
   mainbanner.style.backgroundColor = 'steelblue';
};

resetgame(6);

for(let sq of squares){
   sq.addEventListener('click', () => {
     if(sq.style.backgroundColor === answer){
      for(let box of squares){
         box.style.backgroundColor = answer;
      }
      
      mainbanner.style.backgroundColor = answer;
    
      let backcolor = answer.slice(4, answer.length-1);
      let arr = backcolor.split(',');
      let r = parseInt(arr[0].trim()),
          g = parseInt(arr[1].trim()),
          b = parseInt(arr[2].trim());

          if(r>=150 || g>=150 || b>=150){
            mainbanner.style.color = 'black';
          }else{
            mainbanner.style.color = 'white';
          }
   
     } else{
      sq.style.backgroundColor = 'black';
     }
   });
}

let easyBtn = document.querySelector('.mode1');
let hardBtn = document.querySelector('.mode2');
let row = document.querySelector('.row2');

easyBtn.addEventListener('click', ()=>{
resetgame(3);
row.style.display = 'none';

easyBtn.classList.add('selected');
hardBtn.classList.remove('selected');
});

hardBtn.addEventListener('click', ()=>{
resetgame(6);
row.style.display = 'flex';

hardBtn.classList.add('selected');
easyBtn.classList.remove('selected');
});

let resetbtn = document.querySelector('.reset');

resetbtn.addEventListener('click', ()=>{
   if(easyBtn.classList.contains('selected')){
      resetgame(3);
   }else{
      resetgame(6);
   }
});