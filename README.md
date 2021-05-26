<h1 align="center">
  <a href="#">
    LeakSeeker
  </a>
</h1>
<div align="center"> <i>Built to help you purchase second hand with confidence</i></div>

<div  align="center" ><img src="https://github.com/TheNoshman/leak-seeker/blob/master/react/src/images/logo2.png?raw=true" alt="logo" width="100"></div>

## 📋 Table of contents

* [Overview](#-overview)

* [Images](#-images)

* [Technologies](#-technologies)

* [Setup](#-setup)

* [About](#-about)

  

## 🔭 Overview
Welcome to LeakSeeker - a brand new web app, built from the ground up as a resource for uploading/ searching for common vehicle faults using a licence plate number. Designed out of a need for an comprehensive resource when looking at purchasing a used vehicle.

**Current features include:**

* Searching for user-submitted faults by vehicle model from a licence plate.
* Uploading a vehicle fault with the following properties:

  * Licence plate number
  * Make
  * Model
  * Year
  * In-depth description of the fault and price to fix
  * An image of the problem
* Data visualisation with Chart.js; enabling the user to inspect an overview of common problem areas, average repair price and number of faults per year.
* User rating system for users to log if they have experienced the same issue. The colour of the fault node border reflects the user score with a traffic light system:
  * Green = fault seen less than 10 times
  * Yellow = fault seen less than 50 times
  * Red = fault seen 50 + times



## 📸 Images

![screenshot](https://github.com/TheNoshman/leak-seeker/blob/master/screen1.png?raw=true)

---
![screenshot](https://github.com/TheNoshman/leak-seeker/blob/master/screenshot.png?raw=true)

---
![screenshot](https://github.com/TheNoshman/leak-seeker/blob/master/screen2.png?raw=true)

---
![screenshot](https://github.com/TheNoshman/leak-seeker/blob/master/screen3.png?raw=true)

---



## 🤖 Technologies

|                            React                             |                           Express                            |                           Node.js                            |                           MongoDB                            |                           Mongoose                           |                           Chart.js                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://github.com/TheNoshman/leak-seeker/blob/master/react/public/react.svg?raw=true" alt="React" width="30" height="30"> | <img src="https://github.com/TheNoshman/leak-seeker/blob/master/react/public/express.svg?raw=true" alt="aws-s3" width="30" height="30"> | <img src="https://github.com/TheNoshman/leak-seeker/blob/master/react/public/node-js.svg?raw=true" alt="aws-s3" width="30" height="30"> | <img src="https://github.com/TheNoshman/leak-seeker/blob/master/react/public/mongodb.svg?raw=true" alt="aws-s3" width="30" height="30"> | <img src="https://github.com/TheNoshman/leak-seeker/blob/master/react/public/goose.png?raw=true" alt="aws-s3" width="30" height="30"> | <img src="https://github.com/TheNoshman/leak-seeker/blob/master/react/public/chart.png?raw=true" alt="aws-s3" width="45" height="40"> |



## 🛠️ Setup

1. To run LeakSeeker, clone and install it locally using npm:

```
$ git clone https://github.com/TheNoshman/leak-seeker.git
```

2. Next, navigate into the `react` and `server` directories and install dependancies in each:

```
$ npm install
```

3. Inside the `server` directory, configure the [environment variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa). See `example-env.txt` for reference:
4. Finally, start the application:

   * Launch MongoDB

   * Navigate into server and run `nodemon index.js` or `node start` - a message will be printed in the CLI upon a successful boot.
   * Navigate into the `react` directory and run `npm start`



## 📖 About

* [LeakSeeker on LinkedIn](https://www.linkedin.com/company/leakseeker)

## Author
  [Chris Norish](https://github.com/TheNoshman)

