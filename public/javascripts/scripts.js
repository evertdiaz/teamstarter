
$('#envio').on('click', function() {
	var $data = $('#registro input')
	var data = $.map($data, obj => obj.value)
	var sendInfo = {
           username: data[0],
           password: data[1],
           perfil: data[2],
           bio: data[3],
           skills: data[4],
           phone: data[5],
           mail: data[6]
        }

    $.post('/api/register', sendInfo, function(data, textStatus, jqXHR) {
    	if(textStatus) {
    		alert('Todo ok')
    		location.href = '/'
    	} 
    		else alert('Todo MAL')

    })
})