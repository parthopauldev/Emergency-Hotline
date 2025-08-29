function getElement(id) {
    let element= document.getElementById(id);
    return element
}
// loveCount add 
let serviceCards=getElement('service-cards')
serviceCards. addEventListener('click',function (e) {
//   if (e.target.tagName ==='I') {
// let loveCount =getElement('love-count') ;
// let  loveCountNumber= parseInt(loveCount.innerText);
// loveCountNumber++;
// loveCount.innerText=loveCountNumber


  
//   } 
  })
  // coin subtract feature 
  serviceCards.addEventListener('click',function (e) {
    // loveCount add 
  if (e.target.tagName ==='I') {
let loveCount =getElement('love-count') ;
let  loveCountNumber= parseInt(loveCount.innerText);
loveCountNumber++;
loveCount.innerText=loveCountNumber


  
  } 


    if (e.target.className.includes('call-btn')) {
        // coin subtract feature 
       let getCoin=getElement('coin-number') ;
    let getCoinNumber=parseInt(getCoin.innerText) ;
    let title=e.target.parentNode.parentNode.children[1].innerText;
    let CallNumber=e.target.parentNode.parentNode.children[3].innerText;

if (getCoinNumber<=0) {
  alert('You do not have enough coin, you have to need 20 coin for call')
  return
}
    
      alert(title+' '+CallNumber
        
      )
   
    let newCoinNumber=getCoinNumber-20;
    getCoin.innerText=newCoinNumber;
// call history feature 
let time = new Date().toLocaleTimeString();
let newElement = document.createElement('div');
newElement.innerHTML = `
  <div class="flex justify-between items-center p-[16px] mb-[8px] bg-[#ece9e9] rounded-[8px]">
    <div>
      <p class="text-[18px] font-semibold">${title}</p>
      <p class="text-[18px] text-[gray]">${CallNumber}</p>
    </div>
    <p class="text-[18px] text-[#111111]">${time}</p>
  </div>
`;

document.getElementById('History-box').appendChild(newElement);
    }
    
  })
  // history clear feature 
  let clearHistoryBox=getElement('clear-btn') ;
  clearHistoryBox.addEventListener('click',function () {
    document.getElementById('History-box').innerHTML='';
  })
  // copy feature 
    serviceCards.addEventListener('click',function (e) {
      if (e.target.className.includes('copy-btn')) {

  let CallNumber=e.target.parentNode.parentNode.children[3].innerText;
 alert('Number has been copied'+' '+CallNumber)
  let copyElement=getElement('copy-number') ;
  let copyNumber=parseInt(copyElement.innerText) ;
  copyNumber ++
  copyElement.innerText=copyNumber;
  // copy feature 
}
    })
