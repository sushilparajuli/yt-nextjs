import TodosList from "./TodosList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex p-4">
      <div className="flex-initial w-64">
        {/* @ts-ignore */}
        <TodosList />
      </div>
      <div className="flex-auto">{children}</div>
    </main>
  );
}
