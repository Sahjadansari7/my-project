// Sample car data (in a real application, this would come from a backend)
const cars = [
    {
        id: 1,
        brand: 'BMW',
        model: 'X5',
        year: 2023,
        category: 'SUV',
        price: 85,
        seats: 5,
        transmission: 'Automatic',
        fuelType: 'Petrol',
        image: 'image/bmw.avif',
        description: 'Luxury SUV with advanced features and comfortable interior.'
    },
    {
        id: 2,
        brand: 'Mercedes',
        model: 'C-Class',
        year: 2022,
        category: 'Sedan',
        price: 75,
        seats: 5,
        transmission: 'Automatic',
        fuelType: 'Petrol',
        image: 'image/mercedes.jpg',
        description: 'Elegant sedan with premium features and smooth ride.'
    },
    {
        id: 3,
        brand: 'Porsche',
        model: '911',
        year: 2023,
        category: 'Sports',
        price: 150,
        seats: 2,
        transmission: 'Automatic',
        fuelType: 'Petrol',
        image: 'image/porsche.webp',
        description: 'High-performance sports car with iconic design.'
    },
    {
        id: 4,
        brand: 'Audi',
        model: 'R8',
        year: 2023,
        category: 'Sports',
        price: 200,
        seats: 2,
        transmission: 'Automatic',
        fuelType: 'Petrol',
        image: 'image/audi r8.avif',
        description: 'Supercar with stunning performance and sophisticated design.'
    },
    {
        id: 5,
        brand: 'Tesla',
        model: 'Model S',
        year: 2023,
        category: 'Luxury',
        price: 120,
        seats: 5,
        transmission: 'Automatic',
        fuelType: 'Electric',
        image: 'image/tesla s.avif',
        description: 'Premium electric sedan with cutting-edge technology.'
    },
    {
        id: 6,
        brand: 'Range Rover',
        model: 'Sport',
        year: 2023,
        category: 'SUV',
        price: 140,
        seats: 5,
        transmission: 'Automatic',
        fuelType: 'Diesel',
        image: 'image/range rover.avif',
        description: 'Luxury SUV combining comfort with off-road capability.'
    },
    {
        id: 7,
        brand: 'Toyota',
        model: 'Camry',
        year: 2023,
        category: 'Sedan',
        price: 45,
        seats: 5,
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        image: 'image/toyota.jpg',
        description: 'Reliable sedan with excellent fuel efficiency.'
    },
    {
        id: 8,
        brand: 'Lamborghini',
        model: 'Huracán',
        year: 2023,
        category: 'Sports',
        price: 300,
        seats: 2,
        transmission: 'Automatic',
        fuelType: 'Petrol',
        image: 'image/lamborgini.jpg',
        description: 'Exotic supercar with breathtaking performance.'
    },
    {
        id: 9,
        brand: 'Honda',
        model: 'CR-V',
        year: 2023,
        category: 'SUV',
        price: 55,
        seats: 5,
        transmission: 'Automatic',
        fuelType: 'Petrol',
        image: 'image/honda.webp',
        description: 'Compact SUV perfect for family adventures.'
    },
    {
        id: 10,
        brand: 'Rolls-Royce',
        model: 'Ghost',
        year: 2023,
        category: 'Luxury',
        price: 400,
        seats: 4,
        transmission: 'Automatic',
        fuelType: 'Petrol',
        image: 'image/rolls royce.jpg',
        description: 'Ultimate luxury sedan with unmatched refinement.'
    },
 
   
];

// DOM Elements
const carsGrid = document.getElementById('carsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const modal = document.getElementById('carModal');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayCars(cars);
    initializeFilters();
});

// Display cars in the grid
function displayCars(carsToShow) {
    carsGrid.innerHTML = '';
    
    carsToShow.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.brand} ${car.model}">
                <span class="car-category">${car.category}</span>
            </div>
            <div class="car-info">
                <h3 class="car-title">${car.brand} ${car.model} ${car.year}</h3>
                <div class="car-specs">
                    <span><i class="fas fa-user"></i> ${car.seats} seats</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                    <span><i class="fas fa-gas-pump"></i> ${car.fuelType}</span>
                </div>
                <div class="car-price">
                    <span class="price-tag">$${car.price}/day</span>
                    <a href="#" class="rent-button" data-car-id="${car.id}">Rent Now</a>
                </div>
            </div>
        `;
        
        carCard.addEventListener('click', () => showCarDetails(car));
        carsGrid.appendChild(carCard);
    });
}

// Initialize filters
function initializeFilters() {
    // Search functionality
    searchInput.addEventListener('input', filterCars);
    
    // Category filter
    categoryFilter.addEventListener('change', filterCars);
    
    // Price filter
    priceFilter.addEventListener('change', filterCars);
}

// Filter cars based on search and filter criteria
function filterCars() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;
    
    const filteredCars = cars.filter(car => {
        const matchesSearch = (car.brand + ' ' + car.model).toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || car.category === selectedCategory;
        const matchesPrice = matchesPriceRange(car.price, selectedPrice);
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    displayCars(filteredCars);
}

// Helper function to check if car price matches selected range
function matchesPriceRange(price, range) {
    if (!range) return true;
    
    switch(range) {
        case '0-50': return price <= 50;
        case '51-100': return price > 50 && price <= 100;
        case '101+': return price > 100;
        default: return true;
    }
}

// Show car details in modal
function showCarDetails(car) {
    const modalContent = modal.querySelector('.car-details');
    modalContent.innerHTML = `
        <h2>${car.brand} ${car.model} ${car.year}</h2>
        <div class="car-detail-content">
            <img src="${car.image}" alt="${car.brand} ${car.model}">
            <div class="car-detail-info">
                <p class="description">${car.description}</p>
                <div class="specs-grid">
                    <div class="spec-item">
                        <i class="fas fa-car"></i>
                        <span>Category: ${car.category}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-user"></i>
                        <span>Seats: ${car.seats}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-cog"></i>
                        <span>Transmission: ${car.transmission}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-gas-pump"></i>
                        <span>Fuel Type: ${car.fuelType}</span>
                    </div>
                </div>
                <div class="rental-action">
                    <span class="detail-price">$${car.price}/day</span>
                    <button class="rent-now-btn" onclick="rentCar(${car.id})">Rent Now</button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal when clicking the close button or outside the modal
document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Rent car function
function rentCar(carId) {
    // Add rental logic here
    window.location.href = `booking.html?car=${carId}`;
} 