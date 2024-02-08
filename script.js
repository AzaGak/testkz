"use strict";

const data = [
    {
        id: "box",
        tag: "div",
    },
    {
        id: "",
        tag: "nav",
    },
    {
        id: "circle",
        tag: "span",
    },
];

data.forEach((blockObj, index) => {
    const block = document.createElement(blockObj.tag);

    if (!blockObj.id)
        throw new Error(`В данных под номером ${index + 1} нет id`);

    block.setAttribute("id", blockObj.id);
    document.body.append(block);
});
