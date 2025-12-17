/**
 * Candidate Service
 * Business logic for candidate management
 */
import { candidateApi } from '../api/candidate-api.js';
import { createCandidate } from '../models/candidate.model.js';

export const candidateService = {
  /**
   * Initialize candidates with seed data
   * @param {Array} seedData
   */
  async init(seedData) {
    try {
      const current = await candidateApi.getAll();
      if (!current.length && seedData && seedData.length) {
        for (const data of seedData) {
          await candidateApi.create(createCandidate(data));
        }
      }
    } catch (error) {
      console.error('Error initializing candidates:', error);
    }
  },

  /**
   * Get all candidates
   * @returns {Promise<Array>}
   */
  async list() {
    try {
      return await candidateApi.getAll();
    } catch (error) {
      console.error('Error listing candidates:', error);
      return [];
    }
  },

  /**
   * Get candidate by ID
   * @param {string} id
   * @returns {Promise<Object|null>}
   */
  async getById(id) {
    try {
      return await candidateApi.getById(id);
    } catch (error) {
      console.error('Error getting candidate:', error);
      return null;
    }
  },

  /**
   * Search candidates by keyword
   * @param {string} keyword
   * @returns {Promise<Array>}
   */
  async search(keyword) {
    try {
      const data = await candidateApi.getAll();

      if (!keyword || keyword.trim() === '') {
        return data;
      }

      const normalizedKeyword = keyword.toLowerCase().trim();

      return data.filter(candidate => {
        return (
          candidate.fullName?.toLowerCase().includes(normalizedKeyword) ||
          candidate.email?.toLowerCase().includes(normalizedKeyword) ||
          candidate.phone?.includes(normalizedKeyword)
        );
      });
    } catch (error) {
      console.error('Error searching candidates:', error);
      return [];
    }
  },

  /**
   * Create new candidate
   * @param {Object} formData
   * @returns {Promise<Object>}
   */
  async create(formData) {
    try {
      const candidate = createCandidate(formData);
      return await candidateApi.create(candidate);
    } catch (error) {
      console.error('Error creating candidate:', error);
      throw error;
    }
  },

  /**
   * Update existing candidate
   * @param {string} id
   * @param {Object} formData
   * @returns {Promise<Object>}
   */
  async update(id, formData) {
    try {
      return await candidateApi.update(id, formData);
    } catch (error) {
      console.error('Error updating candidate:', error);
      throw error;
    }
  },


  /**
   * Filter candidates by multiple criteria
   * @param {Object} filters
   * @returns {Promise<Array>}
   */
  async filter(filters) {
    try {
      const data = await candidateApi.getAll();

      return data.filter(candidate => {
        let matches = true;

        if (filters.position && candidate.position !== filters.position) {
          matches = false;
        }

        if (filters.source && candidate.source !== filters.source) {
          matches = false;
        }

        if (filters.area && candidate.area !== filters.area) {
          matches = false;
        }

        if (filters.dateFrom) {
          const candidateDate = new Date(candidate.appliedDate);
          const filterDate = new Date(filters.dateFrom);
          if (candidateDate < filterDate) {
            matches = false;
          }
        }

        if (filters.dateTo) {
          const candidateDate = new Date(candidate.appliedDate);
          const filterDate = new Date(filters.dateTo);
          if (candidateDate > filterDate) {
            matches = false;
          }
        }

        return matches;
      });
    } catch (error) {
      console.error('Error filtering candidates:', error);
      return [];
    }
  }
};
