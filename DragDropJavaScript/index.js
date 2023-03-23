const listItems = document.querySelectorAll("#list li");

for (const listItem of listItems) {
  listItem.addEventListener("dragstart", dragStart);
}

function dragStart(event) {
  event.dataTransfer.setData("text/plan", event.target.id);
}

const target = document.getElementById("target");
target.addEventListener("dragover", dragOver);
target.addEventListener("drop", drop);

function dragOver(event) {
  event.preventDefault();
  target.classList.add("border-black");
}

function drop(event) {
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text/plan");
  const item = document.getElementById(itemId);

  target.appendChild(item);
  target.classList.remove("border-black");
}
