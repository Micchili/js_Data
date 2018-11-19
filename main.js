 let now = new Date();
 const TODAY_YEAR = now.getFullYear();
 const TODAY_MONTH = now.getMonth();
 const TODAY_DATA = now.getDate();
 const TODAY_DAY = now.getDay();
 const TODAY_HOURS = now.getHours();
 const TODAY_MINUTES = now.getMinutes();
 const TODAY_SECOND = now.getSeconds();
 const TODAY_TIME = now.getTime();

document.write("何年:" + TODAY_YEAR );
document.write("<br>何月:" + TODAY_MONTH );
document.write("<br>何日:" + TODAY_DATA );
document.write("<br>何曜日:" + TODAY_DAY );
document.write("<br>何時:" + TODAY_HOURS );
document.write("<br>何分:" + TODAY_MINUTES );
document.write("<br>何秒:" + TODAY_SECOND );
document.write("<br>何ミリ:" + TODAY_TIME );