//Loading the JASON Object

function ackfinal()
{
        document.body.onload;

        // Loading the data from JASON Object to myData variable in string format
        var myData = localStorage.getItem('objectToPass');

        // Destroying Local storage
        localStorage.removeItem( 'objectToPass' );

        // Reading the values with the help of key in the by converting JASON String to JASON Object that is Key and Value pair.
        var fullname = JSON.parse(myData).fullname;
        var emailid = JSON.parse(myData).emailid;
        var password = JSON.parse(myData).password;

        // Writing the output with in the website with the help of write function in document method.
        document.write('<center>Welcome '+fullname+'</center>');
        document.write('<center><br>Your emailid is: '+emailid+'</center>');
        document.write('<center><br>and your password is: '+password+'</center>');

        //Printing the output with help of ID in the body tag. Comment style if you are using this.
        //document.getElementById("Welcome").innerText = "Welcome "+fullname+"";
        //document.getElementById("UserID").innerText = "Your Email Id "+emailid+"";
        //document.getElementById("Password").innerText = "Your Password "+password+"";

        //Using alert to popup the username, emailid and password. Uncomment the ack below script tag.
        //alert("Welcome: "+fullname);
        //alert("Your Email id is: "+emailid);
        //alert("Your Password is: "+password);
        return true;
}
