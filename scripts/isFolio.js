hexo.extend.helper.register("isFolio", function(path) {
    return RegExp(/folios\/\w+/).test(path.replace("index.html", ""));
});