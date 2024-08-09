# IMAGE GENERATING REST APP

### Made for my interview challenge for web developer role in CodeChef
### Made with the help of <b>Unsplash</b> api

## To check its working click on the below link
  <a></a>


## Documentation:
### API Documentation
1. Introduction
This API allows users to retrieve images based on a search query. The app uses the Unsplash API to fetch images related to the user input. Upon input, the user is redirected to a dynamic route (e.g., /cars), which displays relevant pictures.
2. Base URL
Local Development: http://localhost:3000/
3. Authentication
Unsplash API Key: To use this app, you need to have an Unsplash API key.
4. Endpoints
GET /:query
Description: Returns images related to the input query and redirects to the dynamic route displaying those images.
Path Parameter:
query: The search term (e.g., "cars", "nature").
Response:
Success: Displays a webpage with images related to the query.
Error: If the search term is invalid or if there's an issue with the Unsplash API, an error message is displayed. - No picture found

### Usage Instructions
1. Prerequisites
Node.js: Ensure Node.js is installed on your system.
NPM/Yarn: Package manager for installing dependencies.
Unsplash API Key: Sign up at Unsplash to get an API key.
2. Running the App
Start the development server:
Node app.js
The app will run on http://localhost:3000/.
3. Example Usage
At  http://localhost:3000 You will see a input box. Type what picture you want.
It will navigate to http://localhost:3000/cars to view images of cars.
Replace cars with any other search term to view images related to that query.
5. Troubleshooting
API Key Error: Ensure the Unsplash API key is correctly set in the .env file.
Dependency Issues: Run npm install again if you encounter any missing dependencies.




Just a Simple UI

![image](https://github.com/user-attachments/assets/2ac7d1ba-1e8a-488f-b10e-92baf52009de)

![image](https://github.com/user-attachments/assets/7e7be871-a0e3-453c-94eb-ae8910946f40)

