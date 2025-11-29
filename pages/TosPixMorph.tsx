import React from 'react';
import { Image, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

const TosPixMorph: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-10 sm:px-10 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Image size={32} className="text-white" />
          </div>
          <span className="text-sm font-medium bg-blue-500/50 px-3 py-1 rounded-full border border-blue-400/30">
            画像変換ツール
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">PixMorph 利用規約</h1>
        <p className="text-blue-100 text-lg opacity-90">
          最終更新日: {new Date().toLocaleDateString('ja-JP')}
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-8 sm:px-10 sm:py-12 space-y-10 text-gray-700 leading-relaxed">
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg font-medium text-gray-900 border-l-4 border-indigo-500 pl-4 bg-gray-50 py-3 rounded-r-lg">
            この規約は、PixMorph（以下「本ツール」といいます）の利用に関する条件を定めるものであり、本ツールを利用するすべてのお客様（以下「利用者」といいます）に適用されます。本ツールを利用することで、利用者は本規約の全ての定めに同意したものとみなされます。
          </p>
        </div>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            第1条（本ツールの提供者及び定義）
          </h2>
          <ol className="list-decimal list-inside space-y-3 pl-2">
            <li>本ツールの提供者は、<strong>UKPR(userkunn)</strong>とします。</li>
            <li>本ツールは、利用者のブラウザ上で画像を変換およびリサイズ処理する機能を提供します。</li>
          </ol>
        </section>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            第2条（画像データの取り扱いと非アップロードの保証）
          </h2>
          <div className="bg-green-50 border border-green-100 rounded-lg p-5 flex gap-4">
            <div className="flex-shrink-0">
               <Shield className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-green-800 mb-1">データ処理の場所について</h3>
              <p className="text-green-700 text-sm">
                本ツールの画像変換およびリサイズ処理は、すべて利用者のブラウザ内でのみ実行され、UKPRのサーバーを一切経由しません。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
            第3条（著作権および知的財産権の帰属）
          </h2>
          <div className="space-y-4 pl-2">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">1. 著作権の帰属</h3>
              <p>利用者が本ツールで処理する元の画像及び変換・リサイズされた後の画像に関する著作権その他一切の知的財産権は、当該画像を作成・保有する利用者自身に帰属します。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2. ツールの権利（UKPR帰属）</h3>
              <p>本ツールのコード、デザイン、仕組み、構造、および本ツール上に表示される著作物（利用者から提供されたものを除く）に関する著作権その他一切の知的財産権は、UKPRに帰属します。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
            第4条（利用料金）
          </h2>
          <div className="pl-2 space-y-3">
            <p>本ツールの利用は、<strong>無料</strong>とします。</p>
            <p className="text-emerald-600 font-bold bg-emerald-50 inline-block px-4 py-2 rounded-lg border border-emerald-100">
              商用・非商用問わず完全無料でご利用いただけます。
            </p>
          </div>
        </section>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
             <span className="bg-red-100 text-red-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
            第5条（禁止事項）
          </h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-5">
            <p className="mb-4 font-medium text-red-800">利用者は、本ツールの利用にあたり、以下の各号に定める行為を行ってはならないものとします。</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  <strong>他者の権利侵害：</strong>他者の著作権、商標権、パブリシティ権その他の知的財産権を侵害する画像、または侵害のおそれのある画像を本ツールで利用する行為。
                </span>
              </li>
              <li className="flex items-start gap-3">
                 <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  <strong>不適切なコンテンツ：</strong>違法なコンテンツ、わいせつなコンテンツ、暴力的なコンテンツ、差別的なコンテンツ、または公序良俗に反するコンテンツを本ツールで利用する行為。
                </span>
              </li>
              <li className="flex items-start gap-3">
                 <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  本ツールの運営を妨害する行為、またはそのおそれのある行為。
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
            第6条（免責事項及び責任の制限）
          </h2>
          <p className="mb-4 pl-2">UKPRは、本ツールの利用に関し、以下の各号について一切の責任を負わないものとします。</p>
          <div className="grid md:grid-cols-1 gap-4 pl-2">
            <div className="border-l-2 border-gray-300 pl-4 py-1">
              <h3 className="font-bold text-gray-800">1. ツールの正確性・完全性の非保証</h3>
              <p className="text-sm text-gray-600 mt-1">本ツールは、その機能、処理速度、変換結果の正確性、完全性、有用性、および特定の目的に対する適合性について、いかなる保証も行いません。</p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4 py-1">
              <h3 className="font-bold text-gray-800">2. 損害賠償責任の免除</h3>
              <p className="text-sm text-gray-600 mt-1">本ツールの利用によって、利用者または第三者に何らかの損害（画像データの消失、処理の遅延、誤動作による損害、その他一切の損害を含む）が発生した場合であっても、UKPRは当該損害について一切の責任を負いません。</p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4 py-1">
              <h3 className="font-bold text-gray-800">3. 禁止事項に関する責任の免除</h3>
              <p className="text-sm text-gray-600 mt-1">利用者が第5条に定める禁止事項に違反したことにより、利用者または第三者との間で紛争やトラブルが発生した場合、その責任は全て当該利用者が負うものとし、UKPRは一切の責任を負いません。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TosPixMorph;