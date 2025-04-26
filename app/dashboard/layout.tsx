"use client";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
   
        <main className="p-6">
          {children}
        </main>
  );
}