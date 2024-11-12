document.querySelectorAll('.quant-cont').forEach(item => {
    item.addEventListener('click', function (event) {
        // Remove the 'selected' class from all items
        document.querySelectorAll('.quant-cont').forEach(innerItem => {
            innerItem.classList.remove('selected');
        });
        // Add the 'selected' class to the clicked item
        item.classList.add('selected');
        // Update the price
        const price = item.getAttribute('data-price');
        document.getElementById('price').innerText = '€' + price;
    });
});