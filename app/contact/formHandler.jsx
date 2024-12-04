export const handleSubmit = async (e, setFeedback) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    try {
      // Send the data to the API Gateway endpoint
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setFeedback({ type: "success", message: "Message sent successfully!" });
        e.target.reset(); // Clear the form after a successful submission
      } else {
        setFeedback({
          type: "error",
          message: result.error || "Failed to send the message.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFeedback({ type: "error", message: "An unexpected error occurred." });
    }
  };