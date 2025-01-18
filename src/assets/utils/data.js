import Skills from "../../componants/Skills/Skills";
import codeIcon from "../images/code.png";
import webIcon from "../images/web.png";
import toolsIcon from "../images/WebDevelopment.png";



export const SKILLS=[
    {
        title:"Fontend",
        icon :codeIcon,
        Skills:[
            {Skills: "HTML", percentage:"80%"},
            {Skills: "Css3", percentage:"70%"},
            {Skills: "javaScript", percentage:"50%"},
            {Skills: "React.js", percentage:"40%"}
                

        ]
    },
    {
        title:"Backend",
        icon:webIcon,
        Skills:[
            {Skills: "laravel", percentage:"80%"},
            {Skills: "Mysql", percentage:"70%"},
            {Skills: "python", percentage:"50%"},        

        ]
    },
    {
        title:"Tools",
        icon:toolsIcon,
        Skills:[
            {Skills: "Git & Github", percentage:"80%"},
            {Skills: "Visuel Studio Code", percentage:"70%"},
                
        ]

    },
    {
        title:"Soft Skills",
        icon:toolsIcon,
        Skills:[
            {Skills: "Collaboration", percentage:"80%"},
                
        ]
    }
];

export const WORK_EXPERIENCE =[
    {
        title:"Senior Frontend Developper at Tech Innovators",
        date:"January 2022 - Present",
        responsibilities:[
            "Développement d'un système de facturation pour l'entreprise, visant à automatiser le processus de gestion des factures sur un ERP."

        ],
    },
    {
        title:" Tech Innovators",
        date:"January 2022 - Present",
        responsibilities:[
            "Assurer la maintenance préventive et corrective des équipements informatiques, garantissant leur bon fonctionnement au sein des bureaux. Intervention rapidement en cas de dysfonctionnements réseaux. Contribué également au design de l'expérience utilisateur (UX) afin d'améliorer l'ergonomie et l'efficacité des outils informatiques."

        ],
    },
    {
        title:"junior backend Developper ",
        date:"January 2022 - Present",
        responsibilities:[
            "Assurer la maintenance préventive et corrective des équipements informatiques, ",
            "garantissant leur bon fonctionnement au sein des bureaux. Intervention rapidement en ",
            "cas de dysfonctionnements réseaux. Contribué également au design de l'expérience utilisateur (UX) afin d'améliorer l'ergonomie et l'efficacité des outils informatiques."

        ],
    },
]