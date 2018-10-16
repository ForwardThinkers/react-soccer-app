import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAxWpe6-Q5NZrDVOThKahHn1i3WlEwQtc4",
  authDomain: "m-city-a51ee.firebaseapp.com",
  databaseURL: "https://m-city-a51ee.firebaseio.com",
  projectId: "m-city-a51ee",
  storageBucket: "m-city-a51ee.appspot.com",
  messagingSenderId: "802192485314"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePromotions = firebaseDB.ref('promotions');

export {
  firebase,
  firebaseDB,
  firebaseTeams,
  firebaseMatches,
  firebasePromotions
}