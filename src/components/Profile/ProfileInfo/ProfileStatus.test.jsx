import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "../../../../MyReactProject/src/components/Profile/ProfileInfo/ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in state.", () => {
        const component = create(<ProfileStatus status="IT-Kamasutra" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("IT-Kamasutra");
    });
    test("After creation span should be displayed", () => {
        const component = create(<ProfileStatus status="IT-Kamasutra" />);
        const root = component.root
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("After creation span should content correct status", () => {
        const component = create(<ProfileStatus status="IT-Kamasutra" />);
        const root = component.root
        let span = root.findByType("span");
        expect(span.children[0]).toBe("IT-Kamasutra");
    });
    test("After creation input shouldn't displayed", () => {
        const component = create(<ProfileStatus status="IT-Kamasutra" />);
        const root = component.root
        expect(()=>{
            let input = root.findByType("input")
        }).toThrow();
    });
    test("Input should be displayen in EditMode instead of span", () => {
        const component = create(<ProfileStatus status="IT-Kamasutra" />);
        const root = component.root
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("IT-Kamasutra");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="IT-Kamasutra" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });


});