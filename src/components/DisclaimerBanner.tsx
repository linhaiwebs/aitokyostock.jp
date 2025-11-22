import { AlertCircle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="w-full max-w-md mx-auto px-4 mb-4">
      <div className="bg-amber-50/95 backdrop-blur-sm border-2 border-amber-400 rounded-lg p-3 shadow-lg">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-xs text-amber-900 leading-relaxed">
              <strong className="font-bold">重要:</strong> 当サービスは情報提供のみを目的としており、
              <strong>投資助言・投資勧誘を行うものではありません。</strong>
              投資判断は必ずご自身の責任で行ってください。
              株式投資には<strong>元本割れのリスク</strong>があります。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
