
const { createBot } = require('whatsapp-cloud-api');

const sender = {}

sender.sendWhApp = async(to, nombre, dispositivo, mensaje)=>{

    try {
      // replace the values below
      const from = '102209219477066';
      const token = 'EAAJPrh0JyNcBAL2M6diS7nTcqTap8rrLRxgtjZA2AbOnuJ2JO7PbFArQYuMugXoe6ZBEvhISPRecTshpSaPJyj1uQGUAbHQ30NTgcuOC1PIGrRz9GMlQZClc4lAj850MYwjP7RqRDQH4CjnleyVx3BZAPZCK6XEO8aYnS5cFfCNbpxoKsm9xoZAR2BW0d7GEZBVsGzaZBvdSYDyNyhNID5CwnFZCH2ZBAyweEZD';
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