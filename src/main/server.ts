import app from './config/app'

app.listen(process.env.PORT, () => {
  console.log('server running at port:', process.env.PORT)
})
