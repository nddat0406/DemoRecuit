/**
 * Candidate Model
 * Defines the structure of a candidate object
 */
export function createCandidate(data = {}) {
  return {
    id: data.id || crypto.randomUUID(),

    // Personal Information
    fullName: data.fullName || '',
    gender: data.gender || '',
    dateOfBirth: data.dateOfBirth || '',
    phone: data.phone || '',
    email: data.email || '',
    address: data.address || '',
    area: data.area || '',
    avatar: data.avatar || null,

    // Education Information
    educationLevel: data.educationLevel || '',
    trainingPlace: data.trainingPlace || '',
    major: data.major || '',

    // Application Information
    position: data.position || '',
    company: data.company || '',
    source: data.source || '',
    recruiter: data.recruiter || '',
    collaborator: data.collaborator || '',
    appliedDate: data.appliedDate || new Date().toISOString().split('T')[0],

    // Work Experience
    workplace: data.workplace || '',
    workStartDate: data.workStartDate || '',
    workEndDate: data.workEndDate || '',
    jobDescription: data.jobDescription || '',

    // Additional Information
    education: data.education || [],
    experiences: data.experiences || [],

    cvFile: data.cvFile || null,
    status: data.status || 'Ứng tuyển',
    numberOfUnreadEmail: data.numberOfUnreadEmail || 0,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || null
  };
}
