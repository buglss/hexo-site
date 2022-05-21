hexo.extend.helper.register("getSections", function(content = "") {
    const rSectionBegin = "(<!-- ?Section ?Begin ?-->)";
    const rSectionEnd = "(<!-- ?Section ?End ?-->)";
    
    let bulkSections = content.match(new RegExp(rSectionBegin + "((.|\n)*?)" + rSectionEnd, "gi")) || []
    let sections = bulkSections.map(p => p.replace(new RegExp(`(${rSectionBegin})|(${rSectionEnd})`, "gi"), ""));
    
    return sections;
});