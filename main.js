const linksSocialMedia = {
  github: 'lucasllimati',
  youtube: 'channel/UC8LiqTKCkvN23yQ_guBIA4Q',
  facebook: 'olukaslima',
  instagram: 'olukaslima_',
  twitter: 'olukaslima_'
}

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = "Olivia"
  // userName.textContent = "Marcelo"

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()

// FUNCTION NORMAL
// function nomedafuncao(argumentos) {
//   code
// }

// ARROW FUNCTIONS
// argumento => {
//   code
// }
