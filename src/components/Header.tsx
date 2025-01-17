import ConnectWithUs from "./ConnectWithUs";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="p-4 sticky top-3 z-10 flex flex-row-reverse justify-between items-center">
      <div className="flex  gap-4">
        <ConnectWithUs />
        <ModeToggle />
      </div>

      <span>richtech</span>
    </header>
  );
}
