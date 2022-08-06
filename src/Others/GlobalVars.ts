import { OurIcons } from "./OurIcons"
import { NavBottomLinksInterface, TitledListItemInterface } from "./Interfaces"
import { WebImages } from "./Images"

export const myGithubUsername = "shuvabiswas12"

export class GlobalVars {

    static primaryColor = "#DD2C00"
    static otherColors: Array<string> = [
        '#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE',
        '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#00C853',
        '#64DD17', '#AEEA00', '#FFD600', '#FFAB00', '#FF6D00',
        '#DD2C00'
    ]
    static myName = 'Shuva Biswas'
    static myOccupation = 'Software Developer'
    static myDetails = `My name is Shuva Biswas. You are in the right place, if you are looking for web developer to develope your next website. I am a fullstack web developer with 2 years experiences.
    My passion is about computer and technology, and I love to do programming as well as it make me happy whenever I do a succesfull projects. I can do both frontend, backend and severside
    programming as well. But it comes in specialization or what stack I most prefer to do and enjoy much more is frontend and databases. You must see the skills section if you want 
    to know my skills. You can also visit my github profile as well. `
    static myLeftAvatarImage = null
    static myRightAvatarImage = null

    static routes: Array<string> = [
        "About",
        "Skills",
        "Works",
        "Contact",
    ]

    static bottomLinks: Array<NavBottomLinksInterface> = [
        {
            svgPath: OurIcons.whatsappIcon,
            link: 'https://api.whatsapp.com/send?phone=8801703009482'
        },
        {
            svgPath: OurIcons.emailIcon,
            link: 'mailto:shuvabiswas12@gmail.com'
        },
        {
            svgPath: OurIcons.facebookIcon,
            link: 'https://facebook.com/shuva.biswas.12'
        }
    ]

    static skills: Array<TitledListItemInterface> = [
        {
            text: "Programming/Markup Languages",
            arr: [
                {
                    title: 'C',
                    logo: 'https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png',
                },
                // {
                //     title: 'C++',
                //     logo: 'https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png',
                // },
                {
                    title: 'Java',
                    logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
                },
                {
                    title: 'Python',
                    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
                },
                {
                    title: 'JavaScript',
                    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
                },
                // {
                //     title: 'Rust',
                //     logo: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
                // },
                {
                    title: 'SQL',
                    logo: 'https://w7.pngwing.com/pngs/28/601/png-transparent-sql-logo-illustration-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail.png',
                },
                {
                    title: 'HTML',
                    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
                },
                {
                    title: 'CSS',
                    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
                },
                {
                    title: 'UNIX',
                    logo: 'https://www.vectorlogo.zone/logos/gnu/gnu-icon.svg',
                },
                // {
                //     title: 'VBScript',
                //     logo: 'https://w7.pngwing.com/pngs/237/332/png-transparent-vbscript-scripting-language-visual-basic-microsoft-analyst-angle-text-rectangle-thumbnail.png',
                // },
                // {
                //     title: 'Windows Batch',
                //     logo: 'https://icon-library.com/images/batch-icon/batch-icon-13.jpg',
                // },
                // {
                //     title: 'Bash/Shell/PowerShell',
                //     logo: 'https://docs.microsoft.com/en-us/powershell/media/index/powershell_128.svg',
                // },
                {
                    title: 'TypeScript',
                    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
                },
                {
                    title: 'PHP',
                    logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
                },
                // {
                //     title: 'Ruby',
                //     logo: 'https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg',
                // },
                // {
                //     title: 'Kotlin',
                //     logo: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
                // },
                {
                    title: 'Dart',
                    logo: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg',
                },
                // {
                //     title: 'Pug',
                //     logo: 'https://www.vectorlogo.zone/logos/pugjs/pugjs-icon.svg'
                // },
                {
                    title: 'XML',
                    logo: 'https://www.vectorlogo.zone/logos/w3c_xml/w3c_xml-icon.svg'
                },
                {
                    title: 'C#',
                    logo: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
                },
                // {
                //     title: 'QML',
                //     logo: "https://s3-eu-west-1.amazonaws.com/qt-showroom/uploads/2014/08/qml_creator_icon512-300x300.png"
                // },
                // {
                //     title: 'R',
                //     logo: "https://www.r-project.org/Rlogo.png"
                // },
                // {
                //     title: 'Golang',
                //     logo: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg"
                // },

            ]
        },
        {
            text: "Libraries/Frameworks/Techs",
            arr: [
                // {
                //     title: 'Android App Development',
                //     logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg'
                // },
                {
                    title: 'NodeJS',
                    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
                },
                {
                    title: 'ExpressJS',
                    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
                },
                {
                    title: 'ReactJS',
                    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
                },
                {
                    title: 'Redux',
                    logo: 'https://w7.pngwing.com/pngs/669/447/png-transparent-redux-react-javascript-freecodecamp-npm-others-miscellaneous-purple-violet-thumbnail.png'
                },
                // {
                //     title: 'React Native',
                //     logo: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg'
                // },
                // {
                //     title: 'ElectronJS',
                //     logo: 'https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg'
                // },
                {
                    title: 'Angular2+',
                    logo: 'https://angular.io/assets/images/logos/angular/angular.svg'
                },
                {
                    title: 'MongoDB',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/mongodb-3521676-2945120.png'
                },
                {
                    title: 'Mongoose',
                    logo: 'https://avatars.githubusercontent.com/u/7552965?s=200&v=4'
                },
                {
                    title: 'OAuth2',
                    logo: 'https://oauth.net/images/oauth-logo-square.png'
                },
                // {
                //     title: 'Gatsby',
                //     logo: 'https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png'
                // },
                // {
                //     title: 'NextJS',
                //     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png'
                // },
                {
                    title: 'OpenCV',
                    logo: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg'
                },
                // {
                //     title: 'Parse',
                //     logo: 'https://www.vectorlogo.zone/logos/parseplatform/parseplatform-icon.svg'
                // },
                {
                    title: 'Firebase',
                    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
                },
                {
                    title: 'Flutter',
                    logo: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg'
                },
                // {
                //     title: 'Tensorflow',
                //     logo: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg'
                // },
                // {
                //     title: 'Unity',
                //     logo: 'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg'
                // },
                {
                    title: 'Beautiful soup',
                    logo: 'https://play-lh.googleusercontent.com/yMjUC6LBh7uOCK6wUcIEf5MHZQmSqDPXoInOQLZzw0DWQsPJuvkwSymX2zI4Ok7i_BY=w480-h960'
                },
                // {
                //     title: 'Numpy',
                //     logo: 'https://numpy.org/images/logo.svg'
                // },
                // {
                //     title: 'QT',
                //     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1200px-Qt_logo_2016.svg.png'
                // },
                // {
                //     title: 'Tauri',
                //     logo: 'https://raw.githubusercontent.com/tauri-apps/tauri/HEAD/app-icon.png'
                // },
                {
                    title: 'Material-UI',
                    logo: 'https://mui.com/static/logo.png'
                },
                // {
                //     title: 'PassportJS',
                //     logo: 'https://www.passportjs.org/images/logo.svg'
                // },
                {
                    title: 'Bootstrap',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png'
                },
                // {
                //     title: 'Adonis JS',
                //     logo: 'https://www.vectorlogo.zone/logos/adonisjs/adonisjs-icon.svg'
                // },
                // {
                //     title: 'VueJS',
                //     logo: 'https://vuejs.org/images/logo.png'
                // },
                // {
                //     title: 'Pandas',
                //     logo: 'https://pandas.pydata.org/static/img/pandas.svg'
                // },
                {
                    title: 'Matplotlib',
                    logo: 'https://matplotlib.org/3.1.0/_images/sphx_glr_logos2_001.png'
                },
                // {
                //     title: 'Ionic',
                //     logo: 'https://ionicframework.com/blog/wp-content/uploads/2015/05/cropped-logo.png'
                // },
                // {
                //     title: 'Cordova',
                //     logo: 'https://cordova.apache.org/static/img/cordova_bot.png'
                // },
                // {
                //     title: 'Svelte',
                //     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png?20191219133350'
                // },
                // {
                //     title: 'Formik',
                //     logo: 'https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png'
                // },
                // {
                //     title: 'Socket.io',
                //     logo: 'https://socket.io/images/logo.svg'
                // },
                // {
                //     title: 'Ant Design',
                //     logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                // },
                // {
                //     title: 'React Native Paper',
                //     logo: 'https://arpitbhalla.gallerycdn.vsassets.io/extensions/arpitbhalla/rnp-snippets/0.0.1/1620141921636/Microsoft.VisualStudio.Services.Icons.Default'
                // },
                {
                    title: 'Webpack',
                    logo: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon.png'
                },
                {
                    title: 'JSDOM',
                    logo: 'https://raw.githubusercontent.com/jsdom/jsdom/HEAD/logo.svg'
                },
                {
                    title: 'Flask',
                    logo: 'https://static.javatpoint.com/tutorial/flask/images/flask-tutorial.png'
                },
                {
                    title: 'Django',
                    logo: 'https://w7.pngwing.com/pngs/10/113/png-transparent-django-web-development-web-framework-python-software-framework-django-text-trademark-logo-thumbnail.png'
                },
                // {
                //     title: 'Peppeteer',
                //     logo: 'https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png'
                // },
                {
                    title: 'Docker',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/docker-226091.png'
                },
                {
                    title: 'Git',
                    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                },
                // {
                //     title: 'Gradle',
                //     logo: 'https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg'
                // },
                // {
                //     title: 'Expo',
                //     logo: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg'
                // },
                // {
                //     title: 'NgInx',
                //     logo: 'https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg'
                // },
                // {
                //     title: "DynamoDB",
                //     logo: 'https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg'
                // },
                // {
                //     title: "Dynamoose",
                //     logo: 'https://dynamoosejs.com/img/logo.svg'
                // },
                // {
                //     title: "Kubernetes",
                //     logo: 'https://kubernetes.io/images/wheel.svg'
                // },


            ]
        },
        {
            text: "Human Languages",
            arr: [
                {
                    title: 'Bengali',
                    desc: "Native",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_b_99507.webp',
                },
                {
                    title: 'Chittagonian',
                    desc: "Native",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_c_99508.webp',
                },
                {
                    title: 'English',
                    desc: "Fluent",
                    logo: 'https://images.all-free-download.com/images/graphicwebp/letter_e_99510.webp',
                },
            ]
        },
        {
            text: "Others",
            arr: [
                // {
                //     title: 'Vim',
                //     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/544px-Vimlogo.svg.png?20150726190850'
                // },
                {
                    title: 'Android Studio',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/512px-Android_Studio_Icon_3.6.svg.png?20210301045217'
                },
                {
                    title: 'GitHub',
                    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg'
                },
                {
                    title: 'GitLab',
                    logo: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg'
                },
                // {
                //     title: 'Arduino',
                //     logo: 'https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg'
                // },
                {
                    title: 'IntelliJ IDEA',
                    logo: 'https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png'
                },
                {
                    title: 'Webstorm',
                    logo: 'https://cdn.worldvectorlogo.com/logos/webstorm-icon.svg'
                },
                {
                    title: 'VS Code',
                    logo: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png'
                },
                {
                    title: 'Automation',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841378-9644305f-c7d1-44f1-bd5f-d626e056601a.png'
                },
                {
                    title: 'Apache',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/apache-3628623-3029848.png'
                },
                // {
                //     title: 'Asana',
                //     logo: 'https://cdn.iconscout.com/icon/free/png-128/asana-3521284-2944703.png'
                // },
                {
                    title: 'Jira',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/jira-3628861-3030001.png'
                },
                {
                    title: 'AWS',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/aws-1869025-1583149.png'
                },
                // {
                //     title: 'DigitalOcean',
                //     logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1478792253/gnlwek2zwhq369yryrzv.jpg'
                // },
                {
                    title: 'Figma',
                    logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
                },
                {
                    title: 'Heroku',
                    logo: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'
                },
                // {
                //     title: 'Yarn',
                //     logo: 'https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg'
                // },
                // {
                //     title: 'Facebook SDKs',
                //     logo: 'https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg'
                // },
                // {
                //     title: 'Google SDKs',
                //     logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg'
                // },
                {
                    title: 'npm',
                    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg'
                },
                // {
                //     title: 'Greasemonkey',
                //     logo: 'https://addons.mozilla.org/user-media/addon_icons/0/748-64.png?modified=1531822767'
                // },
                // {
                //     title: 'Tampermonkey',
                //     logo: 'https://lh3.googleusercontent.com/zoY8FwoOqPlBgFxcmFdNSK2Q4CcLmv-gw7vTjF2KMR9cEabwBsGNrHBTEMitn0Ba6OmCVJ0NcLnFGu3N97BP8Phu0g=w128-h128-e365-rj-sc0x00ffffff'
                // },
                {
                    title: 'Linux',
                    logo: 'https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png'
                },
                {
                    title: 'Adobe Photoshop',
                    logo: 'https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg'
                },
                {
                    title: 'Netlify',
                    logo: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg'
                },

            ]
        },
    ]

    static works: Array<TitledListItemInterface> = [
        {
            text: "Web Apps",
            arr: [
                {
                    title: "BreakingMars",
                    logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/lg6nxfb2dttgtng5kobb",
                    desc: '#1 Leading & Effortless Prospect Perceiving Platform',
                    link: "https://www.breakingmars.com/"
                },
                {
                    title: "Voomnow",
                    desc: "Next generation audio recorder",
                    logo: "https://user-images.githubusercontent.com/6418354/173876916-e27cb77f-49f1-4190-be54-4c1ddaa2973d.svg"
                },
                {
                    title: "s3cr3tm3",
                    link: "https://s3cr3tm3.netlify.app/",
                    logo: "https://user-images.githubusercontent.com/6418354/173877444-59dbdd3d-1b5d-4b92-ad53-30fada9362d2.png",
                    desc: "Share secret messages secretely"
                },
                {
                    title: "FaNote",
                    link: "https://fanote.netlify.app/",
                    logo: "https://user-images.githubusercontent.com/6418354/173878148-81fc6b46-167d-4449-b2b2-de55d048c490.png",
                    desc: "Offline notes for browsers"
                },
                {
                    title: "FivReq",
                    link: "https://fivreq.netlify.app/",
                    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/129_Fiverr_logo_logos-512.png",
                    desc: "Fiverr buyer requests"
                },
                {
                    title: 'SendMoney2Me',
                    logo: 'https://user-images.githubusercontent.com/6418354/173880188-ad66a5d1-9957-42d3-bc67-590da25c43eb.png',
                    desc: 'Ways to send me money directly',
                    link: 'https://p32929.github.io/SendMoney2Me/'
                },
                {
                    title: 'Shajao',
                    logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/jyjetnzpv9knl6l7qxwz',
                    desc: 'Framing Happiness',
                    link: 'https://shajao.com/'
                },
                {
                    title: 'Sha1ToMd5',
                    logo: 'https://cdn.iconscout.com/icon/premium/png-128-thumb/encryption-code-1626962-1379033.png',
                    desc: 'A simple utility tool to convert Google Play Release APK Sha1 value to MD5 for Facebook login to work.',
                    link: 'https://p32929.github.io/Sha1ToMd5'
                },
                {
                    title: 'Offer Bundle Checker',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/layer-3307723-2747903.png',
                    desc: 'Checks whether your bundle validity or the volume is ahead of you',
                    link: 'https://p32929.github.io/bundle_checker/'
                },
                {
                    title: 'StartPage',
                    logo: 'https://cdn.iconscout.com/icon/premium/png-128-thumb/homepage-2580329-2151669.png',
                    desc: 'A minimalistic custom browser startpage that can be configured to your needs. ',
                    link: 'https://p32929.github.io/startpage/'
                },
                {
                    title: 'OrderZesty',
                    logo: 'https://orderzesty.com/wp-content/uploads/2021/10/Zesty-icon@3x-300x300.png',
                    desc: 'Personal chef service delivering fresh signature meals.',
                    link: 'https://orderzesty.com/'
                },
            ]
        },
        {
            text: "iOS Apps",
            arr: [
                {
                    title: "Adblock for YT",
                    link: "https://apps.apple.com/au/app/adblock-for-youtube/id1592568016",
                    logo: "https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/65/7e/a8/657ea8d9-c3aa-6951-38c8-948c05cd96c3/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/246x0w.webp",
                    desc: "Removes ads from YT videos, embedded videos on third party websites and streams."
                },
                {
                    title: "Al Quran by Quran Touch",
                    link: "https://apps.apple.com/gb/app/al-quran-by-quran-touch/id585240351",
                    logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
                    desc: "The most comprehensive Muslim App!"
                },
            ]
        },
        {
            text: "Android Apps",
            arr: [
                {
                    title: "Al Quran by Quran Touch",
                    link: "https://play.google.com/store/apps/details?id=com.qurantouch.qurantouch",
                    logo: "https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/9d/7e/ed/9d7eedd6-e567-5251-bed6-dce7e868bb57/AppIcon-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp",
                    desc: "The most comprehensive Muslim App!"
                },
                {
                    title: 'Thamao',
                    logo: 'https://cdn.apkmonk.com/logos/com.thamao_150x150.png',
                    desc: 'বাংলাদেশে স্মার্টফোনের চুরি এবার অসম্ভব',
                },
                {
                    title: 'Desplash',
                    logo: 'https://lh3.googleusercontent.com/ILrto9KguXlr-clbhYKUonpnHszgNp_N5Qvc8_u9QaM71oaqNKcYql2sV3sqZ7nqzsc=s180',
                    desc: 'Automatic Free High Quality Wallpapers powered by Unsplash.com',
                    link: 'https://www.xda-developers.com/desplash-wallpaper-app-unsplash/'
                },
                {
                    title: 'The Great Postman',
                    logo: 'https://lh3.googleusercontent.com/ni-lk3b2nTMZyC7r1wYBW6cm9eYqGAN-t6fXV-kD0lSyw1lO3kenC1We71fZjSryvFII=s180',
                    desc: 'Powerful, Lightweight REST API client for Android',
                    link: 'https://apkpure.com/rest-api-client-the-great-postman/p32929.greatpostman'
                },
                {
                    title: 'Sleepy - Addiction Remover',
                    logo: 'https://lh3.googleusercontent.com/vvp6Ev33xPerWBBOtIRyAHl7k5c4wQ72hGwG3EU4JC-BTjfvb5DSJDeMABaRg0fy_KI=s180',
                    desc: 'The one and only EFFECTIVE addiction remover on Google Play store',
                    link: 'https://github.com/p32929/my_android_apps/releases/tag/all'
                },
                {
                    title: 'Best CGPA Calculator',
                    logo: 'https://lh3.googleusercontent.com/trpGkuBRWnBXNDNyts-7ePwmPtTLQ_8pKoMWi-6Iy8eBomjZ8XrVi4zQcEWrmoGLKA=s180',
                    desc: 'A simple yet effective CGPA Calculator for University students',
                    link: 'https://github.com/p32929/my_android_apps/releases/tag/all'
                },
                {
                    title: 'Buy Sell BD',
                    logo: 'https://image.winudf.com/v2/image1/cDMyOTI5LmJ1eXNlbGxiZF9pY29uXzE1NTkyOTQ5NjVfMDYz/icon.png?w=170&fakeurl=1',
                    desc: 'A better & more reliable alternative for Bikroy.com - A marketplace app for buying-selling new/used goods',
                    link: 'https://apkpure.com/p/p32929.buysellbd'
                },
                {
                    title: 'ExIn',
                    logo: 'https://lh3.googleusercontent.com/X8mRJd7JajvDXoW7NaluKt2IvC3osH6czkTPoWeSYJ96U2LWLKT4xiFgvNouwf-UvEk=s180',
                    desc: 'A Simple & user friendly income-expense tracker ',
                },
                {
                    title: 'ফিফা ওয়ার্ল্ডকাপ ২০১৮',
                    logo: 'https://lh3.googleusercontent.com/zuluY4xOXx7PIMCvul4fowmOvMlc-3wsHwxGAASo3qZQ-9byd-uJWZ9kzUgclD4Nhrg=s180',
                    desc: 'FIFA Worldcup 2018 All In One ',
                    link: 'https://apkpure.com/%E0%A6%AB%E0%A6%BF%E0%A6%AB%E0%A6%BE-%E0%A6%93%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B2%E0%A7%8D%E0%A6%A1%E0%A6%95%E0%A6%BE%E0%A6%AA-%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE-live-tv-scores-more/p32929.worldcup2018'
                },
                {
                    title: 'I am free',
                    logo: 'https://lh3.googleusercontent.com/LIgX0ABT8z3MFILXFfrXK7vNO9j0hTxJ2aSdGwdcsdJUtViMWAsKXEiG65g94dV_i7JE=s180',
                    desc: 'বেকার মুক্ত বাংলাদেশ গড়ার লক্ষ্যে - I am FREE',
                    link: 'https://apkpure.com/i-am-free/p32929.imfree'
                },
                {
                    title: 'Awesome NCTB',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5uY3RiX2ljb25fMTU3NjU3MjcwNF8wMjI/icon.png?fakeurl=1',
                    desc: 'Download NCTB Books easily and Free',
                    link: 'https://github.com/richinfotech/rich_android_apps/releases/tag/all'
                },
                {
                    title: 'বৃক্ষ ( Brikkho )',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5icmlra2hvX2ljb25fMTU3MDEyMTU0Ml8wODA/icon.png?fakeurl=1',
                    desc: 'Learn about trees in your fingertips',
                    link: 'https://github.com/richinfotech/rich_android_apps/releases/tag/all'
                },
                {
                    title: 'IQQuiz',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5pcXF1aXphcHBfaWNvbl8xNTcxMDE0NzcxXzA2Mg/icon.png?fakeurl=1',
                    desc: 'A simple IQ game',
                    link: 'https://github.com/richinfotech/rich_android_apps/releases/tag/all'
                },
                {
                    title: 'BirdsLover',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5iaXJkc2xvdmVyX2ljb25fMTU3MjAwNDIxNl8wOTE/icon.png?fakeurl=1',
                    desc: 'Learn about birds in your fingertips',
                    link: 'https://github.com/richinfotech/rich_android_apps/releases/tag/all'
                },
                {
                    title: 'Animal Lover',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5hbmltYWxfaWNvbl8xNTc3MjkyMzIzXzAyMw/icon.png?fakeurl=1',
                    desc: 'Learn about birds in your fingertips',
                    link: 'https://github.com/richinfotech/rich_android_apps/releases/tag/all'
                },
                {
                    title: 'Jibanananda Recitation (Abritti)',
                    logo: 'https://image.winudf.com/v2/image1/b3JnLnJpY2hpdC5qaWJvbmFuZG9rb2JpdGFzb21vZ3JvX2ljb25fMTU3MDEwNDExNF8wNDc/icon.png?fakeurl=1',
                    desc: '50+ poems of Jibanananda Das with audio recitation',
                    link: 'https://github.com/richinfotech/rich_android_apps/releases/tag/all'
                },
                {
                    title: 'MyEyes',
                    logo: WebImages.giftIcon,
                    desc: 'Indoor Navigation App for Blind People',
                },
                {
                    title: 'BirthdayBot',
                    logo: WebImages.giftIcon,
                    desc: 'Birthday wishing apps, made for individual people...',
                    link: 'https://github.com/p32929/my_android_apps/releases/tag/all'
                },
            ]
        },
        {
            text: "Desktop App/Scripts",
            arr: [
                {
                    title: 'PotatoTimer',
                    logo: WebImages.giftIcon,
                    desc: 'A pomotodo app that forces you to take a break - created using ElectronJS',
                    link: 'https://github.com/p32929/Electron-Pomotodo'
                },
                {
                    title: 'Shortcut-Virus-Remover',
                    logo: WebImages.giftIcon,
                    desc: 'Shortcut virus remover app for Windows',
                    link: 'https://github.com/p32929/Shortcut-Virus-Remover'
                },
                {
                    title: 'Linux_Screen_Dimmer',
                    logo: WebImages.giftIcon,
                    desc: 'A simple screen dimming utility for linux',
                    link: 'https://github.com/p32929/Linux_Screen_Dimmer'
                },
                {
                    title: 'MoodyLauncher',
                    logo: WebImages.giftIcon,
                    desc: 'A simple App Launcher Script that runs a list of apps depending on the users mood',
                    link: 'https://github.com/p32929/MoodyLauncher'
                },
                {
                    title: 'Facebook Bot',
                    logo: WebImages.giftIcon,
                    desc: 'Automatically likes posts in facebook and also does relavent comments',
                },
                {
                    title: 'Username Scraper',
                    logo: WebImages.giftIcon,
                    desc: 'Lists all the usernames commented in a post in instagram',
                },
                {
                    title: 'FayPomotroid',
                    logo: 'https://github.com/p32929/FayPomotroid/blob/master/build/icons/256x256.png?raw=true',
                    desc: 'Desktop pomodoro app that forces you to take a break',
                    link: 'https://github.com/p32929/FayPomotroid/releases/tag/0.13.1'
                },
            ]
        },
        {
            text: "Android Libraries",
            arr: [
                {
                    title: 'AndroidEasySQL-Library',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'An Easier & Lazier approach to SQL database for Android',
                    link: 'https://github.com/p32929/AndroidEasySQL-Library'
                },
                {
                    title: 'FayazPermissions',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'An Easier & Lazier approach to getting runtime permission in Android ',
                },
                {
                    title: 'AndroidAppLockscreen',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'An Easier & Lazier approach to getting runtime permission in Android ',
                    link: 'https://github.com/p32929/AndroidAppLockscreen'
                },
                {
                    title: 'ManufacturerBatteryOptimization',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'Simple helper class for Android Battery Optimization ignoring in some devices',
                    link: 'https://gist.github.com/p32929/41e7af650f6a2c11e9306ab600fb9b03'
                },
                {
                    title: 'MyHouseAdsAndroid',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A library for cross promoting own apps within own apps - for Android',
                    link: 'https://github.com/p32929/MyHouseAdsAndroid'
                },
                {
                    title: 'HouseAds2',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A library ( V2 ) for cross promoting own apps within own apps - for Android',
                    link: 'https://github.com/p32929/HouseAds2'
                },
                {
                    title: 'AndroidAppUpdater',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A simple, Lightweight App Updater Library for Android',
                    link: 'https://github.com/p32929/AndroidAppUpdater'
                },
                {
                    title: 'OfficeAbout',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A simple about screen library for Android for a Team of people',
                    link: 'https://github.com/p32929/OfficeAbout'
                },
                {
                    title: 'JsonViewerAndroid',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A simple JSON Viewer for Android',
                },
                {
                    title: 'Android-Receivers-Library',
                    logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg',
                    desc: 'A library for simpler BroadcastReceiver implementations',
                },

            ]
        },
        {
            text: "Flutter Packages",
            arr: [
                {
                    title: 'EasiestDB',
                    logo: WebImages.flutterIcon,
                    desc: 'The Easiest and the Laziest approach to Flutter SQL Database.',
                    link: 'https://pub.dev/packages/easiestdb'
                },
                {
                    title: "Simply Wifi",
                    logo: WebImages.flutterIcon,
                    desc: "A simplified version of the wifi_iot package",
                    link: "https://pub.dev/packages/simply_wifi"
                }
            ]
        },
        {
            text: "NPM Packages",
            arr: [
                {
                    title: 'fayfetch',
                    logo: 'https://avatars.githubusercontent.com/u/6078720?s=200&v=4',
                    desc: 'A simple wrapper for Fetch',
                    link: 'https://www.npmjs.com/package/fayfetch'
                },
            ]
        },
        {
            text: "NDAs",
            arr: [
                {
                    title: 'Konika',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
                {
                    title: 'NumberredPaste',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
                {
                    title: 'ClockedAdmin',
                    logo: WebImages.giftIcon,
                    desc: '---',
                    link: 'about:blank'
                },
            ]
        },
    ]

    static contacts: Array<TitledListItemInterface> = [
        {
            text: "Contact me",
            arr: [
                // {
                //     title: 'Skype',
                //     logo: 'https://user-images.githubusercontent.com/6418354/155840899-62c1fe8e-66a6-4492-9acc-5bd504ac21ef.png',
                //     desc: 'p32929',
                //     link: 'skype:p32929?chat'
                // },
                {
                    title: 'WhatsApp',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://api.whatsapp.com/send?phone=8801703009482',
                    desc: "+8801703009482"
                },
                {
                    title: 'Facebook',
                    logo: 'https://user-images.githubusercontent.com/6418354/155840898-9e2327aa-a280-45e3-8266-8268242abda4.png',
                    link: 'https://www.facebook.com/shuva.biswas.12'
                },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'shuvabiswas12@gmail.com',
                    link: 'mailto:shuvabiswas12@gmail.com'
                },
            ]
        },
        {
            text: "Web Profiles",
            arr: [
                // {
                //     title: 'Anywhere on the internet',
                //     logo: 'https://user-images.githubusercontent.com/6418354/155840900-91ac076a-8d2b-45dc-b346-66f72d376d4b.png',
                //     desc: "@shuvabiswas12"
                // },
                {
                    title: 'GitHub',
                    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    link: 'https://github.com/shuvabiswas12/'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/shuva-biswas/'
                },
                // {
                //     title: 'Reddit',
                //     logo: 'https://user-images.githubusercontent.com/6418354/155841029-b3fd8a2d-3f7b-4f24-b06b-4b2337ad7280.png',
                //     link: 'https://www.reddit.com/user/p32929'
                // },
                // {
                //     title: 'Twitter',
                //     logo: 'https://user-images.githubusercontent.com/6418354/155841031-532d5d6e-797a-4da1-8064-48d266b69ab2.png',
                //     link: 'https://twitter.com/p32929'
                // },
                {
                    title: 'Instagram',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841023-0b842621-56a3-42ec-81f1-3944034b09c7.png',
                    link: 'https://www.instagram.com/__shuvabiswas12/'
                },
                // {
                //     title: 'Fiverr',
                //     logo: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/fiverr-2018.png?auto=format&q=60&fit=max&w=200',
                //     link: 'https://www.fiverr.com/users/fayazbinsalam/'
                // },
                // {
                //     title: "Upwork",
                //     logo: "https://cdn.worldvectorlogo.com/logos/upwork.svg",
                //     link: "https://www.upwork.com/freelancers/~017dbf657b99b0c1c1"
                // },
            ]
        },
        {
            text: "Thank you for visiting my portfolio",
            arr: [
                {
                    title: "Click on the link button",
                    desc: 'To create your own portfolio. It will only take around 3 minutes',
                    logo: WebImages.giftIcon,
                    link: 'https://github.com/p32929/p32929.github.io/'
                }
            ]
        }
    ]
}