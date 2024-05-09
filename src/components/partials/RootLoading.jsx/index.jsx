import { cn } from "@/lib/utils";

const Span = ({ children, className }) => (
  <span
    className={cn(
      "m-2 block animate-loading-spin rounded-full border-2 border-background border-l-border border-r-border border-t-primary",
      className,
    )}
  >
    {children}
  </span>
);

const NestedSpan = ({ depth, className }) => {
  if (depth === 0) {
    return (
      <Span
        className={cn(
          "border-primary border-b-primary border-l-primary border-t-primary",
          className,
        )}
      />
    );
  }

  return (
    <Span className={className}>
      <NestedSpan className={className} depth={depth - 1} />
    </Span>
  );
};

const RootLoading = ({ className, depth = 7 }) => {
  return (
    <main className="fixed left-0 right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-background">
      <div>
        <NestedSpan className={className} depth={depth} />
      </div>
    </main>
  );
};

export default RootLoading;
