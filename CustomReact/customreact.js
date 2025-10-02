function MainRender(ReactElement, Container) {
    const DomElement = document.createElement(ReactElement.type);

   
        DomElement.innerHTML = ReactElement.children;
   
    for (const prop in ReactElement.props) {
        if (prop === "children") continue;
        DomElement.setAttribute(prop, ReactElement.props[prop]);
    }
    Container.appendChild(DomElement);
}

const ReactElment = {
    type: "a",
    props: {
        href: "http://google.com",
        target: "_blank",
    },
    children: "Click to Visit Me",
};

const Maincontainer = document.querySelector("#root");

MainRender(ReactElment, Maincontainer);