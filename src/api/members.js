import { client } from './client';

export async function getMembers(teamId) {
  const {
    data: { members }
  } = await client.get(`members/${teamId}`);
  return members;
}

export async function createUser(data) {
  await client.post(`user`, data);
}
