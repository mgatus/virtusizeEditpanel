import Alpine from "https://cdn.skypack.dev/alpinejs";
import zxcvbn from "https://cdn.skypack.dev/zxcvbn";
import { getGravatarUrl } from "./gravatar.js";

// Make Alpine available globally
window.Alpine = Alpine;

// Alpine component for the account form
Alpine.data("accountForm", () => ({
  // Form fields
  firstName: "John",
  lastName: "Doe",
  email: "mrvgatus@gmail.com",
  password: "",
  showPassword: false, // Toggle for password visibility
  strength: 0,         // Password strength score
  editing: false,      // Edit mode toggle

  // Initialize with a secure password and calculate its strength
  init() {
    this.password = this.generateSecurePassword();
    this.updateStrength();
  },

  // Generate a random secure password
  generateSecurePassword(length = 16) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~";
    return Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => chars[x % chars.length])
      .join("");
  },

  // Get a label for the password strength
  get strengthLabel() {
    return ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"][
      this.strength
    ];
  },

  // Update the password strength score using zxcvbn
  updateStrength() {
    this.strength = zxcvbn(this.password).score;
  },

  // Validation error messages for each field
  errors: {
    firstName: "",
    lastName: "",
    email: "",
  },

  // Get the gravatar URL for the current email
  get gravatar() {
    return getGravatarUrl(this.email);
  },

  // Validate form fields and set error messages
  validate() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.errors.firstName =
      this.firstName.trim() === "" ? "First name is required" : "";
    this.errors.lastName =
      this.lastName.trim() === "" ? "Last name is required" : "";
    if (this.email.trim() === "") {
      this.errors.email = "Email is required";
    } else if (!emailPattern.test(this.email.trim())) {
      this.errors.email = "Please enter a valid email address";
    } else {
      this.errors.email = "";
    }
  },

  // Check if any validation errors exist
  hasErrors() {
    return Object.values(this.errors).some((msg) => msg);
  },

  // Save handler: validate and show toast if successful
  save() {
    this.validate();
    if (!this.hasErrors()) {
      this.editing = false;
      this.$store.toast.trigger("Saved successfully!");
    }
  },
}));

// Alpine store for toast notifications (global)
Alpine.store("toast", {
  show: false,
  message: "",
  timeout: null,
  // Trigger a toast with a message
  trigger(message) {
    this.message = message;
    this.show = true;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => (this.show = false), 5000);
  },
});

// Start Alpine.js
Alpine.start();
