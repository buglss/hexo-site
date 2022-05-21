hexo.extend.helper.register("getPages", function(content = "") {
    const rPageBegin = "(<!-- ?Page ?Begin ?-->)";
    const rPageEnd = "(<!-- ?Page ?End ?-->)";
    
    let bulkPages = content.match(new RegExp(rPageBegin + "((.|\n)*?)" + rPageEnd, "gi")) || []
    let pages = bulkPages.map(p => p.replace(new RegExp(`(${rPageBegin})|(${rPageEnd})`, "gi"), ""));
    
    return pages;
});