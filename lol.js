var request = require("request")
var urlencode = require('urlencode')

var key = "RGAPI-2170e2ea-0654-407a-9a58-014c2feb2ac2"
var idname = process.argv[2]
var url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+urlencode(idname)+"?api_key=RGAPI-2170e2ea-0654-407a-9a58-014c2feb2ac2"

request(url, function(err, response, body){
	var info_jason = JSON.parse(body)
	var key = Object.keys(info_jason)
	var result = "id:"+info_jason[key]["id"]+
				"name:"+info_jason[key]["name"]+
				"profileiconid:"+info_jason[key]["profileiconid"]+
				"summonerLevel:"+info_jason[key]["summonerLevel"]+
				"revisionDate:"+info_jason[key]["revisionDate"]
				console.log(result)

})