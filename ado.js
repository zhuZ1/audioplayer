var oCircle = document.querySelector(".circle")
var MyAudio = document.getElementById("myaudio")
let mark = true
oCircle.onclick = function () {

    if(mark) {
        this.className = "circle rotate"
        MyAudio.play()
    } else {
        this.className = "circle"
        MyAudio.pause()
    }
    mark = !mark
}
var olrc = document.getElementById("txt").value
var ocon = document.querySelector(".lrc-con")
var text = olrc.split('[')

for (let i = 0; i < text.length; i++) {
    var lrc = text[i].split(']')
    var time = lrc[0].split('.')
    var otime = time[0].split(':')
    var t = otime[0] * 60 + otime[1] *1
    if (lrc[1]) {
        ocon.innerHTML += "<p id="+t+">" + lrc[1] + "</p>"
    }
}
var op = ocon.getElementsByTagName('p')
MyAudio.addEventListener('timeupdate', function() {
    var cut = parseInt(this.currentTime)
    if(document.getElementById(cut)) {
        for(let i = 0; i < op.length; i++) {
            op[i].style.cssText = 'color: #fff; font-size: 12px;'
        }
        document.getElementById(cut).style.cssText = 'color: #ff7700; ' +
            'font-size: 15px;'
    } else if(cut > 233) {
        oCircle.className = "circle"
    }

})
//歌词滚动播放未添加