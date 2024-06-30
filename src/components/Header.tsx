import ConnectWithUs from "./ConnectWithUs";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <ModeToggle />
        <ConnectWithUs />
      </div>

      <span> richtech</span>
    </header>
  );
}
