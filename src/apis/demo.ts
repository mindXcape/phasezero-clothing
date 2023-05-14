import axios, { AxiosResponse } from 'axios';
import baseUrl from './baseUrl';

interface Size {
  name: string;
  description: string;
}

interface SizeAPIResponse extends AxiosResponse {
  data: {
    sizes: Size[];
  };
}

interface SingleSizeAPIResponse extends AxiosResponse {
  data: {
    size: Size;
  };
}

interface CreateSizeParams {
  size: Size;
  token: string;
}

interface SearchSizeParams {
  searchValue: string;
  token: string;
}

interface GetSingleSizeParams {
  slug: string;
  token: string;
}

interface UpdateSizeParams {
  size: Size;
  slug: string;
  token: string;
}

interface DeleteSizeParams {
  slug: string;
  token: string;
}

const SizeAPI = {
  createSize: ({ size, token }: CreateSizeParams): Promise<SizeAPIResponse> => {
    return axios({
      method: 'POST',
      url: `${baseUrl}/admin/size/store`,
      data: {
        size,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  searchSize: ({
    searchValue,
    token,
  }: SearchSizeParams): Promise<SizeAPIResponse> => {
    return axios({
      method: 'GET',
      url: `${baseUrl}/admin/size/index?search=${searchValue}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getSingleSize: ({
    slug,
    token,
  }: GetSingleSizeParams): Promise<SingleSizeAPIResponse> => {
    return axios({
      method: 'GET',
      url: `${baseUrl}/admin/size/show/${slug}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getAllSize: ({ token }: { token: string }): Promise<SizeAPIResponse> => {
    return axios({
      method: 'GET',
      url: `${baseUrl}/admin/size/index`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  updateSize: ({
    size,
    slug,
    token,
  }: UpdateSizeParams): Promise<SingleSizeAPIResponse> => {
    return axios({
      method: 'POST',
      url: `${baseUrl}/admin/size/update/${slug}`,
      data: {
        size,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  deleteSize: ({ slug, token }: DeleteSizeParams): Promise<AxiosResponse> => {
    return axios({
      method: 'DELETE',
      url: `${baseUrl}/admin/size/delete/${slug}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default SizeAPI;
