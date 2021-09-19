  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAgQlcFSopTOxsNE5pgyEcpvaWYFwaYXHs",
      authDomain: "class-c6c0a.firebaseapp.com",
      projectId: "class-c6c0a",
      storageBucket: "class-c6c0a.appspot.com",
      messagingSenderId: "827930136030",
      appId: "1:827930136030:web:3f8527561977b13238614f"
    };
  
    firebase.initializeApp(firebaseConfig);

    


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()  {
  localStorage.removeItem("user_name");
  localStorage.removeItem("remove_item");
      window.location = "kwitter"
}

