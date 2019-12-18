import * as React from "react";
import { renderHook, act } from '@testing-library/react-hooks'
import { useRenderComponent } from "./useRenderComponent";
import { render, screen } from '@testing-library/react'

type TestComponentProps = {
    id: string
};

const TestComponent: React.FC<TestComponentProps> = (props) => {
    return <div data-testid={props.id} />;
}

describe("A react hook useRenderComponent", () => {
    
    it("can define initial props", () => {
        const { result } = renderHook(() => useRenderComponent(TestComponent, { id: "test" }));
        expect(result.current.props.id).toBe("test");
    });

    it("can update props", () => {
        const { result } = renderHook(() => useRenderComponent(TestComponent, { id: "testA" }));

        act(() => {
            result.current.updateProp("id", "testB");
        });

        expect(result.current.props.id).toBe("testB");
    });

});

describe("A test component with useRenderComponent hook", () => {

    it("can set component props via updateProps", () => {

        const Test: React.FC = () => {
            const renderComponent = useRenderComponent(TestComponent, { id: "testA" });
            React.useEffect(() => renderComponent.updateProp("id", "testB"), []);
            return renderComponent.component;
        };

        render(<Test />);

        expect(screen.findAllByTestId("testB")).not.toBeNull;
    });

});
