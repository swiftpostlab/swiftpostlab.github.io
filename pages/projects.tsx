
import { Button, Dialog, DialogActions, DialogTitle, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../src/auth/contexts/SessionContext'
import BaseLayout from '../src/layouts/BaseLayout'
import { Project, useProjectsApi } from '../src/projects/api/useProjectsApi'
import { pages } from '../src/routes/routes'

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const projectsApi = useProjectsApi()

  useEffect(() => {
    const _f = async () => {
      if (projectsApi.loading === false) {
        const response = await projectsApi.getAll()
        if (response.isError) {

        }
        const _projects = response.data
        setProjects(_projects || []);
      }
    }
    _f()
  }, [projectsApi.loading])

  return {
    projects,
    addProject: async (name: string) => {
      const newProject = (await projectsApi.create(name)).data
      if (newProject == null) {
        return
      }
      setProjects([newProject, ...projects])
    },
    editProject: async (id: string, editProject: {name: string}) => {
      const updatedProject = (await projectsApi.update(id, editProject)).data
      if (updatedProject == null) {
        return
      }
      setProjects(
      projects.map((proj) => (
        proj._id === id ? (
        {
          ...proj,
          ...editProject,
        }
        ) : proj
      ))
    )
  },
    deleteProject: async (id: string) => {
      const response = await projectsApi.delete(id)
      if (response.isError) {
        return
      }
      setProjects(projects.filter(p => p._id !== id))
    }
  }
}


const ProjectsPage: React.FC = () => {
  const session = useContext(SessionContext)
  const projectApi = useProjects()
  const router = useRouter()
  const [isAddProjectDialogOpen, setIsAddProjectDialogOpen] = useState(false)
  const [isEditProjectDialogOpen, setIsEditProjectDialogOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [isDeleteProjectDialogOpen, setIsDeleteProjectDialogOpen] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')

  if (session.loading || !router.isReady) {
    return null
  }

  if (!session.isActive()) {
    router.replace(pages.login)
  }

  return (
    <BaseLayout>
      <Stack 
        direction="column" 
        justifyContent="center"
        flexGrow={1}
        height="100%"
        padding="2rem"
      >
        <Typography variant="h1" gutterBottom>Your projects</Typography>
        {
          projectApi.projects.map((project, i) => (
            <Stack key={i} alignItems="flex-start" marginBottom="2rem">
              <Typography variant="h2">{project.name}</Typography>
              <Typography variant="body1" gutterBottom>
                Token:{' '}
                <code 
                  style={{ 
                    backgroundColor: 'lightgray',
                    borderRadius: '5px',
                    paddingLeft: '0.5em',
                    paddingRight: '0.5em',
                  }}
                >{
                  project.token}
                </code>
              </Typography>
              <Stack flexDirection="row" justifyContent="flex-end" width="100%">
                <Button 
                  onClick={() => {
                    setSelectedProject(project._id)
                    setIsEditProjectDialogOpen(true)
                    setNewProjectName(project.name)
                  }}
                >
                  Edit
                </Button>
                <Button 
                  onClick={() => {
                    setSelectedProject(project._id)
                    setIsDeleteProjectDialogOpen(true)
                  }}
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
          ))
        }
        <Button variant="contained" onClick={() => setIsAddProjectDialogOpen(true)}>Add new project</Button>
        
        <Dialog open={isAddProjectDialogOpen}>
          <Stack padding="2rem">
            <DialogTitle>Add project</DialogTitle>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)}/>
            <DialogActions  sx={{marginTop: '2rem'}}>
              <Button variant="contained" onClick={() => {
                  setIsAddProjectDialogOpen(false)
                }}
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={async () => {
                await projectApi.addProject(
                  newProjectName
                )
                setIsAddProjectDialogOpen(false)
              }}>
                Add
              </Button>
            </DialogActions>
          </Stack>
        </Dialog>

        <Dialog open={isEditProjectDialogOpen}>
          <Stack padding="2rem">
            <DialogTitle>Edit project</DialogTitle>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)}/>
            <DialogActions  sx={{marginTop: '2rem'}}>
            <Button variant="contained" onClick={() => {
                setIsEditProjectDialogOpen(false)
                setSelectedProject(null)
              }}>
                Cancel
              </Button>
              <Button variant="contained" onClick={() => {
                if (selectedProject != null) {
                  projectApi.editProject(
                    selectedProject,
                    {
                      name: newProjectName,
                    }
                  )
                }
                setIsEditProjectDialogOpen(false)
                setSelectedProject(null)
              }}>
                Edit
              </Button>
            </DialogActions>
          </Stack>
        </Dialog>

        <Dialog open={isDeleteProjectDialogOpen}>
          <Stack padding="2rem">
            <DialogTitle>Delete project</DialogTitle>
            <Typography>
              Warning: this will delete the project permanently and cannot be undone.
            </Typography>
            <DialogActions  sx={{marginTop: '2rem'}}>
            <Button variant="contained" onClick={() => {
                setIsDeleteProjectDialogOpen(false)
                setSelectedProject(null)
              }}>
                Cancel
              </Button>
              <Button variant="contained" onClick={() => {
                if (selectedProject != null) {
                  projectApi.deleteProject(
                    selectedProject
                  )
                }
                setIsDeleteProjectDialogOpen(false)
                setSelectedProject(null)
              }}>
                I'm sure to delete my project
              </Button>
            </DialogActions>
          </Stack>
        </Dialog>

      </Stack>
    </BaseLayout>
  )
}

export default ProjectsPage

