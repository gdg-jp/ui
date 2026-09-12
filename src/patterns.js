import {
  ChevronDown,
  CircleAlert,
  CircleCheck,
  Info,
  LoaderCircle,
  Menu,
  TriangleAlert,
} from "lucide-react";
import { Accordion as RAccordion, Tabs as RTabs } from "radix-ui";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster as Sonner, toast } from "sonner";
import { Button, Heading, IconButton } from "./foundations";
import { useMotionRef } from "./motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./overlays";
import { useTheme } from "./theme";
import { cn } from "./utils";
export { toast };
export function Alert({ tone = "info", title, children, className, ...props }) {
  const Icon =
    tone === "danger"
      ? CircleAlert
      : tone === "warning"
        ? TriangleAlert
        : tone === "success"
          ? CircleCheck
          : Info;
  return _jsxs("div", {
    role: tone === "danger" ? "alert" : "status",
    ...props,
    className: cn("gdg-alert", `gdg-tone-${tone}`, className),
    children: [
      _jsx(Icon, { size: 20, "aria-hidden": "true" }),
      _jsxs("div", {
        children: [
          _jsx("strong", { children: title }),
          children && _jsx("div", { children: children }),
        ],
      }),
    ],
  });
}
export function Toaster(props) {
  const { resolvedTheme } = useTheme();
  return _jsx(Sonner, {
    theme: resolvedTheme === "dark" ? "dark" : "light",
    position: "bottom-right",
    closeButton: true,
    ...props,
    className: cn("gdg-toaster", props.className),
    style: {
      zIndex: "var(--gdg-layer-toast)",
      fontFamily: "var(--gdg-font-sans)",
      ...props.style,
    },
    toastOptions: {
      ...props.toastOptions,
      className: cn("gdg-toast", props.toastOptions?.className),
      style: {
        background: "var(--gdg-surface)",
        color: "var(--gdg-text)",
        border: "none",
        borderRadius: "var(--gdg-radius-md)",
        boxShadow: "var(--gdg-shadow-md)",
        fontFamily: "var(--gdg-font-sans)",
        transition: "var(--gdg-toast-transition)",
        ...props.toastOptions?.style,
      },
    },
  });
}
export function Spinner({ label = "読み込み中", className, ...props }) {
  return _jsxs("output", {
    ...props,
    className: cn("gdg-inline", className),
    children: [
      _jsx(LoaderCircle, { className: "gdg-spinner", "aria-hidden": "true" }),
      _jsx("span", { className: "gdg-sr-only", children: label }),
    ],
  });
}
export function Skeleton({ className, ...props }) {
  return _jsx("div", { "aria-hidden": "true", ...props, className: cn("gdg-skeleton", className) });
}
export function EmptyState({ title, description, action }) {
  return _jsxs("div", {
    className: "gdg-empty",
    children: [
      _jsx(Heading, { level: 2, children: title }),
      description && _jsx("p", { className: "gdg-muted", children: description }),
      action,
    ],
  });
}
export function Table({ className, scrollLabel = "表を横にスクロール", ...props }) {
  return _jsx("section", {
    "aria-label": scrollLabel,
    tabIndex: 0,
    className: "gdg-table-scroll",
    children: _jsx("table", { ...props, className: cn("gdg-table", className) }),
  });
}
export function Pagination({ page, pageCount, onPageChange, label = "ページ切替" }) {
  return _jsxs("nav", {
    className: "gdg-inline",
    "aria-label": label,
    children: [
      _jsx(Button, {
        variant: "outline",
        disabled: page <= 1,
        onClick: () => onPageChange(page - 1),
        children: "\u524D\u3078",
      }),
      _jsxs("span", {
        "aria-live": "polite",
        children: [pageCount === 0 ? 0 : page, " / ", pageCount],
      }),
      _jsx(Button, {
        variant: "outline",
        disabled: page >= pageCount,
        onClick: () => onPageChange(page + 1),
        children: "\u6B21\u3078",
      }),
    ],
  });
}
export const Tabs = RTabs.Root;
export function TabsList({ className, ...props }) {
  return _jsx(RTabs.List, { ...props, className: cn("gdg-tabs-list", className) });
}
export function TabsTrigger({ className, ...props }) {
  return _jsx(RTabs.Trigger, { ...props, className: cn("gdg-tabs-trigger", className) });
}
export function TabsContent({ className, ...props }) {
  return _jsx(RTabs.Content, { ...props, className: cn("gdg-tabs-content", className) });
}
export const Accordion = RAccordion.Root;
export function AccordionItem({ className, ...props }) {
  return _jsx(RAccordion.Item, { ...props, className: cn("gdg-accordion-item", className) });
}
export function AccordionTrigger({ className, children, ...props }) {
  return _jsx(RAccordion.Header, {
    className: "gdg-accordion-heading",
    children: _jsxs(RAccordion.Trigger, {
      ...props,
      className: cn("gdg-accordion-trigger", className),
      children: [children, _jsx(ChevronDown, { size: 16 })],
    }),
  });
}
export function AccordionContent({ ref, className, children, ...props }) {
  const motionRef = useMotionRef(ref);
  return _jsx(RAccordion.Content, {
    ref: motionRef,
    ...props,
    className: cn("gdg-accordion-content", className),
    children: _jsx("div", { className: "gdg-accordion-inner", children: children }),
  });
}
export function Breadcrumb({ children, ...props }) {
  return _jsx("nav", {
    "aria-label": "\u30D1\u30F3\u304F\u305A",
    ...props,
    children: _jsx("ol", { className: "gdg-breadcrumb", children: children }),
  });
}
export function Toolbar({ className, ...props }) {
  return _jsx("div", { ...props, className: cn("gdg-toolbar", className) });
}
export function PageHeader({ title, description, actions }) {
  return _jsxs("header", {
    className: "gdg-page-header",
    children: [
      _jsxs("div", {
        children: [
          _jsx(Heading, { level: 1, children: title }),
          description && _jsx("p", { className: "gdg-muted", children: description }),
        ],
      }),
      actions && _jsx("div", { className: "gdg-inline", children: actions }),
    ],
  });
}
export function SidebarNav({ children, className, ...props }) {
  return _jsx("nav", { ...props, className: cn("gdg-sidebar-nav", className), children: children });
}
export function AppShell({
  navigation,
  header,
  children,
  brand,
  navigationLabel = "ナビゲーション",
}) {
  const [open, setOpen] = useState(false);
  return _jsxs("div", {
    className: "gdg-shell",
    children: [
      _jsx("a", {
        className: "gdg-skip-link",
        href: "#gdg-main",
        children: "\u672C\u6587\u3078\u79FB\u52D5",
      }),
      _jsxs("aside", {
        className: "gdg-sidebar",
        children: [_jsx("div", { className: "gdg-brand", children: brand }), navigation],
      }),
      _jsxs("div", {
        className: "gdg-shell-body",
        children: [
          _jsxs("header", {
            className: "gdg-shell-header",
            children: [
              _jsx("div", {
                className: "gdg-mobile-only",
                children: _jsxs(Sheet, {
                  open: open,
                  onOpenChange: setOpen,
                  children: [
                    _jsx(SheetTrigger, {
                      asChild: true,
                      children: _jsx(IconButton, {
                        variant: "ghost",
                        "aria-label": navigationLabel,
                        children: _jsx(Menu, { size: 20 }),
                      }),
                    }),
                    _jsxs(SheetContent, {
                      children: [
                        _jsx(SheetTitle, { children: navigationLabel }),
                        _jsx(SheetDescription, {
                          children:
                            "\u79FB\u52D5\u5148\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
                        }),
                        _jsx("div", {
                          onClick: (e) => {
                            if (e.target.closest("a")) setOpen(false);
                          },
                          onKeyDown: (e) => {
                            if (e.key === "Enter" && e.target.closest("a")) setOpen(false);
                          },
                          children: navigation,
                        }),
                        _jsx(SheetClose, {
                          asChild: true,
                          children: _jsx(Button, {
                            variant: "outline",
                            children: "\u9589\u3058\u308B",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              header,
            ],
          }),
          _jsx("main", { id: "gdg-main", tabIndex: -1, className: "gdg-main", children: children }),
        ],
      }),
    ],
  });
}
