import { Category, Todo } from './helpers/interfaces';

const button: HTMLButtonElement = document.querySelector('button');

const todosList: HTMLUListElement = document.querySelector('.todos');

const categories: Category[] = ['life', 'work', 'sport', 'education'];

const todos: Todo[] = [
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

function render(todos: Todo[]) {
	todos.forEach((todo: Todo) => {
		const li: HTMLLIElement = document.createElement('li');
		li.setAttribute('class', todo.category);
		li.textContent = `${todo.title} (${todo.category})`;

		const input: HTMLInputElement = document.createElement('input');
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
  const categoryContainer: HTMLUListElement =
    document.querySelector(".categories");
  categories.forEach((category: Category) => {
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
