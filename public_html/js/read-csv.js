var lines = [];  //Global variable for storing all the data lines
var firstLine = 0;
var headerLine = 0;

function handleFile(files) 
{
	// Check for API Support
	if (window.FileReader) 
	{
		//The browser supports file API
		getAsText(files[0]); //Read the file in, only gets the first file if multiple are selected
	} else 
		{
		alert('This browser can not open files. Use Chrome!');
		}
}

function getAsText(fileToRead) 
{
	var reader = new FileReader();
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
}

function loadHandler(event) 
{
	var csv = event.target.result;
	processData(csv);
}

function processData(csv) 
{
	var allTextLines = csv.split(/\r\n|\n/);	//Split the file into lines
	//var lines = [];
	for (var i=0; i<allTextLines.length; i++) 	//Loop through all the individual lines
	{
		var data = allTextLines[i].split(';');
		var tarr = [];
		for (var j=0; j<data.length; j++) 
		{
			tarr.push(data[j]);
		}
		lines.push(tarr);
	}

	//console.log(lines);
	parseHeader(lines);
	
}


function errorHandler(evt) 
{
	if(evt.target.error.name == "NotReadableError") 
		{
		alert("Can't read file!");
		}
}
