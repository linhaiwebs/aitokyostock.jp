import { User } from 'lucide-react';

const diagnosisRecords = [
  { time: '2分前', stock: 'トヨタ自動車', icon: '👨' },
  { time: '5分前', stock: 'ソニーグループ', icon: '👩' },
  { time: '8分前', stock: '任天堂', icon: '👨' },
  { time: '12分前', stock: 'ソフトバンクグループ', icon: '👩' },
  { time: '15分前', stock: 'キーエンス', icon: '👨' },
  { time: '18分前', stock: '三菱UFJ', icon: '👩' },
  { time: '22分前', stock: 'ファーストリテイリング', icon: '👨' },
  { time: '25分前', stock: '東京エレクトロン', icon: '👩' },
  { time: '28分前', stock: 'リクルート', icon: '👨' },
  { time: '32分前', stock: 'KDDI', icon: '👩' },
];

export default function ModernHeader() {
  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Scrolling Diagnosis Ticker */}
      <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 py-2 shadow-lg">
        <div className="animate-scroll-left whitespace-nowrap inline-block">
          {[...diagnosisRecords, ...diagnosisRecords, ...diagnosisRecords].map((record, index) => (
            <span key={index} className="inline-flex items-center mx-4 text-white">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 mr-2 text-sm">
                {record.icon}
              </span>
              <span className="text-sm font-medium mr-2 text-yellow-200">{record.time}</span>
              <span className="text-sm font-bold mr-2">{record.stock}</span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">無料レポート取得</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Header Content */}
      <div className="text-center space-y-4">
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
    </div>
  );
}
