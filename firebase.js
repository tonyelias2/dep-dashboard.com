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

var auth = firebase.auth();

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

auth.onAuthStateChanged(user=> {
    if(user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out', user);
    }
});

//user login
const loginForm = document.querySelector('#login-form');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    //log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred)=> {

        //reset form
        loginForm.reset();
        window.location.href = "/home.html";

        
        
    });
});

//log-out form
const logoutForm = document.querySelector('#log-out');
log-out.addEventListener('click', (e) => {
    e.preventDefault();

logoutForm.reset();
window.location.href = "/index.html";
});