import AIRobotLogo from './AIRobotLogo';

export default function ModernHeader() {
  return (
    <div className="text-center space-y-6 animate-fadeIn relative">
      <div className="relative z-20">
        <AIRobotLogo />
      </div>

      <div className="relative -mt-16 z-30">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          ようこそ
        </h1>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed px-4 mt-4 drop-shadow-lg">
          <span className="font-medium text-white">株式コード</span>を入力して
          <br />
          無料で<span className="font-medium text-white">AI分析レポート</span>を
          <br />
          受け取りましょう
        </p>
      </div>
    </div>
  );
}
