var test = [{
    ChannelSetting: "Default1",
    Imgsrc: "fish.png",
    Location: "AUTOMESTER"
}, {
    ChannelSetting: "Default2",
    Imgsrc: "fish.png",
    Location: "AUTOMESTER"
}, {
    ChannelSetting: "Default3",
    Imgsrc: "fish.png",
    Location: " BERGEN"
}, {
    ChannelSetting: "Default4",
    Imgsrc: "fish.png",
    Location: " BERGEN"
}, {
    ChannelSetting: "Default5",
    Imgsrc: "fish.png",
    Location: " BERGEN"
}]
var channelSettings = document.getElementById("channelSettings");
var img = "";
var customer = "";
test.forEach(player => 
    channelSettings.innerHTML += "<br> <div class='block'style='top: 40px;posiition: absolute;><div>" + Object.values(player.ChannelSetting).join("") + "</div><img class='img_prop' src='"+ Object.values(player.Imgsrc).join("") +"'><div class='channelLocation'>" + Object.values(player.Location).join("") + "</div><div><img class='img_enter' src='ic_enter.png'></div></div>",
    );
//  function generateChart() {
//      var container = document.createElement("div");
//      container.className = "wrapper"
//     var text = "Hello World!";
//      var blockDiv, textSpan;
//    for (var i = 0; i < test.length; i++) {
//         blockDiv = document.createElement("div");
//         blockDiv.className = "block";
//          for (var c in test[i]) {
//             if (c == "textbefore") {
//                 textSpan = document.createElement("span");
//               textSpan.className = "shyam";              
//                 text = test[i]["textbefore"];
//                textSpan.append(text);
//                blockDiv.append(textSpan);
//              }
//            if (c == "imgsrc") {
//                image = document.createElement("img");
//                 image.setAttribute('src', test[i]["imgsrc"]);
//                 image.setAttribute('height', '20px');
//                 image.setAttribute('width', '40px');
//                 image.setAttribute('hspace', '40px');
//                image.class = "img1";
//               blockDiv.append(image);
//            }
//             if (c == "textafter") {
//                textSpan = document.createElement("span");
//                 textSpan.className = "shyam1";
//                 text = test[i]["textafter"];
//                  textSpan.append(text);
//                blockDiv.append(textSpan);
//             }
//           container.append(blockDiv);
//       }
//       imge = document.createElement("img");
//         imge.setAttribute('src', 'ic_enter.png ');
       
//        blockDiv.append(imge);
//  document.getElementById("div2").appendChild(container);
//          imge.classList.add("mystyle");
//            imge.classList.add("enter");
//      }
//  }
 $(document).on("click",".enter",function(){
     document.getElementById("pop").innerHTML+= this.parentElement.innerHTML;
     console.log(document.getElementById("pop").innerHTML)
     showPopup();
    });

   
    $(document).on("click",".popup_container button" ,function(){
     document.querySelector(".popup_container").style.display ="none";
 });
 function startTime() {
     const today = new Date();
     let h = today.getHours();
     let m = today.getMinutes();
     let s = today.getSeconds();
     let dd = today.getDate();
    let mo = today.getMonth();
     let yr = today.getFullYear();
     m = checkTime(m);
    s = checkTime(s);
    mo = checkTime(mo);
     dd = checkTime(dd);
     document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('dd').innerHTML = dd + "." + mo + "." + yr;
    setTimeout(startTime, 1000);
 }
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
   }; // add zero in front of numbers < 10
     return i;
}
function showPopup(){
 var image = document.getElementById('popup_container')
    image.style.display="block";   
 }



