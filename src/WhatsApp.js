const botId = '102209219477066';
const bearerToken = 'EAAJPrh0JyNcBALi91PtCtms7qZA1972AqhEb29zStb9EIW2ZAJGrZAp2M268Grfg5W5lo5kYAQgVvdbKXl2Wxw2OyaIlnI6DfmCuGa4lBPBUevEmgpAbM8xJZA3mSKUqle3sv8HZBNU9EjZApReR3QzyyCToZCUL0c2x3GSPmgDCLNMrf6LylKBZAsh3HQZA4s3ipVsZAz8twCcp97LuJcoGbDXuK5WSNAIHEZD';

const url = 'https://graph.facebook.com/v15.0/'+botId+'/messages';


const sendWhatsApp = async(msg, to)=>{
  var data = {
    messaging_product: 'whatsapp',
    to: '0dasdsa',
    type: 'template',
    template: {
      name:'recogerdispositivo ',
      language:{ code: 'es_MX' }
    }
  };
  
  var postReq = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + bearerToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    json: true
  };

  
  const res = await fetch(url, postReq)
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error)
      return false;
    });

    console.log('\n\n\nRESPUESTA: '+res)
  
}

module.exports = sendWhatsApp;