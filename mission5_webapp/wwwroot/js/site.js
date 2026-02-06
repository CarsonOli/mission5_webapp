$(document).ready(function () {

    $("#calculateBtn").click(function () {

        // Clear previous errors
        $("#hoursError").text("");
        $("#total").val("");

        let hours = $("#hours").val();
        let rate = $("#rate").val();

        // Validation
        if (hours === "" || isNaN(hours) || hours <= 0) {
            $("#hoursError").text("Please enter a positive number of hours.");
            return;
        }

        // Calculation
        let total = hours * rate;

        // Output result (2 decimal places)
        $("#total").val(total.toFixed(2));
    });

});
