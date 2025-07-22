// utils/api.ts
import { User } from '../types/models';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(USERS_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch users`);
  }
  return res.json();
}
