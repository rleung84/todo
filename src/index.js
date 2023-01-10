import './style.css';

const body = document.querySelector('body');
const header = document.createElement('div')
header.classList.add('header')
const title = document.createElement('div')
title.classList.add('title')
header.appendChild(title)
const sidebar = document.createElement('div')
sidebar.classList.add('sidebar')
const content = document.createElement('div')
content.classList.add('content')


body.appendChild(header)
body.appendChild(sidebar)
body.appendChild(content)