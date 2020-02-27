import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyC2XHJ4ILEBagi84FlwDacTWqjFU4at_XM",
    authDomain: "react-demo-1-705e9.firebaseapp.com",
    databaseURL: "https://react-demo-1-705e9.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;