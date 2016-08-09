$(function () {
    var $confirmation = $('#confirmation-message');
    var confirmationMessage = "";
    $('#submit-button').click(function () {
        $confirmation.fadeOut(1);

        if (validateInputs()) {
            $confirmation.css({
                color: "green"
            });
            sendEmail($('#fname').val(), $('#lname').val(), $('#number').val(), $('#email').val(), $('#message').val());
        } else {
            $confirmation.css({
                color: "red"
            });
            showConfirmationMessage();
        }
        return false;
    });

    function validateInputs() {
        if (!isFirstNameValid()) {
            confirmationMessage = "Please enter a valid first name.";
            return false;
        } else if (!isLastNameValid()) {
            confirmationMessage = "Please enter a valid last name.";
            return false;
        } else if (!isNumberValid()) {
            confirmationMessage = "Please enter a valid phone number i.e. 000 000 0000";
            return false;
        } else if (!isEmailValid()) {
            confirmationMessage = "Please enter a valid email i.e. contact@sanddunesballroom.com";
            return false;
        } else if (!isMessageValid()) {
            confirmationMessage = "Please enter a valid message";
            return false;
        }

        return true;
    }

    function sendEmail(fName, lName, number, email, message) {
        $.ajax({
            url: "php/contact.php"
            , type: 'POST'
            , data: {
                "fName": fName
                , "lName": lName
                , "number": number
                , "email": email
                , "message": message
            }
            , success: function (error) {
                if (error == 0) {
                    $('#fname').val("");
                    $('#lname').val("");
                    $('#number').val("");
                    $('#email').val("");
                    $('#message').val("");

                    $confirmation.css({
                        color: "green"
                    });
                    confirmationMessage = "Send Email: Message sent, one of our represantives will reach out to you shortly.";

                } else {
                    $confirmation.css({
                        color: "red"
                    });
                    confirmationMessage = "Something went wrong. Please try again later.";

                }

                showConfirmationMessage();
            }
            , error: function (xhr, textStatus, errorThrown) {
                $confirmation.css({
                    color: "red"
                });
                confirmationMessage = "Something went wrong. Please try again later.";
                showConfirmationMessage();
            }
        });
    }

    function showConfirmationMessage() {
        $confirmation.text(confirmationMessage);
        $confirmation.fadeIn();

        setTimeout(
            function () {
                $confirmation.fadeOut();
            }, 5000);
    }

    function isFirstNameValid() {
        if ($('#fname').val().trim() == "") {
            return false;
        }
        return true;
    }

    function isLastNameValid() {
        if ($('#lname').val().trim() == "") {
            return false;
        }
        return true;
    }

    function isNumberValid() {
        if (!$('#number').val().match(/\d/g)) {
            return false;
        } else {
            if ($('#number').val().replace(/\D/g, '').replace(/\s+/g, '').length != 10) {
                return false;
            }
        }
        return true;
    }

    function isEmailValid() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test($('#email').val());
    }

    function isMessageValid() {
        if ($('#message').val().trim() == "")
            return false;
        return true;
    }
});
