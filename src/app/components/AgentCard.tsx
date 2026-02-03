import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';

interface AgentCardProps {
  agentId: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export function AgentCard({ agentId, title, description, icon }: AgentCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[12px] border border-[#e5e5e5] p-[24px] flex flex-col gap-[16px] hover:shadow-md transition-shadow">
      <div className="h-[100px] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-[8px]">
        <h3 className="font-['Inter_Tight',sans-serif] font-semibold text-[18px] text-[#0a0a0a] leading-[1.4]">
          {title}
        </h3>
        <p className="font-['Product_Sans',sans-serif] text-[14px] text-[#737373] leading-[1.5]">
          {description}
        </p>
      </div>
      <button 
        onClick={() => navigate(`/agent/${agentId}`)}
        className="flex items-center gap-[8px] text-[#6366F2] font-['Product_Sans',sans-serif] text-[14px] font-medium hover:gap-[12px] transition-all"
      >
        Use agent
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
