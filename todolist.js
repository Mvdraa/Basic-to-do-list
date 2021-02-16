const input = document.getElementById('listInputField');
input.onchange = addItem;

function addItem() {
  const inputText = document.getElementById('listInputField').value;
  const node = document.createElement('LI');
  const textnode = document.createTextNode(inputText);
  node.appendChild(textnode);
  let pattern = /^\s+$/;
  if (pattern.test(inputText)) {
    alert("Field can't be empty.");
  } else {
    document.getElementById('myList').appendChild(node);
  }
  clearInput();
  addClosing();
  closeTag();
  strikeTrough();
}

function addClosing() {
  const wholeList = document.getElementsByTagName('LI');
  for (let i = 0; i<wholeList.length; i++) {
    if (wholeList[i].children[0] == undefined) {
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      wholeList[i].appendChild(span);
    }
  }
}
addClosing();

function strikeTrough() {
  const strike = document.getElementsByTagName('LI');
  for (let i = 0; i<strike.length; i++) {
    strike[i].onclick = function() {
      if (strike[i].classList.contains('crossOut')) {
        strike[i].classList.remove('crossOut');
      } else {
        strike[i].classList.add('crossOut');
      }
    }
  }
}
strikeTrough();

function closeTag() {
  const closeIt = document.getElementsByClassName('close');
  for (let i = 0; i<closeIt.length; i++) {
    closeIt[i].onclick = function() {
      let parent = this.parentElement;
      parent.style.display =  'none';
    }
  }
}
closeTag();

function clearInput() {
  document.getElementById('listInputField').value = "";
}
