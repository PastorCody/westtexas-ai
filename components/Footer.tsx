export default function Footer() {
  return (
    <footer className="bg-paper border-t border-clay py-8">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-fog text-sm">
          <span className="font-[family-name:var(--font-sans)] font-bold text-ink">
            WestTexas<span className="text-rust">.ai</span>
          </span>{" "}
          &copy; {new Date().getFullYear()}
        </p>
        <p className="text-fog text-sm">
          cody@westtexas.ai &middot; West Texas
        </p>
      </div>
    </footer>
  );
}
