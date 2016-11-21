//These three functions allow drag and drop of data fields
function allowDrop(event) 
{
    event.preventDefault();
}

function dragStart(event) 
{
    event.dataTransfer.setData("text", event.target.id);
    //console.log(event);
}

function drop(event) 
{
    event.preventDefault();
    event.target.style.border = "0px";
    var draggedElement = event.dataTransfer.getData("text");
    var dropTree = $(event.target).parents(); //Get the whole tree of what the element was dropped on
    var searchFlag = 1;
    var i = 0;
    while(searchFlag == 1) //Search through the dropTree looking for one of our drop zones (graph Divs)
    {
        if(dropTree[i].id == "graphTL")
        {
            var graphTarget = dropTree[i].id;
            searchFlag =0; //Stop Searching
            addSet(draggedElement,graphTarget);
        }
        i++; //Increment
        if(i>dropTree.length+1)
        {
            console.log("You must drop in a valid zone!")
            searchFlag == 0;
        }
    }
    //console.log(draggedElement.toString() + " dropped on: " + graphTarget.toString());
}

function enterDrag(event)
{
    event.target.style.border = "3px dotted red";
}

function leaveDrag(event)
{
    event.target.style.border = "0px";
}

//Datasets for the graphs
var TLdata = [];
var TRdata = [];
var BLdata = [];
var BRdata = [];

var DyngraphTL;
var DyngraphTR;
var DyngraphBL;
var DyngraphBR;

function initGraphs()
{
    DyngraphTL = new Dygraph(document.getElementById("graphTL"), TLdata,
                          {
                            drawPoints: true,
                            showRoller: true,
                            valueRange: [0.0, 1.0],
                            labels: ['Time', 'Data']
                          });
                          
    DyngraphTR = new Dygraph(document.getElementById("graphTR"), TRdata,
                          {
                            drawPoints: true,
                            showRoller: true,
                            valueRange: [0.0, 1.0],
                            labels: ['Time', 'Data']
                          });  
                          
    DyngraphBR = new Dygraph(document.getElementById("graphBR"), BRdata,
                        {
                          drawPoints: true,
                          showRoller: true,
                          valueRange: [0.0, 1.0],
                          labels: ['Time', 'Data']
                        });    
    
    DyngraphBL = new Dygraph(document.getElementById("graphBL"), BLdata,
                        {
                          drawPoints: true,
                          showRoller: true,
                          valueRange: [0.0, 1.0],
                          labels: ['Time', 'Data']
                        });
}

function addSet(dataset,target)
{
    //console.log("Add " + dataset.toString() + " to " + target);
    
    switch(target)
    {
        case "graphTL":
            prepData(dataset,"TLdata");
            console.log(TLdata);
            DyngraphTL.updateOptions( { 'file': TLdata } );
            break;
        case "graphTR":
            prepData(dataset,"TRdata");
            DyngraphTL.updateOptions( { 'file': TRdata } );
            break;
        case "graphBL":
            prepData(dataset,"BLdata");
            DyngraphTL.updateOptions( { 'file': BLdata } );
            break;
        case "graphBR":
            prepData(dataset,"BRdata");
            DyngraphTL.updateOptions( { 'file': BRdata } );
            break;
        default:
            console.log("Can't find a graph to add data to.");
            break;
    }
    
}