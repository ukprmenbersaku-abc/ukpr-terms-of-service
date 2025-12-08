import React from 'react';
import { Palette, Globe, AlertTriangle, Copyright, ShieldAlert, RefreshCw, CheckCircle, Scale, ExternalLink } from 'lucide-react';

const TosColorPalette: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 px-6 py-12 sm:px-12 text-white">
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
            href="https://color-palette-tool.pages.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-start gap-3 group mb-4 hover:opacity-95 transition-opacity"
            title="ツールを開く"
          >
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight group-hover:underline decoration-2 underline-offset-4">
              カラーパレット作成ツール<br/>利用規約
            </h1>
            <ExternalLink className="mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" size={28} />
          </a>

          <p className="text-indigo-100 text-lg opacity-90 font-medium">
            最終更新日: {new Date().toLocaleDateString('ja-JP')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 sm:px-12 sm:py-16 space-y-12 text-gray-700 leading-relaxed">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-indigo max-w-none">
            <p className="text-xl font-medium text-gray-900 border-l-4 border-indigo-500 pl-6 bg-gray-50 py-4 rounded-r-xl">
              この規約は、カラーパレット作成ツール（以下「本ツール」といいます）の提供者であるUKPRと、本ツールを利用するすべての方（以下「本ツール利用者」といいます）との間で、本ツールの利用に関する条件を定めるものです。
            </p>
          </div>
        </div>

        {/* 第1条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">1</span>
            第1条（利用資格）
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-5">
              <div className="bg-indigo-50 p-3.5 rounded-2xl text-indigo-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-3 text-xl">世界中の誰もが利用可能</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  本ツールは、悪意を持たない世界中の誰もが利用できます。<br/>
                  本ツール利用者は、本規約に同意し、これを遵守することを条件として、本ツールを利用できるものとします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 第2条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-rose-100 text-rose-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">2</span>
            第2条（禁止事項）
          </h2>
          <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-6 sm:p-8">
            <p className="mb-6 font-bold text-rose-900 text-lg">本ツール利用者は、本ツールの利用にあたり、以下の行為を行ってはならないものとします。</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  <strong className="text-rose-700">著作権、知的財産権等の侵害行為：</strong>他者の著作権、商標権、その他の知的財産権を侵害する行為、または侵害するおそれのある行為。
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  <strong className="text-rose-700">不当な負荷を与える行為：</strong>本ツールの提供に利用されるサーバー等に対し、過度な負担をかけるまたはその運用を妨害する行為。（サーバーへの意図的な大量アクセスを含む）
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  <strong className="text-rose-700">不正アクセス行為：</strong>本ツール、および本ツールに関連するネットワークやシステムに不正にアクセスする行為。
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  法令または公序良俗に反する行為、またはそれに類する行為。
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  その他、UKPRが不適切と判断する行為。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 第3条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">3</span>
            第3条（知的財産権の帰属と利用）
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-gray-900 font-bold text-lg">
                <Copyright size={24} className="text-gray-500" />
                <h3>本ツールの権利帰属</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                本ツールのデザイン、コード、名称、ロゴなど、本ツールを構成するすべての要素に関する著作権を含む知的財産権は、すべて<strong className="text-gray-900 bg-gray-200 px-1 rounded">UKPR</strong>に帰属します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl border border-indigo-100 hover:border-indigo-300 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-indigo-500">
                <Palette size={120} />
              </div>
              <div className="flex items-center gap-3 mb-4 text-indigo-900 font-bold text-lg relative z-10">
                <CheckCircle size={24} className="text-indigo-600" />
                <h3>生成パレット等の権利帰属</h3>
              </div>
              <p className="text-indigo-900/80 leading-relaxed relative z-10">
                本ツール利用者が本ツールを利用して生成したパレット、カラーコード、およびその組み合わせに関する著作権やその他の権利は、そのパレットを生成した<strong className="text-indigo-700 bg-indigo-100 px-1 rounded">本ツール利用者自身</strong>に帰属します。
              </p>
            </div>
          </div>
          <div className="mt-6 p-5 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-200 flex items-center justify-center text-center font-bold text-lg shadow-sm">
             ✨ 商用利用の許可：生成したパレットやカラーコードは、商用・非商用を問わず、自由にご利用いただけます。
          </div>
        </section>

        {/* 第4条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">4</span>
            第4条（免責事項および損害賠償の制限）
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-8 border border-gray-100">
            <div className="flex gap-5">
               <div className="bg-white p-2.5 rounded-full shadow-sm border border-gray-100 h-fit">
                 <ShieldAlert className="flex-shrink-0 text-gray-400" size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 mb-2 text-lg">ツールの動作保証の制限</h3>
                 <p className="text-gray-600">
                   UKPRは、本ツールの機能が完全に、または常に正確に動作すること、中断しないこと、エラーがないことなどを一切保証しません。
                 </p>
               </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex gap-5">
               <div className="bg-white p-2.5 rounded-full shadow-sm border border-gray-100 h-fit">
                 <Scale className="flex-shrink-0 text-gray-400" size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 mb-2 text-lg">免責および損害賠償の制限</h3>
                 <p className="text-gray-600 mb-3">
                   本ツールの利用によって、本ツール利用者または第三者にいかなる損害（データの損失、業務の停止、機会損失などを含む一切の損害）が発生した場合であっても、UKPRはその一切の責任を負わないものとします。
                 </p>
                 <p className="text-gray-600">
                   また、本ツールの利用によって本ツール利用者、または第三者が何らかの被害を被った場合であっても、UKPRは本ツール利用者および第三者に対し、一切の損害賠償義務を負わないものとします。
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* 第5条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">5</span>
            第5条（利用規約の変更）
          </h2>
          <div className="flex gap-5 items-start bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
            <RefreshCw className="text-indigo-500 mt-1 flex-shrink-0" size={24} />
            <div className="space-y-3">
              <p className="text-lg font-medium text-gray-800">UKPRは、本ツール利用者への事前の通知なく、いつでも本規約の内容を変更できるものとします。</p>
              <p className="text-gray-500">本規約の変更後、本ツール利用者が本ツールを利用した場合、またはUKPRが定める期間内に利用を停止しなかった場合、本ツール利用者は変更後の規約に同意したものとみなします。</p>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-16 pt-8 border-t border-gray-100">
          <button 
            onClick={() => window.history.back()}
            className="group px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>同意して戻る</span>
            <CheckCircle size={18} className="opacity-70 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TosColorPalette;