let del = document.getElementsByClassName("delete");
for (let i = 0; i < del.length; i++) {
  del[i].onclick = function () {
    let line = this.parentElement;
    line.style.display = "none";
  };
}

//for lining-through

function lineThrough() {
  this.classList.toggle("mystyle");
}
let task = document.getElementsByClassName("label");

for (let i = 0; i < task.length; i++) {
  task[i].addEventListener("click", lineThrough);
}

//adding new task
function addTask() {
  let newTask = document.createElement("div");
  newTask.className = "tasks";
  let inputValue = document.getElementById("txt").value;
  let label = document.createElement("label");
  label.className = "label";
  let text = document.createTextNode(inputValue);
  label.appendChild(text);

  if (!inputValue) {
    alert("add a valid task!");
  } else {
    let check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    check.className = "box";
    newTask.appendChild(check);

    newTask.appendChild(label);
    document.getElementById("txt").value = "";

    let x = document.createElement("INPUT");
    x.setAttribute("type", "button");
    x.className = "delete";
    x.value = "X";
    newTask.appendChild(x);
    document.getElementById("list").appendChild(newTask);

    for (let i = 0; i < del.length; i++) {
      del[i].onclick = function () {
        let line = this.parentElement;
        line.style.display = "none";
      };
    }
    let box = document.getElementsByClassName("box");
    for (let i = 0; i < task.length; i++) {
      let f = i;
      task[i].addEventListener("click", lineThrough);
      task[i].setAttribute("for", f);
      box[i].setAttribute("id", f);
    }
  }
}
document.getElementById("add").addEventListener("click", addTask);
document.getElementById("txt").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
