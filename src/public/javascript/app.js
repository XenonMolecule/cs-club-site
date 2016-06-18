var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow_night");
editor.session.setMode("ace/mode/javascript");


var snippits;
$.getJSON("/static/data/snippits.json",function(res){
   snippits = res;
    $(".code").each(function(){
        var formattedHTML = "<p>"
        var snippit = $(this).attr("snip");
        for(var i = 0; i < snippits[snippit].length; i++){
            snippits[snippit][i] = snippits[snippit][i].replace(new RegExp("/>/", "g"), '    ');
            snippits[snippit][i] = snippits[snippit][i].replace(/''/g,'"');
            formattedHTML+=snippits[snippit][i]+"<br>";
        }
        formattedHTML+="</p>";
        $(this).html(formattedHTML);
    });
});
