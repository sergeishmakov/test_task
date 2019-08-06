import { client } from './client';

export async function createMember(values) {
  const res = await client.post('members', values);
  return res;
}
export function getMembers(teamId) {
  // const res = client.get(`members/$teamId`);
  if (teamId === 1) {
    return [
      { id: 1, name: 'Name 1', nickname: 'Nickname 1', description: 'Description 1', teamId: 1 },
      { id: 2, name: 'Name 2', nickname: 'Nickname 2', description: 'Description 2', teamId: 1 }
    ];
  }
  if (teamId === 2) {
    return [{ id: 3, name: 'Name 3', nickname: 'Nickname 3', description: 'Description 3', teamId: 2 }];
  }
}
export function updateMember(values, id) {
  const res = client.put(`members/${id}`, values);
  return res;
}
export function deleteMember(id) {
  const res = client.delete(`members/${id}`);
  return res;
}
