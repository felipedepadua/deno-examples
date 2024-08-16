// From: https://supabase.com/docs/guides/functions/routing?queryGroups=framework&framework=expressjs

import express from 'npm:express@4.18.2'

const app = express()
app.use(express.json())
const port = 3000

app.get('/tasks', async (req, res) => {
// return all tasks
});

app.post('/tasks', async (req, res) => {
// create a task
});

app.get('/tasks/:id', async (req, res) => {
const id = req.params.id
const task = {} // get task

res.json(task)
});

app.patch('/tasks/:id', async (req, res) => {
const id = req.params.id
// modify task
});

app.delete('/tasks/:id', async (req, res) => {
const id = req.params.id
// delete task
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
