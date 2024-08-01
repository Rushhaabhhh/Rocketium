# Rocketium


This Node.js project fetches dummy JSON data from an external API, stores it locally, and serves it through an API endpoint. It provides basic filtering and sorting capabilities on the data.

## Prerequisites
Node.js and npm (or yarn) installed

## Project Setup
- Clone the repository: git clone https://github.com/Rushhaabhhh/Rocketium.git
- Navigate to the project directory: cd Rocketium
- Install dependencies: npm install

- Data Initialization
The first time you run the project, an initialization script will fetch the dummy JSON data and store it locally.

- Running the Server : npm start
  
The server will start on port 3000 (or your configured port).

## API Endpoints
- GET /data 
  - Retrieves a list of data items.
  - Optional query parameters: filter, sort
- POST /data
  - Creates a new data item.
- GET /data/:id
  - Retrieves a specific data item by ID.
- PUT /data/:id
   - Updates an existing data item by ID.
- DELETE /data/:id
  - Deletes a data item by ID.

## API Documentation
Postman : [<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/37384962-9a70fc1b-0e1a-42e2-b4d7-838e41094d8e?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D37384962-9a70fc1b-0e1a-42e2-b4d7-838e41094d8e%26entityType%3Dcollection%26workspaceId%3Ddee6ad14-08b1-4bd6-b061-dcd161434fea)

Postman Link : https://www.postman.com/rushhaabhhhh/workspace/rocketium/collection/37384962-9a70fc1b-0e1a-42e2-b4d7-838e41094d8e?action=share&creator=37384962 
