export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 ambient-grid" />
      <div className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full ambient-glow ambient-glow-a" />
      <div className="absolute top-[55%] -left-24 h-[380px] w-[380px] rounded-full ambient-glow ambient-glow-b" />
    </div>
  );
}
