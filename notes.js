const bgContainer = document.getElementById("bgContainer");
let undoStack = [];
const textColor = document.getElementById("textColor");
const textSize = document.getElementById("textSize");
const fontSelect = document.getElementById("fontSelect");
const underlineToggle = document.getElementById("underlineToggle");

const bgFile = document.getElementById("bgFile");
const overlayFile = document.getElementById("overlayFile");
const pageSelect = document.getElementById("pageSelect");

let selected = null;
let currentColor = textColor.value;
let currentSize = textSize.value;
let currentFont = fontSelect.value;
let currentUnderline = false;

/* ------------------------
   ADD TEXT (Double-Click)
------------------------- */
bgContainer.addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("text") || e.target.classList.contains("overlayImg")) return;

  const rect = bgContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const span = document.createElement("span");
  span.className = "text";
  span.contentEditable = true;
  span.style.left = x + "px";
  span.style.top = y + "px";
  span.style.color = currentColor;
  span.style.fontSize = currentSize + "px";
  span.style.fontFamily = currentFont;
  span.style.textDecoration = currentUnderline ? "underline" : "none";
  span.innerText = "";

  bgContainer.appendChild(span);
  makeDraggable(span);
  setSelection(span);
  span.focus();
});

/* ------------------------
   STYLE UPDATES
------------------------- */
textColor.addEventListener("input", (e) => {
  currentColor = e.target.value;
  if (selected?.classList.contains("text")) selected.style.color = currentColor;
});
textSize.addEventListener("input", (e) => {
  currentSize = e.target.value;
  if (selected?.classList.contains("text")) selected.style.fontSize = currentSize + "px";
});
fontSelect.addEventListener("change", (e) => {
  currentFont = e.target.value;
  if (selected?.classList.contains("text")) selected.style.fontFamily = currentFont;
});
underlineToggle.addEventListener("click", () => {
  currentUnderline = !currentUnderline;
  if (selected?.classList.contains("text")) {
    selected.style.textDecoration = currentUnderline ? "underline" : "none";
  }
});

/* ------------------------
   BACKGROUND UPLOAD
------------------------- */
bgFile.addEventListener("change", (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = (ev) => {
    bgContainer.style.backgroundImage = `url(${ev.target.result})`;
    bgContainer.style.backgroundSize = "cover";
  };
  r.readAsDataURL(f);
});

/* ------------------------
   OVERLAY IMAGE UPLOAD
------------------------- */
overlayFile.addEventListener("change", (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = (ev) => {
    const img = document.createElement("img");
    img.src = ev.target.result;
    img.className = "overlayImg";
    img.style.left = "100px";
    img.style.top = "100px";
    bgContainer.appendChild(img);
    makeDraggable(img);
    setSelection(img);
  };
  r.readAsDataURL(f);
});

/* ------------------------
   SELECTION
------------------------- */
function clearSelection() {
  if (selected) selected.classList.remove("selected");
  selected = null;
}
function setSelection(el) {
  clearSelection();
  selected = el;
  el.classList.add("selected");
}
document.addEventListener("click", (e) => {
  if (!e.target.closest(".custom-toolbar")) clearSelection();
});

/* ------------------------
   DRAGGABLE
------------------------- */
function makeDraggable(el) {
  let dragging = false, offsetX = 0, offsetY = 0;
  el.addEventListener("mousedown", (e) => {
    dragging = true;
    const rect = el.getBoundingClientRect();
    const parentRect = bgContainer.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    setSelection(el);
    e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const parentRect = bgContainer.getBoundingClientRect();
    el.style.left = e.clientX - parentRect.left - offsetX + "px";
    el.style.top = e.clientY - parentRect.top - offsetY + "px";
  });
  window.addEventListener("mouseup", () => (dragging = false));
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    setSelection(el);
  });
}

/* ------------------------
   SAVE / LOAD
------------------------- */
function saveWork() {
  const data = {
    bg: bgContainer.style.backgroundImage,
    elements: [],
  };
  bgContainer.querySelectorAll(".text, .overlayImg").forEach((el) => {
    if (el.classList.contains("text")) {
      data.elements.push({
        type: "text",
        text: el.innerText,
        x: el.style.left,
        y: el.style.top,
        color: el.style.color,
        fontSize: el.style.fontSize,
        fontFamily: el.style.fontFamily,
        textDecoration: el.style.textDecoration,
      });
    } else {
      data.elements.push({
        type: "image",
        src: el.src,
        x: el.style.left,
        y: el.style.top,
      });
    }
  });
  localStorage.setItem("notesWork", JSON.stringify(data));
  alert("✅ Work saved!");
}
function loadWork() {
  const saved = localStorage.getItem("notesWork");
  if (!saved) return;
  const data = JSON.parse(saved);
  bgContainer.style.backgroundImage = data.bg;
  bgContainer.querySelectorAll(".text, .overlayImg").forEach((el) => el.remove());
  data.elements.forEach((item) => {
    if (item.type === "text") {
      const span = document.createElement("span");
      span.className = "text";
      span.contentEditable = true;
      span.innerText = item.text;
      span.style.left = item.x;
      span.style.top = item.y;
      span.style.color = item.color;
      span.style.fontSize = item.fontSize;
      span.style.fontFamily = item.fontFamily;
      span.style.textDecoration = item.textDecoration;
      bgContainer.appendChild(span);
      makeDraggable(span);
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.className = "overlayImg";
      img.style.left = item.x;
      img.style.top = item.y;
      bgContainer.appendChild(img);
      makeDraggable(img);
    }
  });
}

/* ------------------------
   DELETE SELECTED
------------------------- */
function deleteSelected() {
  if (selected) {
    selected.remove();
    selected = null;
  }
}

/* ------------------------
   PAGE STYLE
------------------------- */
pageSelect.addEventListener("change", (e) => {
  bgContainer.className = e.target.value;
});
