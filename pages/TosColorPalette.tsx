import React from 'react';
import { Palette, Globe, AlertTriangle, Copyright, ShieldAlert, RefreshCw, CheckCircle, Scale } from 'lucide-react';

const TosColorPalette: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">カラーパレット作成ツール 利用規約</h1>
        <p className="text-purple-100 text-lg opacity-90">
          最終更新日: {new Date().toLocaleDateString('ja-JP')}
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-8 sm:px-10 sm:py-12 space-y-10 text-gray-700 leading-relaxed">
        
        <div className="prose prose-purple max-w-none">
          <p className="text-lg font-medium text-gray-900 border-l-4 border-purple-500 pl-4 bg-gray-50 py-3 rounded-r-lg">
            この規約は、カラーパレット作成ツール（以下「本ツール」といいます）の提供者であるUKPRと、本ツールを利用するすべての方（以下「本ツール利用者」といいます）との間で、本ツールの利用に関する条件を定めるものです。
          </p>
        </div>

        {/* 第1条 */}
        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            第1条（利用資格）
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-purple-50 p-3 rounded-full text-purple-600 flex-shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2 text-lg">世界中の誰もが利用可能</p>
                <p className="text-gray-600">
                  本ツールは、悪意を持たない世界中の誰もが利用できます。<br/>
                  本ツール利用者は、本規約に同意し、これを遵守することを条件として、本ツールを利用できるものとします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 第2条 */}
        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-red-100 text-red-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            第2条（禁止事項）
          </h2>
          <div className="bg-red-50 border border-red-100 rounded-lg p-5">
            <p className="mb-4 font-medium text-red-800">本ツール利用者は、本ツールの利用にあたり、以下の行為を行ってはならないものとします。</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  <strong>著作権、知的財産権等の侵害行為：</strong>他者の著作権、商標権、その他の知的財産権を侵害する行為、または侵害するおそれのある行為。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  <strong>不当な負荷を与える行為：</strong>本ツールの提供に利用されるサーバー等に対し、過度な負担をかけるまたはその運用を妨害する行為。（サーバーへの意図的な大量アクセスを含む）
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  <strong>不正アクセス行為：</strong>本ツール、および本ツールに関連するネットワークやシステムに不正にアクセスする行為。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  法令または公序良俗に反する行為、またはそれに類する行為。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  その他、UKPRが不適切と判断する行為。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 第3条 */}
        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
            第3条（知的財産権の帰属と利用）
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2 mb-3 text-gray-800 font-bold">
                <Copyright size={20} className="text-gray-500" />
                <h3>本ツールの権利帰属</h3>
              </div>
              <p className="text-sm text-gray-600">
                本ツールのデザイン、コード、名称、ロゴなど、本ツールを構成するすべての要素に関する著作権を含む知的財産権は、すべて<strong>UKPR</strong>に帰属します。
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
              <div className="flex items-center gap-2 mb-3 text-purple-800 font-bold">
                <CheckCircle size={20} className="text-purple-600" />
                <h3>生成パレット等の権利帰属</h3>
              </div>
              <p className="text-sm text-gray-700">
                本ツール利用者が本ツールを利用して生成したパレット、カラーコード、およびその組み合わせに関する著作権やその他の権利は、そのパレットを生成した<strong>本ツール利用者自身</strong>に帰属します。
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 flex items-center justify-center text-center font-medium">
             ✨ 商用利用の許可：生成したパレットやカラーコードは、商用・非商用を問わず、自由にご利用いただけます。
          </div>
        </section>

        {/* 第4条 */}
        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
            第4条（免責事項および損害賠償の制限）
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-6">
            <div className="flex gap-4">
               <ShieldAlert className="flex-shrink-0 text-gray-400" size={24} />
               <div>
                 <h3 className="font-bold text-gray-900 mb-2">ツールの動作保証の制限</h3>
                 <p className="text-gray-600 text-sm">
                   UKPRは、本ツールの機能が完全に、または常に正確に動作すること、中断しないこと、エラーがないことなどを一切保証しません。
                 </p>
               </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex gap-4">
               <Scale className="flex-shrink-0 text-gray-400" size={24} />
               <div>
                 <h3 className="font-bold text-gray-900 mb-2">免責および損害賠償の制限</h3>
                 <p className="text-gray-600 text-sm mb-2">
                   本ツールの利用によって、本ツール利用者または第三者にいかなる損害（データの損失、業務の停止、機会損失などを含む一切の損害）が発生した場合であっても、UKPRはその一切の責任を負わないものとします。
                 </p>
                 <p className="text-gray-600 text-sm">
                   また、本ツールの利用によって本ツール利用者、または第三者が何らかの被害を被った場合であっても、UKPRは本ツール利用者および第三者に対し、一切の損害賠償義務を負わないものとします。
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* 第5条 */}
        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
            第5条（利用規約の変更）
          </h2>
          <div className="flex gap-4 items-start">
            <RefreshCw className="text-purple-500 mt-1 flex-shrink-0" size={20} />
            <div className="space-y-2">
              <p>UKPRは、本ツール利用者への事前の通知なく、いつでも本規約の内容を変更できるものとします。</p>
              <p className="text-sm text-gray-500">本規約の変更後、本ツール利用者が本ツールを利用した場合、またはUKPRが定める期間内に利用を停止しなかった場合、本ツール利用者は変更後の規約に同意したものとみなします。</p>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-12 pt-8 border-t border-gray-100">
          <button 
            onClick={() => window.history.back()}
            className="text-purple-600 font-semibold hover:text-purple-800 transition-colors flex items-center"
          >
            同意して戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default TosColorPalette;