// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnu1uzoRSYoHWgBLuinUM1wLMW8Huc7_c",
  authDomain: "conscious-app-8d882.firebaseapp.com",
  databaseURL: "https://conscious-app-8d882-default-rtdb.firebaseio.com",
  projectId: "conscious-app-8d882",
  storageBucket: "conscious-app-8d882.appspot.com",
  messagingSenderId: "552786608472",
  appId: "1:552786608472:web:743888113def7c90eca52d",
  measurementId: "G-XFS3NYRTE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Import Axios
import axios from 'axios';

// Function to fetch image data from Firebase storage and log it to the console
const fetchAndLogImageData = async (imageUrl) => {
  try {
    // Make a GET request using Axios
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer' // Specify response type as arraybuffer to handle binary data
    });

    // Log the response data to the console
    console.log(response.data);
  } catch (error) {
    // Handle any errors
    console.error('Error fetching image data:', error);
  }
};

// Example Firebase storage image URL
const imageUrl = 'https://conscious-app-8d882-default-rtdb.firebaseio.com/images/-Nw4O-00puYxaYtaELGJ.json';

// Call the function to fetch and log image data
fetchAndLogImageData(imageUrl);
