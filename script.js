const form = document.getElementById("messageForm");

    function validateForm() {
      let x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }

      x = document.forms["myForm"]["message"].value;
      if (x == "") {
        alert("Message must be filled out");
        return false;
      }

      return true;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateForm()) return;

      const name = document.forms["myForm"]["fname"].value;
      const message = document.forms["myForm"]["message"].value;

      alert("From: " + name + "\n\n" + message);
      form.reset();
    });