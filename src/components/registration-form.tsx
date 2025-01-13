'use client';

import { FormEvent, useState } from 'react';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    address: '',
    contactNumber: '',
    email: '',
    occupation: '',
    age: '',
    gender: '',
    civilStatus: '',
    citizenship: '',
    height: '',
    weight: '',
    religion: '',
    language: '',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    emergencyContact: '',
    emergencyNumber: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const inputStyle =
    'w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent';
  const labelStyle = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <form onSubmit={handleSubmit} className='mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg'>
      <h2 className='mb-8 text-center font-serif text-3xl'>Registration Form</h2>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {/* Personal Information */}
        <div className='space-y-4'>
          <div>
            <label className={labelStyle}>Name:</label>
            <input
              type='text'
              className={inputStyle}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className={labelStyle}>Address:</label>
            <input
              type='text'
              className={inputStyle}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <div>
            <label className={labelStyle}>Email:</label>
            <input
              type='email'
              className={inputStyle}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className='space-y-4'>
          <div>
            <label className={labelStyle}>Date of Birth:</label>
            <input
              type='date'
              className={inputStyle}
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            />
          </div>

          <div>
            <label className={labelStyle}>Contact Number:</label>
            <input
              type='tel'
              className={inputStyle}
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            />
          </div>

          <div>
            <label className={labelStyle}>Occupation:</label>
            <input
              type='text'
              className={inputStyle}
              value={formData.occupation}
              onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
        <div>
          <label className={labelStyle}>Age:</label>
          <input
            type='number'
            className={inputStyle}
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>

        <div>
          <label className={labelStyle}>Gender:</label>
          <select
            className={inputStyle}
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <option value=''>Select</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div>
          <label className={labelStyle}>Civil Status:</label>
          <input
            type='text'
            className={inputStyle}
            value={formData.civilStatus}
            onChange={(e) => setFormData({ ...formData, civilStatus: e.target.value })}
          />
        </div>

        <div>
          <label className={labelStyle}>Citizenship:</label>
          <input
            type='text'
            className={inputStyle}
            value={formData.citizenship}
            onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
          />
        </div>
      </div>

      {/* Parent Information */}
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='space-y-4'>
          <div>
            <label className={labelStyle}>Father's Name:</label>
            <input
              type='text'
              className={inputStyle}
              value={formData.fatherName}
              onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
            />
          </div>

          <div>
            <label className={labelStyle}>Father's Occupation:</label>
            <input
              type='text'
              className={inputStyle}
              value={formData.fatherOccupation}
              onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
            />
          </div>
        </div>

        <div className='space-y-4'>
          <div>
            <label className={labelStyle}>Mother's Name:</label>
            <input
              type='text'
              className={inputStyle}
              value={formData.motherName}
              onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
            />
          </div>

          <div>
            <label className={labelStyle}>Mother's Occupation:</label>
            <input
              type='text'
              className={inputStyle}
              value={formData.motherOccupation}
              onChange={(e) => setFormData({ ...formData, motherOccupation: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div>
          <label className={labelStyle}>Emergency Contact Person:</label>
          <input
            type='text'
            className={inputStyle}
            value={formData.emergencyContact}
            onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
          />
        </div>

        <div>
          <label className={labelStyle}>Emergency Contact Number:</label>
          <input
            type='tel'
            className={inputStyle}
            value={formData.emergencyNumber}
            onChange={(e) => setFormData({ ...formData, emergencyNumber: e.target.value })}
          />
        </div>
      </div>

      <div className='mt-8 text-center'>
        <button
          type='submit'
          className='rounded-lg bg-sky-500 px-8 py-3 text-white transition-colors hover:bg-sky-600'
        >
          Submit Registration
        </button>
      </div>
    </form>
  );
}
