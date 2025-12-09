import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Palette, FileText, ArrowRight, Database } from 'lucide-react';
import { ToolItem } from '../types';

const tools: ToolItem[] = [
  {
    id: 'pixmorph',
    name: 'PixMorph',
    description: 'ブラウザ上で完結するセキュアな画像変換・リサイズツール。',
    path: '/tos/pixmorph',
    icon: Image,
    color: 'bg-blue-100 text-blue-600',
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
          各便利ツールの利用規約をご確認いただけます。
          ご利用前に必ずお読みください。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link 
            key={tool.id} 
            to={tool.path}
            className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-indigo-100 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${tool.color}`}>
                <tool.icon size={32} />
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
              規約を読む
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;