"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import clsx from "clsx"
import X from "@modules/common/icons/x"

const CatalogMenu = DialogPrimitive.Root

const CatalogMenuTrigger = DialogPrimitive.Trigger

const CatalogMenuPortal = DialogPrimitive.Portal

const CatalogMenuClose = DialogPrimitive.Close

const CatalogMenuContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    containerRef?: React.RefObject<HTMLElement>
  }
>(({ className, children, containerRef, ...props }, ref) => {
  const [position, setPosition] = React.useState<{ top: number; left: number }>(
    { top: 0, left: 0 }
  )

  React.useEffect(() => {
    if (containerRef?.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      })
    }
  }, [containerRef])

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Content
        ref={ref}
        style={{
          position: "absolute",
          top: `${position.top + 10}px`,
        }}
        className={clsx(
          "z-50 rounded-[20px] border bg-background p-6 shadow-lg duration-200 left-1/2 -translate-x-1/2",
          //   "data-[state=open]:animate-in data-[state=closed]:animate-out",
          //   "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          //   "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          //   "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          //   "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          className
        )}
        {...props}
      >
        {children}
        {/* <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Закрыть</span>
        </DialogPrimitive.Close> */}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
})
CatalogMenuContent.displayName = DialogPrimitive.Content.displayName

const CatalogMenuHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={clsx(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
CatalogMenuHeader.displayName = "CatalogMenuHeader"

const CatalogMenuFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={clsx(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
CatalogMenuFooter.displayName = "CatalogMenuFooter"

const CatalogMenuTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={clsx(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CatalogMenuTitle.displayName = DialogPrimitive.Title.displayName

const CatalogMenuDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={clsx("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CatalogMenuDescription.displayName = DialogPrimitive.Description.displayName

const CatalogMenuOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={clsx(
      "fixed inset-0 z-40 transition-opacity duration-300 ease-in-out",
      //   "data-[state=open]:animate-in data-[state=closed]:animate-out",
      //   "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
CatalogMenuOverlay.displayName = DialogPrimitive.Overlay.displayName

export {
  CatalogMenu,
  CatalogMenuTrigger,
  CatalogMenuContent,
  CatalogMenuHeader,
  CatalogMenuFooter,
  CatalogMenuTitle,
  CatalogMenuDescription,
  CatalogMenuClose,
  CatalogMenuOverlay,
}
