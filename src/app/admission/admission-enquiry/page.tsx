'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdmissionEnquiryPage() {
    const [academicYear, setAcademicYear] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [gender, setGender] = useState('');
    return (
    <div className="flex min-h-screen p-2 bg-gray-50">
      {/* Left Blue Panel */}
      <div className="w-1/4 rounded-l-md bg-sky-500 text-white p-8 flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center mt-12 my-6">
            <Link href='/'>
                <Image src='/logo.png' alt='Logo' width={100} height={40} className="mb-8" />
            </Link>
            <h1 className="text-xl font-semibold">THE KULISH SCHOOL, JAIPUR</h1>
          </div>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c4.418 0 8 3.582 8 8 0 5.25-8 12-8 12s-8-6.75-8-12c0-4.418 3.582-8 8-8z" />
                <circle cx="12" cy="10" r="3" strokeWidth={2} stroke="currentColor" fill="none" />
            </svg>
              <span className="text-sm">INS-1, Opp. Bombay Hospital, Mahal Road, Jagatpura, Jaipur, Rajasthan</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <a href="https://www.thekulishschool.com/" className="text-sm hover:underline">https://www.thekulishschool.com/</a>
            </div>

            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 6 9-6" />
            </svg>
              <a href="mailto:enquiry@thekulishschool.com" className="text-sm hover:underline">enquiry@thekulishschool.com</a>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">+91 9057531015</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Rest of the component remains the same as in the previous submission */}
      <div className="w-3/4 py-4 px-8 bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex mb-6 border-b pb-2">
            <Image src='/admission/basicinfo.svg' className='mr-2' alt='basic information' width={35} height={35} />
            <h2 className="text-lg font-semibold text-sky-500">Basic Information :</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Academic Year <span className='text-red-600'>*</span></label>
              <select 
                className="border rounded p-2 w-full text-sm"
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
              >
                <option value="">Select Academic Year</option>
                <option value="2024">2024-2025</option>
                <option value="2025">2025-2026</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Class <span className='text-red-600'>*</span></label>
              <select 
                className="border rounded p-2 w-full text-sm"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="">Select Class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">First Name <span className='text-red-600'>*</span></label>
              <input 
                type="text" 
                className="border rounded p-2 w-full text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Middle Name</label>
              <input 
                type="text" 
                className="border rounded p-2 w-full text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Last Name <span className='text-red-600'>*</span></label>
              <input 
                type="text" 
                className="border rounded p-2 w-full text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
              <input 
                type="text" 
                placeholder="mm/dd/yyyy" 
                className="border rounded p-2 w-full text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Gender <span className='text-red-600'>*</span></label>
              <select 
                className="border rounded p-2 w-full text-sm"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Primary Mobile No. <span className='text-red-600'>*</span></label>
              <input 
                type="tel" 
                className="border rounded p-2 w-full text-sm"
              />
            </div>
            
            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Primary Email Id</label>
              <input 
                type="email" 
                className="border rounded p-2 w-full text-sm"
              />
            </div>
          </div>
          
          
        </div>

        <div className="bg-white shadow-md mt-6 mb-6 rounded-lg p-6">
            <div className="flex mb-6 border-b pb-2">
                <Image src='/admission/additionalinfo.svg' className='mr-2' alt='basic information' width={35} height={35} />
                <h2 className="text-lg font-semibold text-yellow-400">Additional Information :</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="block text-sm text-gray-600 mb-1">Current School Name</label>
                <input 
                    type="text" 
                    className="border rounded p-2 w-full text-sm"
                />
                </div>
                
                <div>
                <label className="block text-sm text-gray-600 mb-1">Book for Counseling</label>
                <input 
                    type="text" 
                    className="border rounded p-2 w-full text-sm"
                />
                </div>
            </div>
            
            <div className='w-full text-center justify-center'>
                <Button className="w-24 bg-sky-500 text-white py-3 rounded mt-6 hover:bg-sky-600 text-sm font-semibold">
                    Submit
                </Button>
            </div>
        </div>
      </div>
    </div>
    )
}