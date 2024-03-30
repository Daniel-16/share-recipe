"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "./ui/toast";

export function ToastWithTitle() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          //   action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
}
