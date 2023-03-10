function clinicFunction() {
    console.log("I've been called");
    var csrftoken = $('meta[name=csrf-token]').attr('content')

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken)
            }
        }
    })

    var my = $('#all_hospitals option:selected').val()
    var data1 = {'selected_hospital': my}
    $.ajax({
        url: 'http://localhost:5000/get-clinics',
        data: JSON.stringify(data1),
        method: 'POST',
        contentType: 'application/json',
        success: function(data) {
            $('#foo').replaceWith(data);
        }
    });
};


function performPost() {

    $.ajax({
        type: "POST",
        contentType: 'application/json',
        url: "{{ url_for('create_file') }}",
        data: {"name" : "Jim"},
    })
}