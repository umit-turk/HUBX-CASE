import axios, { AxiosResponse } from 'axios';
import { Question } from '../shared/interfaces/question.interface';

const URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions';

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response:AxiosResponse<Question[]> = await axios.get(`${URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};