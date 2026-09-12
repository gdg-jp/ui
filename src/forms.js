import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check, ChevronDown, Minus } from "lucide-react";
import { Checkbox as RC, RadioGroup as RR, Switch as RS, Select as RSelect } from "radix-ui";
import { createContext, useCallback, useContext, useId, useRef, useState, } from "react";
import { useExitPresence, useMotionRef } from "./motion";
import { cn } from "./utils";
const FieldContext = createContext(null);
function useField(props) {
    const field = useContext(FieldContext);
    return {
        id: props.id ?? field?.id,
        "aria-describedby": [field?.description, props["aria-describedby"]].filter(Boolean).join(" ") || undefined,
        "aria-invalid": props["aria-invalid"] ?? field?.invalid,
        disabled: props.disabled ?? field?.disabled,
        required: props.required ?? field?.required,
    };
}
export function FormField({ id: suppliedId, label, description, error, required, disabled, children, className, }) {
    const generatedId = useId();
    const id = suppliedId ?? generatedId;
    return (_jsx(FieldContext.Provider, { value: {
            id,
            description: [description && `${id}-help`, error && `${id}-error`].filter(Boolean).join(" ") ||
                undefined,
            invalid: !!error,
            required,
            disabled,
        }, children: _jsxs("div", { className: cn("gdg-field", className), children: [_jsxs("label", { id: `${id}-label`, htmlFor: id, children: [label, required && _jsx("span", { "aria-hidden": "true", children: " *" })] }), children, description && (_jsx("p", { id: `${id}-help`, className: "gdg-field-help", children: description })), error && (_jsx("p", { id: `${id}-error`, className: "gdg-field-error", children: error }))] }) }));
}
export function Input({ className, ...props }) {
    const field = useField(props);
    return _jsx("input", { ...props, ...field, className: cn("gdg-input", className) });
}
export function Textarea({ className, ...props }) {
    const field = useField(props);
    return _jsx("textarea", { ...props, ...field, className: cn("gdg-input", "gdg-textarea", className) });
}
export function Checkbox({ className, ...props }) {
    const field = useField(props);
    return (_jsx(RC.Root, { ...props, ...field, className: cn("gdg-checkbox", className), children: _jsxs(RC.Indicator, { children: [_jsx(Check, { size: 14, className: "gdg-check-mark" }), _jsx(Minus, { size: 14, className: "gdg-check-mixed" })] }) }));
}
export function Switch({ className, ...props }) {
    const field = useField(props);
    return (_jsx(RS.Root, { ...props, ...field, className: cn("gdg-switch", className), children: _jsx(RS.Thumb, { className: "gdg-switch-thumb" }) }));
}
export function RadioGroup({ className, ...props }) {
    const field = useField(props);
    const context = useContext(FieldContext);
    return (_jsx(RR.Root, { "aria-labelledby": context ? `${context.id}-label` : undefined, ...props, ...field, className: cn("gdg-stack", className) }));
}
export function RadioGroupItem({ className, ...props }) {
    return (_jsx(RR.Item, { ...props, className: cn("gdg-radio", className), children: _jsx(RR.Indicator, { className: "gdg-radio-indicator" }) }));
}
const SelectMotionContext = createContext(null);
export function Select({ open: controlledOpen, defaultOpen = false, onOpenChange, ...props }) {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const open = controlledOpen ?? internalOpen;
    const contentRef = useRef(null);
    const present = useExitPresence(open, contentRef);
    const field = useContext(FieldContext);
    return (_jsx(SelectMotionContext.Provider, { value: { open, contentRef }, children: _jsx(RSelect.Root, { ...props, required: props.required ?? field?.required, disabled: props.disabled ?? field?.disabled, open: present, onOpenChange: (next) => {
                if (controlledOpen === undefined)
                    setInternalOpen(next);
                onOpenChange?.(next);
            } }) }));
}
export const SelectValue = RSelect.Value;
export function SelectTrigger({ children, className, ...props }) {
    const field = useField(props);
    const motion = useContext(SelectMotionContext);
    return (_jsxs(RSelect.Trigger, { ...props, ...field, "aria-expanded": motion?.open, className: cn("gdg-input", "gdg-select-trigger", className), children: [children, _jsx(RSelect.Icon, { children: _jsx(ChevronDown, { size: 16 }) })] }));
}
export function SelectContent({ ref, children, className, ...props }) {
    const motion = useContext(SelectMotionContext);
    const motionRef = useMotionRef(ref);
    const contentRef = motion?.contentRef;
    const setRef = useCallback((node) => {
        if (contentRef)
            contentRef.current = node;
        return motionRef(node);
    }, [contentRef, motionRef]);
    return (_jsx(RSelect.Portal, { children: _jsxs(RSelect.Content, { ref: setRef, position: "popper", sideOffset: 4, ...props, "data-state": motion?.open ? "open" : "closed", inert: motion ? !motion.open : undefined, className: cn("gdg-popup", "gdg-select-content", className), children: [_jsx(RSelect.ScrollUpButton, { children: "\u2191" }), _jsx(RSelect.Viewport, { children: children }), _jsx(RSelect.ScrollDownButton, { children: "\u2193" })] }) }));
}
export function SelectItem({ children, className, ...props }) {
    return (_jsxs(RSelect.Item, { ...props, className: cn("gdg-menu-item", className), children: [_jsx(RSelect.ItemText, { children: children }), _jsx(RSelect.ItemIndicator, { children: _jsx(Check, { size: 16 }) })] }));
}
export const SelectGroup = RSelect.Group;
export const SelectLabel = RSelect.Label;
