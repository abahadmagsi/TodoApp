var inpt = document.getElementById("inp");
function addItem() {
  if (inpt.value.length < 1) {
    alert("Please add some todo.");
    return;
  }
  //creating list item
  var li = document.createElement("li");
  li.setAttribute("class", "liDiv");

  //creating h2
  var h2 = document.createElement("h2");
  h2.innerText = inpt.value;

  //creating div
  var div = document.createElement("div");
  div.setAttribute("class", "btnDiv");
  div.setAttribute("id", "btnDiv");

  //creating btns
  var editbtn = document.createElement("button");
  editbtn.innerText = "Edit";
  editbtn.setAttribute("class", "btn");
  editbtn.setAttribute("onclick", "editItem(this)");
  //creating dlt btn
  var dltBtn = document.createElement("button");
  dltBtn.innerText = "Delete";
  dltBtn.setAttribute("class", "btn");
  dltBtn.setAttribute("onclick", "dltItem(this)");

  div.appendChild(editbtn);
  div.appendChild(dltBtn);

  li.appendChild(h2);
  li.appendChild(div);

  var ul = document.getElementById("listItems");
  ul.appendChild(li);

  inpt.value = "";
}

function dltItem(cItem) {
  cItem.parentNode.parentNode.remove();
}

function editItem(cItem) {
  var updateValue = prompt(
    "Enter new value",
    cItem.parentNode.parentNode.firstChild.innerText
  );
  if (updateValue.length < 1) {
    alert("Please enter value.");
    return;
  }

  cItem.parentNode.parentNode.firstChild.innerText = updateValue;
}

function deleteAll() {
  document.getElementById("listItems").innerHTML = "";
}
