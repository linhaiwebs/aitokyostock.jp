import AIRobotLogo from './AIRobotLogo';

export default function ModernHeader() {
  return (
    <div className="text-center animate-fadeIn relative -mt-12 md:-mt-16">
      <div className="relative z-20">
        <AIRobotLogo />
      </div>

      <div className="relative -mt-24 z-30">
        <p className="text-base md:text-lg text-white leading-relaxed px-4 drop-shadow-lg font-medium">
          <span className="font-semibold text-white">株式コード</span>を入力して
          <br />
          無料で<span className="font-semibold text-white">AI分析レポート</span>を
          <br />
          受け取りましょう
        </p>
      </div>
    </div>
  );
}
