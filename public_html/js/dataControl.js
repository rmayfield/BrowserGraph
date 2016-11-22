/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showData(dataField)
{
    console.log(dataField);
    $(dataView).css("display","block"); //Display the div
    $(dataHeader).text(dataField.toString()); //Title the Data
    
}

function prepData(dataset,target)
{
    var dataHolder=[];
    var currentLine="";
    var dataIndex = 1; //Data index position of the data being added
    var dataFields;
    
    for(var j = 0 ; j<headerFields.length ; j++)
    {
        if(headerFields[j]==dataset.toString()) dataIndex = j;
    }
    
    console.log("Adding " + dataset.toString() + " to " + target);
    //dataHolder.push(["Timestamp",target]);
    
    for(var i = firstLine; i<lines.length ; i++)
    {
        currentLine = lines[i];
        if(currentLine.toString().includes(",")) //Standard data line
        {
            dataFields = currentLine.toString().split(",");
            //dataHolder.push([dataFields[0],dataFields[dataIndex]]); //Add to string
            dataHolder.push([i,dataFields[dataIndex]]); //Add to string
            
        }else //No commas, assume it's a note
        {         
            console.log("Note found: " + currentLine.toString());
            //TODO: Insert annotation on chart
        }
    }
    
    switch(target)
    {
        case "TLdata":
            TLdata = dataHolder;
            //console.log(TLdata);
            break;
        case "TRdata":
            TRdata = dataHolder;
            break;
        case "BLdata":
            BLdata = dataHolder;
            break;
        case "BRdata":
            BRdata = dataHolder;
            break;
        default:
            console.log("Lost target");
            break;
    }
}