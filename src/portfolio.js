const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hrand1005.github.io',
  title: 'HR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Herbie Rand',
  role: 'Software Engineer, Violinist, Weightlifter',
  description: 'Currently pursuing a Master\'s Degree in Software Engineering',
    // 'Currently pursuing a Masters Degree in Software Engineering',
  resume: 'https://github.com/hrand1005/blob/dev/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/herbie-rand-a863851a0/',
    github: 'https://github.com/hrand1005',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'mcsweeney',
    description:
      'Automatic youtube content generator',
    stack: ['Go', 'Bash' ],
    sourceCode: 'https://github.com/hrand1005/mcsweeney',
    // livePreview: 'https://github.com/',
  },
  {
    name: 'Training Notebook',
    description:
      'API for a training (weightlifting) notebook written in Go',
    stack: ['Gin', 'Go', 'Bash'],
    sourceCode: 'https://github.com/hrand1005/training-notebook',
    // livePreview: 'https://github.com',
  },
  {
    name: 'grafapyAPI',
    description:
      'Python Library for creating Grafana Dashboards',
    stack: ['Python'],
    sourceCode: 'https://github.com/hrand1005/grafapyAPI',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Go',
  'Gin',
  'Gorilla/Mux',
  'Python',
  'Flask',
  'Behave',
  'Bash',
  'Jenkins',
  'Groovy',
  'Docker'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hjrand1005@gmail.com',
}

export { header, about, projects, skills, contact }
