const expertise = [
    {
        id: 0,
        title: 'Full-Stack Development',
        desc: `I am a Full-Stack Developer with experience in designing and developing scalable web applications. 
        My work involves creating efficient server-side architectures, developing interactive user interfaces, and ensuring 
        seamless integration between frontend and backend components. I focus on delivering solutions that are reliable, 
        maintainable, and tailored to meet diverse business needs.`,
    },
    {
        id: 1,
        title: 'UI/UX Design',
        desc: `I am proficient in using design software such as Adobe XD, and Adobe Illustrator. 
        Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and Graphic 
        Design and Illustrations.`,
    },
    {
        id: 2,
        title: 'GitHub',
        desc: `GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests 
        and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.`,
    },
    {
        id: 3,
        title: 'Open Source Contribution',
        desc: `Open Source is the future. I usually take some time on weekends to contribute to open-source projects. 
        It gives me the opportunity to learn from the best developer practices and also allows me to help others and contribute 
        to the community for the greater good.`,
    },
    {
        id: 4,
        title: 'Next.js',
        desc: `I am experienced in using Next.js to develop optimized, server-rendered web applications. 
        The framework's capabilities help me build fast, scalable, and user-friendly solutions tailored to meet modern web development needs.`,
    },
];

export default function handler(req, res) {
    res.status(200).json(expertise);
}
