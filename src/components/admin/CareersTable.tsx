'use client';

import { useState, useEffect } from "react";
import { DataTable } from '@/components/ui/data-table';
import TableControls from './TableControls';
import { getCookie } from '@/lib/cookies';

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
  subject: string;
  currentBoard: string;
  city: string;
  employer: string;
  ctc: string;
  noticeperiod: string;
  [key: string]: any;
}

export default function CareersTable() {
  const [selectedApplication, setSelectedApplication] = useState<CareerApplication | null>(null);
  const [careerApplications, setCareerApplications] = useState<CareerApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<CareerApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = getCookie('adminToken');
        if (!token) {
          throw new Error('No authentication token found');
        }

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
        setFilteredApplications(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = careerApplications.filter(application =>
      application.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredApplications(filtered);
  };

  const handleDownload = async (startDate: string, endDate: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(
        `/api/admin/careers/download?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to download data');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `careers_${startDate}_to_${endDate}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Error downloading data:', err);
    }
  };

  const columns = [
    { header: 'Name', accessor: 'name' as keyof CareerApplication },
    { header: 'Position', accessor: 'position' as keyof CareerApplication },
    { header: 'Experience', accessor: 'experience' as keyof CareerApplication },
    { header: 'City', accessor: 'city' as keyof CareerApplication },
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
      <TableControls
        onSearch={handleSearch}
        onDownload={handleDownload}
      />
      
      <DataTable
        data={filteredApplications}
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
                  <h4 className="font-semibold">Email</h4>
                  <p>{selectedApplication.email}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>{selectedApplication.phone}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Position</h4>
                  <p>{selectedApplication.position}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Job Type</h4>
                  <p>{selectedApplication.jobType}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Subject</h4>
                  <p>{selectedApplication.subject}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Current Board</h4>
                  <p>{selectedApplication.currentBoard}</p>
                </div>
                <div>
                  <h4 className="font-semibold">City</h4>
                  <p>{selectedApplication.city}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Current Employer</h4>
                  <p>{selectedApplication.employer}</p>
                </div>
                <div>
                  <h4 className="font-semibold">CTC</h4>
                  <p>{selectedApplication.ctc}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Notice Period</h4>
                  <p>{selectedApplication.noticeperiod}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Submitted At</h4>
                  <p>{new Date(selectedApplication.submittedAt).toLocaleString()}</p>
                </div>
              </div>
              {selectedApplication.coverLetter && (
                <div>
                  <h4 className="font-semibold">Cover Letter</h4>
                  <p className="whitespace-pre-wrap">{selectedApplication.coverLetter}</p>
                </div>
              )}
              <div>
                <h4 className="font-semibold">Resume</h4>
                <a
                  href={selectedApplication.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 