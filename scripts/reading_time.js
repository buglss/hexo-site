hexo.extend.helper.register("readingTime", function(text) {
    var wpm = 225;
    var words = (text || "").trim().split(/\s+/g).length;
    var time = Math.ceil(words / wpm);
    return time;
});