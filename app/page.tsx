import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div
      className={cn(
        "min-h-screen min-w-screen flex items-center justify-center"
      )}
    >
      <Button variant="outline" className="border border-blue-500 w-xs">
        A Button
      </Button>
    </div>
  );
};

export default Page;
