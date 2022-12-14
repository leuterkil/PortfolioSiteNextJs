const userData = {
    UI:{
        typewriterWords:['Developer','Web Designer','JAM Stack Enthusiast','Amateur Musician']
    },
    summary:`<p>My name is Lefteris Charissopoulos, I am from Kilkis, Greece and my job is Web Developer. My goal is to learn the
    fundamentals as well as mastering the web development and of course make applications that contribute to the
    better quality of life.</p>
    <p>Another technology that Iām studying to is Game Development at Unreal Engines Blueprints. As lover of video games
    my dream is to develop my own game for amusing other people playing it.</p>
    <p>One thing that characterizes me is my team spirit as I love working in cooperation with other developers so that I
    can create better programs and learn more technologies in the field of information technology.</p>
    <p>Iām currently studying the JAMStack Development which uses modern technologies for making web apps. More
    specifically I study Strapi CMS, Graph QL and Gatsby.js.</p>`,
    personalInfo:{
        location:{
            postCode:'61100',
            city:'Thessaloniki',
            country:'Greece'
        },
        education:[
            {
                school:'2nd Technical High School of Kilkis',
                title:'High School Degree at Computer Systems Networking and Telecommunications',
                location : 'Kilkis,Greece',
                from:'20120911',
                to:'20150611',
                GPA:'18.3/20'
            },
            {
                school:'International Hellenic University Department of Informatics Engineering',
                title:'Bachelor Degree at Informatics and Telecommunications with speciality in Software Engineering',
                location : 'Serres,Greece',
                from:'20151001',
                to:'20220511',
                GPA:'7/10'
            },
        ],
        capabilities:[
            {
                title:"Development š©š»āš»",
                description:`I develop web apps all the time cause programming is my passion. 
                My first goal is to make an app that makes the averages person life easier and more smart.`
            },
            {
                title:"Design šØ",
                description:"I love web design so much as programming. I currently studing more efficient design libraries such as gsap and aos to make more jaw dropping websites and more beautiful to your eyes."
            },
            {
                title:"Game Development š®",
                description:"Video games are my life ! I play since 2004 until now and I will play games for the rest of my life. Because of that I like to make my own games on Unreal Engine and imagine my world through some graphics"
            },
            {
                title:"Learn New Things š",
                description:"I like to discover the whole world but in my free time I love to study new technologies and programming languages that can make me a better programmer than I am"
            },
        ],
        skills:{
            soft:[
                'Teamwork','Responsibility','Communication','Problem - Solving','Work Ethic'
            ],
            hard:[
                {
                    section:'Desktop Programming Languages',
                    skills:['Java', 'Unreal Engine Blueprints','Python','Electron JS']
                },
                {
                    section:'Front-End Technologies',
                    skills:['React JS','SCSS','Next.js', 'Gatsby.js', 'GraphQL', 'Angular','Angular Universal','EJS','vanilla JS','GSAP','Material UI']
                },
                {
                    section:'Back-End Technologies',
                    skills:['Express js','Node js','python flask','nest.js','PHP (Wordpress, Magento 2)']
                },
                {
                    section:'Mobile Development Technologies',
                    skills:['EXPO (React Native)','Android Studio']
                },
                {
                    section:'Databases',
                    skills:['MySQL','MongoDB']
                },
                {
                    section:'VCS',
                    skills:['Git','Github']
                },
                {
                    section:'CMS',
                    skills:['Wordpress (Traditional and Headless)','Strapi', 'Magento 2 (Headless)', 'Prestashop (Traditional)']
                },
                {
                    section:'Development Stacks',
                    skills:['MERN' , 'MEAN' , 'JAMStack']
                }
            ]
        },
        participations:[
            {
                title:'4th Hackathon T.E.I of Serres',
                description:'Participation at Hackthon by T.E.I of Serres on subject of web attack mining. The purpose of the Hackathon was to analize a servers web attacks dataset, as well as to recognize the type.For the development of the project python programming language was used'
            }
        ]
    },

    workExperience:[
        {
            jobRole:'Development and Design',
            company:'Psaltou.com',
            from :'20200707',
            to:'',
            location:'Kilkis,Greece',
            jobDescription:`
            I was responsible for the development of e-commerce site psaltou.com which made on Prestashop CMS.
            The main tasks of this project were to write php code on themes and modules, insert new products as well as categories and optimize the website's SEO. I also designed the whole achitecture of the website using a page builder module.  
            `,
            logo:'/img/psaltLogo.jpg',
            site:'https://psaltou.com'
        },
        {
            jobRole:'Front-end Developer',
            company:'Volte-tel Communications',
            from :'20211101',
            to:'20220510',
            location:'Thessaloniki,Greece',
            jobDescription:`
            I optimized and solved bugs in the company's websites such as matshop.gr, idol1991.com, limesuccessories.com nextsphone.com, and voltetel.gr. All of these sites were made on WordPress cms and their products were hosted on softone ERP.
            My main task was to solve bug in php snippets and also develop new snippets,plugins and features.
            I  wrote python scripts for mass insertion of products through Softones and Woocommerce APIs.
            I also made a custom button in Woocommerce orders panel which was placing the order in the ERP System on Demand.
            I developed a custom plugin to count the total number of in-stock products. 
            `,
            logo:'/img/volteLogo.jpg',
            site:'https://volte-tel.gr'
        },
        {
            jobRole:'Lead Developer (Volunteer)',
            company:'E-band.gr',
            from :'20211201',
            to:'20220510',
            location:'Athens,Greece (Remote)',
            jobDescription:`
            I Upgraded the e-bands website from buddypress to buddyboss inside Wordpress CMS.
            Development of code snippets (PHP & Client Side JavaScript) for making website functionalities (Advanced Registration Form,
            Custom Profile Tabs, Custom Members Directory Tabs, etc).
            `,
            logo:'/img/e-band_logo.jpg',
            site:'https://e-band.gr'
        },
        {
            jobRole:'Front-end Developer',
            company:'Keyvoto.com',
            from:'20220511',
            to : 'Present',
            location:'Athens,Greece (Remote)',
            jobDescription:`
            Develop keyvoto.com web app and frontpage with a team of many skilled developers. The program written in angular js and angular material for styling. Also wrote some scripts in nest.js for communicate between back(C#) and  front end(Angular 2).
            Furthermore I was responsible for the development of the greek super market's e-commerce site "Galaxias" made in Angular Universal (For SSR) for front-end and Magento CMS for Content Magement (headless). In addition I made a bundle of magento modules for the communication between company's website "keyvoto.com" to auto import products and categories in the CMS.
            `,
            logo:'/img/keyvotoLogo_alt.jpg',
            logoKeyvoto:'/img/keyvotoLogo.jpg',
            site:'https://keyvoto.com'
        }
    ],
    projects:[
        {
            title:'Apolelemetro Opliti',
            description:'Mobile Application of day counting for a dismissed soldier of Greek Army. The app was developed in android studio IDE and Java programming language',
            img:'/img/apolelemetro.png',
            link:'https://play.google.com/store/apps/details?id=com.left4dev.leledometrostratou'
        },
        {
            title:'Aplical LTD content management Website',
            description:'A website made for aplical LTDs needs to manage their customers, frames and orders',
            img:'/img/aplicalLogo.jpg',
            link:'https://github.com/leuterkil/applicalLTD'
        },
        {
            title:'Buddy Boss Custom Profile Tabs',
            description:'A wordpress plugin for inserting custom profile tabs for buddyboss platform',
            img:'/img/BB.png',
            link:'https://github.com/leuterkil/Buddyboss-custom-tabs'
        },
        {
            title:'Youtube 2 Mp3 Downloader',
            description:'A youtube to mp3 site made with react js and material UI',
            img:'/img/YTDown.jpg',
            link:'https://github.com/leuterkil/youtube-downloader-js'
        },
        {
            title:'Runtime Blog',
            description:'A Blog about programming and tech build in next js and headless Wordpress',
            img:'/img/runtimeLogo.jpg',
            link:'https://runtime-blog.tk'
        },
    ],
    courses:[
        {
            title:'The Web Developer Bootcamp',
            description:'The aim of this course was to learn the fundamentals of web development. The programming languages learned were HTML, CSS, JS, NodeJS, MongoDB and technologies such as Bootstrap, express js and Rest API',
            provider:'Udemy'
        },
        {
            title:'Become a MERN Stack Javascript Developer',
            description:'The learning path from Linkedin Learning taught me how to use the javascript library React.js for the MERN Stack (Mongo,Express,React,Node). I also learned about unit testing (jest), web security and react hooks.',
            provider:'Linkedin Learning'
        },
        {
            title:'Scrum: The Basics',
            description:'This course teached me how to use SCRUM and agile methodology to achieve goals and tasks for projects',
            provider:'Linkedin Learning'

        }
    ]
}

export default userData;