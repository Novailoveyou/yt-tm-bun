import fetchUser from './githubAPI'
;(async () => {
  const userData = await fetchUser('novailoveyou')
  document.querySelector('h1').innerHTML = JSON.stringify(userData)
})()
