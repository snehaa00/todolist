document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-button");
  const inputBox = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", () => {
    const task = inputBox.value.trim();
    if (task !== "") {
      const li = document.createElement("li");
      li.textContent = task;

      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.className = "cross-btn";

      removeButton.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(removeButton);
      todoList.appendChild(li);
      inputBox.value = "";
    }
  });
});
