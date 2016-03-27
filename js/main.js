$(document).ready(function() {
    prepareMaterialize();
    fillMealTime();
});

function prepareMaterialize() {
    // Solves rendering issue - stackoverflow.com/a/28258167/493553
    $('select').material_select();
}

function fillMealTime() {
    var now = new Date();
    $('#meal-time').text(now.getHours() + ":" + now.getMinutes());
    $('#meal-date').text(now.getDate() + "/" + now.getMonth());
}

function showEverything() {
    fetchEverything(function(everything){
        $('#allContent').text(JSON.stringify(everything, null, 2));
    })
}
