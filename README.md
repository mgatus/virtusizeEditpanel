# Account Panel with Toast

A responsive account panel built with [Tailwind CSS](https://tailwindcss.com/), [Alpine.js](https://alpinejs.dev/), and [Font Awesome](https://fontawesome.com/).  
It features editable user details, password strength checking, Gravatar integration, and toast notifications.

---

## Features

- **Responsive two-column layout** (30% left, 70% right)
- **Edit mode** for user details (first name, last name, email, password)
- **Validation** with tooltip-style error messages
- **Password strength meter** (using [zxcvbn](https://github.com/dropbox/zxcvbn))
- **Show/hide password** toggle
- **Gravatar** profile image with tooltip
- **Toast notifications** for save actions
- **Custom color variables** via CSS

---

## File Structure

- `index.html` – Main HTML file, includes Tailwind, Alpine.js, and markup for the panel
- `main.js` – Alpine.js component logic (form state, validation, password strength, toast)
- `gravatar.js` – Utility to get Gravatar image URL from email
- `README.md` – This documentation
- `wireframe.pdf` – **Wireframe/UI design created using Figma (see below)**

---

## Usage

1. **Clone or download this repository.**
2. **Important:**  
   This project **requires running on a local or remote server** (such as VS Code Live Server, Python's `http.server`, or any static hosting) to work properly.  
   Opening `index.html` directly in your browser (`file://`) will cause errors with ES modules and some features will not work.
3. Open `index.html` in your browser **via a server**.

---

## Live Demo

You can also access the deployed project here:  
**[https://mgatus.github.io/virtusizeEditpanel/](https://mgatus.github.io/virtusizeEditpanel/)**

---

## Customization

### Colors

Custom colors are defined in the `<style>` block in `index.html`:

```css
:root {
  --default-color: #2A2A2A;
  --label-color: #696969;
}
```
Use `.bg-default` and `.text-default` classes to apply these colors.

### Gravatar

The profile image uses Gravatar, based on the user's email.  
Hovering over the image shows a tooltip with the email.

> **Note:** To display your own profile image, you need to [sign up at Gravatar.com](https://gravatar.com) and associate your email address with an avatar. Otherwise, a default identicon will be shown.

### Validation

- **First Name, Last Name, Email**: Required fields.
- **Email**: Must be a valid email format.
- **Errors**: Shown as tooltips at the top right of each input when editing.

### Password

- **Strength meter**: Shows strength as you type (Very Weak → Very Strong).
- **Show/Hide**: Toggle password visibility when editing.
- **Masked**: Password is always hidden when not editing.

---

## Code Documentation

### main.js

- **Form State**: Holds user data and UI state (`editing`, `showPassword`, etc.)
- **Validation**: Checks required fields and email format, sets error messages.
- **Password Strength**: Uses zxcvbn to score password.
- **Gravatar**: Computes Gravatar URL from email.
- **Toast Store**: Global Alpine store for showing toast notifications.

### gravatar.js

- Exports `getGravatarUrl(email)` which returns a Gravatar image URL for the given email.

---

## Wireframe / UI Design

The wireframe and UI for this project were created using Figma.  
You can find the exported PDF in this repository as:

- **`Edit Panel Virtusize - Wireframe + Ui.pdf`**

Open this file to view the original design and layout reference.

---

## Dependencies

- [Tailwind CSS CDN](https://cdn.tailwindcss.com/)
- [Alpine.js CDN](https://cdn.skypack.dev/alpinejs)
- [zxcvbn CDN](https://cdn.skypack.dev/zxcvbn)
- [Font Awesome CDN](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css)
- [blueimp-md5 CDN](https://cdn.skypack.dev/blueimp-md5) (for Gravatar)

---

## License

MIT (or specify your license here)