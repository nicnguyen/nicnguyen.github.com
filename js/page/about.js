    $(document).ready(function() {
        $("#in").css({ opacity: 0.7 });
        $("#fb").css({ opacity: 0.7 });
        $("#tw").css({ opacity: 0.7 });
        var overIn = function(){$("#in").fadeTo(300, 1);};
        var outIn = function(){$("#in").fadeTo(300, 0.7);};
        var overFb = function(){$("#fb").fadeTo(300, 1);};
        var outFb = function(){$("#fb").fadeTo(300, 0.7);};
        var overTw = function(){$("#tw").fadeTo(300, 1);};
        var outTw = function(){$("#tw").fadeTo(300, 0.7);};
        $("#in").hoverIntent({over:overIn,timeout:300, out:outIn});
        $("#fb").hoverIntent({over:overFb,timeout:300, out:outFb});
        $("#tw").hoverIntent({over:overTw,timeout:300, out:outTw});

    });