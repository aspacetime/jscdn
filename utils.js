//返回最近七天的日期
    function getday2() {
        var days = [];
        var date = new Date();
        for(var i=0; i<=144;i+=24){		//144是前六天的小时数
            var dateItem=new Date(date.getTime() + i * 60 * 60 * 1000);	//使用当天时间戳减去以前的时间毫秒（小时*分*秒*毫秒）
            var y = dateItem.getFullYear();	//获取年份
            var m = dateItem.getMonth() + 1;	//获取月份js月份从0开始，需要+1
            var d= dateItem.getDate();	//获取日期
            m = addDate0(m);	//给为单数的月份补零
            d = addDate0(d);	//给为单数的日期补零
            var valueItem= y + '-' + m + '-' + d;	//组合
            days.push(valueItem);	//添加至数组
        }
        console.log('最近七天日期：',days);

        return days;
    }

    //给日期加0
    function addDate0(time) {
        if (time.toString().length == 1) {
            time = '0' + time.toString();
        }
        return time;
    }
    
function isNumber(val) {
        var regPos = /^\d+(\.\d+)?$/;//非负浮点数
        var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;//负浮点数
        if(regPos.test(val) || regNeg.test(val)) {
            return true;
        }else {
            return false;
        }
    }
 //根据身份证获取出生日期以及相应年龄是多少
                        $("#idNumber").on("blur", function () {
                            var num = Number($("#idNumber").val().split("").slice(6, 10).join(""))
                            var mon = $("#idNumber").val().substring(10, 12)
                            var da = $("#idNumber").val().substring(12, 14)
                            var birth = num + "/" + mon + "/" + da
                            var dt = new Date()
                            var year = dt.getFullYear()
                            $("#birthday").val(birth)
                            $("#age").text(year - num)
                        })
 //体表面积计算
    function getBodyArea(w, h) {
        var bodyArea = (0.0061 * h + 0.0128 * w - 0.1529).toFixed(4);
        return bodyArea;
    }
//BMI计算
    function getBMI(w, h) {
        h = h * 0.01;
        var bmi = (w / (h * h)).toFixed(4);
        return bmi;
    }
    //计算年龄
    function getAge(strBirthday) {
        var a = /^(\d{4})-(\d{2})-(\d{2})$/
        if (a.test(strBirthday)) {
            var birthYear = strBirthday.substring(0, 4);
            var year = new Date();
            var Nyear = year.getFullYear();
            var Nage = Nyear - birthYear;
            if (Nage <= 0) {
                Nage = 1;
            }
            return Nage;//返回年龄
        } else {
            return "";
        }
    }
function browserRedirect() {
                var sUserAgent = navigator.userAgent.toLowerCase();
                var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
                var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
                var bIsMidp = sUserAgent.match(/midp/i) == "midp";
                var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
                var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
                var bIsAndroid = sUserAgent.match(/android/i) == "android";
                var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
                var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {               
                    //手机端
                } else {        
                    //pc端
                    $('*').css("width",'100%');  
                    $('*').css("height",'100%');  
                }
            }
            browserRedirect();      //判断是手机端还是pc端
            $(function(){
                var h = window.screen.height;
                var w = window.screen.width;
                $('#myiframe').attr("width",w);  //把宽属性追加进去
                $('#myiframe').attr("height",h);  //把高属性追加进去
            })
function randombetween(min, max){
    return min + (Math.random() * (max-min +1));
}
function cloneObj(obj) {
    var o = obj.constructor == Object ? new obj.constructor() : new obj.constructor(obj.valueOf());
    for(var key in obj){
        if(o[key] != obj[key] ){
            if(typeof(obj[key]) == 'object' ){
                o[key] = mods.cloneObj(obj[key]);
            }else{
                o[key] = obj[key];
            }
        }
    }
    return o;
}
var getURLParam = function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)', "ig").exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
};
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSubling)
  }
}
function getIdcardData(){
   var ido=document.getElementById('idCardNumberHandle');//身份证号input元素的ID
   var bd=document.getElementById('birthdayHandle');
   var sex=document.getElementById('sexHandle');
   if(!/^\d{6}((?:19|20)((?:\d{2}(?:0[13578]|1[02])(?:0[1-9]|[12]\d|3[01]))|(?:\d{2}(?:0[13456789]|1[012])(?:0[1-9]|[12]\d|30))|(?:\d{2}02(?:0[1-9]|1\d|2[0-8]))|(?:(?:0[48]|[2468][048]|[13579][26])0229)))\d{2}(\d)[xX\d]$/.test(ido.value)){
      alert('身份证号非法.');
      return;
   }
   bd.value=(RegExp.$1).substr(0,4)+'-'+(RegExp.$1).substr(4,2)+'-'+(RegExp.$1).substr(6,2);//设置出生日期
   ex.value=(parseInt(ido.value.charAt(ido.value.length-2))%2==0?'女':'男');//设置性别
}
function hasRepeatValue(a) {
        return /(\x0f[^\x0f]+)\x0f[\s\S]*\1/.test("\x0f" + a.join("\x0f\x0f") + "\x0f");
}
function isNumber(val){
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)){
        return true;
    }else{
        return false;
    }
}
function min(arr){
  arr = arr.filter(item => !_isNaN(item))
  return arr.length ? Math.min.apply(null, arr) : undefined
}
function getRandomStrings(){
return 'U2FsdGVkX1/O73orI9oFfkIbBFTSCsDhJzWEMNY955MiDJhv/Fm8IPvKvvMaEmgW';
}
