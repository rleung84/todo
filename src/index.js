import './style.css';

const content = document.getElementById('content');
const header = document.createElement('div')
header.classList.add('header')
const title = document.createElement('div')
title.innerText = 'todo';
title.classList.add('title')
header.appendChild(title)


const sidebar = document.createElement('div')
sidebar.classList.add('sidebar')
const main = document.createElement('div')
main.classList.add('main')


content.appendChild(header)
content.appendChild(sidebar)
content.appendChild(main)