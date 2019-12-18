# use-render-component

Did you always wanted to expose a setter/getter for any of your components props? 


### Example
```typescript
import * as React from "react";

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

```
