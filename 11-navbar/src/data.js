import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
]

export const social = [
  {
    id: 1,
    url: "https://github.com/ClaireKarsenti",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/claire-karsenti/",
    icon: <FaLinkedin />,
  },
];
