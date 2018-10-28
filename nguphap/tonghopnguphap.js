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
            translateX: 700,
            easing: [.91, -0.54, .29, 1.56],
            duration: 2000,
            complete: function () {
                elShow($('#d3'));
            }
        })
        .add({
            targets: '#d3 .square',
            translateY: {
                value: 200,
                duration: 10000
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
            translateX: 700,
            easing: [.91, -0.54, .29, 1.56],
            duration: 2000,
            complete: function () {
                elShow($('#d5'));
            }
        })
        .add({
            targets: '#d5 .phanloaidanhtu',
            translateY: [
                {value: 600, duration: 1000},
                {value: 0, duration: 5000}
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
            translateY: {
                value: 200,
                duration: 30000
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
                elShow($('#d7'));
            }
        })
        .add({
            targets: '#d7 .square',
            translateY: {
                value: 200,
                duration: 30000
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
                elShow($('#d8'));
            }
        })

});
