import React from 'react';
import { Shield, AlertTriangle, ExternalLink, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PixMorphIcon from '../components/PixMorphIcon';

const TosPixMorph: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 px-5 py-12 sm:px-[26px] text-white">
        <div className="max-w-4xl mr-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md shadow-inner border border-white/10">
              <PixMorphIcon size={36} className="text-white" />
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
              Pix Morph 個別利用規約
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
               <Link to="/tos/general" className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                 共通利用規約を見る <ExternalLink size={14} />
               </Link>
             </div>
          </div>

          <div className="prose prose-blue max-w-none">
            <p className="text-xl font-medium text-gray-900 border-l-4 border-blue-500 pl-6 bg-gray-50 py-4 rounded-r-xl">
              この規約は、Pix Morph（以下「本ツール」といいます）特有の利用条件を定めるものです。
            </p>
          </div>
        </div>

        {/* 第1条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-blue-100 text-blue-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">1</span>
            第1条（ツールの定義）
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
             <p className="text-gray-600 text-lg">
               本ツールは、利用者のブラウザ上で画像を変換およびリサイズ処理する機能を提供するものです。
             </p>
          </div>
        </section>

        {/* 第2条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            <span className="bg-blue-100 text-blue-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">2</span>
            第2条（画像データの取り扱いとプライバシー）
          </h2>
          <div className="bg-green-50/70 border border-green-100 rounded-2xl p-6 sm:p-8 shadow-sm">
             <div className="flex items-start gap-5">
              <div className="bg-green-100 p-3.5 rounded-2xl text-green-600 flex-shrink-0">
                <Shield size={28} />
              </div>
              <div>
                <h3 className="font-bold text-green-900 mb-3 text-xl">サーバーへアップロードされません</h3>
                <p className="text-green-800 text-lg leading-relaxed">
                  本ツールの画像変換およびリサイズ処理は、すべて利用者のブラウザ内（クライアントサイド）でのみ実行され、UKPRのサーバーを一切経由しません。画像データが外部に送信されることはありません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 第3条 */}
        <section className="max-w-4xl mx-auto w-full">
          <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
             <span className="bg-rose-100 text-rose-700 w-9 h-9 rounded-full flex items-center justify-center mr-4 text-base shadow-sm">3</span>
            第3条（特有の禁止事項）
          </h2>
          <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-6 sm:p-8">
            <p className="mb-6 font-bold text-rose-900">共通利用規約の禁止事項に加え、以下の画像を本ツールで処理することを禁止します。</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  <strong className="text-rose-700">権利侵害コンテンツ：</strong>他者の著作権、肖像権等を侵害する画像。
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white/60 p-3 rounded-lg border border-rose-100/50">
                <AlertTriangle className="text-rose-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-rose-950">
                  <strong className="text-rose-700">違法・不適切なコンテンツ：</strong>児童ポルノ、わいせつ物、過度に暴力的な画像、その他法令で所持や作成が禁止されている画像。
                </span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TosPixMorph;