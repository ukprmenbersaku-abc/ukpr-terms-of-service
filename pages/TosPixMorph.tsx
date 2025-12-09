import React from 'react';
import { Image, Shield, AlertTriangle, Copyright, ShieldAlert, Globe, CheckCircle, Scale, ExternalLink, RefreshCw } from 'lucide-react';

const TosPixMorph: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 px-5 py-12 sm:px-[26px] text-white">
        <div className="max-w-4xl mr-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md shadow-inner border border-white/10">
              <Image size={36} className="text-white" />
            </div>
            <span className="text-sm font-semibold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm tracking-wide">
              画像変換ツール
            </span>
          </div>
          
          <a 
            href="https://ukpr-image.pages.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-start gap-3 group mb-4 hover:opacity-95 transition-opacity"
            title="ツールを開く"
          >
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight group-hover:underline decoration-2 underline-offset-4">
              Pix Morph 利用規約
            </h1>
            <ExternalLink className="mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" size={28} />
          </a>

          <p className="text-blue-100 text-lg opacity-90 font-medium">
            最終更新日: {new Date().toLocaleDateString('ja-JP')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-10 sm:px-[26px] sm:py-16 space-y-12 text-gray-700 leading-relaxed">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-blue max-w-none">
            <p className="text-xl font-medium text-gray-900 border-l-4 border-blue-500 pl-6 bg-gray-50 py-4 rounded-r-xl">
              この規約は、Pix Morph（以下「本ツール」といいます）の利用に関する条件を定めるものであり、本ツールを利用するすべてのお客様（以下「利用者」といいます）に適用されます。本ツールを利用することで、利用者は本規約の全ての定めに同意したものとみなされます。
            </p>
          </div>
        </div>

        {/* 第1条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-blue-100 text-blue-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">1</span>
            第1条（本ツールの提供者及び定義）
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-5">
              <div className="bg-blue-50 p-3.5 rounded-2xl text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">提供者</h3>
                  <p className="text-gray-600">本ツールの提供者は、<strong>UKPR(userkunn)</strong>とします。</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">定義</h3>
                  <p className="text-gray-600">本ツールは、利用者のブラウザ上で画像を変換およびリサイズ処理する機能を提供します。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 第2条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-blue-100 text-blue-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">2</span>
            第2条（画像データの取り扱いと非アップロードの保証）
          </h2>
          <div className="bg-green-50/70 border border-green-100 rounded-2xl p-6 sm:p-8 shadow-sm">
             <div className="flex items-start gap-5">
              <div className="bg-green-100 p-3.5 rounded-2xl text-green-600 flex-shrink-0">
                <Shield size={28} />
              </div>
              <div>
                <h3 className="font-bold text-green-900 mb-3 text-xl">データ処理の安全性について</h3>
                <p className="text-green-800 text-lg leading-relaxed">
                  本ツールの画像変換およびリサイズ処理は、すべて利用者のブラウザ内でのみ実行され、UKPRのサーバーを一切経由しません。画像データが外部に送信されることはありません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 第3条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-blue-100 text-blue-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">3</span>
            第3条（著作権および知的財産権の帰属）
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-gray-900 font-bold text-lg">
                <Copyright size={24} className="text-gray-500" />
                <h3>著作権の帰属</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                利用者が本ツールで処理する元の画像及び変換・リサイズされた後の画像に関する著作権その他一切の知的財産権は、当該画像を作成・保有する利用者自身に帰属します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-blue-900 font-bold text-lg">
                <Image size={24} className="text-blue-600" />
                <h3>ツールの権利</h3>
              </div>
              <p className="text-blue-900/80 leading-relaxed">
                本ツールのコード、デザイン、仕組み、構造、および本ツール上に表示される著作物に関する著作権その他一切の知的財産権は、UKPRに帰属します。
              </p>
            </div>
          </div>
        </section>

        {/* 第4条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-blue-100 text-blue-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">4</span>
            第4条（利用料金）
          </h2>
          <div className="p-6 bg-emerald-50 text-emerald-900 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4 shadow-sm">
             <div className="bg-white p-2 rounded-full shadow-sm text-emerald-500">
               <CheckCircle size={32} />
             </div>
             <span className="text-lg font-bold">
               本ツールは、商用・非商用問わず完全無料でご利用いただけます。
             </span>
          </div>
        </section>

        {/* 第5条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
             <span className="bg-rose-100 text-rose-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">5</span>
            第5条（禁止事項）
          </h2>
          <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-6 sm:p-8">
            <p className="mb-6 font-bold text-rose-900 text-lg">利用者は、本ツールの利用にあたり、以下の行為を行ってはならないものとします。</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  <strong className="text-rose-700">権利侵害：</strong>他者の著作権、商標権、パブリシティ権その他の知的財産権を侵害する画像、または侵害のおそれのある画像を本ツールで利用する行為。
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  <strong className="text-rose-700">不適切なコンテンツ：</strong>違法なコンテンツ、わいせつなコンテンツ、暴力的なコンテンツ、差別的なコンテンツ、または公序良俗に反するコンテンツを本ツールで利用する行為。
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  本ツールの運営を妨害する行為、またはそのおそれのある行為。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 第6条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-blue-100 text-blue-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">6</span>
            第6条（免責事項及び責任の制限）
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-8 border border-gray-100">
            <div className="flex gap-5">
               <div className="bg-white p-2.5 rounded-full shadow-sm border border-gray-100 h-fit">
                 <ShieldAlert className="flex-shrink-0 text-gray-400" size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 mb-2 text-lg">正確性・完全性の非保証</h3>
                 <p className="text-gray-600">
                   本ツールは、その機能、処理速度、変換結果の正確性、完全性、有用性、および特定の目的に対する適合性について、いかなる保証も行いません。
                 </p>
               </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex gap-5">
               <div className="bg-white p-2.5 rounded-full shadow-sm border border-gray-100 h-fit">
                 <Scale className="flex-shrink-0 text-gray-400" size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 mb-2 text-lg">損害賠償責任の免除</h3>
                 <p className="text-gray-600">
                   本ツールの利用によって、利用者または第三者に何らかの損害（画像データの消失、処理の遅延、誤動作による損害、その他一切の損害を含む）が発生した場合であっても、UKPRは当該損害について一切の責任を負いません。
                 </p>
               </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex gap-5">
               <div className="bg-white p-2.5 rounded-full shadow-sm border border-gray-100 h-fit">
                 <AlertTriangle className="flex-shrink-0 text-gray-400" size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 mb-2 text-lg">禁止事項に関する責任の免除</h3>
                 <p className="text-gray-600">
                   利用者が禁止事項に違反したことにより、利用者または第三者との間で紛争やトラブルが発生した場合、その責任は全て当該利用者が負うものとし、UKPRは一切の責任を負いません。
                 </p>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TosPixMorph;