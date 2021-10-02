# localstorage

# ABSTRACT
### We are creating a signup form which will collect all the relevant data of the user and then we are using local storage to store the data and then we are going to login form and validating the output. If validation is successfull acknowledgement page will open otherwise alert will be raise with respect to errors.

# File Format
### 1. testtwo.html
### 2. login.html
### 3. ack.html

# Languages Used
### 1. HTML5 (Defining the structure of the webpage)
### 2. CSS3 (Internal CSS)
### 3. JavaScript ( Validation and Authentication)


# Retriving the data from JSON format (login.html Working to retriev the data)
### To retriev the data that is there in the local storage we will use getItem method and we will then pass objectToPass as parameter.
#### We will be using this code for that where var represents the variable declearation and myData is used as variable to store the output of the code 
###### var myData = localStorage.getItem('objectToPass');
### As we know myData is having the JSON data so I will parse that data and extract the email that I will store in the emailid variable. I will do that with the help of this code. 
###### var emailid = JSON.parse(myData).emailid;
