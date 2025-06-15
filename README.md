
# Backend

A Node.js backend using Express, MySQL, JWT, and other essential packages.

---

## 🚀 Features

- Express.js REST API
- MySQL integration
- JWT authentication
- Bcrypt password hashing
- Environment configuration with dotenv
- CORS enabled
- Auto-reload server using nodemon

---

## 📦 Installation

```bash
npm install
```

---

## ▶️ Running the Server

```bash
npm start
```

> This runs: `nodemon source/index.js`

---

## ⚙️ Environment Setup

Create a `.env` file in the root folder with the following content:

```ini
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
JWT_SECRET=your_jwt_secret
```

---

## 🔐 Default Test Credentials

```json
{
  "username": "success",
  "password": "welcome"
}
```

> These are for testing only. Change for production use.

---

## 📜 Scripts

- `npm start` – Starts the server using nodemon
- `npm test` – Placeholder for test script

---

## 📚 Dependencies

- **express**
- **mysql**
- **jsonwebtoken**
- **bcrypt**
- **dotenv**
- **body-parser**
- **cors**
- **cryptr**
- **nodemon**

---

## 🪪 License

**ISC**
