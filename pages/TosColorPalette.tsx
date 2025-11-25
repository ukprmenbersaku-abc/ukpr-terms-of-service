import React from 'react';
import { Palette, Info } from 'lucide-react';

const TosColorPalette: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden min-h-[600px] flex flex-col">
       {/* Header Banner */}
       <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-10 sm:px-10 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Palette size={32} className="text-white" />
          </div>
          <span className="text-sm font-medium bg-purple-500/50 px-3 py-1 rounded-full border border-purple-400/30">
            デザインツール
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">カラーパレットジェネレーター 利用規約</h1>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center p-8 sm:p-12 text-center">
        <div className="bg-gray-50 p-6 rounded-full mb-6">
          <Info size={48} className="text-gray-400" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          現在、規約を準備中です
        </h2>
        
        <p className="text-gray-600 max-w-lg mb-8 leading-relaxed">
          こちらのツールの利用規約は現在作成中です。<br/>
          基本的な利用ルール（公序良俗に反しない利用、システムへの過度な負荷をかけない等）は、
          他のツールと同様に適用されます。
        </p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 max-w-xl text-left">
          <h3 className="text-yellow-800 font-bold mb-2 text-sm uppercase tracking-wide">暫定的なガイドライン</h3>
          <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
             <li>生成されたカラーコードは自由にご利用いただけます（商用・非商用問わず）。</li>
             <li>サービスの安定稼働のため、短時間での大量アクセスはお控えください。</li>
             <li>本ツールは「現状有姿」で提供され、動作保証はありません。</li>
          </ul>
        </div>

        <button 
            onClick={() => window.history.back()}
            className="mt-10 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
        >
          ツール一覧に戻る
        </button>
      </div>
    </div>
  );
};

export default TosColorPalette;