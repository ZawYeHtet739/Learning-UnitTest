function prettyDate(now, time) {
    var check_time = new Date(time || null),
        time_diff = (new Date(now).getTime() - new Date(check_time).getTime()) / 1000,
        day_diff = Math.floor(time_diff / 86400);

    return day_diff == 0 && (
        time_diff < 60 && "just now" ||
        time_diff < 120 && "1 minute ago" ||
        time_diff < 3600 && Math.floor(time_diff / 60) + "minutes ago" ||
        time_diff < 7200 && "1 hour ago" ||
        time_diff < 86400 && Math.floor(time_diff / 3600) + "hours ago"
    ) ||
        day_diff == 1 && "yesterday" ||
        day_diff < 7 && day_diff + " days ago" ||
        day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
}

console.log(prettyDate("2014/09/10 22:24:30","2011/04/23 21:21:30"));

// Test
function prettyDateTest(now, time, expected) {
    var result = prettyDate(now, time);

    if (result !== expected) {
        console.log("Fail: Expected " + expected + ", but was " + result);
    } else {
        console.log("Pass: Expected " + expected + ", and was " + result);
    }
}


var date  = new Date(null);

console.log("Hello " + date);

// prettyDateTest("2014/09/10 22:24:30", "2014/09/10 22:24:30", "just now");
// prettyDateTest("2014/09/10 22:24:30", "2014/09/10 22:23:30", "1 minute ago");
// prettyDateTest("2014/09/10 22:24:30", "2014/09/10 21:23:30", "1 hour ago");
// prettyDateTest("2014/09/10 22:24:30", "2014/09/09 22:23:30", "yesterday");
// prettyDateTest("2014/09/10 22:24:30", "2014/09/08 22:23:30", "2 days ago");
// prettyDateTest("2014/09/10 22:24:30", "2013/09/08 22:23:30", false);