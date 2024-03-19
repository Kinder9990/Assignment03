# Node.js PostgreSQL CRUD Application

This Node.js application allows users to perform CRUD (Create, Read, Update, Delete) operations on a PostgreSQL database. It provides a command-line interface (CLI) for interacting with the database.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- PostgreSQL

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/Kinder9990/Assignment03.git
    ```

2. Navigate to the project directory:

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up your PostgreSQL database and configure the `.env` file with your database credentials. 

## Usage

1. Start the application:

    ```bash
    node index.js
    ```

2. Choose an operation by entering the corresponding number:

    - `1`: Insert a new student
    - `2`: Update a student's email
    - `3`: Delete a student
    - `4`: Read all students

3. Follow the prompts to enter the required information for each operation.

4. To exit the application, press `q` at any time.

## Database Setup

Ensure you have a PostgreSQL database set up and running. You can create a new database and table using the provided SQL schema (`schema.sql`).


1. Run the SQL script provided
    

## Environment Variables

You can customize the application's behavior using environment variables. The `.env` file contains the following variables:

- `DB_USER`: Your PostgreSQL username
- `DB_PASSWORD`: Your PostgreSQL password
- `DB_HOST`: Hostname of your PostgreSQL server
- `DB_NAME`: Name of your PostgreSQL database
- `DB_PORT`:  PostgreSQL port (default is 5432)

