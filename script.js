// DOM Selectors
const btn = document.querySelector('#btn')
const inputBox = document.querySelector('#input-box')
const infoBox = document.querySelector('#info-box')

const profilePic = document.querySelector('#profilePic')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const repository = document.querySelector('#repository')
const profileName = document.querySelector('#profileName')
const profileUsername = document.querySelector('#profileUsername')
const profileBio = document.querySelector('#profileBio')
const profileLocation = document.querySelector('#profileLocation')
const profileWorkplace = document.querySelector('#profileWorkplace')
const websiteLink = document.querySelector('#websiteLink')
const profileLink = document.querySelector('#profileLink')

let username

btn.addEventListener('click', function () {
    username = document.getElementById('username').value

    const requestUrl = `https://api.github.com/users/${username}`

    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.response);

        } 
    }
    xhr.send()
})