exports.controllerHome = (req, res)=>{
    res.render('home');
}


exports.sendIp = (req, res) =>{
    const https = require('https');
    const api_key = '';
    const api_url = 'https://geo.ipify.org/api/v1?';
    let ip = req.body.ip;
    let url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;

    https.get(url, response => {    
        let str ='';
        
        response.on('data', chunk => { 
            str += chunk; 
        });
        response.on('end', () => { 
            str = JSON.parse(str)
            let obj = {
                'ip'    :str['ip'], 
                'lat'   :str['location']['lat'], 
                'lng'   :str['location']['lat']
            }
            console.log(str)
            console.log(obj)
            res.render('home', {obj} );
        });

    }).end();
}
