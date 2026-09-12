import { X } from "lucide-react";
import {
  AlertDialog as RA,
  Dialog as RD,
  DropdownMenu as RM,
  Popover as RP,
  Tooltip as RT,
} from "radix-ui";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton } from "./foundations";
import { useMotionRef } from "./motion";
import { cn } from "./utils";
export const Dialog = RD.Root;
export const DialogTrigger = RD.Trigger;
export const DialogClose = RD.Close;
export function DialogTitle({ className, ...props }) {
  return _jsx(RD.Title, { ...props, className: cn("gdg-heading", className) });
}
export function DialogDescription({ className, ...props }) {
  return _jsx(RD.Description, { ...props, className: cn("gdg-muted", className) });
}
export function DialogContent({ ref, className, children, closeLabel = "閉じる", ...props }) {
  const motionRef = useMotionRef(ref);
  return _jsxs(RD.Portal, {
    children: [
      _jsx(RD.Overlay, { className: "gdg-overlay" }),
      _jsxs(RD.Content, {
        ref: motionRef,
        ...props,
        className: cn("gdg-dialog", className),
        children: [
          children,
          _jsx(RD.Close, {
            asChild: true,
            children: _jsx(IconButton, {
              "aria-label": closeLabel,
              variant: "ghost",
              className: "gdg-dialog-close",
              children: _jsx(X, { size: 18 }),
            }),
          }),
        ],
      }),
    ],
  });
}
export const Sheet = RD.Root;
export const SheetTrigger = RD.Trigger;
export const SheetClose = RD.Close;
export const SheetTitle = DialogTitle;
export const SheetDescription = DialogDescription;
export function SheetContent({ className, side = "left", ...props }) {
  return _jsx(DialogContent, {
    ...props,
    className: cn("gdg-sheet", `gdg-sheet-${side}`, className),
  });
}
export const AlertDialog = RA.Root;
export const AlertDialogTrigger = RA.Trigger;
export const AlertDialogAction = RA.Action;
export const AlertDialogCancel = RA.Cancel;
export const AlertDialogTitle = RA.Title;
export const AlertDialogDescription = RA.Description;
export function AlertDialogContent({ ref, className, ...props }) {
  const motionRef = useMotionRef(ref);
  return _jsxs(RA.Portal, {
    children: [
      _jsx(RA.Overlay, { className: "gdg-overlay" }),
      _jsx(RA.Content, { ref: motionRef, ...props, className: cn("gdg-dialog", className) }),
    ],
  });
}
export const Popover = RP.Root;
export const PopoverTrigger = RP.Trigger;
export const PopoverClose = RP.Close;
export function PopoverContent({ ref, className, ...props }) {
  const motionRef = useMotionRef(ref);
  return _jsx(RP.Portal, {
    children: _jsx(RP.Content, {
      ref: motionRef,
      sideOffset: 6,
      ...props,
      className: cn("gdg-popup", "gdg-popover", className),
    }),
  });
}
export const DropdownMenu = RM.Root;
export const DropdownMenuTrigger = RM.Trigger;
export function DropdownMenuContent({ ref, className, ...props }) {
  const motionRef = useMotionRef(ref);
  return _jsx(RM.Portal, {
    children: _jsx(RM.Content, {
      ref: motionRef,
      sideOffset: 4,
      ...props,
      className: cn("gdg-popup", "gdg-menu", className),
    }),
  });
}
export function DropdownMenuItem({ className, ...props }) {
  return _jsx(RM.Item, { ...props, className: cn("gdg-menu-item", className) });
}
export const DropdownMenuGroup = RM.Group;
export const DropdownMenuLabel = RM.Label;
export function DropdownMenuSeparator(props) {
  return _jsx(RM.Separator, { ...props, className: cn("gdg-separator", props.className) });
}
export const TooltipProvider = RT.Provider;
export const Tooltip = RT.Root;
export const TooltipTrigger = RT.Trigger;
export function TooltipContent({ ref, className, ...props }) {
  const motionRef = useMotionRef(ref);
  return _jsx(RT.Portal, {
    children: _jsx(RT.Content, {
      ref: motionRef,
      sideOffset: 6,
      ...props,
      className: cn("gdg-popup", "gdg-tooltip", className),
    }),
  });
}
