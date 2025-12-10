import React from 'react';
import { Scale, Globe, FileText, Copyright, CheckCircle, AlertTriangle, ShieldAlert, RefreshCw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TosGeneral: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-slate-800 px-5 py-12 sm:px-[26px] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Scale size={180} />
        </div>
        <div className="max-w-4xl mr-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm tracking-wider uppercase">
              Common Terms of Service
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            UKPR-S便利ツール集<br />共通利用規約（最終調整版）
          </h1>

          <p className="text-slate-300 text-sm font-medium">
            最終更新日: 2025/12/8
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-10 sm:px-[26px] sm:py-16 space-y-12 text-gray-700 leading-relaxed">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg font-medium text-gray-900 border-l-4 border-slate-800 pl-6 bg-slate-50 py-4 rounded-r-xl">
              この規約は、UKPR-S便利ツール集に含まれるすべてのウェブツール（以下、総称して「本サービス」といいます）の利用に関する条件を定めるものであり、本サービスを利用するすべてのお客様（以下「利用者」といいます）に適用されます。本サービスを利用することで、利用者は本規約の全ての定めに同意したものとみなされます。
            </p>
          </div>
        </div>

        {/* 第1条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm shadow-sm">1</span>
            第1条（本サービスの提供者、定義及びツールの権利帰属）
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
            
            <div>
              <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                <Globe size={20} className="text-slate-600" />
                本サービスの提供者
              </h3>
              <p className="text-gray-600 pl-7">
                本サービスの提供者は、<strong>UKPR(userkunn)</strong>とします。
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                <FileText size={20} className="text-slate-600" />
                本サービスの定義
              </h3>
              <p className="text-gray-600 pl-7">
                本サービスは、UKPRがウェブブラウザ上で提供する複数のウェブツールからなるサービス全体を指します。
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                <Copyright size={20} className="text-slate-600" />
                ツールの権利帰属
              </h3>
              <p className="text-gray-600 pl-7">
                本サービスに含まれるツールのコード、デザイン、仕組み、構造、および本サービス上に表示される著作物（利用者から提供されたものを除く）に関する著作権その他一切の知的財産権は、UKPRにすべて帰属します。
              </p>
            </div>
          </div>
        </section>

        {/* 第2条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm shadow-sm">2</span>
            第2条（利用者データの権利帰属）
          </h2>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">データ権利の帰属</h3>
              <p className="text-gray-600 mb-2">
                利用者が本サービスを利用して変更・編集・生成などを行ったデータに関する著作権その他一切の知的財産権は、当該データの変更前の著作権者に帰属します。
              </p>
              <p className="text-sm font-bold text-slate-700 bg-white inline-block px-3 py-1 rounded border border-slate-200">
                本サービスは、利用者の提供・生成したデータの権利を主張しません。
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-200">
              <h3 className="font-bold text-gray-900 mb-2 text-sm text-slate-500">ツールの権利帰属（再掲）</h3>
              <p className="text-sm text-slate-500">
                本サービスに含まれるツールのコード、デザイン、仕組み、構造、および本サービス上に表示される著作物に関する著作権その他一切の知的財産権は、UKPRにすべて帰属します。
              </p>
            </div>
          </div>
        </section>

        {/* 第3条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm shadow-sm">3</span>
            第3条（利用料金及びサービス保護）
          </h2>
          
          <div className="mb-6 bg-emerald-50 text-emerald-900 rounded-xl p-4 border border-emerald-100 flex items-center gap-3">
             <CheckCircle size={24} className="text-emerald-600 flex-shrink-0" />
             <p><strong>利用料金:</strong> 本サービスの利用は、無料とします。商用・非商用問わず、完全無料でご利用いただけます。</p>
          </div>

          <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
            <h3 className="font-bold text-rose-900 mb-4 flex items-center gap-2">
              <AlertTriangle size={20} />
              禁止事項
            </h3>
            <p className="text-rose-800 mb-4 text-sm">利用者は、本サービスの利用にあたり、以下の各号に定める行為を行ってはならないものとします。</p>
            <ul className="space-y-3">
              <li className="bg-white/60 p-3 rounded text-rose-900 text-sm">
                <strong>不正なデータ利用:</strong> 他者の秘密情報、または正当な利用権限を持たないデータを本サービスで操作する行為。
              </li>
              <li className="bg-white/60 p-3 rounded text-rose-900 text-sm">
                <strong>リバースエンジニアリング等:</strong> 本サービスに含まれるツールのコードを解析または改変する行為。
              </li>
              <li className="bg-white/60 p-3 rounded text-rose-900 text-sm">
                <strong>サーバー負荷行為:</strong> 本サービスの機能を利用して、提供者のサーバーに過度な負荷をかける行為（サーバーに対して大量にアクセスしようとする行為など）。
              </li>
              <li className="bg-white/60 p-3 rounded text-rose-900 text-sm">
                本サービスの運営を妨害する行為、またはそのおそれのある行為。
              </li>
            </ul>
          </div>
        </section>

        {/* 第4条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm shadow-sm">4</span>
            第4条（免責事項及び責任の制限）
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 space-y-6 border border-gray-100">
            <p className="text-gray-800 text-sm">UKPRは、本サービスの利用に関し、以下の各号について一切の責任を負わないものとします。</p>
            
            <div className="pl-4 border-l-2 border-slate-300">
              <h3 className="font-bold text-gray-900 text-sm mb-1">ツールの正確性・動作の非保証</h3>
              <p className="text-gray-600 text-sm">
                本サービスに含まれるツールは、その機能、動作の正確性、安定性、および特定の目的に対する適合性について、いかなる保証も行いません。
              </p>
            </div>

            <div className="pl-4 border-l-2 border-slate-300">
              <h3 className="font-bold text-gray-900 text-sm mb-1">データ操作上のリスクと損害賠償責任の免除</h3>
              <p className="text-gray-600 text-sm mb-2">
                本サービスの利用によって、利用者または第三者に何らかの損害（データの消失、破損、処理の遅延、誤動作による損害、その他一切の損害を含む）が発生した場合であっても、UKPRは当該損害について一切の責任を負いません。
              </p>
              <p className="text-xs text-slate-500 bg-white inline-block px-2 py-1 rounded border border-slate-200">
                利用者は、重要なデータについて、操作前に必ずバックアップを取得することを強く推奨します。
              </p>
            </div>

            <div className="pl-4 border-l-2 border-slate-300">
              <h3 className="font-bold text-gray-900 text-sm mb-1">通信環境に関する免責</h3>
              <p className="text-gray-600 text-sm">
                利用者のインターネット接続環境、またはブラウザの不具合、通信の切断など、提供者（UKPR）の管理下にない要因によって本サービスの利用が不可能になった場合や、データに不具合が生じた場合、UKPRは一切の責任を負いません。
              </p>
            </div>

            <div className="pl-4 border-l-2 border-slate-300">
              <h3 className="font-bold text-gray-900 text-sm mb-1">禁止事項に関する責任の免除</h3>
              <p className="text-gray-600 text-sm">
                利用者が第3条第2項に定める禁止事項に違反したことにより、利用者または第三者との間で紛争やトラブルが発生した場合、その責任は全て当該利用者が負うものとし、UKPRは一切の責任を負いません。
              </p>
            </div>
          </div>
        </section>

        {/* 第5条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm shadow-sm">5</span>
            第5条（本規約の変更）
          </h2>
          <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
            <RefreshCw className="text-slate-500 mt-1 flex-shrink-0" size={20} />
            <div className="text-sm space-y-2 text-gray-600">
              <p><strong>規約変更権:</strong> UKPRは、利用者の事前の承諾を得ることなく、また利用者に事前に告知することなく、いつでも本規約の全部または一部を変更できるものとします。</p>
              <p><strong>変更の効力:</strong> 変更後の規約は、UKPRが定める方法により本サービス上に表示された時点から効力を生じるものとします。</p>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-12">
          <Link 
            to="/"
            className="group px-8 py-3 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-900 transition-all shadow-md flex items-center gap-2"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>トップページに戻る</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TosGeneral;