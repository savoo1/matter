$(function() {
    $( ".datepicker" ).datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
    $( ".datepicker" ).datepicker('setDate', new Date());
});