let tocRoot = document.getElementById("toc-root");
let tocItems = document.getElementsByClassName("toc-item");
for (let i = 0; i < tocItems.length; i++)
{
    let header = tocItems[i];
    header.id = "toc-item-" + i.toString();

    let link = document.createElement("a");
    link.setAttribute("href", "#" + header.id);

    // construct the innerHTML for the link
    let whitespaceToPrefix = "";

    let headerRank = Number(header.tagName.charAt(header.tagName.length - 1));

    let timesToPutWhitespace = headerRank * 3 - 3;

    for (let j = 0; j < timesToPutWhitespace; j++)
    {
        whitespaceToPrefix += "&nbsp;";
    }

    link.innerHTML = whitespaceToPrefix + header.innerHTML;

    tocRoot.appendChild(link);
}