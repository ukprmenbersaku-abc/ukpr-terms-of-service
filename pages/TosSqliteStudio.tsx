import React from 'react';
import { Database, Shield, ExternalLink, Link as LinkIcon, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              SQLite Studio 個別利用規約
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
               <Link to="/tos/general" className="text-emerald-600 font-bold hover:underline inline-flex items-center gap-1">
                 共通利用規約を見る <ExternalLink size={14} />
               </Link>
             </div>
          </div>

          <div className="prose prose-emerald max-w-none">
            <p className="text-xl font-medium text-gray-900 border-l-4 border-emerald-500 pl-6 bg-gray-50 py-4 rounded-r-xl">
              この規約は、SQLiteデータベース閲覧・編集ツール（以下「本ツール」といいます）特有のデータ取り扱いについて定めるものです。
            </p>
          </div>
        </div>

        {/* 第1条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">1</span>
            第1条（データベースファイルの取り扱いとプライバシー）
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

        {/* 第2条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-emerald-100 text-emerald-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">2</span>
            第2条（特有の免責事項：データバックアップ）
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-start gap-4">
             <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
             <div>
                <h3 className="font-bold text-gray-900 mb-2">データの消失リスクについて</h3>
                <p className="text-gray-600 mb-3">
                   本ツールはブラウザ上でデータベースを直接編集する機能を提供しますが、ブラウザのメモリ制限や予期せぬクラッシュにより、編集中のデータが保存されない、または破損する可能性があります。
                </p>
                <p className="font-bold text-rose-600">
                   ※重要なファイルは操作前に必ずバックアップ（コピー）を取得した上でご利用ください。
                </p>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TosSqliteStudio;