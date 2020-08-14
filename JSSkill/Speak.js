/**
 * 语言播报
 */
function Speak(str,lang)
{
  let msg = new SpeechSynthesisUtterance(str)
  // 语言
  msg.lang = lang
  // 音量
  msg.volume = 1
  // 语速
  msg.rate = 1
  // 音调
  msg.pitch = 1
  let voices = window.speechSynthesis.getVoices();
  console.log(voices.length)
  for(i = 0; i < voices.length ; i++) {
    console.log(voices[i])
  }
  // 声音
  mag.voice = voices[voices.length-1]
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(msg)
}

Speak('这是一个示例','zh-CN')
	
	
	
	
	
var msg = new SpeechSynthesisUtterance("这是一个简单的测试")
                msg.lang = "zh-CN"
                msg.volume = 1
                msg.rate = 1
                msg.pitch = 1
                var voices = window.speechSynthesis.getVoices();
                console.log(voices.length)
                for(var i = 0; i < voices.length ; i++) {
                    console.log(voices[i])
                    console.log(" Name:          " + voices[i].name);
                }
                msg.voice = voices[3];
                window.speechSynthesis.cancel()
                window.speechSynthesis.speak(msg)
