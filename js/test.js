(function($) {
    var message = "";

    $("#sendMessage").on("click", function() {
        console.log("Entered in javascript code 1");
        message = $("#contactform").serialize();
        $.ajax({
            url: "https://formspree.io/f/xrgjprjy", 
            method: "POST",
            data: {message: message},
            dataType: "json"
        });
        $( ".nameEnquirer" ).empty();
        $( ".emailEnquirer" ).empty();
        $( ".messageEnquirer" ).empty();
        alert('Thanks for the email, we\'ll be in touch promptly.');
        return false;
    });

    $("#sendMessageToKushal").on("click", function() {
        console.log("Entered in javascript code 2");
        message = $("#contactform").serialize();
        $.ajax({
            url: "https://formspree.io/f/xrgjprjy", 
            method: "POST",
            data: {message: message},
            dataType: "json"
        });
        alert('Thanks for the email, we\'ll be in touch promptly.');
        return false;
    });

})(jQuery);