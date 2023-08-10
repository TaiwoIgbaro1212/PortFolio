const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Regular expression for validating email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  if (name === "") {
    swal("Please enter your name.");
    nameInput.focus();
    return false;
  }

  if (!emailPattern.test(email)) {
    swal("warning","Please enter a valid email address.");
    emailInput.focus();
    return false;
  }

  if (message === "") {
    swal("Please enter your message.");
    messageInput.focus();
    return false;
  }

  try {
    const response = await fetch("https://teeclassic.onrender.com/contacts", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const json = await response.json();
    console.log(json);

    // If all validations pass, you can submit the form here.
    // contactForm.submit();
    swal("success", "Your message has been sent successfully!", "success");
  } catch (err) {
    console.log(err);
    alert("An error occurred and the form could not be submitted.", "error");
  }
  console.log(message);
});
