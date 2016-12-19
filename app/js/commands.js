function commands(cmd) {  
  let command = cmd.toLowerCase();
  
  if(command.indexOf('duke') > -1) {
    talkingToDuke(command);
  }
}


const doc = document.querySelectorAll('#voice')[0];

function talkingToDuke(cmd) {
  console.log(cmd);
   if (scan(cmd, 'duke clear') || scan(cmd, 'erase')) {
      doc.innerHTML = ''; 
   }
}


function scan(message, command) {
  return message.indexOf(command) > -1;
}