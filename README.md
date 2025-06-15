
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


# Inventory CRUD - Frontend

This is the frontend of the Inventory CRUD application, built with Angular 19, Bootstrap 5, and JWT for authentication.

---

## 🚀 Features

- Angular 19+ Single Page Application
- Bootstrap 5 UI Components with ng-bootstrap
- JWT decoding for authentication handling
- Routing with Angular Router
- Reactive and Template-driven Forms

---

## 📦 Installation

```bash
npm install
```

---

## ▶️ Running the Application

```bash
ng serve
```

Then open your browser and navigate to:  
`http://localhost:4200`

---

## 🛠️ Build

```bash
ng build
```

To continuously build on changes:

```bash
npm run watch
```

---

## ✅ Running Tests

```bash
ng test
```

---

## 📚 Dependencies

- **@angular/core**: Angular core framework
- **@ng-bootstrap/ng-bootstrap**: Bootstrap components for Angular
- **bootstrap**: CSS framework for styling
- **jwt-decode**: Decode JWT tokens
- **rxjs**: Reactive programming library
- **zone.js**: Required for Angular change detection

---

## 🧪 Dev Dependencies

- Angular CLI and Devkit
- Karma & Jasmine for unit testing
- TypeScript

