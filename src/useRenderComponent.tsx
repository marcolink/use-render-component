import * as React from "react";

function useRenderComponent<T>(Component: React.FC<T>, initialProps: T): {
    component: React.ReactNode,
    updateProp: <K extends keyof T>(field: K, value: T[K]) => void,
    setProps: (value: T) => void,
    props: T
} {
    const [props, setProps] = React.useState<T>(initialProps);
    const updateProp = <K extends keyof T>(
        field: K,
        value: T[K]
    ) =>
        setProps((prevState: T) => ({
            ...prevState,
            [field]: value
        }));

    return {
        component: <Component {...props} />,
        updateProp,
        setProps,
        props
    };
};

export { useRenderComponent };