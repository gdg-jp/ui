import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { Avatar as RAvatar, Separator as RSeparator, Slot } from "radix-ui";
import { cloneElement, isValidElement, } from "react";
import { cn } from "./utils";
const buttonVariants = cva("gdg-button", {
    variants: {
        variant: {
            primary: "gdg-button-primary",
            secondary: "gdg-button-secondary",
            outline: "gdg-button-outline",
            ghost: "gdg-button-ghost",
            danger: "gdg-button-danger",
        },
        size: { sm: "gdg-size-sm", md: "gdg-size-md", lg: "gdg-size-lg" },
    },
    defaultVariants: { variant: "primary", size: "md" },
});
export function Button({ className, variant, size, asChild, loading, disabled, children, type = "button", onClick, onPointerDown, onPointerUp, onPointerCancel, onPointerLeave, ...props }) {
    const Comp = asChild ? Slot.Root : "button";
    const unavailable = disabled || loading;
    const child = asChild && isValidElement(children)
        ? cloneElement(children, {
            onClick: (event) => {
                if (unavailable) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }
                children.props.onClick?.(event);
            },
            onClickCapture: (event) => {
                if (unavailable) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }
                children.props.onClickCapture?.(event);
            },
            ...(unavailable ? { "aria-disabled": true, tabIndex: -1 } : {}),
        })
        : children;
    return (_jsx(Comp, { ...props, ...(!asChild
            ? { type, disabled: unavailable }
            : {
                "aria-disabled": unavailable || undefined,
                tabIndex: unavailable ? -1 : props.tabIndex,
            }), "aria-busy": loading || undefined, className: cn(buttonVariants({ variant, size }), className), onClick: (event) => {
            if (unavailable) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            onClick?.(event);
        }, onPointerDown: (e) => {
            onPointerDown?.(e);
            if (!e.defaultPrevented && !unavailable && e.button === 0)
                e.currentTarget.dataset.pressed = "true";
        }, onPointerUp: (e) => {
            delete e.currentTarget.dataset.pressed;
            onPointerUp?.(e);
        }, onPointerCancel: (e) => {
            delete e.currentTarget.dataset.pressed;
            onPointerCancel?.(e);
        }, onPointerLeave: (e) => {
            delete e.currentTarget.dataset.pressed;
            onPointerLeave?.(e);
        }, children: asChild ? (child) : (_jsxs(_Fragment, { children: [loading && _jsx(LoaderCircle, { className: "gdg-spinner", "aria-hidden": "true" }), children] })) }));
}
export function IconButton({ "aria-label": label, className, ...props }) {
    return _jsx(Button, { ...props, "aria-label": label, className: cn("gdg-icon-button", className) });
}
export function Link({ className, asChild, ...props }) {
    const Comp = asChild ? Slot.Root : "a";
    return _jsx(Comp, { ...props, className: cn("gdg-link", className) });
}
export function Text({ className, tone = "default", size = "md", ...props }) {
    return (_jsx("p", { ...props, className: cn("gdg-text", `gdg-text-${size}`, tone === "muted" && "gdg-muted", className) }));
}
export function Heading({ level = 2, className, ...props }) {
    const Tag = `h${level}`;
    return _jsx(Tag, { ...props, className: cn("gdg-heading", className) });
}
export function Stack({ className, ...props }) {
    return _jsx("div", { ...props, className: cn("gdg-stack", className) });
}
export function Inline({ className, ...props }) {
    return _jsx("div", { ...props, className: cn("gdg-inline", className) });
}
export function Card({ className, ...props }) {
    return _jsx("div", { ...props, className: cn("gdg-card", className) });
}
export function Separator({ className, ...props }) {
    return _jsx(RSeparator.Root, { ...props, className: cn("gdg-separator", className) });
}
export function Badge({ className, tone = "neutral", ...props }) {
    return _jsx("span", { ...props, className: cn("gdg-badge", `gdg-tone-${tone}`, className) });
}
export function Avatar({ src, alt, fallback, className, ...props }) {
    return (_jsxs(RAvatar.Root, { ...props, className: cn("gdg-avatar", className), children: [_jsx(RAvatar.Image, { src: src, alt: alt }), _jsx(RAvatar.Fallback, { role: "img", "aria-label": alt, children: fallback })] }));
}
