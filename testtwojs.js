function validate()
            {
                //Creating variables and assigning values to them
                var fullname = document.myForm.fname.value;
                var emailid = document.myForm.email.value;
                var phonenum = document.myForm.pnum.value;
                var password = document.myForm.pass.value;
                var validatepassword = document.myForm.vpass.value;

                //Empty Column Validation
                if(fullname==="" || fullname== null || emailid==="" || phonenum=="" || password=="" || validatepassword=="")
                {
                    alert("Please fill the details");  
                    return false;
                }

                // Phone Number Validation
                if(phonenum.length<10 || phonenum.length>10)
                {
                    alert("Enter a valid 10 Digit phone number "+fullname);
                    return false;
                }
                // Password Number Validation
                if(password.length > 8 || password.length <20)
                {
                    alert("Password Minimum length is 8 and maximum is 20"+fullname);
                    return false;
                }
                // Password and Validation Password comparision
                if(password != validatepassword)
                {
                    alert("Entered Password dosenot match "+fullname);
                    return false;
                }

                // Creating a JASON object to store the data in Key: Value Pair
                var signupData = 
                {
                    'fullname' : fullname,
                    'emailid' : emailid,
                    'password' : password
                };

                // Saving the JASON object in the form of string.
                localStorage.setItem( 'objectToPass', JSON.stringify(signupData));
            }
