const componentTemplateFactory = (html, css) => {
    const template = document.createElement("template");
    template.innerHTML  = `
        <style>
            ${css}
        </style>
        ${html}
    `;
    return template;
};

export default componentTemplateFactory;
