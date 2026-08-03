const STORAGE_KEY = "osakanian.shopping-list.items";

/** @type {{id: string, text: string, bought: boolean}[]} */
let items = loadItems();
let boughtExpanded = false;

const pendingListEl = document.getElementById("pending-list");
const boughtBlockEl = document.getElementById("bought-block");
const boughtListEl = document.getElementById("bought-list");
const boughtCountEl = document.getElementById("bought-count");
const boughtArrowEl = document.getElementById("bought-arrow");
const emptyMessageEl = document.getElementById("empty-message");
const addFormEl = document.getElementById("add-form");
const itemInputEl = document.getElementById("item-input");

function loadItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function addItem(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  items.unshift({ id: makeId(), text: trimmed, bought: false });
  saveItems();
  render();
}

function toggleItem(id) {
  const item = items.find((i) => i.id === id);
  if (!item) return;
  item.bought = !item.bought;
  saveItems();
  render();
}

function deleteItem(id) {
  items = items.filter((i) => i.id !== id);
  saveItems();
  render();
}

function buildRow(item) {
  const li = document.createElement("li");
  li.className = "item-row" + (item.bought ? " bought" : "");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.bought;
  checkbox.addEventListener("change", () => toggleItem(item.id));

  const label = document.createElement("span");
  label.className = "item-label";
  label.textContent = item.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.type = "button";
  deleteBtn.textContent = "✕";
  deleteBtn.setAttribute("aria-label", `${item.text} を削除`);
  deleteBtn.addEventListener("click", () => deleteItem(item.id));

  li.append(checkbox, label, deleteBtn);
  return li;
}

function render() {
  const pending = items.filter((i) => !i.bought);
  const bought = items.filter((i) => i.bought);

  pendingListEl.replaceChildren(...pending.map(buildRow));
  boughtListEl.replaceChildren(...bought.map(buildRow));

  boughtCountEl.textContent = String(bought.length);
  boughtBlockEl.hidden = bought.length === 0;
  boughtListEl.classList.toggle("collapsed", !boughtExpanded);
  boughtArrowEl.textContent = boughtExpanded ? "▴" : "▾";

  emptyMessageEl.hidden = items.length !== 0;
}

addFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem(itemInputEl.value);
  itemInputEl.value = "";
  itemInputEl.focus();
});

document.getElementById("toggle-bought").addEventListener("click", () => {
  boughtExpanded = !boughtExpanded;
  render();
});

render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
