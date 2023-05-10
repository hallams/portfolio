




// const myDate = new Date('April 25, 2023 23:15:30');
// document.cookie = " fcolor=red ; expires= myDate";
// //document.querySelector("h1").style.color= "blue"


// function sendEmail() {
//     Email.send({
//       SecureToken : "<your generated token>",
//       To : 'recipient@example.com',
//       From : "sender@example.com",
//       Subject : "Test Email",
//       Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//     }).then(
//       message => alert("mail sent successfully")
//     );
//   }


  // Function to fetch a new quotation
  function fetchQuotation() {
    // API key from ninja
        const apiKey = 'jBmISu02pBOApUoQVhoIsg==fu3ONKgE51fkllNz'
        return new Promise((resolve, reject) => {
// creat fetch with header
            fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
                headers: {
                    'X-Api-Key': apiKey,
                 },
                })
        //response from the API is received
            .then((response) => {
             console.log(response)
//returns true if it success
                if (response.ok) {
//converts the response which is data from API  to JSON
                return response.json();
                } else {
                throw new Error('Failed to fetch quotation');
                }
            })
            .then(data => {
                resolve(data);
                console.log(data);

            })
            .catch(error => {
                reject(error);
            });
        });
        }

        // Function to display the quotation on the webpage
        function displayQuotation() {
        //this variable to display the quotation
        const quotationElement = document.getElementById('quotation' );
        // call function fetchQuotation to reurn the promise to fetching a new quotation from API
        fetchQuotation()
        //inside this fetchQuotation function a new promise construcot
        //chain promise
        //using then method if the promise done 
        //the data in 'quotation' and the  textContent property of quotationElement is set to resceived the quotation
            .then(quotation => {
            quotationElement.textContent = quotation[0].quote;
            })
            .catch(error => {
            quotationElement.textContent = 'Failed to fetch quotation';
            console.log(error);
            });
        }

        // Call the displayQuotation function when the webpage loads
        window.addEventListener('load', displayQuotation);




        //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        //validate email
    //-2- function to welcome the user after he write his name by using addevenlistener
    function getname(){
        let name =document.getElementById("fname").value;
        document.getElementById("display").innerHTML= "wellcome  to my website "+ name;
    }
    
    document.getElementById("fname").addEventListener("blur",getname);


    var emailf=document.getElementById("email-field");
    var emaill=document.getElementById("email-label");
    var emailError=document.getElementById("email-error");
    var namel=document.getElementById("name-label");

    // -1-the label name disappear when the user start to write his/her name 
    //and call this function in the html in side the input tage by onkeyup=""
    function disName(){
        namel.style.display ="none";
    }

    // disappear the email label 
    
    function validateEmail(){
        emaill.style.display="none";

    //-3-to make email validation 
        if(!emailf.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z ]*[\.][a-z]{2,4}$/)){
    // when the user start to enter the email amessge in span with htis messag appear til he write the valid email 
            emailError.innerHTML = "plz enter  valid email ";
            emailf.style.borderBottomColor = "red";
    // the error sms go down smoothly and in css write transition: top 0.5s;
            emailError.style.top = "120%";  
            return false;
        }
        emailError.innerHTML = "";
        emailf.style.borderBottomColor = "#11999E";
        return true ;   
    }

