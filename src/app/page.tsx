import AppAreachart from "@/components/AppAreachart";
import AppBarchart from "@/components/AppBarchart";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarchart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Object</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Object</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Object</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Object</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreachart/></div>
    </div>
  );
}
