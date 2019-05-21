const form = document.querySelector('.chatForm');
const sendBtn = document.querySelector('#sendBtn');
const textInput = document.querySelector('#textInput');
const chatDisplay = document.querySelector('.chatDisplay');
// const chatSelf = document.querySelector('.self');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  //get value for the inputed text
  let newText = document.querySelector('#textInput').value;

  //append newText to new p
  let p = document.createElement('p');
  p.className = 'chatMessage';
  let pNode = document.createTextNode(newText);
  p.appendChild(pNode);
  //create an userPhoto class div and append that with with onto a parent div

  let avt = document.createElement('div');
  avt.setAttribute("class", "userPhoto");

  //create a div with class name self and chat
  let chatDiv = document.createElement('div');
  chatDiv.className = 'chat self';

  //append p and avt to chatDiv
  chatDiv.appendChild(p);
  chatDiv.appendChild(avt);
  console.log(p);

  chatDisplay.appendChild(chatDiv);

});
