/**
 * Base API class for CRUD operations
 * Currently using localStorage, can be easily replaced with REST API
 */
export class BaseApi {
  constructor(key) {
    this.key = key;
  }

  /**
   * Get all items
   * @returns {Promise<Array>}
   */
  async getAll() {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting all items:', error);
      return [];
    }
  }

  /**
   * Get item by ID
   * @param {string} id
   * @returns {Promise<Object|null>}
   */
  async getById(id) {
    const list = await this.getAll();
    return list.find(item => item.id === id) || null;
  }

  /**
   * Create new item
   * @param {Object} item
   * @returns {Promise<Object>}
   */
  async create(item) {
    try {
      const list = await this.getAll();
      list.unshift(item);
      localStorage.setItem(this.key, JSON.stringify(list));
      return item;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  }

  /**
   * Update existing item
   * @param {string} id
   * @param {Object} payload
   * @returns {Promise<Object>}
   */
  async update(id, payload) {
    try {
      const list = await this.getAll();
      const index = list.findIndex(item => item.id === id);
      
      if (index === -1) {
        throw new Error('Item not found');
      }

      list[index] = {
        ...list[index],
        ...payload,
        updatedAt: new Date().toISOString()
      };

      localStorage.setItem(this.key, JSON.stringify(list));
      return list[index];
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  }

  /**
   * Clear all items
   * @returns {Promise<void>}
   */
  async clear() {
    try {
      localStorage.removeItem(this.key);
    } catch (error) {
      console.error('Error clearing items:', error);
      throw error;
    }
  }
}
