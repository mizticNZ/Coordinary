import request from 'superagent'
import { Charity, CharityData } from '../../models/charity'

const rootURL = new URL(`/api/v1`, document.baseURI).toString()

export async function getCharitiesByDonorFollowing(token: string, id: number) {
  const res = await request
    .get(`${rootURL}/charities/donor/${id}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body as Charity[]
}

export async function donorUnfollowCharity({
  token,
  charityId,
  donorId,
}: {
  token: string
  charityId: number
  donorId: number
}) {
  return await request
    .delete(`${rootURL}/charities/donor/${donorId}/${charityId}/`)
    .set('Authorization', `Bearer ${token}`)
}

export async function addCharity(
  token: string,
  newCharity: CharityData,
): Promise<Charity> {
  const res = await request
    .post(`${rootURL}/charities`)
    .set('Authorization', `Bearer ${token}`)
    .send(newCharity)
  return res.body
}

export async function donorFollowCharity({
  token,
  charityId,
  donorId,
}: {
  token: string
  charityId: number
  donorId: number
}) {
  const res = await request
    .post(`${rootURL}/charities/donor/${donorId}/follow`)
    .set('Authorization', `Bearer ${token}`)
    .send({ charityId })
  return res.body
}

export async function editCharity({
  token,
  data,
  id,
}: {
  token: string
  data: CharityData
  id: number
}) {
  return await request
    .patch(`${rootURL}/charities/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(data)
}
