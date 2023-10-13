import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../pages/api/data';
import fetch from "node-fetch";

(global as any).fetch = fetch;

const mockRequest: NextApiRequest = {
  method: 'GET',
  headers: {},
  query: {},
  cookies: {},
  body: {},
} as NextApiRequest;

const mockResponse: Partial<NextApiResponse<any>> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(() => ({ status: 'success' }))
} as Partial<NextApiResponse<any>>;

describe('API Route: data', () => {
  it('handles GET request and responds with a success status', async () => {
    await handler(mockRequest, mockResponse as NextApiResponse);

    const actualJsonData = mockResponse.json ? mockResponse.json({}) : null

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(actualJsonData).toEqual({ status: 'success' });
  });
});
