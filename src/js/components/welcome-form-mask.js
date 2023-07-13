import _vars from "../_vars";
document.addEventListener("DOMContentLoaded", function() {
  let phone = _vars.welcome_phone
  let form = document.querySelector('.welcome-form')
  if (form && phone) {
    const im = new Inputmask("+7 (999) 999-99-99")
    im.mask(phone);


  const validator = new JustValidate(form);

    validator
    .addField('#wel-name', [
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: "Максимум 15 символов"
      },
    ],
    {
      errorsContainer: '#welcome-form__error-name',
      errorFieldCssClass: ['welcome-form-invalid'],
      successFieldCssClass: ['welcome-form-valid'],

    }

    )

    .addField('#wel-email', [
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат'
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат почты',
      }
    ],
     {
      errorsContainer: '#welcome-form__error-email',
      errorFieldCssClass: ['welcome-form-invalid'],
      successFieldCssClass: ['welcome-form-valid'],
     })
    .addField('#wel-tel', [
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат',

      },
      {
        validator: function(name, value) {
        const ph = phone.inputmask.unmaskedvalue()
        return Number(ph) && ph.length === 10
      },
      errorMessage: 'Номер должен содержать 10 цифр',
      }
      ]
      ,{
      errorsContainer: '#welcome-form__error-tel',
      errorFieldCssClass: ['welcome-form-invalid'],
      successFieldCssClass: ['welcome-form-valid'],
      errorColor: '#ff6972',

      })
  }

})



