
const { createBot } = require('whatsapp-cloud-api');

const sender = {}

sender.sendWhApp = async(to, nombre, dispositivo, mensaje)=>{

    try {
      // replace the values below
      const from = '102209219477066';
      const token = 'EAAJPrh0JyNcBAHf5QiUQfkw0xZB2MvJl9SWn1SG4MKgM2rSDMtjgWluZCYP95j3ZBZAaWoC7xcEZCst8Wa4EBk1sb6bt7qCe5saxi9ZCQc9YtlPhcMjir9UDDoNMSda7GZCuSAAPmZCNvJ6ZB8zD3LewdLkwdsC6iWxBKNbELMhecqRLKc5xY99qzeOjrGeuNeUa333U071QnDNeEnnVw7ZCWRiJt3ZAD2dkagZD';
      const webhookVerifyToken = 'YOUR_WEBHOOK_VERIFICATION_TOKEN';

      // Create a bot that can send messages
      const bot = createBot(from, token);

      // Send text message 
      const result = await bot.sendTemplate(to, 'recogerdispositivo ', 'es_MX', [
        {
          "type": "header",
          "parameters": [
            {
              "type": "text",
              "text": nombre
            }
          ]
        },

        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": dispositivo
            },
            {
              "type": "text",
              "text": mensaje
            }
          ]
        }
      ]);

      console.log(result)
      return true;
      
    } catch (err) {
      console.log("Error al enviar el WhatsApp");
      console.log(err);
      return false;
    }

}

module.exports = sender;