import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ConnectWithUs() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">تماس با ما</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-left">درخواست مشاوره</DialogTitle>
          <DialogDescription className="text-left">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="name" className="text-right">
              نام :
            </Label>
            <Input
              id="name"
              placeholder="نام خود را وارد کنید"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="name" className="text-right">
              شماره تماس :
            </Label>
            <Input
              id="name"
              placeholder="۹۹xxxxxxxx"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              ایمیل :
            </Label>
            <Input
              id="username"
              placeholder="xxx@gmail.com"
              className="col-span-3"
              type="email"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">ارسال</Button>
          <Button variant={"destructive"}>لغو</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
