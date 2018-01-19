# JepretGram

## Introduction

> Aplikasi ini dibangun dengan Express MongoDB VueJs firebaseAuth
You can share your images here.

[Live Demo](http://jepretgrammy.azhariemuhammad.com/)


## Code Samples

> ### API
axios.get("https://api/photos")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
>
axios.post("https://api/photos", {
     userId: ....
     photo: .... 
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
>
axios.get("https://api/users")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
>
## ...


## Installation

>   To get started:

     cd client
     npm install
     npm run dev
