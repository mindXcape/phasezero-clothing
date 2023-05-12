import axios, { AxiosResponse } from 'axios';

export default axios.create({
  baseURL: 'https://api.myjson.com',
});

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

export const SizeAPI = {
  createSize: ({ size, token }: CreateSizeParams): Promise<SizeAPIResponse> => {
    return axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASEURL}/admin/size/store`,
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
      url: `${process.env.REACT_APP_BASEURL}/admin/size/index?search=${searchValue}`,
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
      url: `${process.env.REACT_APP_BASEURL}/admin/size/show/${slug}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getAllSize: ({ token }: { token: string }): Promise<SizeAPIResponse> => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BASEURL}/admin/size/index`,
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
      url: `${process.env.REACT_APP_BASEURL}/admin/size/update/${slug}`,
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
      url: `${process.env.REACT_APP_BASEURL}/admin/size/delete/${slug}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
