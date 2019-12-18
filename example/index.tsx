import * as React from "react";
import { useRenderComponent } from "./../src/useRenderComponent";

type ButtonProps = {
    label: string,
    onClick?: () => void,
};

const Button: React.FC<ButtonProps> = (props) => {
    return <button onClick={props.onClick}>{props.label}</button>;
};

const App: React.ReactNode = () => {
    const button = useRenderComponent(Button, {label: "click me"});
    button.updateProp("onClick", ()=> button.updateProp("label", "clicked"));
    return button.component;
};

