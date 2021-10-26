const LinksSocialMedia = {
  github: 'NathaliaSimoes'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      //userBio.textContent = data.bio (não tenho bio no GitHub)
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImg.src = data.avatar_url
    })
}

getGitHubProfileInfos()
