$.ajax({
    type: "GET",
    url: "segunda.csv",
    dataType: "text",
    success: function (response) {
        data = $.csv.toArrays(response);
        generateExam(data);
    }
});

function generateExam(data) {
    var html = '<div class="card">';

    if (typeof (data[0]) === 'undefined') {
        return null;
    } else {
        $.each(data, function (indexP, row) {
            //borrar header
            if (indexP == 0) {

            } else {
                $.each(row, function (indexC, colData) {
                    console.log(colData)
                    if (indexC == 0)
                        html += '<div class="card-header bg-dark text-white">' + colData + '</div> <div class="card-body"> '
                    else {
                        if (colData != '')
                            html += '<div class="form-check form-check-inline"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault'+indexP+indexC+'">'
                            html += '<label class="form-check-label" for="flexCheckDefault'+indexP+indexC+'">'+colData + '</label></div>'
                    }
                });
                html += '</div>';
            }
        });
        html += '</div>';
        $('#csv-display').append(html);
    }
}
