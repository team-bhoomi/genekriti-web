import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        className={cn(
            "fixed top-0 left-0 z-10 flex flex-col items-center justify-center gap-4 max-w-max min-h-screen py-4 bg-primary/80 text-accent-foreground rounded-e-2xl",
            className
        )}
        {...props}
    >
        {children}
        <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn(
            "flex flex-1 flex-col list-none items-center justify-center gap-2 pl-2 py-3",
            className
        )}
        {...props}
    />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
    "group inline-flex items-center gap-3 rounded-l-xl bg-transparent w-full h-[55px] pl-1 pr-3 py-2 font-medium transition duration-75 ease-in-out hover:bg-accent focus:bg-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:before:w-5 hover:before:h-5 hover:before:bg-transparent hover:before:absolute hover:before:-top-5 hover:before:right-0 hover:before:rounded-ee-full hover:before:shadow-[5px_5px_0px_5px_#f4f4f5] hover:before:transition hover:before:duration-75 hover:after:ease-in-out hover:after:w-5 hover:after:h-5 hover:after:bg-transparent hover:after:absolute hover:after:-bottom-5 hover:after:right-0 hover:after:rounded-se-full hover:after:shadow-[5px_-5px_0px_5px_#f4f4f5] hover:after:transition hover:after:duration-75 hover:after:ease-in-out"
);

const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(navigationMenuTriggerStyle(), "group", className)}
        {...props}
    >
        {children}{" "}
        <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
        />
    </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
            className
        )}
        {...props}
    />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
        <NavigationMenuPrimitive.Viewport
            className={cn(
                "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
                className
            )}
            ref={ref}
            {...props}
        />
    </div>
));
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
            "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
            className
        )}
        {...props}
    >
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName;

export {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
};
