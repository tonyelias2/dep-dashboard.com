 var firebaseConfig = {
    apiKey: "AIzaSyC2N243N1q5Af6GgqMScXDCtBgCzlak9iE",
    authDomain: "dep-web-68a5a.firebaseapp.com",
    projectId: "dep-web-68a5a",
    storageBucket: "dep-web-68a5a.appspot.com",
    messagingSenderId: "623967074269",
    appId: "1:623967074269:web:74cfd499c42ddc09d1a834",
    measurementId: "G-LFKFE0WBRZ"
};

firebase.initializeApp(firebaseConfig)

var firestore = firebase.firestore()

const db = firestore.collection('user')

let submitBtn = document.getElementById('submit')
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    firestore.collection('user').doc().set({
        email: email,
        password: password
    }).then(
        ()=>{
        console.log('data set')
        }
    ).catch(
        (error)=>{
            console.log('data error', error)
        }
    )
})