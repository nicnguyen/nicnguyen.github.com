$(document).ready(function() {

    var itemCall = function(){ $("#m_"+this.id).toggleClass("menu-item-hover");};
    $("#menu-demo li")
        .filter(function (index){return $("a", this).get(0).href != window.location.href; })
        .hover( itemCall,itemCall);

    $("#menu-demo li")
        .filter(function (index){return $("a", this).get(0).href == window.location.href; })
        .each(function(index){$("#m_"+this.id).addClass("current-page-item")});

});