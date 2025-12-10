import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, FileText, ArrowRight, Database, Scale } from 'lucide-react';
import { ToolItem } from '../types';
import PixMorphIcon from '../components/PixMorphIcon';

const tools: ToolItem[] = [
  {
    id: 'pixmorph',
    name: 'Pix Morph',
    description: 'ブラウザ上で完結するセキュアな画像変換・リサイズツール。',
    path: '/tos/pixmorph',
    icon: PixMorphIcon,
    color: 'bg-transparent', // アイコン自体が背景を持つため透明に
  },
  {
    id: 'color-palette',
    name: 'カラーパレットジェネレーター',
    description: '美しい配色を瞬時に作成するデザイン支援ツール。',
    path: '/tos/color-palette',
    icon: Palette,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'sqlite',
    name: 'SQLite Studio',
    description: 'ブラウザ上で動作するSQLiteデータベース閲覧・編集ツール。',
    path: '/tos/sqlite',
    icon: Database,
    color: 'bg-emerald-100 text-emerald-600',
  }
];

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          利用規約を選択してください
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          UKPR-S便利ツール集の各利用規約をご確認いただけます。<br/>
          すべてのツールに「共通利用規約」が適用されます。
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-8">
        <Link 
            to="/tos/general"
            className="group relative block bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:bg-slate-900 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Scale size={120} className="text-white" />
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-white/10 p-4 rounded-xl text-white backdrop-blur-sm">
                  <Scale size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded shadow-sm">重要</span>
                    <span className="text-slate-300 text-sm font-medium">すべての利用者へ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    共通利用規約
                  </h3>
                  <p className="text-slate-300 max-w-xl">
                    UKPR-S便利ツール集全体に適用される基本ルールです。各ツールの利用前に必ずご確認ください。
                  </p>
                </div>
              </div>
              
              <div className="mt-2 sm:mt-0 flex items-center bg-white text-slate-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors shrink-0">
                規約を読む
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link 
            key={tool.id} 
            to={tool.path}
            className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-indigo-100 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`rounded-xl ${tool.id === 'pixmorph' ? 'p-0 overflow-hidden' : 'p-3'} ${tool.color}`}>
                {/* PixMorphの場合はサイズを少し大きく調整、その他は標準 */}
                <tool.icon size={tool.id === 'pixmorph' ? 58 : 32} />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">
                <ArrowRight size={24} />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {tool.name}
            </h3>
            <p className="text-gray-600 flex-grow">
              {tool.description}
            </p>
            
            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition-colors">
              <FileText size={16} className="mr-2" />
              個別規約を読む
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;