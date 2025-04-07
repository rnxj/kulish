'use client';

import { useState, useEffect } from "react";
import { DataTable } from '@/components/ui/data-table';

interface CareerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resume: string;
  coverLetter: string;
  submittedAt: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  jobType: string;
  subject?: string;
  currentBoard?: string;
  city?: string;
  employer?: string;
  ctc?: string;
  noticeperiod?: string;
  [key: string]: any;
}

export default function CareersTable() {
  const [selectedApplication, setSelectedApplication] =
    useState<CareerApplication | null>(null);
  const [careerApplications, setCareerApplications] = useState<CareerApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch('/api/admin/careers', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch career applications');
        }
        const data = await response.json();
        setCareerApplications(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const columns = [
    { header: 'Name', accessor: 'name' as keyof CareerApplication },
    { header: 'Position', accessor: 'position' as keyof CareerApplication },
    { 
      header: 'Subject',
      accessor: 'subject' as keyof CareerApplication,
      render: (value: string) => value || 'N/A',
    },
    { 
      header: 'Job Type',
      accessor: 'jobType' as keyof CareerApplication,
      render: (value: string) => value || 'N/A',
    },
    {
      header: 'Notice Period',
      accessor: 'noticeperiod' as keyof CareerApplication,
      render: (value: string) => value || 'Not specified',
    },
    {
      header: 'Submitted',
      accessor: 'submittedAt' as keyof CareerApplication,
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">{error}</div>;
  }

  return (
    <div>
      <DataTable
        data={careerApplications}
        columns={columns}
        onRowClick={setSelectedApplication}
      />

      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Career Application Details</h3>
              <button
                onClick={() => setSelectedApplication(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Name</h4>
                  <p>{selectedApplication.name}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Position</h4>
                  <p>{selectedApplication.position}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>{selectedApplication.email}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>{selectedApplication.phone}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Job Type</h4>
                  <p>{selectedApplication.jobType}</p>
                </div>
                {selectedApplication.subject && (
                  <div>
                    <h4 className="font-semibold">Subject</h4>
                    <p>{selectedApplication.subject}</p>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">Current Employer</h4>
                  <p>{selectedApplication.employer}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Current CTC</h4>
                  <p>{selectedApplication.ctc}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Notice Period</h4>
                  <p>{selectedApplication.noticeperiod}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Board</h4>
                  <p>{selectedApplication.currentBoard || 'Not specified'}</p>
                </div>
                <div>
                  <h4 className="font-semibold">City</h4>
                  <p>{selectedApplication.city}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Submitted At</h4>
                  <p>{new Date(selectedApplication.submittedAt).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <h4 className="font-semibold">Resume</h4>
                  <a
                    href={selectedApplication.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline"
                  >
                    View Resume
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold">Cover Letter</h4>
                  <a
                    href={selectedApplication.coverLetter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline"
                  >
                    View Cover Letter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 