const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      name: contactForm.elements['name'].value,
      email: contactForm.elements['email'].value,
      message: contactForm.elements['message'].value,
    };

    contactStatus.textContent = 'Відправляємо...';
    contactStatus.style.color = 'black';

      if (res.ok) {
        contactStatus.textContent = 'Повідомлення надіслано ';
        contactStatus.style.color = 'green';
        contactForm.reset();
      } else {
        contactStatus.textContent = 'Помилка при відправці. Спробуй ще раз.';
        contactStatus.style.color = 'red';
      }
  });
}