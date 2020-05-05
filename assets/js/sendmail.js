function email(contactForm) {
    emailjs.send("gmail", "fibrotest", {
        "from_name": contactForm.contactName.value,
        "from_email": contactForm.contactEmail.value,
        "contact_message": contactForm.contactMessage.value
    })
    .then(
        function(response) {
            $('#clickbutton').trigger("click")
            $('#exampleModalCenter').modal('show');
            emptyValue();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}


function sendMail2(contactForm) {
    emailjs.send("gmail", "fibrotest", {
        "from_name": contactForm.yourname.value,
        "from_email": contactForm.youremail.value,
        "contact_message": contactForm.aboutyou.value
    })
    .then(
        function(response) {
            $('#clickbutton').trigger("click")
            $('#exampleModalCenter').modal('show');
            emptyValue();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

const emptyValue = () => {
    document.getElementById('yourname').value = "";
    document.getElementById('youremail').value = "";
    document.getElementById('aboutyou').value = "";
    document.getElementById('contactName').value = "";
    document.getElementById('contactEmail').value = "";
    document.getElementById('contactMessage').value = "";
}

