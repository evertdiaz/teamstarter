
$('#envio-reg').on('click', function() {
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
    		alert('Gracias por registrarte')
    		location.href = '/dashboard'
    	} 
    		else alert('Error de conexion')

    })
})

$('#reg-startup').on('click', function() {
  var $data = $('#registro input')
  var data = $.map($data, obj => obj.value)
  var sendInfo = {
           nombre: data[0],
           rubro: data[1],
           resumen: data[2],
           descripcion: data[3],
           nivel: data[4],
           perfiles: data[5],
           mail: data[6]
        }

    $.post('/api/project', sendInfo, function(data, textStatus, jqXHR) {
      if(textStatus) {
        alert('Gracias por registrar una nueva Startup')
        location.href = '/startups'
      } 
        else alert('Error de conexion')

    })
})

$('#login-btn').click(function() {
  $('#registro').css('display','none')
  $('#login-form').css('display','block')
})
$('#register-btn').click(function() {
  $('#registro').css('display','block')
  $('#login-form').css('display','none')
})