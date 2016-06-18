//EXACT WORDS TO CHANGE COLOR
var directKeyColorPairs = {
    "function":"#C397D8",
    "var":"#C397D8",
    "set":"#C397D8"
}

//INSTANCES TO CHANGE COLOR
var indirectKeyColorPairs = {
    "functionName":"#76A6DA",
    "string":"#99CA42",
    "number":"##CE7B2A"
}

//WORDS FOUND INSIDE A STRING TO CHANGE THE COLOR OF
var insideStringKeyColorPairs = {
    "if":"#C397D8",
    "while":"#C397D8",
    "console":"#C397D8",
    "break":"#C397D8",
    "continue":"#C397D8",
    "for":"#C397D8",
    "switch":"#C397D8",
    "undefined":"#76A6DA",
    "this":"#76A6DA",
    "return":"#C397D8"
}

function styleCode(){
    $(".code").each(function(){
        var code = $(this).text();
        if(code!=undefined){
            var words = code.split(" ");
        }
    });
}

//PREPARE THIS FILE TO BE DELETED.  AFTER I FOUND ACE, I PROBABLY WON'T NEED THIS

////////////////////////////////////////////////////////////////////////////////
//
//
//              TO BE REPLACED BY editor.setReadOnly()
//
//
////////////////////////////////////////////////////////////////////////////////