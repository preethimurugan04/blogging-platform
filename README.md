# Blogging Platform

This is a blogging platform built with **Node.js** and **MongoDB**. It allows users to publish and view blog posts. It uses **EJS** for templating and **MongoDB** for storing the blog posts.

## Requirements

Before running the project, make sure you have the following installed on your machine:

### 1. **MongoDB** (Local Installation or MongoDB Atlas)
- **Local MongoDB Installation**: Download and install MongoDB from the [MongoDB Download](https://www.mongodb.com/try/download/community) page.
- After installation, start MongoDB by running:
    ```sh
    mongod
    ```
    This will start the MongoDB server on the default port (`27017`).

- **MongoDB Atlas (Cloud Database)**: If you prefer using a cloud-based database, create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), set up a cluster, and use the connection URI provided by Atlas.

### 2. **MongoDB Shell (`mongosh`)**
- **MongoDB Shell**: Download MongoDB Shell from the [MongoDB Shell Download](https://www.mongodb.com/try/download/shell) page.
- After installation, you can use it to interact with your MongoDB database via the terminal:
    ```sh
    mongosh
    ```

### 3. **MongoDB Compass** (Optional GUI Tool)
- **MongoDB Compass**: If you prefer to use a graphical interface, you can download **MongoDB Compass**, which makes it easier to view and interact with your MongoDB data.
    - Download Compass from [MongoDB Compass Download](https://www.mongodb.com/try/download/compass).

## Setup Instructions

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/blogging-platform.git
    cd blogging-platform
    ```

2. **Install required dependencies:**
    ```sh
    npm install
    ```

3. **Start MongoDB:**
    - If you installed **MongoDB locally**, open a new terminal window and run the following command to start the MongoDB server:
      ```sh
      mongod
      ```

4. **Start the server:**
    ```sh
    node index.js
    ```

    This will start the server on **http://localhost:3000**.

5. **Access the Application:**
    - Open your browser and go to [http://localhost:3000](http://localhost:3000). You can now view and interact with the blogging platform.

## Troubleshooting

- **MongoDB Not Running**: If you see an error related to MongoDB, ensure that MongoDB is running (`mongod`), and try restarting it.
- **MongoDB Connection Issues**: If you're using **MongoDB Atlas**, make sure the connection string in your code matches your Atlas database credentials.
- **Server Not Starting**: If the Node.js server is not starting, check for errors in the terminal and make sure all dependencies are installed.

