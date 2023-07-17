$(document).ready(function () {
  console.log('cargo el js');
  initBloqueLaboral();
  initBloqueSalud();

  $('.datePick').datepicker({
    dateFormat: 'dd/mm/yy',
    changeMonth: true,
    changeYear: true,
    yearRange: '-70:+0',
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ],
    dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    firstDay: 1,
    gotoCurrent: true,
    monthNamesShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Deciembre',
    ],
  });

  $('#frmRegistross').validate({
    ignore: '',
    rules: {
      fechaNacimiento: {
        required: true,
      },
      estadoCivil: {
        required: true,
      },
      tipoTelefono: {
        required: true,
      },
      nroTelef: {
        required: true,
        number: true,
        minlength: 7,
      },
      correo: {
        required: true,
        email: true,
      },
      direcActual: {
        required: true,
      },
      directDpto: {
        required: true,
      },
      directProvincia: {
        required: true,
      },
      directDistrito: {
        required: true,
      },
      nombres: {
        required: true,
      },
      coleProcedencia: {
        required: true,
      },
      tipoInstitucion: {
        required: true,
      },
      laboras: {
        required: true,
      },
      centroLaboral: {
        required: function () {
          return $('input[name="laboras"]:checked').val() === 'si'
            ? true
            : false;
        },
      },
      trabDpto: {
        required: function () {
          return $('input[name="laboras"]:checked').val() === 'si'
            ? true
            : false;
        },
      },
      trabProvincia: {
        required: function () {
          return $('input[name="laboras"]:checked').val() === 'si'
            ? true
            : false;
        },
      },
      trabDistrito: {
        required: function () {
          return $('input[name="laboras"]:checked').val() === 'si'
            ? true
            : false;
        },
      },
      remuneracion: {
        required: function () {
          return $('input[name="laboras"]:checked').val() === 'si'
            ? true
            : false;
        },
        number: true,
      },
      fechaIniLab: {
        required: function () {
          return $('input[name="laboras"]:checked').val() === 'si'
            ? true
            : false;
        },
      },
      cargo: {
        required: function () {
          return $('input[name="laboras"]:checked').val() === 'si'
            ? true
            : false;
        },
      },
      salud: {
        required: true,
      },
      diagnostico: {
        required: function () {
          return $('input[name="salud"]:checked').val() === 'si' ? true : false;
        },
      },
      gastoMensual: {
        required: function () {
          return $('input[name="salud"]:checked').val() === 'si' ? true : false;
        },
        number: true,
      },
    },
    messages: {
      fechaNacimiento: {
        required: 'El campo es requerido',
      },
      estadoCivil: {
        required: 'El campo es requerido',
      },
      tipoTelefono: {
        required: 'El campo es requerido',
      },
      nroTelef: {
        required: 'El campo es requerido',
        number: 'solo dígitos',
        minlength: 'minimo 7 digitos',
      },
      correo: {
        required: 'El campo es requerido',
        email: 'Formato no es correcto',
      },
      direcActual: {
        required: 'El campo es requerido',
      },
      directDpto: {
        required: 'El campo es requerido',
      },
      directProvincia: {
        required: 'El campo es requerido',
      },
      directDistrito: {
        required: 'El campo es requerido',
      },
      coleProcedencia: {
        required: 'El campo es requerido',
      },
      tipoInstitucion: {
        required: 'El campo es requerido',
      },
      laboras: {
        required: 'El campo es requerido',
      },
      centroLaboral: {
        required: 'El campo es requerido',
      },
      trabDpto: {
        required: 'El campo es requerido',
      },
      trabProvincia: {
        required: 'El campo es requerido',
      },
      trabDistrito: {
        required: 'El campo es requerido',
      },
      remuneracion: {
        required: 'El campo es requerido',
        number: 'solo números',
      },
      fechaIniLab: {
        required: 'El campo es requerido',
      },
      cargo: {
        required: 'El campo es requerido',
      },
      salud: {
        required: 'El campo es requerido',
      },
      diagnostico: {
        required: 'El campo es requerido',
      },
      gastoMensual: {
        required: 'El campo es requerido',
        number: 'Solo números',
      },
    },
    submitHandler: function (form) {
      // Formulario Valido
      console.log('...enviando formulario');
      const data = $('#frmRegistro').serializeArray();
      console.log(data);
      Swal.fire({
        icon: 'success',
        text: 'Tu información personal se registro con éxito',
        confirmButtonText: 'Aceptar',
        focusConfirm: false,
        confirmButtonColor: 'crimson',
      });
    },
    invalidHandler: function (event, validator) {
      console.log('form invalid: campos requeridos');
      Swal.fire({
        icon: 'warning',
        text: 'Por favor ingresar los campos requeridos',
        confirmButtonText: 'Aceptar',
        focusConfirm: false,
        confirmButtonColor: 'crimson',
      });
    },
  });
});

const initBloqueLaboral = () => {
  const BLOQUE_LABORAL = '.bloque-laboral';
  $(BLOQUE_LABORAL).hide();

  $('input[type=radio][name="laboras"]').change(function () {
    const controlsDependientes = [
      '#centroLaboral',
      '#trabDpto',
      '#trabProvincia',
      '#trabDistrito',
      '#remuneracion',
      '#fechaIniLab',
      '#cargo',
    ];

    if (this.value == 'si') {
      console.log('si chambea');
      $(BLOQUE_LABORAL).show();
    } else if (this.value == 'no') {
      console.log('no chambea');
      $(BLOQUE_LABORAL).hide();

      controlsDependientes.forEach((control) => {
        $(control).val('');
      });
    }
  });
};

const initBloqueSalud = () => {
  const BLOQUE_SALUD = '.bloque-salud';

  $(BLOQUE_SALUD).hide();

  $('input[type=radio][name="salud"]').change(function () {
    const controlsDependientes = ['#diagnostico', '#gastoMensual'];

    if (this.value === 'si') {
      console.log('si salud');
      $(BLOQUE_SALUD).show();
    } else if (this.value == 'no') {
      console.log('no salud');
      $(BLOQUE_SALUD).hide();

      controlsDependientes.forEach((control) => {
        $(control).val('');
      });
    }
  });
};
