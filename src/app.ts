
const button:HTMLButtonElement = document.querySelector('button');
const categoryList:HTMLUListElement = document.querySelector('.category');

const calculatePrice = (originalPrice: number, hasDiscount: boolean): number => hasDiscount ? originalPrice * 0.8 : originalPrice

button.addEventListener('click', () => {
    const hasDiscount = Math.random()  > 0.5 ? true : false;
    const price = +document.querySelector('input').value
    console.log(`you have to pay ${calculatePrice(price, hasDiscount)}`);

})
