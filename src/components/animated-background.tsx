"use client";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-futuristic opacity-40 dark:opacity-20" />

      {/* Floating Glowing Orbs - Using CSS Animations for 60fps performance */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/15 dark:bg-primary/10 blur-[100px] animate-float-blob" 
        style={{ animationDelay: '0s', willChange: 'transform' }}
      />

      <div 
        className="absolute top-[30%] -right-[5%] w-[50%] h-[50%] rounded-full bg-blue-500/15 dark:bg-blue-600/10 blur-[120px] animate-float-blob" 
        style={{ animationDelay: '-5s', willChange: 'transform' }}
      />

      <div 
        className="absolute -bottom-[10%] left-[15%] w-[45%] h-[45%] rounded-full bg-purple-500/15 dark:bg-purple-900/10 blur-[100px] animate-float-blob" 
        style={{ animationDelay: '-10s', willChange: 'transform' }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
    </div>
  );
}
