/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function init()
{
    $(document).keypress(keyHandler(event));
    initGraphs();
    console.log("Init");
}

function keyHandler(event)
{
    console.log(event);
    switch(event.keyCode) 
    { 
        case 27:
            //Close data window
            $(dataView).css("display","none"); //Hide the data div
            break;
        default:
            //Stuff to do on any keypress
            break;
    }
    
}