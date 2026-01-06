# Employee Dashboard (React + AG Grid)

A modern **Employee Dashboard** built with **React (Create React App)** and **AG Grid Community**.
It displays employee data with powerful grid features such as sorting, filtering, pagination, and KPI summaries.

---

## 📁 Project Structure

```
src/
 ├─ components/
 │   └─ EmployeeDashboard.jsx
 ├─ data/
 │   └─ employees.js
 ├─ App.jsx
 ├─ index.js
 └─ index.css
```

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have:

* **Node.js v16+**
* **npm v8+**

Check versions:

```bash
node -v
npm -v
```

---

### 2. Install Dependencies

From the project root:

```bash
npm install
```

If AG Grid is not installed:

```bash
npm install ag-grid-community ag-grid-react
```

---

### 3. Run the Project (Development)

```bash
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 📊 Data Format

The grid expects **an array of employee objects**.

### `src/data/employees.js`

```js
export const employees = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    department: "Engineering",
    salary: 95000,
    isActive: true,
    // ...
  }
];
```

> ⚠️ Important:
> `rowData` **must be an array**, not `{ employees: [...] }`.

---