import React from 'react';
import { Database, Shield, AlertTriangle, ExternalLink, HardDrive } from 'lucide-react';

const TosSqliteStudio: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-10 sm:px-10 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Database size={32} className="text-white" />
          </div>
          <span className="text-sm font-medium bg-emerald-500/50 px-3 py-1 rounded-full border border-emerald-400/30">
            データベースツール
          </span>
        </div>
        
        <a 
          href="https://ukpr-sqlite.pages.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 group mb-2 hover:opacity-95 transition-opacity"
          title="SQLite Studioを開く"
        >
          <h1 className="text-3xl sm:text-4xl font-bold group-hover:underline decoration-2 underline-offset-4">
            SQLite Studio 利用規約
          </h1>
          <ExternalLink className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={28} />
        </a>

        <p className="text-emerald-100 text-lg opacity-90 mt-1">
          最終更新日: 2025/12/8
        </p>
      </div>

      {/* Content */}
      <div className="px-6 py-8 sm:px-10 sm:py-12 space-y-10 text-gray-700 leading-relaxed">
        
        <div className="prose prose-emerald max-w-none">
          <p className="text-lg font-medium text-gray-900 border-l-4 border-emerald-500 pl-4 bg-gray-50 py-3 rounded-r-lg">
            この規約は、ウェブブラウザ上で動作するSQLiteデータベース閲覧・編集ツール（以下「本ツール」といいます）の利用に関する条件を定めるものであり、本ツールを利用するすべてのお客様（以下「利用者」といいます）に適用されます。本ツールを利用することで、利用者は本規約の全ての定めに同意したものとみなされます。
          </p>
        </div>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            第1条（本ツールの提供者及び定義）
          </h2>
          <div className="space-y-4 pl-2">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">本ツールの提供者</h3>
              <p>本ツールの提供者は、<strong>UKPR(userkunn)</strong>とします。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">本ツールの定義</h3>
              <p>本ツールは、利用者のウェブブラウザ上で動作し、利用者が開いたSQLiteデータベースファイルに対して、データ閲覧、SQLクエリの実行、編集などの機能を提供するウェブサービスです。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            第2条（データベースファイルの取り扱い）
          </h2>
          <div className="bg-green-50 border border-green-100 rounded-lg p-5 flex gap-4">
            <div className="flex-shrink-0">
               <Shield className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-green-800 mb-1">サーバーへの非アップロード</h3>
              <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                <li>本ツールで利用者が操作するSQLiteデータベースファイルは、提供者のサーバーへアップロードされません。</li>
                <li>データベースファイルの処理は、すべて利用者のウェブブラウザ内（クライアント側）でのみ実行され、サーバーを経由しません。</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
            第3条（著作権および知的財産権の帰属）
          </h2>
          <div className="space-y-4 pl-2">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">1. データベースファイル及びデータに関する権利の帰属</h3>
              <p>利用者が本ツールで操作するデータベースファイル、およびその内部のデータに関する著作権その他一切の知的財産権は、当該ファイルまたはデータを作成・保有する利用者自身または正当な権利者に帰属します。本ツールは、データの権利を主張しません。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">2. ツールの権利（UKPR帰属）</h3>
              <p>本ツールのコード、デザイン、仕組み、構造、および本ツール上に表示される著作物（利用者から提供されたものを除く）に関する著作権その他一切の知的財産権は、UKPRに帰属します。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
            第4条（利用料金）
          </h2>
          <div className="pl-2 space-y-3">
            <p>本ツールの利用は、<strong>無料</strong>とします。</p>
            <p className="text-emerald-600 font-bold bg-emerald-50 inline-block px-4 py-2 rounded-lg border border-emerald-100">
              商用・非商用問わず、完全無料でご利用いただけます。
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
                  <strong>不正なデータ利用：</strong>他者の秘密情報、または正当な利用権限を持たないデータベースファイルを本ツールで操作する行為。
                </span>
              </li>
              <li className="flex items-start gap-3">
                 <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  <strong>リバースエンジニアリング等：</strong>本ツールのコードを解析または改変する行為。
                </span>
              </li>
              <li className="flex items-start gap-3">
                 <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-red-900">
                  <strong>サーバー負荷行為：</strong>本ツールの機能を利用して、提供者のサーバーに過度な負荷をかける行為（サーバーに対して大量にアクセスしようとする行為など）。
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
            <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
            第6条（免責事項及び責任の制限）
          </h2>
          <p className="mb-4 pl-2">UKPRは、本ツールの利用に関し、以下の各号について一切の責任を負わないものとします。</p>
          <div className="grid md:grid-cols-1 gap-4 pl-2">
            <div className="border-l-2 border-gray-300 pl-4 py-1">
              <h3 className="font-bold text-gray-800">1. ツールの正確性・動作の非保証</h3>
              <p className="text-sm text-gray-600 mt-1">本ツールは、その機能、動作の正確性、安定性、および特定の目的に対する適合性について、いかなる保証も行いません。</p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4 py-1">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                2. データベース操作上のリスクと損害賠償責任の免除
                <HardDrive size={16} className="text-gray-400" />
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                本ツールの利用、特にSQLクエリの実行やデータ編集によって、利用者のデータベースファイルにデータの消失、破損、または意図しない変更が生じた場合であっても、UKPRは当該損害について一切の責任を負いません。
              </p>
              <p className="text-sm font-bold text-red-600 mt-2 bg-red-50 inline-block px-2 py-1 rounded">
                ※利用者は、重要なデータベースファイルについて、操作前に必ずバックアップを取得することを強く推奨します。
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4 py-1">
              <h3 className="font-bold text-gray-800">3. 通信環境に関する免責</h3>
              <p className="text-sm text-gray-600 mt-1">利用者のインターネット接続環境、またはブラウザの不具合、通信の切断など、提供者（UKPR）の管理下にない要因によって本ツールの利用が不可能になった場合や、データに不具合が生じた場合、UKPRは一切の責任を負いません。</p>
            </div>
            <div className="border-l-2 border-gray-300 pl-4 py-1">
              <h3 className="font-bold text-gray-800">4. 禁止事項に関する責任の免除</h3>
              <p className="text-sm text-gray-600 mt-1">利用者が第5条に定める禁止事項に違反したことにより、利用者または第三者との間で紛争やトラブルが発生した場合、その責任は全て当該利用者が負うものとし、UKPRは一切の責任を負いません。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TosSqliteStudio;