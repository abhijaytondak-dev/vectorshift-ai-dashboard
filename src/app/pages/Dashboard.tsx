import { AgentCard } from '@/app/components/AgentCard';
import { DocumentCompareIcon, StarDocumentIcon, AIDocumentIcon } from '@/app/components/AgentIcons';
import { useNavigate } from 'react-router';
import { DashboardLayout } from '@/app/components/DashboardLayout';

export default function Dashboard() {
  const navigate = useNavigate();

  const agents = [
    {
      id: 'ppt-analysis',
      icon: <StarDocumentIcon />,
      name: 'PPT Analysis',
      description: 'Analyze your PPT for formatting errors, compare with templates, get citations.',
      color: '#F0EDFE',
      buttonText: 'Analyze PPT'
    },
    {
      id: 'excel-audit',
      icon: <DocumentCompareIcon />,
      name: 'Excel Audit',
      description: 'Check for discrepancies between submitted Excel files and source templates.',
      color: '#FFF4ED',
      buttonText: 'Audit Excel'
    },
    {
      id: 'pdf-reader',
      icon: <AIDocumentIcon />,
      name: 'PDF Reader & Summariser',
      description: 'Upload PDFs and get instant summaries, key insights, and document analysis.',
      color: '#EDFBF5',
      buttonText: 'Read PDF'
    }
  ];

  return (
    <DashboardLayout
      title="AI Agents"
      subtitle="Select an agent to get started with your document analysis"
    >
      <div className="p-[24px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {agents.map((agent) => (
            <AgentCard
              key={agent.id}
              icon={agent.icon}
              name={agent.name}
              description={agent.description}
              color={agent.color}
              buttonText={agent.buttonText}
              onClick={() => navigate(`/agent/${agent.id}`)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}