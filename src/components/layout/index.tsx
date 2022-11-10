import { Sidebar } from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen flex flex-col">
      <main className="flex-grow">
        <Sidebar>{children}</Sidebar>
      </main>
    </div>
  );
};
