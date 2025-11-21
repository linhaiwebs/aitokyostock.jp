export default function ModernGradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #4A4563 0%, #3A3452 100%)'
        }}
      >
        <div className="absolute top-[8%] right-[12%] text-white/20 text-5xl animate-pulse" style={{ animationDuration: '3s' }}>
          +
        </div>

        <div className="absolute top-[15%] left-[8%] text-white/15 text-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          +
        </div>

        <div className="absolute top-[35%] right-[18%] text-white/10 text-4xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          +
        </div>

        <div className="absolute bottom-[25%] left-[10%] text-white/20 text-6xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
          +
        </div>

        <div className="absolute bottom-[15%] right-[15%] text-white/15 text-3xl animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>
          +
        </div>

        <div className="absolute top-[50%] left-[5%] text-white/10 text-5xl animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}>
          +
        </div>

        <div className="absolute top-[70%] right-[8%] text-white/15 text-4xl animate-pulse" style={{ animationDuration: '3.8s', animationDelay: '1.2s' }}>
          +
        </div>

        <div className="absolute top-[25%] left-[85%] text-white/10 text-3xl animate-pulse" style={{ animationDuration: '4.2s', animationDelay: '0.3s' }}>
          +
        </div>
      </div>
    </div>
  );
}
