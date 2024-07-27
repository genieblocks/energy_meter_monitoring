/*=========================================================================================
    File Name: datatables-basic.js
    Description: Basic Datatable
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Template
    Version: 2.1
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
function filterGlobal() {
    $('#DataTables_Table_0')
        .DataTable()
        .search($('#global_filter').val())
        .draw();
}


$(document).ready(function() {
/****************************************
*    configure dom elements (show hide) *
****************************************/
$('#DataTables_Table_0').DataTable({
    dom: '<"top">rt<"bottom"Bp>',
    buttons: [
        'copyHtml5',
        'csvHtml5'
    ]
});

$('#dataTablesTable').DataTable({
    dom: '<"top">rt<"bottom"Bp>',
    buttons: [
        'copyHtml5',
        'csvHtml5'
    ]
});

$('#DataTables_Table_Electricity_Meter_Report').DataTable({
    dom: '<"top">rt<"bottom"Bp>',
    "autoWidth": true,
    scrollY:        "600px",
    "scrollCollapse": true,
    "paging":         false,
    buttons: [
        'copyHtml5',
        'csvHtml5'
    ]
});

$('input.global_filter').on('keyup click', function () {
    filterGlobal();
});


});