import React from 'react';
import { Database, Shield, AlertTriangle, ExternalLink, HardDrive, Globe, Copyright, CheckCircle, Scale, ShieldAlert } from 'lucide-react';

const TosSqliteStudio: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 px-5 py-12 sm:px-[26px] text-white">
        <div className="max-w-4xl mr-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md shadow-inner border border-white/10">
              <Database size={36} className="text-white" />
            </div>
            <span className="text-sm font-semibold bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm tracking-wide">
              データベースツール
            </span>
          </div>
          
          <a 
            href="https://ukpr-sqlite.pages.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-start gap-3 group mb-4 hover:opacity-95 transition-opacity"
            title="SQLite Studioを開く"
          >
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight group-hover:underline decoration-2 underline-offset-4">
              SQLite Studio 利用規約
            </h1>
            <ExternalLink className="mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" size={28} />
          </a>

          <p className="text-emerald-100 text-lg opacity-90 font-medium">
            最終更新日: 2025/12/8
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-10 sm:px-[26px] sm:py-16 space-y-12 text-gray-700 leading-relaxed">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-emerald max-w-none">
            <p className="text-xl font-medium text-gray-900 border-l-4 border-emerald-500 pl-6 bg-gray-50 py-4 rounded-r-xl">
              この規約は、ウェブブラウザ上で動作するSQLiteデータベース閲覧・編集ツール（以下「本ツール」といいます）の利用に関する条件を定めるものであり、本ツールを利用するすべてのお客様（以下「利用者」といいます）に適用されます。
            </p>
          </div>
        </div>

        {/* 第1条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">1</span>
            第1条（本ツールの提供者及び定義）
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-5">
              <div className="bg-emerald-50 p-3.5 rounded-2xl text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <div className="space-y-4">
                <div>
                   <h3 className="font-bold text-gray-900 mb-2 text-lg">提供者</h3>
                   <p className="text-gray-600">本ツールの提供者は、<strong>UKPR(userkunn)</strong>とします。</p>
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-2 text-lg">定義</h3>
                   <p className="text-gray-600">本ツールは、利用者のウェブブラウザ上で動作し、利用者が開いたSQLiteデータベースファイルに対して、データ閲覧、SQLクエリの実行、編集などの機能を提供するウェブサービスです。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 第2条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">2</span>
            第2条（データベースファイルの取り扱い）
          </h2>
          <div className="bg-green-50/70 border border-green-100 rounded-2xl p-6 sm:p-8 shadow-sm">
             <div className="flex items-start gap-5">
              <div className="bg-green-100 p-3.5 rounded-2xl text-green-600 flex-shrink-0">
                <Shield size={28} />
              </div>
              <div>
                <h3 className="font-bold text-green-900 mb-3 text-xl">サーバーへの非アップロード</h3>
                <ul className="list-disc list-inside text-green-800 text-lg space-y-2 leading-relaxed">
                  <li>本ツールで利用者が操作するSQLiteデータベースファイルは、提供者のサーバーへアップロードされません。</li>
                  <li>データベースファイルの処理は、すべて利用者のウェブブラウザ内（クライアント側）でのみ実行され、サーバーを経由しません。</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 第3条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">3</span>
            第3条（著作権および知的財産権の帰属）
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-gray-900 font-bold text-lg">
                <HardDrive size={24} className="text-gray-500" />
                <h3>データの権利帰属</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                利用者が本ツールで操作するデータベースファイル、およびその内部のデータに関する権利は、利用者自身または正当な権利者に帰属します。本ツールは、データの権利を主張しません。
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-emerald-900 font-bold text-lg">
                <Copyright size={24} className="text-emerald-600" />
                <h3>ツールの権利</h3>
              </div>
              <p className="text-emerald-900/80 leading-relaxed">
                本ツールのコード、デザイン、仕組み、構造、および本ツール上に表示される著作物（利用者から提供されたものを除く）に関する権利は、UKPRに帰属します。
              </p>
            </div>
          </div>
        </section>

        {/* 第4条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">4</span>
            第4条（利用料金）
          </h2>
          <div className="p-6 bg-emerald-50 text-emerald-900 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4 shadow-sm">
             <div className="bg-white p-2 rounded-full shadow-sm text-emerald-500">
               <CheckCircle size={32} />
             </div>
             <span className="text-lg font-bold">
               商用・非商用問わず、完全無料でご利用いただけます。
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
                  <strong className="text-rose-700">不正なデータ利用：</strong>他者の秘密情報、または正当な利用権限を持たないデータベースファイルを本ツールで操作する行為。
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  <strong className="text-rose-700">リバースエンジニアリング等：</strong>本ツールのコードを解析または改変する行為。
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  <strong className="text-rose-700">サーバー負荷行為：</strong>本ツールの機能を利用して、提供者のサーバーに過度な負荷をかける行為。
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
            <span className="bg-emerald-100 text-emerald-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">6</span>
            第6条（免責事項及び責任の制限）
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-8 border border-gray-100">
            <div className="flex gap-5">
               <div className="bg-white p-2.5 rounded-full shadow-sm border border-gray-100 h-fit">
                 <ShieldAlert className="flex-shrink-0 text-gray-400" size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 mb-2 text-lg">動作保証の制限</h3>
                 <p className="text-gray-600">
                   本ツールは、その機能、動作の正確性、安定性、および特定の目的に対する適合性について、いかなる保証も行いません。
                 </p>
               </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex gap-5">
               <div className="bg-white p-2.5 rounded-full shadow-sm border border-gray-100 h-fit">
                 <HardDrive className="flex-shrink-0 text-gray-400" size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 mb-2 text-lg">データ損失等の免責</h3>
                 <p className="text-gray-600 mb-3">
                   本ツールの利用、特にSQLクエリの実行やデータ編集によって、利用者のデータベースファイルにデータの消失、破損、または意図しない変更が生じた場合であっても、UKPRは当該損害について一切の責任を負いません。
                 </p>
                 <p className="text-sm font-bold text-rose-600 bg-rose-50 inline-block px-3 py-1 rounded-md border border-rose-100">
                   ※重要なファイルは操作前に必ずバックアップを取得してください。
                 </p>
               </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex gap-5">
               <div className="bg-white p-2.5 rounded-full shadow-sm border border-gray-100 h-fit">
                 <Scale className="flex-shrink-0 text-gray-400" size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 mb-2 text-lg">その他の免責</h3>
                 <p className="text-gray-600">
                   通信環境やブラウザの不具合による利用不能や、禁止事項違反に起因する紛争・トラブルについて、UKPRは一切の責任を負いません。
                 </p>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TosSqliteStudio;