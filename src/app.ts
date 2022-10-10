
const button:HTMLButtonElement = document.querySelector('button');
const categoryList:HTMLUListElement = document.querySelector('.category');
//--------------------

const calculatePrice = (originalPrice: number, hasDicount: boolean): number => hasDicount ? originalPrice * 0.8 : originalPrice


button.addEventListener('click', () => {
    
})