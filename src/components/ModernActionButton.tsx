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
        className="relative w-full bg-purple-button hover:bg-purple-hover disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none disabled:opacity-50"
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

        <span className="absolute -top-2 -right-2 bg-white text-modern-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
          無料
        </span>
      </button>
    </div>
  );
}
