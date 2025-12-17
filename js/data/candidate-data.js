/**
 * Seed data for candidates
 * Fully aligned with createCandidate model
 */
export default [
  {
    id: 'c-001',

    // Personal Information
    fullName: 'Nguyễn Văn An',
    gender: 'Nam',
    dateOfBirth: '1995-03-15',
    phone: '0901234567',
    email: 'nguyenvanan@gmail.com',
    address: '123 Nguyễn Huệ, Quận 1',
    area: 'Hồ Chí Minh',
    avatar: null,

    // Education Information
    educationLevel: 'Đại học',
    trainingPlace: 'Đại học Bách Khoa TP.HCM',
    major: 'Công nghệ thông tin',

    // Application Information
    position: 'Frontend Developer',
    company: 'Công ty TNHH ABC',
    source: 'LinkedIn',
    recruiter: 'Trần Thị B',
    collaborator: 'Lê Văn C',
    appliedDate: '2024-01-15',

    // Work Experience
    workplace: 'Công ty XYZ',
    workStartDate: '2017-06-01',
    workEndDate: '2020-12-31',
    jobDescription: 'Phát triển giao diện web với React và CSS',

    // Additional Information
    education: [
      {
        school: 'Đại học Bách Khoa TP.HCM',
        major: 'Công nghệ thông tin',
        graduationYear: '2017'
      }
    ],
    experiences: [
      {
        company: 'Công ty XYZ',
        position: 'Junior Frontend Developer',
        duration: '2017 - 2020'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-15T08:30:00Z',
    updatedAt: null
  },

  {
    id: 'c-002',
    fullName: 'Trần Thị Bình',
    gender: 'Nữ',
    dateOfBirth: '1998-07-22',
    phone: '0912345678',
    email: 'tranthibinh@gmail.com',
    address: '456 Lê Lợi, Quận 3',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'Đại học Khoa học Tự nhiên',
    major: 'Khoa học máy tính',

    position: 'Backend Developer',
    company: 'Công ty TNHH DEF',
    source: 'Facebook',
    recruiter: 'Nguyễn Văn D',
    collaborator: 'Phạm Thị E',
    appliedDate: '2024-02-10',

    workplace: 'Startup ABC',
    workStartDate: '2019-01-01',
    workEndDate: '2020-12-31',
    jobDescription: 'Xây dựng REST API với Node.js và MySQL',

    education: [
      {
        school: 'Đại học Khoa học Tự nhiên',
        major: 'Khoa học máy tính',
        graduationYear: '2020'
      }
    ],
    experiences: [
      {
        company: 'Startup ABC',
        position: 'Backend Intern',
        duration: '2019 - 2020'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-10T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-003',
    fullName: 'Lê Minh Cường',
    gender: 'Nam',
    dateOfBirth: '1992-11-08',
    phone: '0923456789',
    email: 'leminhcuong@gmail.com',
    address: '789 Trần Hưng Đạo, Quận 5',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'Đại học Công nghệ',
    major: 'Hệ thống thông tin',

    position: 'Full Stack Developer',
    company: 'Công ty Cổ phần GHI',
    source: 'Website',
    recruiter: 'Võ Thị F',
    collaborator: 'Hoàng Văn G',
    appliedDate: '2024-01-25',

    workplace: 'Công ty MNO',
    workStartDate: '2014-08-01',
    workEndDate: '2024-01-01',
    jobDescription: 'Phát triển hệ thống web end-to-end',

    education: [
      {
        school: 'Đại học Công nghệ',
        major: 'Hệ thống thông tin',
        graduationYear: '2014'
      }
    ],
    experiences: [
      {
        company: 'Công ty MNO',
        position: 'Senior Developer',
        duration: '2014 - 2024'
      }
    ],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 3,
    createdAt: '2024-01-25T10:15:00Z',
    updatedAt: null
  },

  {
    id: 'c-004',
    fullName: 'Phạm Thị Dung',
    gender: 'Nữ',
    dateOfBirth: '1996-05-19',
    phone: '0934567890',
    email: 'phamthidung@gmail.com',
    address: '321 Võ Văn Tần, Quận 3',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'Đại học Mỹ thuật',
    major: 'Thiết kế đồ họa',

    position: 'UI/UX Designer',
    company: 'Công ty TNHH JKL',
    source: 'Referral',
    recruiter: 'Đặng Văn H',
    collaborator: 'Bùi Thị I',
    appliedDate: '2024-03-05',

    workplace: 'Agency PQR',
    workStartDate: '2018-06-01',
    workEndDate: '2024-02-01',
    jobDescription: 'Thiết kế UI/UX cho website và mobile app',

    education: [
      {
        school: 'Đại học Mỹ thuật',
        major: 'Thiết kế đồ họa',
        graduationYear: '2018'
      }
    ],
    experiences: [
      {
        company: 'Agency PQR',
        position: 'UI/UX Designer',
        duration: '2018 - 2024'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 0,
    createdAt: '2024-03-05T14:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-005',
    fullName: 'Hoàng Văn Em',
    gender: 'Nam',
    dateOfBirth: '1999-09-30',
    phone: '0945678901',
    email: 'hoangvanem@gmail.com',
    address: '654 Pasteur, Quận 1',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Sư phạm Kỹ thuật',
    major: 'Kỹ thuật phần mềm',

    position: 'Mobile Developer',
    company: 'Công ty Cổ phần STU',
    source: 'JobStreet',
    recruiter: 'Trịnh Thị J',
    collaborator: 'Lý Văn K',
    appliedDate: '2024-02-20',

    workplace: 'Freelance',
    workStartDate: '2021-01-01',
    workEndDate: '2024-02-01',
    jobDescription: 'Phát triển ứng dụng Android và Flutter',

    education: [
      {
        school: 'ĐH Sư phạm Kỹ thuật',
        major: 'Kỹ thuật phần mềm',
        graduationYear: '2021'
      }
    ],
    experiences: [
      {
        company: 'Freelance',
        position: 'Mobile Developer',
        duration: '2021 - 2024'
      }
    ],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 2,
    createdAt: '2024-02-20T11:45:00Z',
    updatedAt: null
  },
  {
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  }
,{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  },{
    id: 'c-006',
    fullName: 'Ngô Thị Mai',
    gender: 'Nữ',
    dateOfBirth: '1997-04-12',
    phone: '0906789123',
    email: 'ngothimai@gmail.com',
    address: '12 Cách Mạng Tháng 8, Quận 10',
    area: 'Hồ Chí Minh',
    avatar: null,

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Kinh tế TP.HCM',
    major: 'Hệ thống thông tin quản lý',

    position: 'Business Analyst',
    company: 'Công ty TNHH DataPro',
    source: 'LinkedIn',
    recruiter: 'Phạm Quốc L',
    collaborator: '',
    appliedDate: '2024-02-05',

    workplace: 'Công ty DataSoft',
    workStartDate: '2019-07-01',
    workEndDate: '2023-12-31',
    jobDescription: 'Phân tích yêu cầu nghiệp vụ và viết tài liệu BRD',

    education: [
      {
        school: 'ĐH Kinh tế TP.HCM',
        major: 'Hệ thống thông tin quản lý',
        graduationYear: '2019'
      }
    ],
    experiences: [
      {
        company: 'Công ty DataSoft',
        position: 'Business Analyst',
        duration: '2019 - 2023'
      }
    ],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-05T09:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-007',
    fullName: 'Võ Thanh Tùng',
    gender: 'Nam',
    dateOfBirth: '1994-01-20',
    phone: '0919988776',
    email: 'vothanhtung@gmail.com',
    address: '55 Nguyễn Thị Minh Khai, Quận 1',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Công nghiệp TP.HCM',
    major: 'Công nghệ phần mềm',

    position: 'QA Engineer',
    company: 'Công ty TNHH QualityX',
    source: 'Website',
    recruiter: 'Đỗ Minh P',
    collaborator: '',
    appliedDate: '2024-01-18',

    workplace: 'Công ty TestLab',
    workStartDate: '2016-08-01',
    workEndDate: '2023-11-30',
    jobDescription: 'Manual & Automation Testing (Selenium)',

    education: [],
    experiences: [
      {
        company: 'Công ty TestLab',
        position: 'QA Engineer',
        duration: '2016 - 2023'
      }
    ],

    cvFile: null,
    status: 'Đã tuyển',
    numberOfUnreadEmail: 0,
    createdAt: '2024-01-18T08:20:00Z',
    updatedAt: null
  },

  {
    id: 'c-008',
    fullName: 'Đặng Thu Hà',
    gender: 'Nữ',
    dateOfBirth: '2000-06-09',
    phone: '0932214567',
    email: 'dangthuha@gmail.com',
    address: '102 Lý Thường Kiệt, Quận 11',
    area: 'Hồ Chí Minh',

    educationLevel: 'Cao đẳng',
    trainingPlace: 'CĐ FPT Polytechnic',
    major: 'Thiết kế Web',

    position: 'UI Designer',
    company: 'Công ty CreativeHub',
    source: 'Facebook',
    recruiter: 'Lê Thanh Q',
    collaborator: '',
    appliedDate: '2024-03-02',

    workplace: '',
    workStartDate: '',
    workEndDate: '',
    jobDescription: '',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 4,
    createdAt: '2024-03-02T13:40:00Z',
    updatedAt: null
  },

  {
    id: 'c-009',
    fullName: 'Trần Quốc Huy',
    gender: 'Nam',
    dateOfBirth: '1991-12-02',
    phone: '0978899001',
    email: 'tranquochuy@gmail.com',
    address: '88 Hoàng Sa, Quận 3',
    area: 'Hồ Chí Minh',

    educationLevel: 'Thạc sĩ',
    trainingPlace: 'ĐH Quốc gia TP.HCM',
    major: 'Khoa học dữ liệu',

    position: 'Data Engineer',
    company: 'Công ty AI Tech',
    source: 'Referral',
    recruiter: 'Nguyễn Thị R',
    collaborator: 'Lê Văn S',
    appliedDate: '2024-01-30',

    workplace: 'Công ty BigData',
    workStartDate: '2015-05-01',
    workEndDate: '2023-12-01',
    jobDescription: 'Xây dựng pipeline dữ liệu và ETL',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Phỏng vấn',
    numberOfUnreadEmail: 2,
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: null
  },

  {
    id: 'c-010',
    fullName: 'Phan Minh Đức',
    gender: 'Nam',
    dateOfBirth: '1996-08-17',
    phone: '0904455667',
    email: 'phanminhduc@gmail.com',
    address: '19 Phan Đình Phùng, Phú Nhuận',
    area: 'Hồ Chí Minh',

    educationLevel: 'Đại học',
    trainingPlace: 'ĐH Giao thông Vận tải',
    major: 'CNTT',

    position: 'DevOps Engineer',
    company: 'CloudNine',
    source: 'LinkedIn',
    recruiter: 'Hoàng Thị T',
    collaborator: '',
    appliedDate: '2024-02-14',

    workplace: 'Công ty CloudOps',
    workStartDate: '2019-01-01',
    workEndDate: '2024-01-01',
    jobDescription: 'CI/CD, Docker, Kubernetes',

    education: [],
    experiences: [],

    cvFile: null,
    status: 'Ứng tuyển',
    numberOfUnreadEmail: 1,
    createdAt: '2024-02-14T10:10:00Z',
    updatedAt: null
  }
];
