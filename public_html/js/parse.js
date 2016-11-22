var headerFields;

function parseHeader(dataArray)
{
	var currentLine = "";
        var header = 1; //Flag to determine when we're done with header
        var i = 0; //This is where we start searching for the header string
        
        currentLine = dataArray[0];
        $(title).text(currentLine.toString());
        console.log(currentLine.toString());
        
        currentLine = dataArray[1] + " - " + dataArray[2];
       $(description).text(currentLine.toString());
        console.log(currentLine.toString());
	
	while(header == 1)
        {
            currentLine = dataArray[i];
            if(currentLine.toString().includes("Timestamp")) //If a line has this, it's probably the header
            {
                header = 0; //So we exit loop
                headerLine = i;
                firstLine = i + 2; //Mark the first line
                headerFields = currentLine.toString().split(",");
                console.log("Found Log Fields:");
                for(var j = 1 ; j<headerFields.length ; j++)
                {
                    $(fieldList).append('<li draggable="true" ondragstart="dragStart(event)" id="' + headerFields[j].toString() +'" onclick=showData("' + headerFields[j].toString() + '")>' + headerFields[j].toString() + '</li>');
                    console.log("  " + headerFields[j].toString());
                }
            }
            i++; //Increment to search
        }

}