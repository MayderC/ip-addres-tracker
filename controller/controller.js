//GET RUTA(/)
const controller = require("./controller")

exports.controllerHome = (req, res) => {
	res.render("home");
};
//POST  RUTA(/)
var cords = ""
exports.getPosition = (req, res) => {
	const https = require("https");
	const api_key = "at_mntyxTdkytOSafPeWhIxx6nEhPjeg";
	const api_url = "https://geo.ipify.org/api/v1?";
	let ip = req.body.ip;
	let url = `${api_url}apiKey=${api_key}&ipAddress=${ip}`;

	https
		.get(url, (response) => {
			let str = "";
			response.on("data", (chunk) => {
				str += chunk;
			});
			response.on("end", () => {
				str = JSON.parse(str);
				
				if(str){
					let obj = {
						lat: str["location"]["lat"],
						lng: str["location"]["lng"],
						region : str['location']['region'],
						city: str['location']['city'],
						key: "pk.eyJ1IjoiZGF2aWRhYnMiLCJhIjoiY2tmZzU4cGZpMDZwcTJxbzR3ZTc0ZWEybiJ9.O3PvZzSBzRfVSdVEjf6sFQ"
					};
					cords = obj;
				}else{
					obj = {}
					cords = obj	
				}



				res.render("home");
				
			});
		})
		.end();
};
exports.getCords = async (req, res) => {
	await res.send(cords)
};
