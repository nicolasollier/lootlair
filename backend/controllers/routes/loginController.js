const db = require('../../config/db')
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
  const { username, password } = req.body

  const action = async () => {
    const [users] = await db.pool.query(`SELECT * FROM users WHERE username = ?`, [username])

    if (users.length === 0) {
      return res.status(401).send({ message: 'Incorrect username or password' });
    }

    const user = users[0]
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).send({ message: 'Incorrect username or password' })
    }

    res.status(200).send({
      message: 'Login successfull', user: {
        id: user.id,
        username: user.username,
      }
    })
  }

  try { action() } catch (err) {
    console.error('Error :', err.message)
    res.status(500).send({ message: 'Error while loggin in' })
  }
}
