function validateNew()
            {
                // Reading the email id entered in login page
                var newemailid = document.myloginForm.emailnew.value;
                
                // Reading the password entered in login page
                var newpassword = document.myloginForm.passnew.value;
                
                // Connecting to the JSON file
                var myData = localStorage.getItem('objectToPass');
                
                // Retriving email id from signup form that is stored in JSON file (testtwo.html page)
                var emailid = JSON.parse(myData).emailid;
                
                // Retriving password from signup form that is stored in JSON file (testtwo.html page)
                var password = JSON.parse(myData).password;
            
                // Comparing old email id and password retrieved from JSON file with emailid and password entered in Login Page.
                if(emailid===newemailid)
                {
                  if(password===newpassword)
                    {
                        parent.location='ack.html';
                    }
                  else 
                    {
                        alert("Password is incorrect!");
                        return false;
                    }
                }
                else 
                {
                    alert("Email is incorrect!");
                    return false;
                }
            }
