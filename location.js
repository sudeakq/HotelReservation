$(function () {
    $("#select").change(function () {
        var selectedValue = $(this).val();
        $("#show").val(selectedValue);
        
    });
});