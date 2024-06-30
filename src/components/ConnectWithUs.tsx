import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Headset } from "lucide-react";

export default function ConnectWithUs() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-xl flex gap-x-3">
          <span className="sm:hidden">تماس با ما</span>
          <Headset size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[330px] rounded-lg max-w-[540px] dark:bg-blue-950 ">
        <DialogHeader>
          <DialogTitle className="text-left xs:text-base">
            درخواست مشاوره
          </DialogTitle>
        </DialogHeader>
        <div className="flex  flex-col gap-4 py-4">
          <div className=" flex flex-col  sm:block  gap-y-2 ">
            <span className=" sm:mb-3 whitespace-nowrap sm:text-xs text-base">
              نام :
            </span>
            <Input
              id="name"
              placeholder="نام خود را وارد کنید"
              className="col-span-3"
            />
          </div>
          <div className=" flex flex-col sm:block   gap-y-2 ">
            <span className=" sm:mb-2 whitespace-nowrap sm:text-xs text-base ">
              شماره تماس :
            </span>
            <Input id="phone" placeholder="۹۹xxxxxxxx" className="col-span-3" />
          </div>
          <div className="flex flex-col sm:block  gap-y-2">
            <span className=" sm:text-xs whitespace-nowrap text-base">
              ایمیل :
            </span>
            <Input
              id="email"
              placeholder="xxx@gmail.com"
              className="col-span-3"
              type="email"
            />
          </div>
          <div className=" flex flex-col  sm:block  gap-y-2 ">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-2">پیامتان را وارد کنید :</Label>
              <Textarea placeholder="Type your message here." id="message-2" />
              <p className="text-sm text-muted-foreground">
                پیامتان به تیم پشتیبانی ارسال میشود
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex sm:flex-col gap-2 justify-between">
          <DialogClose asChild>
            <Button type="button" className="flex-1" variant={"destructive"}>
              لغو
            </Button>
          </DialogClose>
          <Button type="submit" className="flex-1">
            ارسال
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
