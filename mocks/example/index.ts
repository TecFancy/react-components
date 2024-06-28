import { get } from '../msw';
import api from '../api';

const exampleHandlers = [
  get(api.example.login, {
    id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    firstName: 'John',
    lastName: 'Maverick',
  }),
];

export default exampleHandlers;
