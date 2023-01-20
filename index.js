const express = require('express');
const http = require("http");
const host = 'localhost';
const port = 8000;
const app = express();
app.use(express.urlencoded());


//get methode
app.get('/', function(request, response, next){

	response.send(`
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		<div class="container">
			<h1 class="text-center mt-3 mb-3">LED ON OR OFF</h1>
			<div class="card">
				<div class="card-header">Sample Form</div>
				<div class="card-body">
					<form method="get" action="/">
						<div class="mb-3">
							<label>Time(ms) ON:</label>
							<input type="text" name="ON" id="ON" class="form-control" />
						</div>
						<div class="mb-3">
							<label>Time(ms) OFF:</label>
							<input type="text" name="OFF" id="OFF" class="form-control" />
						</div>
		                <div class="mb-3">
		                	<input type="submit" name="submit_button" class="btn btn-primary" value="Send" />
		                </div>
					</form>
				</div>
			</div>
		</div>
	`);


});

app.get('/', function(request, response, next){
	response.send(request.body);
});
//port

app.listen(8000, function () {
    console.log(`Listen on port ${port}`);
});

