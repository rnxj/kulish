'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { format } from 'date-fns';

interface TableControlsProps {
  onSearch: (query: string) => void;
  onDownload: (startDate: string, endDate: string) => void;
}

export default function TableControls({
  onSearch,
  onDownload,
}: TableControlsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleDownload = () => {
    if (startDate && endDate) {
      onDownload(startDate, endDate);
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Download size={16} />
              Download
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Download Data</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
              <Button
                onClick={handleDownload}
                className="w-full"
                disabled={!startDate || !endDate}
              >
                Download
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
} 