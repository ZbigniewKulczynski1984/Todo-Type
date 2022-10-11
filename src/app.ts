import {Category, Todo} from "./helpers/interfaces"

// const button:HTMLButtonElement = document.querySelector('button');
// const categoryList:HTMLUListElement = document.querySelector('.category');
const todosList:HTMLUListElement = document.querySelector('.todos');

const categories: Category[] = ["life", "work", "sport", "education"];

const todos: Todo[] = [
    {
      title: "Wyrzucić śmieci",
      done: false,
      category: "life",
    },
    {
      title: "Pójść na siłke",
      done: true,
      category: "sport",
    },
    {
      title: "Nakarmić psa",
      done: false,
      category: "work",
    },
  ];