const customReactRoot = document.getElementById('root');

function renderReactElement(element, container) {
    const reactElement = document.createElement(element["type"]);
    reactElement.innerHTML = element["children"];

    for(prop in element["props"]) {
        reactElement.setAttribute(prop, element["props"][prop]);
    }

    container.appendChild(reactElement);
}
const reactElement = {
    "type": 'a',
    "props": {
        "href": "https://farmanali.com",
        "target": "_blank"
    },
    "children": "Farman Ali"
}
renderReactElement(reactElement, customReactRoot);