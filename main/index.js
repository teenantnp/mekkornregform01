document.addEventListener('DOMContentLoaded', function () {
  // Initialize LIFF
  liff.init({
      liffId: "YOUR_LIFF_ID" // Replace with your LIFF ID
  }).then(() => {
      if (!liff.isLoggedIn()) {
          liff.login();
      }
  }).catch(err => {
      console.error('LIFF Initialization failed ', err);
  });

  // Handle form submission
  const form = document.getElementById('registration-form');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {
          first_name: formData.get('first_name'),
          last_name: formData.get('last_name'),
          nickname: formData.get('nickname'),
          school: formData.get('school'),
          contact_number: formData.get('contact_number'),
          email: formData.get('email'),
          password: formData.get('password')
      };

      // Add your form submission logic here
      console.log(data);
      // Example: Send data to your server
      fetch('/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }).then(response => response.json())
      .then(result => {
          console.log('Success:', result);
      }).catch(error => {
          console.error('Error:', error);
      });
  });
});