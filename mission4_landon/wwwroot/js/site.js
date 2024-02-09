// function to calculate cost of services used
$('#calculate').on('click', function (event) {
    //declare variables
    var hours = parseFloat($('#hours').val());
    var rate = parseFloat($('#rate').val());
    if (hours > 0) {
        var total = hours * rate;
        $('#total').val(total.toFixed(2));
    } else {
        alert('Please enter a positive number for hours.');
        $('#hours').val('').focus();
    }
});

