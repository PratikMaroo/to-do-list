const item = document.querySelector("#item");
const todobox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        const inputValue = this.value.trim();
        if (inputValue !== "") {
            addTodo(inputValue);
            this.value = "";
            saveData();
        }
    }
});

// todobox.addEventListener("click", function(event) {
//     const target = event.target;
//     if (target.tagName === "LI") {
//         target.classList.toggle("done");
//         saveData();
//     }
// });

todobox.addEventListener("click", function(event) {
    const target = event.target;
    if (target.classList.contains("fa-circle-xmark")) {
        target.parentNode.remove();
        saveData();
    }
    else {
    target.classList.toggle("done");
   saveData();
    }
});

function addTodo(event) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${event} <i class="fa-regular fa-circle-xmark"></i>`;
    todobox.appendChild(listItem);
}

function saveData() {
    localStorage.setItem("data", todobox.innerHTML);
}

function showData() {
    todobox.innerHTML = localStorage.getItem("data");
}

window.onload = function() {
    showData();
};
