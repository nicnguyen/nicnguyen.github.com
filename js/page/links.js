    $(document).ready(function() {

        var threeBrushed = function() {
            $("div.three").toggleClass("threeBrushed");
            $("a.three").toggleClass("threeBrushed");
        };

        $("a.three").hoverIntent({over:threeBrushed, timeout: 250, out: threeBrushed});

        var twoBrushed = function() {
            $("div.two").toggleClass("twoBrushed");
            $("a.two").toggleClass("twoBrushed");
        };

        $("a.two").hoverIntent({over: twoBrushed, timeout: 250, out: twoBrushed});

        var sevenBrushed = function() {
            $("div.seven").toggleClass("sevenBrushed");
            $("a.seven").toggleClass("sevenBrushed");
        };

        $("a.seven").hoverIntent({over: sevenBrushed, timeout: 250, out: sevenBrushed});

        $("div.three").hoverIntent({over: threeBrushed, timeout: 250, out: threeBrushed});
        $("div.two").hoverIntent({over: twoBrushed, timeout: 250, out: twoBrushed});
        $("div.seven").hoverIntent({over: sevenBrushed, timeout: 250, out: sevenBrushed});

        var causesDistantBrushed = function() {
            $("#causes-distant").toggleClass("causes-distant-brushed");
            $("div.causes-distant").toggleClass("causes-distant-brushed");
        };

        $("#causes-distant").hoverIntent({over:causesDistantBrushed, timeout:250, out:causesDistantBrushed});

        var causesCloseBrushed = function() {
            $("#causes-close").toggleClass("causes-close-brushed");
            $("div.causes-close").toggleClass("causes-close-brushed");
        };

        $("#causes-close").hoverIntent({over: causesCloseBrushed, timeout:250, out:causesCloseBrushed});

        var effectsProjectedBrushed = function() {
            $("#effects-projected").toggleClass("effects-projected-brushed");
            $("div.effects-projected").toggleClass("effects-projected-brushed");
        };

        $("#effects-projected").hoverIntent({over : effectsProjectedBrushed, timeout:250, out: effectsProjectedBrushed});

        var effectsAchievedBrushed = function() {
            $("#effects-achieved").toggleClass("effects-achieved-brushed");
            $("div.effects-achieved").toggleClass("effects-achieved-brushed");
        };

        $("#effects-achieved").hoverIntent({ over:effectsAchievedBrushed, timeout:250, out: effectsAchievedBrushed} );

        var causesTitle =  function() {
            $("#causes-title").toggleClass("causes-title-brushed");
            $("#causes-distant").toggleClass("causes-distant-title-brushed");
            $("#causes-close").toggleClass("causes-close-title-brushed");
            $("div.causes-distant").toggleClass("causes-distant-title-brushed");
            $("div.causes-close").toggleClass("causes-close-title-brushed");
        };

        $("#causes-title").hoverIntent({over:causesTitle,timeout:250, out:causesTitle});

        var effectsTitle = function() {
            $("#effects-title").toggleClass("effects-title-brushed");
            $("#effects-projected").toggleClass("effects-projected-title-brushed");
            $("#effects-achieved").toggleClass("effects-achieved-title-brushed");
            $("div.effects-projected").toggleClass("effects-projected-title-brushed");
            $("div.effects-achieved").toggleClass("effects-achieved-title-brushed");
        };

        $("#effects-title").hoverIntent({over:effectsTitle,timeout:250, out:effectsTitle});

        $("#1-2").hoverIntent({over:causesDistantBrushed,timeout:250, out:causesDistantBrushed});

        var causesDistantBrushed2 = function() {
            $("#causes-distant").toggleClass("causes-distant-title-brushed");
            $("div.causes-distant").toggleClass("causes-distant-title-brushed");
        };
        $("#3").hoverIntent({over:causesDistantBrushed2,timeout:250, out:causesDistantBrushed2});
        $("#4-5-6-7").hoverIntent({over:effectsProjectedBrushed,timeout:250, out:effectsProjectedBrushed});
        $("#8-9-10").hoverIntent({over:causesCloseBrushed,timeout:250, out:causesCloseBrushed});
        $("#11-12").hoverIntent({over:effectsAchievedBrushed,timeout:250, out:effectsAchievedBrushed});

        var sky = function() {
            $("#twelve-dependent-related-links").toggleClass("sky-background",100);
        };
        $("#twelve-dependent-related-links").hoverIntent({over:sky, timeout:500,out:sky, sensitivity:1,interval:1});
    });