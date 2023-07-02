
import { Button, Dialog, DialogActions, DialogTitle, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useContext, useState } from 'react'
import { SessionContext } from '../src/auth/contexts/SessionContext'
import BaseLayout from '../src/layouts/BaseLayout'

const mocked = {
  projects: [
    {
      id: 0,
      name: "First project",
      token: 'shdfk-i3jsi-idif-fkdjo'
    },
    {
      id: 1,
      name: "My other project",
      token: 'shdfk-i3jsi-idif-fkdjo'
    }
  ]
}

const useProjects = () => {
  const [projects, setProjects] = useState(mocked.projects)

  return {
    projects,
    addProject: (project: {name: string, token: string, id: number}) => setProjects([project, ...projects]),
    editProject: (id: number, editProject: {name: string, token: string}) => setProjects(
      projects.map((proj) => (
        proj.id === id ? (
        {
          id,
          ...editProject,
        }
        ) : proj
      ))
    ),
    deleteProject: (id: number) => setProjects(projects.filter(p => p.id !== id))
  }
}


const ProjectsPage: React.FC = () => {
  const session = useContext(SessionContext)
  const projectApi = useProjects()
  const [isAddProjectDialogOpen, setIsAddProjectDialogOpen] = useState(false)
  const [isEditProjectDialogOpen, setIsEditProjectDialogOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isDeleteProjectDialogOpen, setIsDeleteProjectDialogOpen] = useState(false)
  const [newProjectName, setNewProjectName] = useState('')

  if (!session.isActive()) {
    // return null
  }

  return (
    <BaseLayout>
      <Stack 
        direction="column" 
        justifyContent="center"
        // alignItems="center"
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
                    setSelectedProject(project.id)
                    setIsEditProjectDialogOpen(true)
                    setNewProjectName(project.name)
                  }}
                >
                  Edit
                </Button>
                <Button 
                  onClick={() => {
                    setSelectedProject(project.id)
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
              <Button variant="contained" onClick={() => {
                projectApi.addProject({
                  name: newProjectName,
                  id: projectApi.projects.length + 1,
                  token: projectApi.projects[0].token
                })
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
                      token: projectApi.projects[0].token
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

