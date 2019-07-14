var buying = document.getElementsByClassName("lineleft");
var passages = document.getElementsByClassName("passages");
var icon = document.getElementsByClassName("icon");
document.getElementById('timeShow').innerHTML = document.getElementById('navtime').innerHTML;
chengColor();

function chengColor() {
    for (var i = 0; i < buying.length; i++) {
        //买卖判定 修改颜色和对应字符
        if (buying[i].children[1].innerHTML == "卖出") {
            passages[i].style.color = '#d9462d';
            icon[i].children[0].innerHTML = "卖";
        }
    }
}
var calendar = new LCalendar();
calendar.init({
    'trigger': '#start_date', //标签id
    'type': 'ym', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
    'minDate': (new Date().getFullYear() - 3) + '-' + 1, //最小日期
    'maxDate': (new Date().getFullYear() + 3) + '-' + 12 //最大日期
});