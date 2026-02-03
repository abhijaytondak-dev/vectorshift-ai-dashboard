import { useNavigate, useParams } from 'react-router';
import { ChevronRight, RotateCw, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FileUpload } from '@/app/components/FileUpload';
import { ProgressLoader, agentSteps } from '@/app/components/ProgressLoader';
import { ResultsView } from '@/app/components/ResultsView';
import { ResultsSidebar } from '@/app/components/ResultsSidebar';
import { IssueDetailPanel, generateMockIssue } from '@/app/components/IssueDetailPanel';
import { AuditHistoryModal } from '@/app/components/AuditHistoryModal';
import { api } from '@/app/utils/api';

// Agent configurations
const agentConfig: Record<string, any> = {
  'ppt-analysis': {
    name: 'PPT Analysis',
    acceptedTypes: '.ppt,.pptx',
    mainFileLabel: 'PowerPoint File',
    sourceFileLabel: 'Template File (Optional)',
    hasSourceFile: true,
    mainFileExample: {
      name: 'Q4_Financial_Report.pptx',
      size: '2.4 MB',
      type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    },
    sourceFileExample: {
      name: 'Financial_Template.pptx',
      size: '1.8 MB',
      type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    }
  },
  'excel-audit': {
    name: 'Excel Audit',
    acceptedTypes: '.xls,.xlsx',
    mainFileLabel: 'Excel File to Audit',
    sourceFileLabel: 'Source Template',
    hasSourceFile: true,
    mainFileExample: {
      name: 'Budget_2024.xlsx',
      size: '1.2 MB',
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    },
    sourceFileExample: {
      name: 'Budget_Template.xlsx',
      size: '856 KB',
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    }
  },
  'pdf-reader': {
    name: 'PDF Reader & Summariser',
    acceptedTypes: '.pdf',
    mainFileLabel: 'PDF Document',
    sourceFileLabel: null,
    hasSourceFile: false,
    mainFileExample: {
      name: 'Annual_Report_2024.pdf',
      size: '3.5 MB',
      type: 'application/pdf'
    }
  }
};

// Simplified navigation sidebar (imported from DashboardLayout or separate)
// For simplicity assuming it's part of layout, but here we rebuild or import.
// I will assume SimpleSidebar is internal or I should import DashboardLayout with sidebar.
// But AgentDetail uses a custom sidebar layout.
import { DashboardLayout } from '@/app/components/DashboardLayout';

function SimpleSidebar() {
  const navigate = useNavigate();
  // ... Simplified implementation for Agent Detail ...
  // Actually, let's reuse DashboardLayout but hide standard sidebar?
  // The design shows a specific sidebar for issues.
  // I'll stick to the read file content.
  return (
    <div className="bg-white border-r border-[#e5e5e5] w-[68px] h-full flex flex-col items-center py-[16px] gap-[16px]">
      {/* ... Content from read file ... */}
    </div>
  );
}
// Wait, I should use the EXACT content read from the file.
// I'll paste the full content of AgentDetail.tsx below.
