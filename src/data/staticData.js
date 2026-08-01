// All data below is static and hardcoded for the purpose of this lab experiment.
// No API, database, or backend is used anywhere in this project.

export const student = {
  name: 'Aditi Sahu',
  studentId: 'STU2025001',
  institution: 'ABC Engineering College',
  department: 'Computer Engineering',
  course: 'B.E.',
  semester: 6,
};

export const studentCertificates = [
  {
    id: 'CERT-2025-0417',
    course: 'Data Structures & Algorithms',
    grade: 'A+',
    issueDate: '12 Mar 2025',
    status: 'Verified',
  },
  {
    id: 'CERT-2025-0298',
    course: 'Database Management Systems',
    grade: 'A',
    issueDate: '08 Jan 2025',
    status: 'Verified',
  },
  {
    id: 'CERT-2024-1183',
    course: 'Computer Networks',
    grade: 'A+',
    issueDate: '02 Nov 2024',
    status: 'Verified',
  },
  {
    id: 'CERT-2024-0765',
    course: 'Operating Systems',
    grade: 'B+',
    issueDate: '19 Jun 2024',
    status: 'Pending',
  },
];

export const institutionStats = [
  { label: 'Certificates issued', value: '12,480' },
  { label: 'Enrolled students', value: '3,205' },
  { label: 'Revoked', value: '14' },
  { label: 'Pending review', value: '37' },
];

export const institutionRecords = [
  { name: 'Aditi Sahu', course: 'Data Structures & Algorithms', grade: 'A+', issueDate: '12 Mar 2025', status: 'Verified' },
  { name: 'Rohan Mehta', course: 'Database Management Systems', grade: 'A', issueDate: '08 Jan 2025', status: 'Verified' },
  { name: 'Priya Nair', course: 'Computer Networks', grade: 'B+', issueDate: '02 Nov 2024', status: 'Pending' },
  { name: 'Karan Verma', course: 'Operating Systems', grade: 'A', issueDate: '19 Jun 2024', status: 'Verified' },
  { name: 'Sneha Iyer', course: 'Software Engineering', grade: 'A+', issueDate: '27 Apr 2024', status: 'Revoked' },
  { name: 'Aman Gupta', course: 'Machine Learning', grade: 'B', issueDate: '15 Feb 2024', status: 'Verified' },
];

export const sampleVerificationResult = {
  certId: 'CERT-2025-0417',
  studentName: 'Aditi Sahu',
  institution: 'ABC Engineering College',
  course: 'Data Structures & Algorithms',
  issueDate: '12 Mar 2025',
  status: 'VALID',
};
