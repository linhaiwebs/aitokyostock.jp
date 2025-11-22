import { Shield, CreditCard, UserCheck, Zap } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div className="w-full max-w-md mx-auto px-4 mb-6">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-3 text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-green-500 p-2 rounded-full">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-xs font-bold text-white drop-shadow-lg">完全無料</p>
          <p className="text-[10px] text-white/80 drop-shadow-lg">永久無料保証</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-3 text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-blue-500 p-2 rounded-full">
              <CreditCard className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-xs font-bold text-white drop-shadow-lg">カード不要</p>
          <p className="text-[10px] text-white/80 drop-shadow-lg">決済情報不要</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-3 text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-purple-500 p-2 rounded-full">
              <UserCheck className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-xs font-bold text-white drop-shadow-lg">登録不要</p>
          <p className="text-[10px] text-white/80 drop-shadow-lg">すぐに利用可能</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-3 text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-orange-500 p-2 rounded-full">
              <Zap className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-xs font-bold text-white drop-shadow-lg">高速AI分析</p>
          <p className="text-[10px] text-white/80 drop-shadow-lg">数秒で完了</p>
        </div>
      </div>
    </div>
  );
}
