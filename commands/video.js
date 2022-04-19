const axios = require("axios");
 






module.exports = async (msg, args) => {

let option = 'title'

  if(args.includes('cat:')){
   
    args.shift()
    console.log('after ',args)
    option = "category"
  }
const url = "https://strapi-gogokodo.herokuapp.com/api/sources?filters["+option+"][$containsi]="

  const query = args.join(' ')
  
  axios.get(url + query)
  .then(function (response) {
    // handle success
  
 if(response.data.data.length<1){
    msg.channel.send(' Sensei : Je ne trouve rien ! ' )
 }
    for ( let video of response.data.data){
      msg.channel.send(' Sensei : ' + video.attributes.url)
       
    }
  })
  .catch(function (error) {
    // handle error
     msg.channel.send(' Sensei : Je ne trouve rien ! ' )
    console.log(error);
  })
   
  
  
};