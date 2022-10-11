const COMMANDS = {
  help: [
    "<br>",
    '<span class="name">whois</span>                         Learn more about me',
    '<span class="name">gui</span>                           Gabriel User Interface - open the desktop to edit my files',
    '<span class="name">projects</span>                      Learn about my previous projects',
    '<span class="name">work</span>                          View my past work experiences',
    '<span class="name">service</span>                       View a community project of mine',
    '<span class="name">quals</span>                         Learn more about my qualifications',
    '<span class="name">email</span>                         Get in contact with me',
    '<span class="name">clear</span>                         Clear terminal',
    '<span class="name">neogabe</span>                       Checkout my banner',
    `<br>`,
    'Make <span class="name">SURE</span> to check out command <span class="name">gui</span>',

    "<br>",
  ],

  neogabe: [
    "<br>",
    '<span class="name">_____/\\\\\\\\\\\\\\\\\\\\\\\\_____/\\\\\\\\\\\\\\\\\\_____/\\\\\\\\\\\\\\\\\\\\\\\\\\____/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_        </span>        <span class="name">gabrieldiaziv</span>',
    '<span class="name"> ___/\\\\\\//////////____/\\\\\\\\\\\\\\\\\\\\\\\\\\__\\/\\\\\\/////////\\\\\\_\\/\\\\\\///////////__       </span>        ----------------',
    '<span class="name">  __/\\\\\\______________/\\\\\\/////////\\\\\\_\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_____________      </span>        <span class="name">school</span>: tamu \'24',
    '<span class="name">   _\\/\\\\\\____/\\\\\\\\\\\\\\_\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\__\\/\\\\\\\\\\\\\\\\\\\\\\_____     </span>        <span class="name">gpa</span>: 3.92',
    '<span class="name">    _\\/\\\\\\___\\/////\\\\\\_\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_\\/\\\\\\/////////\\\\\\_\\/\\\\\\///////______    </span>        <span class="name">major</span>: CS',
    '<span class="name">     _\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\/////////\\\\\\_\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_____________   </span>',
    '<span class="name">      _\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\_____________  </span>        <span class="name">email</span>: <a href="mailto:gabrieldiaziv@tamu.edu">gabrieldiaziv@tamu.edu</a>',
    '<span class="name">       _\\//\\\\\\\\\\\\\\\\\\\\\\\\/__\\/\\\\\\_______\\/\\\\\\_\\/\\\\\\\\\\\\\\\\\\\\\\\\\\/__\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_ </span>        <span class="name">linkedin</span>: <a href="https://linkedin.com/in/gabrieldiaziv/">in/gabrieldiaiv</a>',
    '<span class="name">        __\\////////////____\\///________\\///__\\/////////////____\\///////////////__</span>        <span class="name">github</span>: <a href="https://github.com/gabrieldiaziv">github.com/gabrieldiaziv</a>',

    'Press <span class="name">F11</span> for best experience',
    'Enter <span class="name">help</span> to get started',
    "Use arrow keys ↑ and ↓ to navigate past commands",
    "<br>",
    'Make <span class="name">SURE</span> to check out command <span class="name">gui</span>',
    "<br>",
  ],

  whois: [
    "<br>",
    '<span class="name">Howdy I\'m Gabriel Diaz</span>',
    "I'm an aspiring backed developer who is constantly looking for new challenges and opportunites to learn.",
    "<br>",
    "I'm a junior at Texas A&M studying computer science with a minor in mathematics. My current GPA is 3.9 and some",
    "relavant courses that I have taken are: Algorithm Analysis, Computer Organization, Programming Languages, Data ",
    "Structures and Algorithms, Discrete Math, Statistics, and Linear Algebra.",
    "<br>",
    "My career started in 2020 working on mobile development for ERP software on android and IOS. My responsibilities slowly",
    "began to grow and eventually I became a full-stack developer. I began to work on database management and deploying ",
    "infrastructure, but more importantly I started managing relations with clients and became the sole point of contact for 2",
    "Summer 2021, I began to work as a manufacturing engineer intern. Working with technicians, I discovered that there were",
    "many issues with the scheduling software losing the company $40,000 annually on lost production time and material ",
    "waste. My application corrected errors in the previous software and reduced the compute time by 10x. Last summer I ",
    "interned at Amazon, I created backend infrastructure for future applications for FireTV. My project was completely unique",
    "to any project that my team has worked on backend development, so I was tasked with researching and determining the ",
    "right tools for these types of applications. I created an application to recommend new content to users.",
    "<br>",
    "I try to find new projects to strengthen my backend engineering skills. For TAMU Hack 2021 my project POLX won,",
    "a web application that tracked trades made by different politicians that simulates how retail investors would ",
    "perform if they followed the politicians' trades. My last project was creating a dataset mapping all of the youtube",
    "channels a company sponsors. I used the youtube API to perform a BFS search to gather related youtube channels, and ",
    "using RabbitMQ pushed all of the channels into queues. Each consumer would scrape through the channel’s latest videos",
    "and check descriptions to find any links and determine the content creators companies were sponsoring. ",
    "The project ended up tracking 500000+ channels.",
    "<br>",
    "Some of my current hobbies include: F1 (huge max fan), brewing coffee (lmk if you have any good beans), ",
    "fermenting my kombucha, and cooking!",
    "<br>",
  ],

  projects: [
    "<br>",
    '<span class=name><a href="https://github.com/dkasabovn/polx">POLX</a> | Jan 2022</span>',
    "+ TAMU Hack 2022 Winner",
    "+ Create web-application so that users could track trades politicians are making and how the user",
    "         would perform if they made the same trades according to when politicians published their trade.",
    "+ Technologies Used: Go, PostgreSQL, React",
    '<span class="name">-----------</span>',
    '<span class=name><a href="https://github.com/GabrielDiazIV/wordbot">WordleBot</a> | Oct 2021</span>',
    "+ After wordle became an international appeal, I was curious and wanted to put my datastructures and algorithms ",
    "          knowledge to the test and see how well I would fair.",
    "+ Project used trie datastructure and depth first searches to find possible word choices. Then I invistaged ",
    "         different strategies to select guesses and ended up creating a bot that guesses the word in 3.4 guesses.",
    "+ Technologies Used: C++",
    '<span class="name"><a href="https://github.com/dkasabovn/HackDFWTyrnyr">Tyrnyr</a> | Oct 2021 </span>',
    "+ Created web application that is meant to emulate the competitive environment of websites like hacker-rank but do the same with competitive math.",
    "+ Web application used websocket protocol to create a live connection to server, where players could join in party and compete against each other",
    "+ Technologies Used: Go, PostgreSQL, React, Websockets",
    "<br>",
  ],

  work: [
    "<br>",
    '<span class=name><a href="https://www.aboutamazon.com/">Amazon</a> | Propel Intern | May - Aug 2022</span>',
    "+ Creating highly flexible and scalable cloud-based widgets to be able to handle voice and physical interactions",
    "+ Utilizing Alexa interaction model to handle users’ requests and render widgets on multi-modal devices",
    "+ Technologies Used: Go, JavaScript, AWS Lambda, AWS S3, AWS CDK",

    '<span class="name">-----------</span>',
    '<span class=name><a href="https://www.antler.co/austin">Antler</a> | SDE Contractor | March 2022 - July 2022</span>',
    "+ Wrote highly scaled software to track analytics on YouTube to track 40,00+ companies and what content creators they are sponsoring.",
    "+ Deployed a distributor-worker model using RabbitMQ to create high scalability",
    "+ Technologies Used: Go, C++, RabbitMQ, Firestore",

    '<span class="name">-----------</span>',
    '<span class=name><a href="https://www.linkedin.com/company/sapi/">SAPI Technologies</a> | Full Stack | July 2020 - March 2022</span>',
    "+ Responsible for creating front and backend ERP applications to clients.",
    "+ Deployed a distributor-worker model using RabbitMQ to create high scalability",
    "+ Technologies Used: MSSQL, PostgreSQL, MongoDB, Go, Java, Objective C, XML, Adobe XD",

    '<span class="name">-----------</span>',
    '<span class=name><a href="https://www.ga-asi.com/">General Atomics</a> | Manufacturing Engineer Intern | June 2021- Aug 2021</span>',
    "+ Designed and 3D printing 15+ tools using PTC CREO that were implemented into production to reduce the number of errors in parts saving the company $80,000 yearly",
    "+ Designed a Django web application to set pace of production for the entire company by scheduling and automating production for 10,000+ parts ",
    "        for 5 different aircrafts. Collaborated with a team of industrial engineers to create a lean manufacturing process. Projected to save $40,000 annually",
    "+ Technologies Used: Django, Python, MSSQL, CSS, HTML, PTC Creo",
    "<br>",
  ],

  service: [
    "<br>",
    '<span class=name><a href="https://covidrangers.com/">COVID Rangers</a> | July 2020</span>',
    "+ Collaborated with doctors and a PhD researcher to design foldable masks in Fusion360 that could be 3D printed within 15 minutes used for first responders at the beginning of pandemic",
    "+ Coordinated network of robotics teams, maker spaces, and people to have ~10k masks printed within 2 months        ",
    "<br>",
  ],

  quals: [
    "<br>",
    '<span class="name"><a href="https://www.linkedin.com/in/gabrieldiaziv/overlay/1635468113958/single-media-viewer?type=DOCUMENT&profileId=ACoAACwRdlIBs3UCsCjTdb1YsX19XTyiAKCAsHU&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9%2FoPzDdxTaeuU8%2FbHobTpw%3D%3D">resume</a></span>',
    '<span class="name"><a href="https://www.linkedin.com/in/gabrieldiaziv">linkedin</a></span>',
    '<span class="name">skills</span>',
    "      + Programming:  Golang, C++, Python, Django, JavaScript, SQL, Flutter, HTML/CSS/ XML, Adobe XD",
    "      + Hardware: OnShape, PTC Creo, Solidworks, Autodesk Inventor, HSM Works, GrabCAD, WindChill",
    "<br>",
  ],

  fail: [
    'command not found: enter <span class="name">help</span> to lean how to interact',
  ],
};

const SPEECH = [
  "hi welcome to gabe's dev environment. This is where he works on his terminal website... (click)",
  "each html file refers to one of the commands you can use on the terminal website... (click again)",
  "feel free to move files on the desktop, open html files double click), and edit them... (dont stop)",
  "once done, use the 'gsh' application on the bottom left to go back to the terminal... (almost there)",
  "run the command and see your changes reflected... (one more)",
  "Now get to work!",
];
