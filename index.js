function submitData(userName, userEmail) {
    const userData = {
      name: userName,
      email: userEmail
    };
  
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      const userId = data.id;
      document.body.innerHTML += `<p>User ID: ${userId}</p>`;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
  }
  