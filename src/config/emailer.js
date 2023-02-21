const nodemailer = require('nodemailer');

// Configurar el servidor SMTP de Zoho
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hola@chipsi.mx',
    pass: '20894114Ce@'
  }
});

// Función para enviar el correo electrónico de confirmación
function sendConfirmationEmail(email, name, emailToken, telefono) {
  // Configurar el correo electrónico
  const mailOptions = {
    from: 'hola@chipsi.mx',
    to: `${email}`,
    subject: 'Confirmación de registro en chipsi <hola@chipsi.mx>',
    html: `
      
<div>
<div style="font-family :  Verdana,  Arial,  Helvetica,  sans-serif; font-size :  10pt;">
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div style="font-family   :  Verdana,    Arial,    Helvetica,    sans-serif; font-size   :  10.0pt;">
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div class="x_1306919715es-wrapper-color" style="background-color   :  rgb(246,246,246);">
                                                    <table cellpadding="0" cellspacing="0" width="100%" class="x_1306919715es-wrapper" style="border-collapse   :  collapse; border-spacing   :  0.0px; padding   :  0; Margin   :  0; width   :  100.0%; height   :  100.0%; background-repeat   :  repeat; background-position   :  center top;">
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top" style="padding   :  0; Margin   :  0;">
                                                                    <table align="center" cellpadding="0" cellspacing="0" class="x_1306919715es-header" style="border-collapse   :  collapse; border-spacing   :  0.0px; table-layout   :  fixed; width   :  100.0%; background-color   :  transparent; background-repeat   :  repeat; background-position   :  center top;">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" style="padding   :  0; Margin   :  0;">
                                                                                    <table align="center" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="x_1306919715es-header-body" style="border-collapse   :  collapse; border-spacing   :  0.0px; background-color   :  rgb(255,255,255); width   :  600.0px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="left" style="padding   :  0; Margin   :  0; padding-top   :  20.0px; padding-left   :  20.0px; padding-right   :  20.0px;">
                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0; width   :  560.0px;">
                                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="center" style="padding   :  0; Margin   :  0; font-size   :  0.0px;">
                                                                                                                                    <img height="49" class="x_1306919715adapt-img" alt="" style="display   :  block; border   :  0; outline   :  none; text-decoration   :  none;" src="https://jgnbfi.stripocdn.email/content/guids/b082fd27-b1e8-423e-9780-671aa568d5d5/images/logonegro.png">
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <table align="center" cellpadding="0" cellspacing="0" class="x_1306919715es-content" style="border-collapse   :  collapse; border-spacing   :  0.0px; table-layout   :  fixed; width   :  100.0%;">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" style="padding   :  0; Margin   :  0;">
                                                                                    <table align="center" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="x_1306919715es-content-body" style="border-collapse   :  collapse; border-spacing   :  0.0px; background-color   :  rgb(255,255,255); width   :  600.0px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="left" style="padding   :  10.0px 0.0px 0.0px 0.0px; Margin   :  0;">
                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0; width   :  580.0px;">
                                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="center" style="padding   :  0; Margin   :  0;">
                                                                                                                                    <h1 style="Margin   :  0; line-height   :  36.0px; font-size   :  30.0px; font-style   :  normal; font-weight   :  bold; color   :  rgb(35,42,40); font-family   :  Outfit,    Helvetica,    sans-serif;">
                                                                                                                                        ¡Gracias por registrarte en chipsi!
                                                                                                                                        <br>
                                                                                                                                    </h1>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left" style="padding   :  10.0px 20.0px; Margin   :  0;">
                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0;">
                                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="center" style="padding   :  0; Margin   :  0;">
                                                                                                                                    <p style="margin   :  0.0px; line-height   :  21.0px;">
                                                                                                                                        <br>
                                                                                                                                    </p>
                                                                                                                                    <div class="x_798509234align-center" style="font-family   :  Outfit,    Helvetica,    sans-serif; font-size   :  1rem; color   :  rgb(35, 42, 40); text-align   :  center;">
                                                                                                                                        &nbsp; ${name}, solo queda una cosa por hacer antes de que puedas reparar con tan solo unos clics en tu celular. Da click en el botón de abajo para verificar tu cuenta
                                                                                                                                        <br>
                                                                                                                                    </div>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left" style="padding   :  0.0px 20.0px 20.0px 20.0px; Margin   :  0;">
                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0; width   :  560.0px;">
                                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="center" style="padding   :  0; Margin   :  0;">
                                                                                                                                    <p class="x_798509234align-justify" style="margin   :  0px; line-height   :  21px; text-align   :  justify;">
                                                                                                                                        <br>
                                                                                                                                    </p>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left" style="padding   :  5.0px; Margin   :  0;">
                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0; width   :  590.0px;">
                                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="center" style="padding   :  0px; margin   :  0px; height   :  48px;">
                                                                                                                                    <span class="highlight" style="background: rgb(20, 204, 152); border-style: solid; border-color: rgb(44, 181, 67); border-width: 0px; display: inline-block; border-radius: 5px; width: auto;">
                                                                                                                                        <a href="http://localhost:4000/api/users/verify-email?token=${emailToken}" class="x_1306919715es-button x_1306919715es-button-1" target="_blank" style="color   :  rgb(255,255,255); font-size   :  20.0px; border-style   :  solid; border-color   :  rgb(20,204,152); border-width   :  10.0px 30.0px; display   :  inline-block; background   :  rgb(20,204,152); border-radius   :  5.0px; font-family   :  Outfit,    Helvetica,    sans-serif; font-weight   :  normal; font-style   :  normal; line-height   :  24.0px; width   :  auto; text-align   :  center; text-decoration   :  none;">
                                                                                                                                            ¡Verificar correo electrónico!
                                                                                                                                        </a>
                                                                                                                                    </span>
                                                                                                                                    <br>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                            <tr>
                                                                                                                                <td align="center" style="padding   :  20.0px; Margin   :  0; font-size   :  0;">
                                                                                                                                    <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                                                        <tbody>
                                                                                                                                            <tr>
                                                                                                                                                <td style="padding   :  0; Margin   :  0; border-bottom   :  1.0px solid rgb(204,204,204); background   :  unset; height   :  1.0px; width   :  100.0%; margin   :  0.0px;">
                                                                                                                                                    <br>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </tbody>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left" style="padding   :  0; Margin   :  0; padding-left   :  20.0px; padding-right   :  20.0px;">
                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0; width   :  560.0px;">
                                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="center" style="padding   :  0; Margin   :  0; font-size   :  0;">
                                                                                                                                    <table cellpadding="0" cellspacing="0" class="x_1306919715es-table-not-adapt x_1306919715es-social" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                                                        <tbody>
                                                                                                                                            <tr>
                                                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0; padding-right   :  30.0px;">
                                                                                                                                                    <a target="_blank" href="https://twitter.com/Cheapc__" style="text-decoration   :  underline; color   :  rgb(20,204,152); font-size   :  14.0px;">
                                                                                                                                                        <img width="32" alt="Tw" title="Twitter" style="display   :  block; border   :  0; outline   :  none; text-decoration   :  none;" src="https://jgnbfi.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png">
                                                                                                                                                    </a>
                                                                                                                                                </td>
                                                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0; padding-right   :  30.0px;">
                                                                                                                                                    <a target="_blank" href="https://www.facebook.com/cheapc.mx" style="text-decoration   :  underline; color   :  rgb(20,204,152); font-size   :  14.0px;">
                                                                                                                                                        <img width="32" alt="Fb" title="Facebook" style="display   :  block; border   :  0; outline   :  none; text-decoration   :  none;" src="https://jgnbfi.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png">
                                                                                                                                                    </a>
                                                                                                                                                </td>
                                                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0; padding-right   :  30.0px;">
                                                                                                                                                    <a target="_blank" href="https://www.instagram.com/cheapc._/" style="text-decoration   :  underline; color   :  rgb(20,204,152); font-size   :  14.0px;">
                                                                                                                                                        <img width="32" alt="Ig" title="Instagram" style="display   :  block; border   :  0; outline   :  none; text-decoration   :  none;" src="https://jgnbfi.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png">
                                                                                                                                                    </a>
                                                                                                                                                </td>
                                                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0;">
                                                                                                                                                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5213339485139&amp;text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20acerca%20de%20como%20reparar%20con%20chipsi." style="text-decoration   :  underline; color   :  rgb(20,204,152); font-size   :  14.0px;">
                                                                                                                                                        <img width="32" alt="Whatsapp" title="Whatsapp" style="display   :  block; border   :  0; outline   :  none; text-decoration   :  none;" src="https://stripo.email/static/assets/img/messenger-icons/logo-black/whatsapp-logo-black.png">
                                                                                                                                                    </a>
                                                                                                                                                </td>
                                                                                                                                            </tr>
                                                                                                                                        </tbody>
                                                                                                                                    </table>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="left" style="padding   :  20.0px; Margin   :  0;">
                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td align="center" valign="top" style="padding   :  0; Margin   :  0; width   :  560.0px;">
                                                                                                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse   :  collapse; border-spacing   :  0.0px;">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="center" style="padding   :  0; Margin   :  0;">
                                                                                                                                    <p style="margin   :  0.0px; line-height   :  21.0px;">
                                                                                                                                        <span class="colour" style="color:rgb(35, 42, 40)">
                                                                                                                                            <span class="font" style="font-family:Outfit, Helvetica, sans-serif">
                                                                                                                                                <span class="size" style="font-size: 14px; margin: 0px; line-height: 21px;">
                                                                                                                                                    ©2020 - 2022 Todos los derechos reservados. chipsi.mx es una marca registrada en México.&nbsp;
                                                                                                                                                    <a href="https://www.chipsi.mx/cookies" style="text-decoration   :  none; color   :  rgb(20,204,152); font-size   :  14.0px;" target="_blank">
                                                                                                                                                        Preferencias de Cookies
                                                                                                                                                    </a>
                                                                                                                                                    ,&nbsp;
                                                                                                                                                    <a href="https://www.chipsi.mx/privacidad" style="text-decoration   :  none; color   :  rgb(20,204,152); font-size   :  14.0px;" target="_blank">
                                                                                                                                                        Privacidad
                                                                                                                                                    </a>
                                                                                                                                                    &nbsp;y
                                                                                                                                                    <a href="https://www.chipsi.mx/terminos" style="text-decoration   :  none; color   :  rgb(20,204,152); font-size   :  14.0px;" target="_blank">
                                                                                                                                                        &nbsp;Términos y condiciones.
                                                                                                                                                    </a>
                                                                                                                                                </span>
                                                                                                                                            </span>
                                                                                                                                        </span>
                                                                                                                                        <br>
                                                                                                                                    </p>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div>
                                                    <br>
                                                </div>
                                            </div>
                                            <div>
                                                <br>
                                            </div>
                                        </div>
                                        <div>
                                            <br>
                                        </div>
                                    </div>
                                    <div>
                                        <br>
                                    </div>
                                </div>
                                <div>
                                    <br>
                                </div>
                            </div>
                        </div>
                        <div>
                            <br>
                        </div>
                    </div>
                </div>
                <div>
                    <br>
                </div>
            </div>
        </div>
    </div>
    <div>
        <br>
    </div>
</div>
</div>
<div>
<br>
</div>

    `
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      
    } else {
      console.log(`Correo enviado: ${info.response}`);
      console.log(email);
      console.log(name);
      console.log(telefono);
    }
  });
}

module.exports = sendConfirmationEmail;