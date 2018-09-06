/*
日期相关函数
*/

function formatDate(date) {　　　 
　 var myyear = date.getFullYear();　　 
　 var mymonth = date.getMonth()+1;　　 
　 var myweekday = date.getDate();　　　 
　　　　 
　 if(mymonth < 10){　　 
　　　 mymonth = "0" + mymonth;　　 
　 }　　　 
　 if(myweekday < 10){　　 
　　　 myweekday = "0" + myweekday;　　 
　 }　　 
　 return (myyear+"-"+mymonth + "-" + myweekday);　　　 
}　　　 
　　 
//获得某月的天数　　 
function getMonthDays(paraYear,paraMonth){　　 
　 var monthStartDate = new Date(paraYear, paraMonth, 1);　　　 
　 var monthEndDate = new Date(paraYear, paraMonth + 1, 1);　　　 
　 var　 days　 =　 (monthEndDate　 -　 monthStartDate)/(1000　 *　 60　 *　 60　 *　 24);　　　 
　 return　 days;　　　 
}　　　 
　　 
//获得某周的开始日期　　 
function getWeekStartDate(paraYear,paraMonth,paraDay,paraDayOfWeek) {　　　 
　 var weekStartDate = new Date(paraYear, paraMonth, paraDay + 1 - paraDayOfWeek);　　　 
　 return formatDate(weekStartDate);　　 
}　　　 
　　 
//获得某周的结束日期　　 
function getWeekEndDate(paraYear,paraMonth,paraDay,paraDayOfWeek) {　　　 
　 var weekEndDate = new Date(paraYear, paraMonth, paraDay + (7 - paraDayOfWeek));　　　 
　 return formatDate(weekEndDate);　　 
}　　　 
　　 
//获得某月的开始日期　　 
function getMonthStartDate(paraYear,paraMonth){　　 
　 var monthStartDate = new Date(paraYear, paraMonth, 1);　　　 
　 return formatDate(monthStartDate);　　 
}　　 
　　 
//获得某月的结束日期　　 
function getMonthEndDate(paraYear,paraMonth){ 
　 var monthEndDate = new Date(paraYear,paraMonth, getMonthDays(paraYear,paraMonth));　　　 
　 return formatDate(monthEndDate);　　 
}　　 

//获得上月开始时间　 
function getLastMonthStartDate(paraYear, lastMonth){　 
　 var lastMonthStartDate = new Date(paraYear, lastMonth, 1);　 
　 return formatDate(lastMonthStartDate);　　 
}　 

//获得上月结束时间　 
function getLastMonthEndDate(paraYear, lastMonth){　 
　 var lastMonthEndDate = new Date(paraYear, lastMonth, getMonthDays(lastMonth));　 
　 return formatDate(lastMonthEndDate);　　 
}　 
　　 
//获得某季度的开始日期　　 
function getQuarterStartDate(paraYear,paraSeason){　　 
　 switch (paraSeason){　　 
　　　 case '1' : return paraYear+"-01-01";
　　　 case '2' : return paraYear+"-04-01";
　　　 case '3' : return paraYear+"-07-01";
　　　 case '4' : return paraYear+"-10-01";
　 }
}　　 
　　 
//获得某季度的结束日期　　 
function getQuarterEndDate(paraYear,paraSeason){　　 
　 switch (paraSeason){　　 
　 case '1' : return paraYear+"-03-31";
　 case '2' : return paraYear+"-06-30";
　 case '3' : return paraYear+"-09-30";
　 case '4' : return paraYear+"-12-31";
　 }　 
}

//获取某年某周的开始日期
function getBeginDateOfWeek(paraYear, weekIndex){
　 var firstDay = GetFirstWeekBegDay(paraYear);
　 //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
　 var time=(weekIndex-1)*7*24*3600000;
　 var beginDay = firstDay;
　 //为日期对象 date 重新设置成时间 time
　 beginDay.setTime(firstDay.valueOf()+time-24*3600*1000);

　 return beginDay;
}

//获取某年某周的结束日期
function getEndDateOfWeek(paraYear, weekIndex){
　 var firstDay = GetFirstWeekBegDay(paraYear);
　 //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
　 var time=(weekIndex-1)*7*24*3600000;
　 var weekTime = 6*24*3600000;
　 var endDay = firstDay;
　 //为日期对象 date 重新设置成时间 time
　 endDay.setTime(firstDay.valueOf()+weekTime+time-24*3600*1000);
　 return endDay;
}

//获取日期为某年的第几周
function GetWeekIndex(dateobj) {
　 var firstDay = GetFirstWeekBegDay(dateobj.getFullYear());
　 if (dateobj < firstDay) {
　　 firstDay = GetFirstWeekBegDay(dateobj.getFullYear() - 1);
　 }
　 let d = Math.floor((dateobj.valueOf() - firstDay.valueOf()) / 86400000);
　 return Math.floor(d / 7) + 1;　
}

//获取某年的第一天
function GetFirstWeekBegDay(year) {
　 var tempdate = new Date(year, 0, 1);
　 var temp = tempdate.getDay();
　 if (temp == 1){
　　　 return tempdate;
　 }
　 temp = temp == 0?7 : temp;
　 tempdate = tempdate.setDate(tempdate.getDate() + (8 - temp));
　 return new Date(tempdate);　 
}


// 获取某日日历周的起止日期
export function GeDateOfWeek(dateobj){
    let weekIndex = GetWeekIndex(dateobj);
    let myyear = dateobj.getFullYear();
    let startDate = getBeginDateOfWeek(myyear, weekIndex);
    let endDate = getEndDateOfWeek(myyear, weekIndex);
    return [startDate, endDate];
}

export function weekdays(date)
{
    var w = date.getDay()
    var ts = date.getTime()
    var t

    ts = ts - 24 * 3600 * w * 1000;

    var res = []

    var i

    for (i = 0; i < 7; i++)
    {
        t = ts + 24 * 3600 * 1000 * i
        var d = new Date(t)

        var item = {}

        item.week = d.getDay()
        item.date = d.getDate()
        item.obj = d

        res.push(item)
    }

    return res
}

export function dateFormat(date, format) {
  if(format === undefined){
      format = date;
      date = new Date();
  }
  var map = {
      "M": date.getMonth() + 1, //月份
      "d": date.getDate(), //日
      "h": date.getHours(), //小时
      "m": date.getMinutes(), //分
      "s": date.getSeconds(), //秒
      "q": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
  };
  format = format.replace(/([yMdhmsqS])+/g, function(all, t){
      var v = map[t];
      if(v !== undefined){
          if(all.length > 1){
              v = '0' + v;
              v = v.substr(v.length-2);
          }
          return v;
      }
      else if(t === 'y'){
          return (date.getFullYear() + '').substr(4 - all.length);
      }
      return all;
  });
  return format;
}