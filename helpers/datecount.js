module.exports = {
  datecount: function(date1, date2){
    var one_day = 24*60*60*1000;
    var firstdate = new Date(date1);
    var lastdate = new Date(date2);

    var diffrentdate = Math.round(Math.abs(firstdate.getTime() - lastdate.getTime())/one_day);
    return diffrentdate;
  }
}
