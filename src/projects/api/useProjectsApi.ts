import { API_URL, Response } from '../../api/api/api'
import { useApi } from '../../api/api/useApi'

export interface Project {
  'token': string,
  'expirationDate': string,
  'name': string,
  'data': string,
  'created': string,
  'updated': string,
  '_id': string,
}

export const useProjectsApi = () => {
  const { post, get, loading } = useApi()

  type ProjectGetAllResponse = Project[];

  const getAll = async (): Promise<Response<ProjectGetAllResponse>> => {
    return get<ProjectGetAllResponse>(
      `${API_URL}/projects`,
    )
  }

  interface ProjectCreateRequest {
    name: string
  }
  
  type ProjectCreateResponse = Project;

  const create = async (name: string): Promise<Response<ProjectCreateResponse>> => {
    return post<ProjectCreateRequest, ProjectCreateResponse>(
      `${API_URL}/projects`,
      {
        name,
      },
    )
  }

  interface ProjectUpdateRequest {
    name?: string;
    data?: string;
  }
  
  type ProjectUpdateResponse = Project;

  const update = async (projectId: string, data: ProjectUpdateRequest): Promise<Response<ProjectUpdateResponse>> => {
    return post<ProjectUpdateRequest, ProjectUpdateResponse>(
      `${API_URL}/projects/${projectId}`,
      {
        ...data,
      },
    )
  }
  
  type ProjectDeleteResponse = null;

  const _delete = async (projectId: string): Promise<Response<ProjectDeleteResponse>> => {
    return get<ProjectDeleteResponse>(
      `${API_URL}/projects/${projectId}`,
    )
  }


  return {
    loading,
    getAll,
    create,
    update,
    delete: _delete,
  }
}
