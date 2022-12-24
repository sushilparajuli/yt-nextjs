import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex p-5 space-x-4 divide-x-2">
      <div>
        <h1 className="text-3xl font-bold">Search</h1>
      </div>
      <div className="pl-3">
        {/* @ts-ignore */}
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
}
