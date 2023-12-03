import axios, { AxiosResponse } from 'axios';
import { Category } from '../shared/interfaces/category.interface';

const URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories';

export const getCategories = async (): Promise<Category> => {
  try {
    const response: AxiosResponse<Category> = await axios.get(`${URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};