import React from 'react';
import { Palette, CheckCircle, ExternalLink, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const TosColorPalette: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 px-5 py-12 sm:px-[26px] text-white">
        <div className="max-w-4xl mr-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md shadow-inner border border-white/10">
              <Palette size={36} className="text-white" />
            </div>
            <span className="text-sm font-semibold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm tracking-wide">
              デザインツール
            </span>
          </div>
          
          <a 
            href="https://ukpr-color-tool.pages.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-start gap-3 group mb-4 hover:opacity-95 transition-opacity"
            title="ツールを開く"
          >
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight group-hover:underline decoration-2 underline-offset-4">
              カラーパレットツール<br/>個別利用規約
            </h1>
            <ExternalLink className="mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" size={28} />
          </a>

          <p className="text-indigo-100 text-lg opacity-90 font-medium">
            最終更新日: {new Date().toLocaleDateString('ja-JP')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-10 sm:px-[26px] sm:py-16 space-y-12 text-gray-700 leading-relaxed">
        
        {/* Intro & Link to General TOS */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 flex items-start gap-4">
             <div className="bg-white p-2 rounded-full border border-slate-100 text-slate-600 hidden sm:block">
               <LinkIcon size={24} />
             </div>
             <div>
               <h3 className="font-bold text-gray-900 text-lg mb-2">共通利用規約について</h3>
               <p className="text-gray-600 mb-4 text-sm">
                 本ツールには、本個別規約に加えて「共通利用規約」が適用されます。<br/>
                 免責事項や禁止事項の詳細は、共通利用規約をご確認ください。
               </p>
               <Link to="/tos/general" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1">
                 共通利用規約を見る <ExternalLink size={14} />
               </Link>
             </div>
          </div>

          <div className="prose prose-indigo max-w-none">
            <p className="text-xl font-medium text-gray-900 border-l-4 border-indigo-500 pl-6 bg-gray-50 py-4 rounded-r-xl">
              この規約は、カラーパレット作成ツール（以下「本ツール」といいます）特有の権利関係を定めるものです。
            </p>
          </div>
        </div>

        {/* 第1条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">1</span>
            第1条（生成データの権利と商用利用）
          </h2>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl border border-indigo-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-indigo-500">
              <Palette size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6 text-indigo-900 font-bold text-lg relative z-10">
              <CheckCircle size={28} className="text-indigo-600" />
              <h3>生成パレット等の権利帰属</h3>
            </div>
            <p className="text-indigo-900/80 leading-relaxed relative z-10 mb-6 text-lg">
              本ツール利用者が本ツールを利用して生成したパレット、カラーコード、およびその組み合わせに関する著作権やその他の権利は、そのパレットを生成した<strong className="text-indigo-700 bg-indigo-100 px-1 rounded">本ツール利用者自身</strong>に帰属します。
            </p>
            
            <div className="bg-white/60 p-5 rounded-xl border border-indigo-100/50 backdrop-blur-sm relative z-10">
               <p className="text-indigo-950 font-bold text-lg text-center">
                 ✨ 商用利用の完全許可<br/>
                 <span className="text-base font-normal text-indigo-800 mt-2 block">
                   生成したパレットやカラーコードは、商用・非商用を問わず、クレジット表記なしで自由にご利用いただけます。
                 </span>
               </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TosColorPalette;