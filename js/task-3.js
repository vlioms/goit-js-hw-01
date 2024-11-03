function getElementWidth(content, padding, border) {
    const contentWidth = parseInt(content);
    const paddingWidth = parseInt(padding);
    const borderWdith = parseInt(border);

    return contentWidth + 2 * paddingWidth + 2 * borderWdith;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));