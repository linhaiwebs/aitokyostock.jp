import AIRobotLogo from './AIRobotLogo';

export default function ModernHeader() {
  return (
    <div className="text-center animate-fadeIn relative -mt-12 md:-mt-16">
      <div className="relative z-20">
        <AIRobotLogo />
      </div>

      <div className="relative -mt-24 z-30">
        <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-3 shadow-lg animate-pulse">
          完全無料 • 登録不要 • クレジットカード不要
        </div>
        <p className="text-base md:text-lg text-white leading-relaxed px-4 drop-shadow-lg font-medium">
          <span className="font-semibold text-white">株式コード</span>を入力して
          <br />
          無料で<span className="font-semibold text-white">AI分析レポート</span>を
          <br />
          受け取りましょう
        </p>
        <p className="text-xs md:text-sm text-white/90 mt-2 drop-shadow-lg">
          永久無料 • 隠れた費用なし
        </p>
      </div>
    </div>
  );
}
