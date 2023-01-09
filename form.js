
const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyDshwXM79swXJ2fnWFORAJ_A6OWavb97wE",
    authDomain: "form-952bc.firebaseapp.com",
    projectId: "form-952bc",
    storageBucket: "form-952bc.appspot.com",
    databaseURL: "https://form-952bc-default-rtdb.firebaseio.com",
    messagingSenderId: "165528667660",
    appId: "1:165528667660:web:ad5fcd5cff8781b462d029",
    measurementId: "G-KYSHB96JVM"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  // reference your database
  var contactFormDB = firebase.database().ref("contactus");
  document.getElementById("form").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById("second").value;
    var emailid = document.getElementById("nine").value;
    var phoneno = document.getElementById("fourth").value;
    var details = document.getElementById("des").value;
    var add = document.getElementById("sixth").value;
    savedetails(name, emailid, phoneno,details,add);
    //   reset the form
    document.getElementById("form").reset();
  }
  
  function validateForm() {
    var returnval = true;
    let x = document.forms["form"]["fourth"].value.length;
    if (x!=10) {
      alert("Phone Number Should Be Of 10 Digits");
      returnval = false;
    }
    return returnval;
  }
  function validate()
{
  let y = document.forms["form"]["second"].value;
   var letter = /^[A-Za-z]+$/;
   if(y.match(letter))
     {
      return true;
     }
   else
     {
     alert("Please enter only letters in the name field.");
     return false;
     }
}    
  const savedetails = (name, emailid, phoneno,details,add) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
      name: name,
      emailid: emailid,
      phoneno: phoneno,
      details:details,
      add:add,
    });
  };