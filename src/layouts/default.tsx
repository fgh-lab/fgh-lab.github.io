import ClickSpark from '@/components/ClickSpart';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClickSpark
      duration={400}
      sparkColor="#fff"
      sparkCount={8}
      sparkRadius={15}
      sparkSize={10}
    >
      <div className="relative flex flex-col justify-center h-screen">
        <main className="container mx-auto max-w-7xl px-6">{children}</main>
      </div>
    </ClickSpark>
  );
}
