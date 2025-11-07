// To-Do.js (robust localStorage + radio working)

// DOM refs
let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");
let taskCount = document.querySelector("#taskCount");
let deleteAll = document.querySelector("#deleteAll");

// --------- Add New Task ----------
addBtn.addEventListener("click", function () {
  let text = taskInput.value.trim();
  if (text === "") {
    alert("Please enter a task");
    return;
  }

  addTaskToDOM(text, false);
  taskInput.value = "";
  updateCount();
  saveTasks();
});

// --------- Delete All ----------
deleteAll.addEventListener("click", function () {
  taskList.innerHTML = "";
  updateCount();
  localStorage.removeItem("tasks");
});

// --------- Helper: create task DOM (keeps structure stable) ----------
function addTaskToDOM(text, completed) {
  // li
  let task = document.createElement("li");
  task.classList.add("task-item");

  // radio/check image (left)
  let radioBtn = document.createElement("img");
  radioBtn.classList.add("radio-btn");
  radioBtn.src = completed ? "check.png" : "radio.png";
  task.appendChild(radioBtn);

  // text wrapped in a span (stable selector)
  let span = document.createElement("span");
  span.textContent = text;
  task.appendChild(span);

  // icons container
  let taskIcons = document.createElement("div");
  taskIcons.classList.add("icons-container");

  let editIcon = document.createElement("img");
  editIcon.src = "Edit.png";
  editIcon.classList.add("edit-btn");

  let deleteIcon = document.createElement("img");
  deleteIcon.src = "Delete.png";
  deleteIcon.classList.add("delete-btn");

  taskIcons.appendChild(editIcon);
  taskIcons.appendChild(deleteIcon);
  task.appendChild(taskIcons);

  // apply completed style if needed
  if (completed) {
    span.style.textDecoration = "line-through";
    span.style.color = "gray";
  }

  // append to list
  taskList.appendChild(task);

  // ===== radio toggle =====
  radioBtn.addEventListener("click", function () {
    if (span.style.textDecoration === "line-through") {
      span.style.textDecoration = "none";
      span.style.color = "black";
      radioBtn.src = "radio.png";
    } else {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
      radioBtn.src = "check.png";
    }
    saveTasks();
  });

  // ===== edit functionality =====
  editIcon.addEventListener("click", function () {
    // put current text in input
    taskInput.value = span.textContent;
    addBtn.textContent = "Edit";

    // use a one-time handler so multiple listeners don't stack
    const doEdit = function () {
      let newText = taskInput.value.trim();
      if (newText !== "") {
        span.textContent = newText;
        taskInput.value = "";
        addBtn.textContent = "Add";
        saveTasks();
      }
      // restore add button behavior
      addBtn.removeEventListener("click", doEdit);
      // reattach the normal add behavior (we rely on the original listener already present)
    };

    // attach one-time click to perform edit
    addBtn.addEventListener("click", doEdit, { once: true });
  });

  // ===== delete functionality =====
  deleteIcon.addEventListener("click", function () {
    task.remove();
    updateCount();
    saveTasks();
  });
}

// --------- Save tasks to localStorage ----------
function saveTasks() {
  let arr = [];
  document.querySelectorAll(".task-item").forEach(li => {
    let span = li.querySelector("span");
    let radio = li.querySelector(".radio-btn");
    let text = span ? span.textContent.trim() : "";
    // completed if radio shows check.png OR span has line-through
    let completed = span && (span.style.textDecoration === "line-through" || (radio && radio.src && radio.src.includes("check.png")));
    arr.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(arr));
}

// --------- Load tasks from localStorage ----------
function loadTasks() {
  let raw = localStorage.getItem("tasks");
  if (!raw) return;
  try {
    let arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return;
    // clear existing
    taskList.innerHTML = "";
    arr.forEach(item => {
      addTaskToDOM(item.text,item.completed);
    });
    updateCount();
  } catch (e) {
    console.error("Failed to parse saved tasks:", e);
  }
}

// --------- Update counter ----------
function updateCount() {
  taskCount.textContent = `${taskList.children.length} Items Total`;
}

// Load on start
window.addEventListener("load", loadTasks);
