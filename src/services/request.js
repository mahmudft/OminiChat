import {logOutScenario} from '../utils/common.js';

async function parseData(data) {
  const formData = new FormData();

  for (let [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
}
async function request(
  url,
  method = 'GET',
  data = false,
  type = 'JSON',
  convertToFormData = true,
) {
  const options = {method, headers: {}};

  if (data && method !== 'GET') {
    options.body =
      type === 'JSON'
        ? JSON.stringify(data)
        : convertToFormData
        ? await parseData(data)
        : data;

    if (type === 'JSON') options.headers['Content-Type'] = 'application/json';
  }

  // Token Authentication
  options.withCredentials = true;
  options.credentials = 'include';

  const response = await fetch('http://192.168.0.101:3000/' + url, options);

  let result = '';
  console.log(response);

  try {
    const contentType = response.headers.get('Content-Type');

    if (contentType.includes('text/plain')) {
      result = await response.text();
    } else if (contentType.includes('application/json')) {
      result = await response.json();
    } else if (contentType.includes('application/octet-stream')) {
      result = await response.blob();
    }
  } catch (e) {
    console.log(e);
  }

  if (response.ok) {
    return result;
  } else if (response.status === 401) {
    await logOutScenario();
  } else {
    throw {status: response.status, message: result};
  }
}

export const post = async (url, data, type, convertToFormData) =>
  await request(url, 'POST', data, type, convertToFormData);
export const put = async (url, data) => await request(url, 'PUT', data);
export const patch = async (url, data) => await request(url, 'PATCH', data);
export const get = async url => await request(url, 'GET');
export const remove = async url => await request(url, 'DELETE');

export const buildUrl = (url, params) => {
  let appliedParams = 0;
  let newUrl = url;

  for (const key in params) {
    const param = params[key];
    if (param && param !== '' && param !== null && param !== undefined) {
      if (appliedParams === 0) {
        newUrl += `?${key.toString()}=${param}`;
      } else {
        newUrl += `&${key.toString()}=${param}`;
      }
      appliedParams++;
    }
  }

  return newUrl;
};
