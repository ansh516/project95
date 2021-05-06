
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA_Mo83Hbz-FM4xFCZ5o43QPLi0mJytbA4",
      authDomain: "twitter-6b994.firebaseapp.com",
      projectId: "twitter-6b994",
      databaseURL: "https://twitter-6b994-default-rtdb.firebaseio.com/",
      storageBucket: "twitter-6b994.appspot.com",
      messagingSenderId: "168560842203",
      appId: "1:168560842203:web:e422080245bd67bc9843fe",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+username+"!";
function addRoom() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"   
});
localStorage.setItem("room_name", room_name);
window.location = "index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console. log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });
      });
       }
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "index.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
