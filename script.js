document.addEventListener('DOMContentLoaded', () => {
    // Initialize pixel grid animation
    createPixelGrid();
    
    // Initialize loading bar animation
    animateLoadingBar();
    
    // Initialize countdown
    initCountdown();
    
    // Handle form submission
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('input[type="email"]').value;
        alert(`Thank you! We'll notify ${email} when the portfolio launches.`);
        document.querySelector('input[type="email"]').value = '';
    });
    
    // Create pixel animations on mousemove
    document.addEventListener('mousemove', createPixelTrail);
});

// Create animated pixel grid
function createPixelGrid() {
    const pixelGrid = document.querySelector('.pixel-grid');
    const gridSize = 50; // Number of cells to animate
    
    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('pixel-cell');
        cell.style.position = 'absolute';
        cell.style.width = '8px';
        cell.style.height = '8px';
        cell.style.backgroundColor = getRandomColor();
        cell.style.opacity = '0';
        
        // Random position
        cell.style.left = `${Math.random() * 100}%`;
        cell.style.top = `${Math.random() * 100}%`;
        
        pixelGrid.appendChild(cell);
        
        // Animate cell
        animateCell(cell);
    }
}

// Animate individual pixel cells
function animateCell(cell) {
    const duration = 2000 + Math.random() * 3000;
    
    // Fade in
    setTimeout(() => {
        cell.style.opacity = '0.7';
        cell.style.transition = `opacity ${duration/2}ms ease-in-out`;
        
        // Fade out after half duration
        setTimeout(() => {
            cell.style.opacity = '0';
            
            // Move to new position and change color after animation
            setTimeout(() => {
                cell.style.left = `${Math.random() * 100}%`;
                cell.style.top = `${Math.random() * 100}%`;
                cell.style.backgroundColor = getRandomColor();
                
                // Repeat animation
                animateCell(cell);
            }, duration/2);
        }, duration/2);
    }, Math.random() * 1000);
}

// Create pixel trail on mouse move
function createPixelTrail(e) {
    const pixel = document.createElement('div');
    pixel.classList.add('trail-pixel');
    
    pixel.style.width = '4px';
    pixel.style.height = '4px';
    pixel.style.backgroundColor = getRandomColor();
    pixel.style.position = 'fixed';
    pixel.style.left = `${e.clientX}px`;
    pixel.style.top = `${e.clientY}px`;
    pixel.style.zIndex = '9999';
    pixel.style.pointerEvents = 'none';
    
    document.body.appendChild(pixel);
    
    // Animate and remove
    setTimeout(() => {
        pixel.style.transition = 'all 1s ease-out';
        pixel.style.transform = `translate(${(Math.random() - 0.5) * 50}px, ${(Math.random() - 0.5) * 50}px)`;
        pixel.style.opacity = '0';
        
        setTimeout(() => {
            pixel.remove();
        }, 1000);
    }, 10);
}

// Progress bar animation
function animateLoadingBar() {
    const progress = document.querySelector('.progress');
    const percentageValue = document.getElementById('percentage-value');
    let width = 0;
    
    const interval = setInterval(() => {
        if (width >= 75) {
            clearInterval(interval);
        } else {
            width++;
            progress.style.width = width + '%';
            percentageValue.textContent = width;
        }
    }, 100);
}

// Initialize countdown timer
function initCountdown() {
    // Set the launch date to 30 days from now
    const now = new Date();
    const launchDate = new Date(now);
    launchDate.setDate(now.getDate() + 30);
    
    updateCountdown(launchDate);
    
    // Update countdown every second
    setInterval(() => {
        updateCountdown(launchDate);
    }, 1000);
}

// Update countdown values
function updateCountdown(launchDate) {
    const now = new Date();
    const diff = launchDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Helper function to generate random colors from theme
function getRandomColor() {
    const colors = [
        '#ff1f8f', // Primary
        '#00f6ff', // Secondary
        '#2bff00'  // Tertiary
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}