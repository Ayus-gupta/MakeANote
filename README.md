# MakeANote

## 🌟 Overview
The **Handwritten Notes App** is a web-based digital note-taking tool that allows users to **write, edit, and organize notes** on a classic notebook-style interface. It delivers a natural **handwriting experience** with custom fonts, paper styles, and background uploads. The app is responsive and works on **desktop and mobile devices**. 📱💻

---

## 💡 Concept
The app aims to replicate the **classic notebook experience** digitally:

- 🖊️ Click or double-click anywhere on the page to create handwritten-style text.  
- ✨ Supports multiple **handwritten fonts** for a personal feel.  
- 📄 Different **page types** mimic traditional paper:
  - 📌 Lined Paper
  - 🗂 Grid Paper
  - 📃 Plain White
  - 🟨 Yellow Notepad
- 🌈 Users can **upload custom backgrounds** for flexibility.  
- ✍️ Text is **editable after writing**.  
- 🔄 Users can drag and position text or images anywhere on the page.  

---

## 🚀 Features

### 1. Classic Paper Styles
- 📖 Mimics traditional notebook pages with lines, grids, or yellow notepad look.  
- 🎨 Page style can be changed dynamically from the toolbar.  

### 2. Handwritten Fonts
- Multiple Google Fonts integrated:
  - ✍️ Dancing Script
  - ✍️ Indie Flower
  - ✍️ Patrick Hand
  - ✍️ Gloria Hallelujah
  - ✍️ Shadows Into Light  
- 🖌 Font, size, and color can be changed from the toolbar.  

### 3. Editable Notes
- ✏️ Double-click existing text to edit anytime.  
- 🤏 Drag and reposition text easily.  
- 🔹 Optional underline styling for emphasis.  

### 4. Overlay Images
- 🖼 Insert images or diagrams on the page.  
- ↔️ Images are draggable and resizable.  

### 5. Custom Background Upload
- 🌄 Upload any image as a page background.  
- 📜 Supports multiple page formats for a personalized workspace.  

### 6. Save and Load
- 💾 All notes and images can be saved locally in **localStorage**.  
- 📂 Work can be imported back for later editing.  

### 7. Responsive Design
- 📱 Fully responsive toolbar and writing area.  
- 🔧 Elements resize dynamically for smaller screens.  

### 8. Keyboard Shortcuts
- ⌫ Delete / Backspace to remove selected text or images.  
- 🔄 Optional **Ctrl + Z / Ctrl + Y** (Undo/Redo) can be implemented in `notes.js`.  

---

## 🗂 File Structure

- `index.html` – main structure: toolbar, writing area, page selection.  
- `style.css` – styling of toolbar, text, paper backgrounds, mobile responsiveness.  
- `notes.js` – app logic: text creation, editing, dragging, saving, loading, page switching.  

---

## 🎯 How to Use

1. 🔍 Open `index.html` in a web browser.  
2. 🎨 Use the **toolbar** to select:
   - Text color, size, and handwritten font.  
   - Paper style (lined, grid, plain, yellow).  
   - Upload background or overlay images.  
3. 🖊️ Click on the page to create text. Double-click to edit.  
4. 🤏 Drag text or images to reposition.  
5. 💾 Use **Save** to store your work locally.  
6. 🔄 Use **Load/Import** to retrieve previously saved work.  

---

## 🛠 Technologies Used
- **HTML5** – Structure and content.  
- **CSS3** – Styling, responsive layout, classic paper backgrounds.  
- **JavaScript** – Dynamic features: text editing, drag-and-drop, save/load.  
- **Bootstrap 5** – Responsive toolbar and inputs.  
- **Google Fonts** – Handwritten font support.  

---

## 🌱 Future Enhancements
- ↩️ Add **Undo/Redo (Ctrl+Z / Ctrl+Y)** functionality.  
- 📤 Export notes as PDF or image.  
- 📑 Multi-page support with page navigation.  
- 👥 Collaborative editing for multiple users.  

---

## 📄 License
This project is open for **personal and educational use**. Modify freely for your own projects.  

