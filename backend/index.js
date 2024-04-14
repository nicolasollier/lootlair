import express from "express"
import session from 'express-session';
import { params } from "./config/sessionParams.js"
import helmet from 'helmet'
import passport from 'passport';
import router from './router/router.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(helmet())
app.use(session(params))
app.use(passport.initialize())
app.use(passport.session())

app.use("/", router)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
