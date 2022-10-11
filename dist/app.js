const button = document.querySelector('button');
const todosList = document.querySelector('.todos');
const categories = ['life', 'work', 'sport', 'education'];
const todos = [
    {
        title: 'Wyrzucić śmieci',
        done: false,
        category: 'life',
    },
    {
        title: 'Pójść na siłke',
        done: true,
        category: 'sport',
    },
    {
        title: 'Nakarmić psa',
        done: false,
        category: 'work',
    },
];
function render(todos) {
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.setAttribute('class', todo.category);
        li.textContent = `${todo.title} (${todo.category})`;
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('checked', `${todo.done}`);
        li.appendChild(input);
        input.addEventListener('click', () => {
            todo.done ? (todo.done = false) : (todo.done = true);
        });
    });
}
render(todos);
const renderCategories = () => {
    const categoryContainer = document.querySelector(".categories");
    categories.forEach((category) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "category");
        input.setAttribute("value", category);
        li.appendChild(input);
        const label = document.createElement("label");
        label.textContent = category;
        li.appendChild(label);
        categoryContainer.appendChild(li);
    });
};
renderCategories();
export {};
