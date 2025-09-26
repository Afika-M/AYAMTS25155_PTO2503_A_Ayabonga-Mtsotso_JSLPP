# Kanban Task Management App

A responsive Kanban-style task management app built with **HTML, CSS, and modular JavaScript (ES6 modules)**.  
The app supports **task creation, editing, deletion, persistence with localStorage**, and fetches initial tasks dynamically from an API.  
It includes a **sidebar toggle**, **mobile menu**, and **dark/light theme switcher**.  

Deployed on **Netlify** → [Live Demo](https://akanbanboard.netlify.app/)  

---

## 🚀 User Stories Implemented

### 📂 Deployment & Setup
- Prepare project files for clean deployment.  
- Deploy app to **Netlify** with a **custom domain**.  
- Verify features (task CRUD, modals, sidebar, theming, localStorage) after deployment.  

### 📋 Task Management
- Fetch tasks from an API (instead of hardcoded).  
- Show **loading state** while fetching.  
- Display an **error message** if fetching fails.  
- Save fetched tasks into **localStorage** for persistence.  
- Display tasks in their correct columns: **To Do, Doing, Done**.  
- **Task modal** supports:
  - Edit **title** → update immediately on board + storage.  
  - Edit **description** → saved + retrievable.  
  - Change **status** → move task to new column.  
  - **Delete with confirmation** → confirm = remove, cancel = keep.  

### 🧭 Sidebar & Mobile Menu
- Sidebar matches the Figma design.  
- **Toggleable sidebar** (show/hide).  
- Show **sidebar icon** when hidden.  
- On **mobile**, sidebar works as a **modal menu** accessible via logo.  
- Mobile menu includes **theme toggle** and closes with **X button**.  

### 🎨 Theming
- **Theme toggle switch** for dark/light mode.  
- Toggle works in **both sidebar and mobile menu**.  
- Correct **contrast** in dark mode (per Figma).  
- Consistent styling across all screen sizes.  

### 🛠 Developer Stories
- Code split into **modular ES6 files**:  
  - `localStorage.js` → persistence  
  - `render.js` → task rendering  
  - `modalHandlers.js` → modal logic  
  - `sidebarManager.js` → sidebar logic  
  - `theme.js` → theme toggle  
- Each module has **single responsibility**.  
- Functions documented with **JSDoc comments**.  

---

## 📂 Project Structure

project-root/
│── index.html
│── styles.css
│── main.js
│── utils/
│ └── localStorage.js
│── ui/
│ ├── render.js
│ ├── modalHandlers.js
│ ├── sidebarManager.js
│ ├── taskCounter.js
│ ├── taskElement.js
│ └── theme.js
│── tasks/
│ ├──taskManager.js
│ └── formUtils.js
│── api/
│ └── taskApi.js
│── images/
│ ├──dark-modeModal.png
│ ├── desktopSidebar.png
│ ├── lightVsDarkMode.png
│ └── mobileModal.png
│── assets/
│ ├──favicon.svg
│ ├── logo-light.svg
│ ├── logo-dark.svg
│ └── icons.svg
│── README.md

---

## ⚙️ Setup & Deployment

### Local Setup
1. Clone the repo:  
   ```bash
   git clone https://github.com/Afika-M/<your-repo-name>.git
   cd AYAMTS25155_PTO2503_A_Ayabonga-Mtsotso_JSLPP
Open index.html in your browser.

### Deployment (Netlify)
Push your code to GitHub.

Go to Netlify → Deploy site → Import from Git.

Select your repo → click deploy.

Set a custom domain (e.g., mykanban.netlify.app).


## 🛠️ Tech Stack

- HTML5

- CSS3 (Flexbox, Grid, Variables)

- JavaScript ES6 Modules

- Netlify (Hosting)

## 📸 Preview

📽️ [Watch Demo on Loom]()
 🔗 [Link to the Netlify app](https://akanbanboard.netlify.app/)  

###### Desktop view with sidebar.
![DesktoScreenshot](/images/desktopSidebar.png)

###### Mobile view with modal menu.
![DesktoScreenshot](/images/mobileModal.png)

###### Task modal (edit/delete).
![DesktoScreenshot](/images/dark-modeModal.png)


###### Light vs dark mode.
![DesktoScreenshot](/images/desktopSidebar.png)

---

## 🧑‍💻 Author

Created by _Ayabonga Mtsotso._

---
