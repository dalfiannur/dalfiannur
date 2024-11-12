import { ReactNode } from "react";
import { NavigationBar } from "./_components/NavigationBar";
import { Footer } from "./_components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-24">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}
