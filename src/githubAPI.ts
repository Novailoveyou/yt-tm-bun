import axios from 'axios'

const fetchUser = async (user: string) => {
  const res = await axios.get(`https://api.github.com/users/${user}`)

  return res.data
}

export default fetchUser
