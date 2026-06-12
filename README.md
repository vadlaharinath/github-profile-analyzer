# GitHub Profile Analyzer API

## Project Overview

This project is a backend API built using Node.js, Express.js, MySQL, and GitHub Public API.

The API fetches a GitHub user's public profile information, stores useful details in a MySQL database, and provides endpoints to retrieve stored profiles.

---

## Technologies Used

* Node.js
* Express.js
* MySQL
* Axios
* GitHub Public API
* dotenv

---

## Features

### 1. Analyze GitHub Profile

Fetches public profile information from GitHub using a username and stores it in MySQL.

Stored Information:

* Username
* Name
* Followers Count
* Following Count
* Public Repositories Count
* Public Gists Count
* Profile URL
* Avatar URL

### 2. Get All Profiles

Returns all stored GitHub profiles from the database.

### 3. Get Single Profile

Returns a specific profile using its ID.

---

## Project Structure

github-profile-analyzer/

├── config/
│   └── db.js

├── controllers/
│   └── githubController.js

├── routes/
│   └── githubRoutes.js

├── .env

├── server.js

├── package.json

└── README.md

---

## Installation

### Clone Repository

git clone <repository-url>

cd github-profile-analyzer

### Install Dependencies

npm install

---

## Environment Variables

Create a .env file in the root directory.

PORT=7000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=github_analyzer

---

## Database Setup

Create Database:

CREATE DATABASE github_analyzer;

Use Database:

USE github_analyzer;

Create Table:

CREATE TABLE github_profiles (

id INT AUTO_INCREMENT PRIMARY KEY,

username VARCHAR(100),

name VARCHAR(100),

followers INT,

following INT,

public_repos INT,

public_gists INT,

profile_url VARCHAR(255),

avatar_url VARCHAR(255),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

---

## Run Project

Development Mode:

npm run dev

---

## API Endpoints

### Analyze GitHub Profile

POST

/api/github/analyze

<img width="1433" height="857" alt="WhatsApp Image 2026-06-12 at 9 27 43 PM" src="https://github.com/user-attachments/assets/77ecd739-3e2c-40e4-9378-cdd03fb8f3d7" />


---

### Get All Profiles

GET

/api/github/profiles

<img width="1438" height="900" alt="WhatsApp Image 2026-06-12 at 9 28 27 PM" src="https://github.com/user-attachments/assets/c7e071eb-6f46-4ab2-9f25-191fb9f9e9d8" />


---

### Get Single Profile

GET

/api/github/profiles/:id

Example:

/api/github/profiles/5

<img width="1427" height="861" alt="WhatsApp Image 2026-06-12 at 9 29 03 PM" src="https://github.com/user-attachments/assets/0c325c77-88ee-4408-8c46-c0e436796d62" />


---

## Testing

The APIs can be tested using:

* Postman
* Thunder Client

---


