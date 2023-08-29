import { API_URL, Response } from "../../api/api/api";
import { useApi } from "../../api/api/useApi";

export interface Project {
  "token": string,
  "expirationDate": string,
  "name": string,
  "data": string,
  "created": string,
  "updated": string,
  "_id": string,
}

export const useProjectsApi = () => {
  const {post, get, loading} = useApi();

  interface ProjectCreateRequest {
    name: string
  }
  
  type ProjectCreateResponse = Project;

  const create = async (name: string): Promise<Response<ProjectCreateResponse>> => {
    return await post<ProjectCreateRequest, ProjectCreateResponse>(
      `${API_URL}/projects`,
      {
        name
      }
    )
  }

  type ProjectGetAllResponse = Project[];

  const getAll = async (): Promise<Response<ProjectGetAllResponse>> => {
    return await get<ProjectGetAllResponse>(
      `${API_URL}/projects`,
    )
  }

  return {
    loading,
    create,
    getAll
  }
}
