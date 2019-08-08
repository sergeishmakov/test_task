import { client } from './client';

export async function getMembers(teamId) {
  const res = await client.get(`members/${teamId}`);
  return res.data;
}

export async function createUser(data) {
  await client.post(`user`, data);
}
