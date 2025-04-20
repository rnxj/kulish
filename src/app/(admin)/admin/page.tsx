'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import AdmissionsTable from '@/components/admin/AdmissionsTable';
import CareersTable from '@/components/admin/CareersTable';
import { getCookie, deleteCookie } from '@/lib/cookies';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'admissions' | 'careers'>('admissions');
  const router = useRouter();

  useEffect(() => {
    const token = getCookie('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    deleteCookie('adminToken');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-sky-500 text-white">
        <div className="container mx-auto px-4 pt-6">
          <div className="flex justify-between items-center mb-8">
            <Image
              src="/logo.png"
              alt="Kulish School Logo"
              width={100}
              height={60}
              className="object-contain pl-4"
            />
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-md text-sm"
            >
              Logout
            </button>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('admissions')}
              className={cn(
                'px-4 py-2 rounded-t-lg transition-colors',
                activeTab === 'admissions'
                  ? 'bg-white text-sky-500'
                  : 'bg-sky-600 hover:bg-sky-700'
              )}
            >
              Admissions Enquiries
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={cn(
                'px-4 py-2 rounded-t-lg transition-colors',
                activeTab === 'careers'
                  ? 'bg-white text-sky-500'
                  : 'bg-sky-600 hover:bg-sky-700'
              )}
            >
              Career Applications
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'admissions' ? (
          <div>
            <h2 className="text-xl font-semibold mb-6">Admissions Enquiries</h2>
            <AdmissionsTable />
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-6">Career Applications</h2>
            <CareersTable />
          </div>
        )}
      </div>
    </div>
  );
} 