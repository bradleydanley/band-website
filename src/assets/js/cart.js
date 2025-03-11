// Simple shopping cart functionality
let cart = [];

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem('bandCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('bandCart', JSON.stringify(cart));
  updateCartCount();
}

// Add item to cart
function addToCart(productId, name, price, image, variant = '') {
  // Check if item already exists in cart
  const existingItem = cart.find(item => 
    item.productId === productId && item.variant === variant);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      name,
      price,
      image,
      variant,
      quantity: 1
    });
  }
  
  saveCart();
  showAddedToCartMessage(name);
}

// Update cart count display
function updateCartCount() {
  const cartCountElements = document.querySelectorAll('.cart-count');
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  cartCountElements.forEach(element => {
    element.textContent = itemCount;
    if (itemCount > 0) {
      element.classList.add('has-items');
    } else {
      element.classList.remove('has-items');
    }
  });
}

// Show message when item is added
function showAddedToCartMessage(productName) {
  const message = document.createElement('div');
  message.className = 'added-to-cart-message';
  message.textContent = `"${productName}" added to cart`;
  
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    message.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(message);
    }, 300);
  }, 2000);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
  loadCart();
  
  // Add event listeners to "Add to Cart" buttons
  document.querySelectorAll('.buy-btn, .notify-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      const productCard = this.closest('.merch-item');
      const productId = productCard.dataset.productId || Math.random().toString(36).substr(2, 9);
      const name = productCard.querySelector('h3').textContent;
      const price = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
      const image = productCard.querySelector('.merch-image img').src;
      
      addToCart(productId, name, price, image);
      e.preventDefault();
    });
  });
});