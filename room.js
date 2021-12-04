
const firebaseConfig = {
    apiKey: "AIzaSyDsLJTenUcPidd7e1KHj-0L3ZFJfeS9CEU",
    authDomain: "mineline-8d37c.firebaseapp.com",
    databaseURL: "https://mineline-8d37c-default-rtdb.firebaseio.com",
    projectId: "mineline-8d37c",
    storageBucket: "mineline-8d37c.appspot.com",
    messagingSenderId: "828931328250",
    appId: "1:828931328250:web:0e6d771d05bfdda0562143"
  };
  
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("User_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + ";-)";

  function add(){
    room_name = document.getElementById("room_namer").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name ", room_name);
    window.location= "chat.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
  row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoom(this.id)>#" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoom(name){
  console.log(name);
  localStorage.setItem("roome_name", name);
  window.location = "chat.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html"
}