$(document).ready(function($) {

    var video = document.querySelector('#trailer');
    video.oncanplay = function(){
        this.currentTime= 0.5;
        this.volume = 0.5;
    };

    video.style.width = '500px';
    video.style.height = '400px';

    var setXScale = function(e, xScale) {
        $(e).css('transform', 'scaleX('+xScale.toString()+')');
        $(e).css('-ms-transform', 'scaleX('+xScale.toString()+')');
        $(e).css('-webkit-transform', 'scaleX('+xScale.toString()+')');
    };

    var setRotation = function(e, angle){
        $(e).css('transform', 'rotate('+angle.toString()+'deg)');
        $(e).css('-ms-transform', 'rotate('+angle.toString()+'deg)');
        $(e).css('-webkit-transform', 'rotate('+angle.toString()+'deg)');
    };

    var setOpacity = function (es, progress){
        var opacity = 1.0;
        if (progress < 0.05) {
            opacity = progress / 0.05;
        } else if (Math.abs(progress-1.0) < 0.05) {
            opacity = Math.abs(1.0 - progress) / 0.05;
        }
        $(es).each(
            function(i, e){
                $(e).css('opacity', opacity.toString());
                $(e).css('filter', 'alpha(opacity=' + (opacity*100).toString()+")");
            }
        );
    };

    // init controller
    var controller = new ScrollMagic();

    // build scene


    var createBeeScene = function(beesId, bee1Id, bee2Id, soundId) {
                new ScrollScene({triggerElement: beesId, duration: 300})
                    .addTo(controller)
                    .on("update", function (e) {
                        var direction = e.target.parent().info("scrollDirection");
                        var scale = 1.0;
                        if (direction === 'FORWARD') {
                            setXScale($(bee1Id), scale);
                            setXScale($(bee2Id), scale);
                        } else {
                            setXScale($(bee1Id), -scale);
                            setXScale($(bee2Id), -scale);
                        }
                    })
                    .on("enter leave", function (e) {
                    })
                    .on("start end", function (e) {
                        var direction = e.target.parent().info("scrollDirection");
                        if ((e.type === 'start' && direction === 'FORWARD') || (e.type === 'end' && direction === 'REVERSE')) {
                            document.getElementById('buzzSound').play();
                        }
                    })
                    .on("progress", function (e) {
                        $(beesId).css('left', Math.max(0, Math.round(e.progress * window.innerWidth - 100)).toString() + 'px');
                        setOpacity([bee1Id, bee2Id, soundId], e.progress);

                    })
                 //   .addIndicators()
                    ;
    };

    createBeeScene('#bees1','#bee1','#bee2', '#bzz1');
    createBeeScene('#bees2','#bee3','#bee4', '#bzz2');

    (function (flip){
        var swap = function(){

               $('#bee1').css('display', flip? 'none':'block');
               $('#bee2').css('display', flip? 'block':'none');
               $('#bee3').css('display', flip? 'none':'block');
               $('#bee4').css('display', flip? 'block':'none');
               flip = !flip;
               setTimeout(swap, 200);
        };
        setTimeout(swap, 200);
    }(true));

    $(['#bee1','#bee2','#bee3','#bee4']).each(
        function(i , e) {
            $(e).data('xScale', 1.0);
        }
    );

// Bouncy Bear

    new ScrollScene({triggerElement: '#bouncybearcontainer', duration: 300})
        .addTo(controller)
        .on("update", function (e) {
//            var direction = e.target.parent().info("scrollDirection");
//            if (direction === 'FORWARD') {
//                setXScale($('#bouncybear'), 1.0);
//            } else {
//                setXScale($('#bouncybear'), -1.0);
//            }
        })
        .on("enter leave", function (e) {
        })
        .on("start end", function (e) {
            var direction = e.target.parent().info("scrollDirection");

            if ((e.type === 'start' && direction === 'FORWARD') || (e.type === 'end' && direction === 'REVERSE')) {
                document.getElementById('boingSound').play();
            }

        })
        .on("progress", function (e) {

            var left = Math.max(0, Math.round(e.progress * (window.innerWidth-250)));
            var y = -0.6* (e.progress * 11.28 - 5.6)* (e.progress * 11.28 - 5.6)+20.2;
            var top = y / 20.2 * 200;
            top = -top;
            $('#bouncybear').css('left', left.toString() + 'px');
            $('#bouncybear').css('top',top.toString() + 'px');

            setRotation($('#bouncybear'), (e.progress / 0.3) * 360);
            setOpacity(['#bouncybear','#boing'], e.progress);
        })
     //   .addIndicators()
        ;
});