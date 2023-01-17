function addElement() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Si Huynh");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("main");
  currentDiv.appendChild(newDiv);
}

addElement();
