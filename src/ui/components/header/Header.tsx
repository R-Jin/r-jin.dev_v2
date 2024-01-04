import DarkModeToggle from "./DarkModeToggle";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="3xl:px-[640px] sticky top-0 z-10 bg-background px-8 transition-colors duration-200 ease-linear md:px-[150px] lg:px-[250px] xl:px-[375px] 2xl:px-[400px]">
      <div className="flex flex-row items-center justify-between">
        <NavLinks />
        <DarkModeToggle />
      </div>
      <hr />
    </header>
  );
}
