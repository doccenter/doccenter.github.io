$('#d2').hide();
var basicTimeline = anime.timeline();
basicTimeline.add({
    targets: '#d1 .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    // delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    complete: function () {
        $('#d1').hide();
        $('#d2').show();
        var absoluteOffset = anime.timeline();

        absoluteOffset
            .add({
                targets: '#d2 .line',
                translateX: '40%',
                easing: [.91, -0.54, .29, 1.56]
            })

    }
});