const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert(`Error: ${result.error || 'Failed to send message.'}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    alert('An unexpected error occurred.');
  }
};

  