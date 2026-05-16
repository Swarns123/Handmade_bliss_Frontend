let wishlistItems = [];

// Login Modal Functions
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    resetLoginForm();
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    resetLoginForm();
}

function resetLoginForm() {
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('emailPhone').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginTitle').textContent = 'Sign In';
}

function nextStep() {
    const emailPhone = document.getElementById('emailPhone').value.trim();
    
    if (!emailPhone) {
        alert('Please enter your email or phone number');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailPhone) && !/^\d{10}$/.test(emailPhone.replace(/[^\d]/g, ''))) {
        alert('Please enter a valid email or phone number');
        return;
    }

    document.getElementById('emailPhoneDisplay').value = emailPhone;
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    document.getElementById('loginTitle').textContent = 'Enter Password';
}

function backStep() {
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('loginTitle').textContent = 'Sign In';
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁️';
    }
}

function login() {
    const password = document.getElementById('password').value;
    
    if (!password) {
        alert('Please enter your password');
        return;
    }

    alert('Login successful! Welcome to Handmade Bliss 🎉');
    closeLoginModal();
}

// Wishlist Functions
function openWishlist() {
    document.getElementById('wishlistModal').style.display = 'block';
}

function closeWishlist() {
    document.getElementById('wishlistModal').style.display = 'none';
}

function addToWishlist(productName, price) {
    wishlistItems.push({ name: productName, price: price });
    updateWishlistDisplay();
    alert(productName + ' added to wishlist! ❤️');
}

function removeFromWishlist(index) {
    wishlistItems.splice(index, 1);
    updateWishlistDisplay();
}

function updateWishlistDisplay() {
    const wishlistContent = document.getElementById('wishlistContent');
    
    if (wishlistItems.length === 0) {
        wishlistContent.innerHTML = `
            <div class="wishlist-empty">
                <p>❤️ Your wishlist is empty</p>
                <p style="font-size: 0.9rem; color: #999;">Start adding your favorite products!</p>
            </div>
        `;
    } else {
        let html = '';
        wishlistItems.forEach((item, index) => {
            html += `
                <div class="wishlist-item">
                    <div>
                        <div class="wishlist-item-name">${item.name}</div>
                        <div class="wishlist-item-price">₹${item.price}</div>
                    </div>
                    <button class="remove-wishlist" onclick="removeFromWishlist(${index})">✕</button>
                </div>
            `;
        });
        wishlistContent.innerHTML = html;
    }
}

// Contact Modal Functions
function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}

function call(number) {
    window.location.href = `tel:${number}`;
}

function whatsapp(number) {
    const cleanNumber = number.replace(/[^\d]/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
}

function sendEmail(email) {
    window.location.href = `mailto:${email}`;
}

// Navigation Functions
function shopNow() {
    alert('Redirecting to products page...');
    // window.location.href = 'products.html';
}

function openSearch() {
    alert('Profile functionality coming soon!');
}

function openCart() {
    alert('Cart is empty');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const wishlistModal = document.getElementById('wishlistModal');
    const contactModal = document.getElementById('contactModal');
    
    if (event.target === loginModal) {
        closeLoginModal();
    }
    if (event.target === wishlistModal) {
        closeWishlist();
    }
    if (event.target === contactModal) {
        closeContactModal();
    }
}