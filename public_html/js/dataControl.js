/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function hideData()
{
    $(dataView).css("display","none"); //Display the div
}

function showData(dataField)
{
    var dataIndex = 1; //Data index position of the data being added
    var currentLine="";
    var dataFields;
    
    if($(dataView).css('display') == 'block')
    {
        
    }
    
    $('#dataList').empty();
    $(dataView).css("display","block"); //Display the div
    $(dataView).css("z-index","10"); //Bring it to the front

    
    $('#dataList').append('<tr class="headerRow"><td>Timestamp</td><td>' + dataField.toString() + ' [x]</td></tr>');
    
    for(var j = 0 ; j<headerFields.length ; j++)
    {
        if(headerFields[j]==dataField.toString()) 
        {
            dataIndex = j;
            console.log("Found: " + dataField.toString() + " at index " + dataIndex.toString());
        }
    }
    
    for(var i = firstLine; i<lines.length ; i++)
    {
        currentLine = lines[i];
        if(currentLine.toString().includes(",")) //Standard data line
        {
            dataFields = currentLine.toString().split(",");
            $('#dataList').append('<tr class="rawData"><td>' + dataFields[0].toString() + '</td><td>' + dataFields[dataIndex].toString() + '</td></tr>');
        }else //No commas, assume it's a note
        {         
            console.log("Note found: " + currentLine.toString());
             $('#dataList').append('<tr><td class="note">' + currentLine.toString() + '</td></tr>');
        }
    }  
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