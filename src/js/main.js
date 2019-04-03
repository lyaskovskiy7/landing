$(document).ready(function () {
    $('.menu__link-active').click(function () {
        $('.menu-dabl').toggleClass('display-block')
    })

    
    var i = 0
    var img = $('.sl-slide')
    $('.next').click(function () {
        img.eq(i).css('display', 'none')
        i++
        if (i >= img.length) {
            i = 0
        }
        img.eq(i).css('display', 'block')
    })
    $('.prev').click(function () {
        img.eq(i).css('display', 'none')
        i--
        if (i < 0) {
            i = img.length - 1
        }
        img.eq(i).css('display', 'block')
    })

})