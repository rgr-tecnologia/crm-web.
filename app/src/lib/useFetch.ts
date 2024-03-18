import { AccessTokenRequest, getAccessToken } from "@auth0/nextjs-auth0";
import { fetchErrorHandler } from "./errors/fetchErrorHandler";

const accessTokenConfig: AccessTokenRequest = {};

async function fetchSuccessHandler(response: Response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export async function get<T>(url: string) {
  try {
    const { accessToken } = await getAccessToken(accessTokenConfig);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    await fetchSuccessHandler(response);
    return response.json() as Promise<T>;
  } catch (error) {
    fetchErrorHandler(error);
  }
}

export async function post<T, K>(url: string, data?: T) {
  try {
    const { accessToken } = await getAccessToken(accessTokenConfig);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });
    await fetchSuccessHandler(response);
    return response.json() as Promise<K>;
  } catch (error) {
    fetchErrorHandler(error);
  }
}

export async function put<T, K>(url: string, data: T) {
  try {
    const { accessToken } = await getAccessToken(accessTokenConfig);
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });
    await fetchSuccessHandler(response);
    return response.json() as Promise<K>;
  } catch (error) {
    fetchErrorHandler(error);
  }
}

export async function remove(url: string) {
  try {
    const { accessToken } = await getAccessToken(accessTokenConfig);
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    await fetchSuccessHandler(response);
  } catch (error) {
    fetchErrorHandler(error);
  }
}
