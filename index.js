const faker = require("faker");
const shuffle = require("shuffle-array");
const { sample } = require("lodash");

const techList = [
  "JavaScript",
  "Python",
  "Ruby",
  "React",
  "Java",
  "TypeScript",
  "Django",
  "C++",
  "C",
  "C#.net",
  "Redux",
  "Vue.js",
  "Express",
  "Jest",
  "SQL",
];

const generateTechData = (techList) => {
  return techList.map((pieceOfTech) => {
    return { slug: pieceOfTech };
  });
};

const generateUserData = (n) => {
  const users = [];
  const roleRef = { 0: "user", 1: "mentor" };

  for (let i = 0; i < n; i++) {
    const shuffledSkills = shuffle(skills, { copy: true });
    const role = roleRef[Math.round(Math.random())];

    const users = {
      name: faker.name.findName(),
      username: faker.internet.userName(),
      avatarUrl: faker.image.avatar(),
      onlineStatus: false,
      role: role,
      bugPoints: Math.round(Math.random() * 100),
      bugPointsPrevMonth: Math.round(Math.random() * 10),
      githubUrl:
        role === "mentor" ? `https://github.com/${faker.random.word()}` : null,
      description: role === "mentor" ? faker.lorem.paragraph() : null,
      skill1: role === "mentor" ? shuffledSkills[0] : null,
      skill2: role === "mentor" ? shuffledSkills[1] : null,
      skill3: role === "mentor" ? shuffledSkills[2] : null,
      skill4: role === "mentor" ? shuffledSkills[3] : null,
    };
    users.push(userData);
  }

  return users;
};

const generateProblemData = (n, userdata) => {};

const tech = generateTechData(techList);
// const users = generateUserData(10);
// const problems = generateProblemData(10, users)

console.log(tech);

// Users, problems, suggestions, tech