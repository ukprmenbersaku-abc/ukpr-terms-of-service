import { LucideIcon } from 'lucide-react';

export interface ToolItem {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: LucideIcon;
  color: string;
}