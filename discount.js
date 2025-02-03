document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];
            document.querySelector('.toast-body').innerHTML = 'Discount Code: ' + e.target.dataset['code'];
            document.querySelector('.toast-header small').innerHTML = e.target.dataset['title'];
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });

    // event listener to close with escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const toastElement = document.getElementById('liveToast');
            const toastInstance = bootstrap.Toast.getInstance(toastElement);
            if (toastInstance) {
                toastInstance.hide();
            }
        }
    });
});