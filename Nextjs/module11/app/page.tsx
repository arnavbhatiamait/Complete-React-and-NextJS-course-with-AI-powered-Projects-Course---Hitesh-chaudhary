import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center bg-zinc-900 items-center h-screen" >
      <Button 
      variant="destructive"
      size='lg'
      >
        Click Me
      </Button>
    </div>
  );
}
