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
    dom: '<"top">rt<"bottom"p>',
});

$('#dataTablesTable').DataTable({
    dom: '<"top">rt<"bottom"p>',
});

// $('#tableContentDataTable').DataTable({
//     dom: '<"top">rt<"bottom"p>',
// });

$('#DataTables_Table_Electricity_Meter_List').DataTable({
    dom: '<"top">rt<"bottom"p>',
});

$('#DataTables_Table_Electricity_Meter_Report').DataTable({
    dom: '<"top">rt<"bottom"p>',
    "autoWidth": true,
    scrollY:        "600px",
    "scrollCollapse": true,
    "paging":         false,
});

$('#DataTables_Table_Water_Meter_List').DataTable({
    dom: '<"top">rt<"bottom"p>',
});

$('#DataTables_Table_Calorimeter_Hot_Meter_List').DataTable({
    dom: '<"top">rt<"bottom"p>',
});

$('#DataTables_Table_Calorimeter_Cold_Meter_List').DataTable({
    dom: '<"top">rt<"bottom"p>',
});

$('input.global_filter').on('keyup click', function () {
    filterGlobal();
});
/****************************************
*       js of zero configuration        *
****************************************/

$('.zero-configuration').DataTable();

/**************************************
*       js of default ordering        *
**************************************/

$('.default-ordering').DataTable( {
    "order": [[ 3, "desc" ]]
} );

/************************************
*       js of multi ordering        *
************************************/

$('.multi-ordering').DataTable( {
    columnDefs: [ {
        targets: [ 0 ],
        orderData: [ 0, 1 ]
    }, {
        targets: [ 1 ],
        orderData: [ 1, 0 ]
    }, {
        targets: [ 4 ],
        orderData: [ 4, 0 ]
    } ]
} );

/*************************************
*       js of complex headers        *
*************************************/

$('.complex-headers').DataTable();

/*************************************
*       js of dom positioning        *
*************************************/

$('.dom-positioning').DataTable( {
    "dom": '<"top"i>rt<"bottom"flp><"clear">'
} );

/************************************
*       js of alt pagination        *
************************************/

$('.alt-pagination').DataTable( {
    "pagingType": "full_numbers"
} );

/*************************************
*       js of scroll vertical        *
*************************************/

$('.scroll-vertical').DataTable( {
    "scrollY":        "200px",
    "scrollCollapse": true,
    "paging":         false
} );

/************************************
*       js of dynamic height        *
************************************/

$('.dynamic-height').DataTable( {
    scrollY:        '50vh',
    scrollCollapse: true,
    paging:         false
} );

/***************************************
*       js of scroll horizontal        *
***************************************/

$('.scroll-horizontal').DataTable( {
    "scrollX": true
} );

/**************************************************
*       js of scroll horizontal & vertical        *
**************************************************/

$('.scroll-horizontal-vertical').DataTable( {
    "scrollY": 200,
    "scrollX": true
} );

/**********************************************
*       Language - Comma decimal place        *
**********************************************/

$('.comma-decimal-place').DataTable( {
    "language": {
        "decimal": ",",
        "thousands": "."
    }
} );

});