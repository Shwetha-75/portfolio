
import Image2 from "./media/image2.png";
var data=[
    {
        id:1,
        image:Image2,
        name:"Tenzies",
        para:"Created a dice-rolling game where players can selectively hold numbers to match all dice to the same value."
        ,solution:
    ["Developed a React-based game using useState for state management and useEffect for logic control.",

"Utilized array mapping to render dice dynamically and update their states.",

"Enabled interactive features to hold specific dice values while re-rolling others."],
  tech_stack:`React.js (hooks: useState, useEffect)
CSS for styling and animations`

    },
    {
        id:2,
        image:Image2,
        name:"Digital Card",
        para:`
        Created a visually appealing static digital card to showcase essential information in a compact and elegant format.
        `,
        solution:[" Designed a responsive and interactive static digital card layout.",
"Incorporated clean and modern design principles with CSS for styling.",
"Utilized React for component structure and scalability."]
        ,
        tech_stack:`
        React.js
CSS (flexbox, grid, animations)
        `

    },

    {
        id:3,
        image:Image2,
        name:"Meme Generator",
        para:`
           Created an interactive tool to generate custom memes with user-provided text over images.`
           ,solution:[
            " Developed a React-based application allowing users to select images and add custom text dynamically.",
"Integrated state management with useState for handling user inputs like text positioning and style.",
"Leveraged dynamic rendering for real-time preview of memes."]
           ,
           tech_stack:`
           React.js (useState for state handling)
CSS for layout and styling


           
           `

    },{
        id:4,
        image:Image2,
        name:"Calculator",
        para:`
        Designed a functional and user-friendly calculator for performing basic arithmetic operations.
        `,
        solution:["Developed a React-based calculator with a clean and responsive UI.","Implemented useState for managing input and operation states.","Included functionality for addition, subtraction, multiplication, division, and reset.","Enhanced user experience with intuitive button layout and real-time computation display."]
        
        ,
        tech_stack:`
       React.js (useState for state management)
CSS for styling and responsive design
        `
    },

    {
        id:5,
        image:Image2,
        name:"Notes",
        para:"Created a notes app that allows users to create, read, update, and delete notes, with real-time data synchronization."
        ,solution:["Built a React-based notes app integrated with Firestore for efficient database operations.",
           " Implemented CRUD functionality:",
          "  Create: Add new notes with title and content.",
           " Read: Display a list of notes with real-time updates from Firestore.",
          "  Update: Edit existing notes and save changes.",
         "   Delete: Remove unwanted notes with confirmation.",
           " Leveraged Firestore’s real-time syncing capabilities for seamless user experience."],
        tech_stack:`
           React.js
Firebase Firestore (real-time database)
CSS for UI styling
           `

    },
    
    
];

export default data;