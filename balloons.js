document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById("dob");
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: "MM-dd",
  });

  // uncheck all boxes by default (Firefox)
  document
    .querySelectorAll(".form-check-input")
    .forEach((c) => (c.checked = false));

  // event listener for check/uncheck
  document
    .getElementById("checkbox-card")
    .addEventListener("change", function (e) {
      if (e.target.classList.contains("form-check-input")) {
        const elem = document.getElementById(e.target.id + "Img");
        elem.style.visibility = "visible";
        elem.classList.remove(
          "animate__animated",
          "animate__bounceInUp",
          "animate__bounceOutUp"
        );
        e.target.checked
          ? elem.classList.add("animate__animated", "animate__bounceInUp")
          : elem.classList.add("animate__animated", "animate__bounceOutUp");
      }
    });

  const attentionSeekers = [
    "bounce",
    "flash",
    "pulse",
    "rubberBand",
    "shake",
    "tada",
    "wobble",
    "heartBeat",
    "jello",
  ]; // List of attention seeker animations

  function getRandomAnimation() {
    const randomIndex = Math.floor(Math.random() * attentionSeekers.length);
    return attentionSeekers[randomIndex];
  }

  const element = document.querySelector(".greeting"); // Get your target element
  const randomAnimation = getRandomAnimation();
  element.classList.add("animate__animated", `animate__${randomAnimation}`); // Apply the random animation class

  // Toast notification for no balloons selected
  document.getElementById("submit").addEventListener("click", function () {
    const selectedBalloons = document.querySelectorAll(
      ".form-check-input:checked"
    );
    if (selectedBalloons.length === 0) {
      const toastElement = document.getElementById("liveToast");
      const toast = new bootstrap.Toast(toastElement, { autohide: false });
      toast.show();

      // Add event listener to close toast with escape key
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          const toastInstance = bootstrap.Toast.getInstance(toastElement);
          if (toastInstance) {
            toastInstance.hide();
          }
        }
      });
    }
  });

  // Event listener for select/deselect all balloons
  document
    .getElementById("selectDeselectAll")
    .addEventListener("change", function () {
      const checkboxes = document.querySelectorAll(".form-check-input");
      const selectAll = this.checked;
      checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll;
        // Dispatch change event to trigger individual checkbox logic
        const event = new Event("change", { bubbles: true });
        checkbox.dispatchEvent(event);
      });
    });

  // Event listeners for mouseover and mouseout on checkbox labels
  const labels = document.querySelectorAll(".form-check-label");
  labels.forEach((label) => {
    label.addEventListener("mouseover", function () {
      const color = label.htmlFor;
      document.querySelector(".greeting").style.color = color;
    });
    label.addEventListener("mouseout", function () {
      document.querySelector(".greeting").style.color = "slategray";
    });
  });
});
