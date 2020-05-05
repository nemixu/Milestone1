// var firebaseConfig = {
//     apiKey: "AIzaSyC9zjCYBFkFZKHfPJktf4l8ksbhX4hE4M4",
//     authDomain: "fibro-contact-form.firebaseapp.com",
//     databaseURL: "https://fibro-contact-form.firebaseio.com",
//     projectId: "fibro-contact-form",
//     storageBucket: "fibro-contact-form.appspot.com",
//     messagingSenderId: "168323372376",
//     appId: "1:168323372376:web:8165d534479b210804412d",
//     measurementId: "G-S2EYVXXQY9"
//     };
//   firebase.initializeApp(firebaseConfig);
  
//   // Reference messages collection
//   var messagesRef = firebase.database().ref('messages');
  
//   // Listen for form submit
//   document.getElementById('contactpageform').addEventListener('submit', submitForm);
  
//   // Submit form
//   function submitForm(e){
//     e.preventDefault();
//     //getting vals
//     var name = getInputVal('contact-name');
//     var email = getInputVal('contact-email');
//     var message = getInputVal('contact-message');



//     saveMessage(name, email, message);
// }
//     // // Show alert
//     // document.querySelector('.alert').style.display = 'block';
  
//     // // Hide alert after 3 seconds
//     // setTimeout(function(){
//     //   document.querySelector('.alert').style.display = 'none';
//     // },3000);
  
//     // Clear form
//     document.getElementById('contactpageform').reset();
  
//   // Function to get get form values
//   function getInputVal(id){
//     return document.getElementById(id).value;
//   }
  
//   // Save message to firebase
//   function saveMessage(name, email, message){
//     var newMessageRef = messagesRef.push();
//     new messagesRef.set({
//         name: name,
//         email: email,
//         message: message
//     });
// }


