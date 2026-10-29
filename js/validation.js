const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const type = document.getElementById('contactType').value;
        const message = document.getElementById('contactMessage').value.trim();

        const nameError = document.getElementById('contactNameError');
        const emailError = document.getElementById('contactEmailError');
        const typeError = document.getElementById('contactTypeError');
        const messageError = document.getElementById('contactMessageError');

        nameError.style.display = 'none';
        emailError.style.display = 'none';
        typeError.style.display = 'none';
        messageError.style.display = 'none';

        let isValid = true;

        if (name.length < 3) {
            nameError.style.display = 'block';
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.style.display = 'block';
            isValid = false;
        }

        if (type === '') {
            typeError.style.display = 'block';
            isValid = false;
        }

        if (message.length < 10) {
            messageError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            const recipient = 'info@yourdomain.co.za';
            const subject = type + ' from ' + name;
            const body = 'Name: ' + name + '\n' +
                         'Email: ' + email + '\n' +
                         'Message type: ' + type + '\n\n' +
                         message;

            window.location.href = 'mailto:' + recipient +
                '?subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body);
        }
    });
}

const enquiryForm = document.getElementById('enquiryForm');

if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const itemSelect = document.getElementById('itemSelect'); // Dropdown menu element
        const selectedOption = itemSelect.options[itemSelect.selectedIndex];

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const itemError = document.getElementById('itemError');
        const enquiryResponse = document.getElementById('enquiryResponse');

        nameError.style.display = 'none';
        emailError.style.display = 'none';
        itemError.style.display = 'none';
        enquiryResponse.style.display = 'none';

        let isValid = true;

        if (fullName === '' || fullName.length < 3) {
            nameError.style.display = 'block';
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.style.display = 'block';
            isValid = false;
        }

        if (itemSelect.value === "") {
            itemError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            document.getElementById('resPrice').innerText = selectedOption.getAttribute('data-price');
            document.getElementById('resStatus').innerText = selectedOption.getAttribute('data-status');
            enquiryResponse.style.display = 'block';

            enquiryForm.reset();
        }
    });
}
const products = [
    { name: '4-Person Camping Tent', category: 'Tents & Shelters', price: 1500, description: 'Heavy-duty family tent with a waterproof flysheet.' },
    { name: 'Hiking Dome Tent', category: 'Tents & Shelters', price: 950, description: 'Lightweight two-person dome for trail trips.' },
    { name: 'Folding Camp Chair', category: 'Camping Furniture', price: 320, description: 'Foldable chair with a cup holder and carry bag.' },
    { name: 'Utility Camp Table', category: 'Camping Furniture', price: 540, description: 'Aluminium roll-top table that packs flat.' },
    { name: '4x4 Recovery Kit', category: 'Off-Road Gear', price: 1850, description: 'Strap, shackles and gloves for vehicle recovery.' },
    { name: 'Heavy-Duty Roof Rack', category: 'Off-Road Gear', price: 3200, description: 'Steel roof rack built for rough terrain.' },
    { name: 'Two-Burner Gas Stove', category: 'Camp Kitchen', price: 780, description: 'Portable stove with wind guards.' },
    { name: '60L Hiking Backpack', category: 'Hiking Gear', price: 850, description: 'Padded multi-day pack with a rain cover.' },
    { name: 'Waterproof Hiking Boots', category: 'Hiking Gear', price: 1200, description: 'Ankle-support boots with a grippy sole.' }
];

const productList = document.getElementById('productList');
const searchInput = document.getElementById('productSearch');
const sortSelect = document.getElementById('productSort');
const resultCount = document.getElementById('resultCount');

function renderProducts() {
    const term = searchInput.value.trim().toLowerCase();

    const results = products.filter(function (product) {
        return product.name.toLowerCase().includes(term) ||
               product.category.toLowerCase().includes(term) ||
               product.description.toLowerCase().includes(term);
    });

    const sortChoice = sortSelect.value;
    results.sort(function (a, b) {
        if (sortChoice === 'price-asc') return a.price - b.price;
        if (sortChoice === 'price-desc') return b.price - a.price;
        return a.name.localeCompare(b.name);
    });

    productList.textContent = '';

    results.forEach(function (product) {
        const card = document.createElement('div');
        card.className = 'product-card';

        const title = document.createElement('h3');
        title.textContent = product.name;

        const category = document.createElement('p');
        category.className = 'product-category';
        category.textContent = product.category;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.className = 'product-price';
        price.textContent = 'R ' + product.price.toFixed(2);

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(price);
        productList.appendChild(card);
    });

    if (results.length === 0) {
        resultCount.textContent = 'No products match your search.';
    } else {
        resultCount.textContent = 'Showing ' + results.length + ' of ' + products.length + ' products.';
    }
}

if (productList) {
    searchInput.addEventListener('input', renderProducts);
    sortSelect.addEventListener('change', renderProducts);
    renderProducts();
}