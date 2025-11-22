import { AlertCircle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="w-full max-w-md mx-auto px-4 mb-4">
      <div className="bg-orange-500/20 backdrop-blur-sm border-2 border-orange-400/50 rounded-lg p-3 shadow-lg">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-orange-300 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-xs text-orange-100 leading-relaxed">
              <strong className="font-bold text-orange-200">免責事項:</strong> 本サービスは情報提供を目的とし、
              <strong className="text-orange-200">投資助言ではありません。</strong>
              投資判断はご自身で行ってください。
              株式投資には<strong className="text-orange-200">損失リスク</strong>が伴います。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
