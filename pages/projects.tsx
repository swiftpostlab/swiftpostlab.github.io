
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
    addProject: (project: {name: string, token: string, id: number}) => setProjects([project, ...projects]) ,
    deleteProject: (id: number) => setProjects(projects.filter(p => p.id !== id))
  }
}


const Profile: React.FC = () => {
  const session = useContext(SessionContext)
  const projectApi = useProjects()
  const [isAddProjectDialogOpen, setIsAddProjectDialogOpen] = useState(false)
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
      >
        <Typography variant="h1" gutterBottom>Your projects</Typography>
        {
          projectApi.projects.map((project, i) => (
            <Stack key={i} alignItems="flex-start" marginBottom="2rem">
              <Typography variant="h2">{project.name}</Typography>
              <Typography variant="body1" gutterBottom>
                Token:{' '}
                <code>{project.token}</code>
              </Typography>
              <Button onClick={() => projectApi.deleteProject(project.id)}>Delete</Button>
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
      </Stack>
    </BaseLayout>
  )
}

export default Profile

