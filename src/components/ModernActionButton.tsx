import { Sparkles } from 'lucide-react';

interface ModernActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ModernActionButton({ onClick, disabled = false }: ModernActionButtonProps) {
  return (
    <div className="relative animate-fadeIn" style={{ animationDelay: '0.3s' }}>
      <button
        onClick={onClick}
        disabled={disabled}
        style={{
          background: disabled
            ? 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)'
            : 'linear-gradient(135deg, #6B63FF 0%, #8B83FF 100%)'
        }}
        className="relative w-full text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none disabled:opacity-50 hover:opacity-90"
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <span className="text-lg md:text-xl">無料AI分析を受ける</span>
          </div>
          <span className="text-xs md:text-sm text-white/90">
            数秒で詳細レポート取得
          </span>
        </div>

        <span className="absolute -top-2 -right-2 bg-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce" style={{ color: '#6B63FF' }}>
          無料
        </span>
      </button>
    </div>
  );
}
