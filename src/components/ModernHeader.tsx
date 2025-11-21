import AIRobotLogo from './AIRobotLogo';

export default function ModernHeader() {
  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <AIRobotLogo />

      <h1 className="text-4xl md:text-5xl font-bold text-white">
        ようこそ
      </h1>

      <p className="text-base md:text-lg text-gray-200 leading-relaxed px-4">
        <span className="font-medium text-white">株式コード</span>を入力して
        <br />
        無料で<span className="font-medium text-white">AI分析レポート</span>を
        <br />
        受け取りましょう
      </p>
    </div>
  );
}
