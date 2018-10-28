function elShow(el) {

    for (var a = 1; a < 100; a++) {
        var id = 'd' + a;
        if ($(el).attr('id') !== id) {
            $('#' + id).hide();
        } else {
            el.show();
        }
    }
}

$(document).ready(function () {
    elShow($('#d1'));
    var basicTimeline = anime.timeline();

    basicTimeline
        .add({
            targets: '#d1 .el',
            opacity: .5,
            translateX: {
                value: 700,
                duration: 3000
            },
            backgroundColor: '#FFF',
            borderRadius: ['0em', '25em'],
            easing: 'easeInOutQuad',
            duration: 5000,
            complete: function () {
                elShow($('#d2'));
            }
        })
        .add({
            targets: '#d2 .el',
            translateX: 250,
            easing: [.91, -0.54, .29, 1.56],
            duration: 5000,
            complete: function () {
                elShow($('#d3'));
            }
        })
        .add({
            targets: '#d3 .square',
            translateY: {
                value: 200,
                duration: 5000
            },
            rotate: {
                value: 360,
                duration: 1800,
                easing: 'easeInOutSine'
            },
            scale: {
                value: 2,
                duration: 1600,
                easing: 'easeInOutQuart'
            },
            complete: function () {
                elShow($('#d4'));
            }
        })
        .add({
            targets: '#d4 .square',
            scale: 2,
            duration: 6000,
            easing: 'linear',
            complete: function () {
                elShow($('#d5'));
            }
        })
        .add({
            targets: '#d4 .box',
            translateY: [
                {value: 400, duration: 1500},
                {value: 0, duration: 1800}
            ],
            rotate: {
                value: '1turn',
                easing: 'easeInOutSine'
            },
            delay: function (el, i, l) {
                return i * 1000
            },
            complete: function () {
                elShow($('#d6'));
            }
        })
        .add({
            targets: '#d6 .square',
            scale: 2,
            translateX: [
                {value: '0', duration: 1000},
                {value: '600px', duration: 1500}
            ],
            duration: 2000,
            easing: 'easeInOutSine',
        })
    // .add({
    //     targets: '#d4 .el',
    //     translateX: [300, 1000],
    //     direction: 'alternate',
    //     duration: 5000,
    //     complete: function () {
    //         elShow($('#d5'));
    //     }
    // }).add({
    // targets: '#d5 .el',
    // translateX: function (el) {
    //     return el.getAttribute('data-x');
    // },
    // translateY: function (el, i) {
    //     return 50 + (-50 * i);
    // },
    // scale: function (el, i, l) {
    //     return (l - i) + .25;
    // },
    // rotate: function () {
    //     return anime.random(-360, 360);
    // },
    // duration: function () {
    //     return anime.random(1200, 1800);
    // },
    // duration: function () {
    //     return anime.random(800, 1600);
    // },
    // delay: function () {
    //     return anime.random(0, 1000);
    // },
    // direction: 'alternate',
    // loop: true
    // });
    // basicTimeline.loop = true;
});
