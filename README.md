# 🎬 CineBook Genre API

A lightweight RESTful API built using **Node.js and Express.js** to manage movie genres and their classic movies.

CineBook provides endpoints to retrieve all available genres, fetch individual genres, and add new genres through HTTP requests.

## 🚀 Features

- 📚 Retrieve all available movie genres.
- 🔍 Search for a specific genre using its ID.
- ➕ Add new movie genres.
- ⚡ RESTful API architecture.
- 🛡️ Basic request validation and error handling.
- 📦 JSON-based request and response handling.

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript (ES Modules)
- REST API
- JSON

## 📂 Project Structure

```text
cinebook/
│
├── controller/
│   └── cinecontroller.js
│
├── data/
│   └── store.js
│
├── routes/
│   └── cineRoutes.js
│
├── screenshots/
│   ├── 01-home.png
│   ├── 02-all-genres.png
│   └── 03-genre-by-id.png
│
├── app.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Tamanna040606/CineBook-Genre-API.git
```

### 2. Navigate to the project folder

```bash
cd CineBook-Genre-API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

The server runs at:

`http://localhost:5000`

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome message |
| GET | `/api/genres` | Retrieve all genres |
| GET | `/api/genres/:id` | Retrieve genre by ID |
| POST | `/api/genres` | Add a new genre |

## 📩 Example POST Request

**Endpoint:**

```text
POST /api/genres
```

**Request Body:**

```json
{
  "name": "Sci-Fi",
  "classics": [
    "Interstellar",
    "Inception",
    "The Matrix"
  ]
}
```

## 📸 Screenshots

### 1. Home API

![Home API](screenshots/01-home.png)

### 2. All Genres

![All Genres](screenshots/02-all-genres.png)

### 3. Genre by ID

![Genre by ID](screenshots/03-genre-by-id.png)

## 👩‍💻 Developer

**Tamanna Kumari**

GitHub: [Tamanna040606](https://github.com/Tamanna040606)

## 📄 License

This project is developed for educational and portfolio purposes.
