document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const currentDate = new Date();
    document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Sample recent bookings data
    const recentBookings = [
        {
            car: 'BMW X5',
            from: '2024-02-15',
            to: '2024-02-18',
            total: 255,
            status: 'active'
        },
        {
            car: 'Mercedes C-Class',
            from: '2024-02-10',
            to: '2024-02-12',
            total: 150,
            status: 'completed'
        },
        {
            car: 'Audi R8',
            from: '2024-02-20',
            to: '2024-02-22',
            total: 400,
            status: 'pending'
        }
    ];

    // Populate recent bookings table
    const bookingsTable = document.getElementById('recentBookingsTable');
    recentBookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.car}</td>
            <td>${booking.from}</td>
            <td>${booking.to}</td>
            <td>$${booking.total}</td>
            <td><span class="status-badge status-${booking.status}">${booking.status}</span></td>
        `;
        bookingsTable.appendChild(row);
    });

    // Sample featured cars
    const featuredCars = [
        {
            name: 'Tesla Model S',
            price: 120,
            image: 'image/tesla s.avif'
        },
        {
            name: 'Porsche 911',
            price: 150,
            image: 'image/porsche.webp'
        },
        {
            name: 'Range Rover Sport',
            price: 140,
            image: 'image/range rover.avif'
        }
    ];

    // Populate featured cars
    const featuredCarsContainer = document.getElementById('featuredCars');
    featuredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'featured-car-card';
        carCard.innerHTML = `
            <div class="featured-car-image">
                <img src="${car.image}" alt="${car.name}">
            </div>
            <div class="featured-car-info">
                <h3>${car.name}</h3>
                <p class="featured-car-price">$${car.price}/day</p>
            </div>
        `;
        featuredCarsContainer.appendChild(carCard);
    });
}); 