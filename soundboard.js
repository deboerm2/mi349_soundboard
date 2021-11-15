

let Button1 = document.getElementById("button1")
let Button2 = document.getElementById("button2")
let Button3 = document.getElementById("button3")



Button1.onclick = function(){playSound1()}
Button2.onclick = function(){playSound2()}
Button3.onclick = function(){playSound3()}

function playSound1()
{
    let Sound = Button1.querySelector('audio')
    Sound.play()
}
function playSound2()
{
    let Sound = Button2.querySelector('audio')
    Sound.play()
}
function playSound3()
{
    let Sound = Button3.querySelector('audio')
    Sound.play()
}