import { Project } from '@/types';

// Project display order - change the order of IDs here to change display order
// Projects not in this array will appear at the end
export const projectOrder: string[] = [
  '14', // Fixed-Wing VTOL Hybrid Drone
  '1',  // 3D Printed Quadcopter
  '3',  // Tennsi Ball Grasping Robot
  '4',  // Autonomous Plant Care System
  '9',  // Portable Thermoregulated Capsule
  '5',  // Crank Shaft CAD Design
  '2',  // Augmented Cane
  '7',  // Amateur Architecture
  '8',  // Water Demand Model
  '10', // Woodworking Projects
  '11', // NBA Analysis
  '12', // Automated Stock Market Analysis Bot
  '13', // Engineering Portfolio Website
];

export const projects: Project[] = [
  // Robotics Projects
  {
    id: '14',
    title: 'Fixed-Wing VTOL Drone for Whale Localization',
    category: 'Robotics',
    description: `This project focuses on the design and development of an autonomous fixed-wing VTOL hybrid drone for tracking VHF-tagged sperm whales in harsh marine environments.

Developed in collaboration with Project CETI and the Robotics, Embedded-Autonomy, and Communication Theory(REACT) Lab, the system integrates antenna separation directly into the airframe to improve signal detection while significantly increasing flight endurance compared to traditional quadcopters. The drone is designed for waterproof operation, compact deployment from small research vessels, and autonomous takeoff, landing, and tracking.

This work is ongoing as part of my undergraduate thesis, with continued validation through simulation, testing, and flight experiments.`,
    images: [
      '/projects/Fixed_Wing_VTOL_Drone/sexy_render.jpg',
      '/projects/Fixed_Wing_VTOL_Drone/outdoor.png',
      '/projects/Fixed_Wing_VTOL_Drone/exploded view.png',
      '/projects/Fixed_Wing_VTOL_Drone/underbelly_2.jpg',
      '/projects/Fixed_Wing_VTOL_Drone/velocity_CFD.png',
      '/projects/Fixed_Wing_VTOL_Drone/wing_pressure_CFD.png',
      '/projects/Fixed_Wing_VTOL_Drone/Velocity_flow_trajectory.png',
      '/projects/Fixed_Wing_VTOL_Drone/outdoor_docked.png',
    ],
    technologies: ['Autonomous Systems', 'Aerospace Engineering', 'VTOL', 'CAD', 'CFD Simulation', 'AeroSandbox', 'OpenVSP'],
    date: '2025',
  },
  {
    id: '1',
    title: '3D Printed Quadcopter',
    category: 'Robotics',
    description: '~500 gram 3D printed quadcopter with a 6:1 thrust to weight ratio. Specifications: 2300KV brushless motors(778 grams of thrust generated per motor), Speedybee f405 v4 flight controller+PDB+onboard ESC configured with Betaflight Firmware, 3S LiPo Battery, and PPM Receiver. In the near future, Im planning to improve the landing gear and add an adjustable camera mount.',
    images: [
      '/projects/3D_Printed_Quadcopter/in_flight.png',
      '/projects/3D_Printed_Quadcopter/drone_frame.webp',
      '/projects/3D_Printed_Quadcopter/full_assembly.png',
      '/projects/3D_Printed_Quadcopter/drone_flight_controller.webp',
      '/projects/3D_Printed_Quadcopter/free_body_diagram.jpg',
      
    ],
    technologies: ['3D Printing', 'CAD', 'Electronics'],
    date: '2024',
  },
  {
    id: '2',
    title: 'Augmented Cane',
    category: 'Robotics',
    description: 'Designed an augmented cane attachment prototype to provide haptic feedback to the cane user as an undergraduate researcher at the Harvard Ability Lab.',
    images: [
      '/projects/Augmented_Cane/isometric_view.png',
      '/projects/Augmented_Cane/exploded_view.png',
      '/projects/Augmented_Cane/side_view.png',
      '/projects/Augmented_Cane/top_view.png',
    ],
    technologies: ['CAD', 'Sensors', 'Product Design'],
    date: '2024',
  },
  {
    id: '3',
    title: 'Tennis Ball Grasping Robot',
    category: 'Robotics',
    description: `As a part of my Computer-Aided Machine Design class, 
I led my team in building a robot to participate in a robotics competition 
at the end of the term. The robot was completely designed and fabricated 
from scratch using Solidworks and the on-campus machine shop. 
Our design features a claw and arm mechanism I developed to interface with the play environment and stick tennis balls to the wall to score points in the competition! We went undefeated in the competition and won first place.`,
    images: [
      '/projects/ES51_Robot/CAD_Assembly.png',
      '/projects/ES51_Robot/CAD_Bottom_View.png',
      '/projects/ES51_Robot/in_action.png',
    ],
    technologies: ['CAD', 'Robotics', 'Mechanical Design'],
    date: '2024',
  },
  {
    id: '4',
    title: 'Autonomous Plant Care System',
    category: 'Robotics',
    description: 'Designed, fabricated, and programmed an autonomous plant care system utilizing an Arduino MKR zero, soil moisture sensor neopixels, liquid-crystal display, and 3V submersible pump. The mechanical design was done using Solidworks and 3D printers while all of the circuit was built on two small breadboards that could be enclosed in the circuit holder. The design is completely modular. The project allowed me to develop my skills with design for assembly, circuitry, Arduino, and soldering.',
    images: [
      '/projects/Autonomous_Plant_Care_System/Screenshot_2024-04-28_at_5.58._16a7ba9134dd.png',
      '/projects/Autonomous_Plant_Care_System/Screenshot_2024-04-29_at_4.19._a3c2b9da6bc0.png',
      '/projects/Autonomous_Plant_Care_System/Screenshot_2024-04-29_at_4.36._67c800cd3db7.png',
    ],
    technologies: ['Automation', 'Sensors', 'Control Systems'],
    date: '2024-04',
  },
  {
    id: '9',
    title: 'Portable Thermoregulated Capsule',
    category: 'Mechanical Design',
    description: 'Built a compact cold chain management device developed as part of a consulting project for Eli Lilly. It maintains internal temperatures within the required medical range for up to 1 hour & 15 minutes, ensuring the safe transport of temperature-sensitive medications. The capsule includes a built-in display for real-time temperature monitoring, providing reliable, user-friendly functionality for critical pharmaceutical applications.',
    images: [
      '/projects/Portable_Thermoregulated_Capsule/Screenshot_2025-04-28_at_2.51._76ead1b7184a.png',
      '/projects/Portable_Thermoregulated_Capsule/Screenshot_2025-05-13_at_5.47._9f3691c5ca96.png',
      '/projects/Portable_Thermoregulated_Capsule/Screenshot_2025-05-13_at_5.47._c02bd9abbdb5.png',
      '/projects/Portable_Thermoregulated_Capsule/Screenshot_2025-05-13_at_7.29._082a32ab4975.png',
      '/projects/Portable_Thermoregulated_Capsule/Screenshot_2025-05-13_at_7.39._e8118beccf01.png',
    ],
    technologies: ['CAD', 'Thermal Engineering', 'Product Design'],
    date: '2025-04',
  },
  
  // CAD Projects
  {
    id: '5',
    title: 'Crank Shaft CAD Design',
    category: 'CAD',
    description: 'Modeled and assembled a crankshaft and piston system with CATIA V5.',
    images: [
      '/projects/Crank_Shaft_Cad/Screenshot_2024-06-20_163336_4634b2548cd5.png',
      '/projects/Crank_Shaft_Cad/Screenshot_2024-06-20_162422_988c5bf12316.png',
      '/projects/Crank_Shaft_Cad/Screenshot_2024-06-20_163309_486c912550fc.png',
      
    ],
    technologies: ['CAD', 'Mechanical Design', 'Engineering'],
    date: '2024-06',
  },
  {
    id: '7',
    title: 'Amateur Architecture',
    category: 'CAD',
    description: 'Utilized architectural CAD techniques to design a 4-bedroom, 2-story home with a 2 car garage in SketchUp.',
    images: [
      '/projects/Amateur_Architecture/Dream_House_1_57ab34e31199.png',
      '/projects/Amateur_Architecture/Dream_House_1__11__465217c1f191.png',
      '/projects/Amateur_Architecture/Dream_House_1__12__3a0393147ed2.png',
      '/projects/Amateur_Architecture/Dream_House_1__14__c90efab8fcee.png',
      '/projects/Amateur_Architecture/Dream_House_1__3__39f9d6cd830f.png',
      '/projects/Amateur_Architecture/Dream_House_1__8__431f56ce92c4.png',
      '/projects/Amateur_Architecture/Dream_House_1__9__316c36d5bf03.png',
      '/projects/Amateur_Architecture/Dream_House_1back_89b9af890fa7.png',
    ],
    technologies: ['CAD', 'Architecture', '3D Modeling'],
    date: '2024',
  },
  {
    id: '8',
    title: 'Water Demand Model',
    category: 'Data Analysis',
    description: "As a member of Harvard's Engineers Without Borders Chapter, I utilized QGIS to model a water distribution system for a community in Los Sanchez, Dominican Republic. My model reflects the household water consumption as well as the location and altitude of each house connected to the water system.",
    images: [
      '/projects/Water_Distribution_System_Modeling/La_Mercedez_Water_Distribution_3a3e21afea95.png',
    ],
    technologies: ['CAD', 'QGIS','Hydraulic Engineering', 'System Modeling'],
    date: '2024',
  },
  
  // Mechanical Design Projects
  {
    id: '10',
    title: 'Coffee Table for Mother',
    category: 'Mechanical Design',
    description: 'Utilized woodworking techniques to design, and construct a beautiful Japanese-inspired coffee table out of dark walnut and cherry.',
    images: [
      '/projects/WoodWorking/table_1.png',
      '/projects/WoodWorking/table_2.png',
    ],
    technologies: ['Woodworking', 'Design', 'Craftsmanship'],
    date: '2024',
  },
  
  // Data Analysis
  {
    id: '11',
    title: 'NBA Analysis',
    category: 'Data Analysis',
    description: `Utilized MATLAB and Python to conduct a multiple linear regression on NBA Player Data.
                  Our goal was to determine which factors lead players to command a higher NBA salary.
                  Ultimately, we had to eliminate some of our variables that exhibited collinearity and those which didn't improve our model's R² (coefficient of determination). We found that height and Instagram followers exhibited a strong positive correlation to NBA salary!`,
    images: [
      '/projects/NBA_Analysis/matlab.png',
      '/projects/NBA_Analysis/histogram.png',
      '/projects/NBA_Analysis/plot.png',
      '/projects/NBA_Analysis/matrix.png',
    ],
    technologies: ['MATLAB', 'Data Analysis', 'Statistics'],
    date: '2024',
  },
  
  // Software/AI Projects
  {
    id: '12',
    title: 'Automated Stock Market Analysis Bot',
    category: 'Software/AI',
    description: `Intelligent stock market analysis bot that aggregates data from multiple APIs and generates daily investment insights via automated emails.

**Architecture:**
(1) **Data Collection** - Fetches S&P 500/VIX from Stooq API, market headlines from Google News RSS, and sentiment data from Reddit JSON API across finance subreddits.
(2) **AI Processing** - Uses Groq LLM (llama-3.3-70b-versatile) for intelligent ticker extraction from company names and Reddit discussions, then generates investment recommendations.
(3) **Validation** - Yahoo Finance API validates ticker symbols and fetches real-time metrics (price, P/E ratios, market cap, dividends).
(4) **Output** - Formats analysis with HTML email templates and sends via Gmail SMTP.

**Features:** AI-powered company name-to-ticker mapping, failed ticker caching, rate limiting, and automated scheduling via macOS launchd. Built with modular architecture following separation of concerns.`,
    images: [], // You can add screenshots of the bot output or code later
    technologies: ['Python', 'Groq LLM API', 'Yahoo Finance API', 'Reddit API', 'Gmail SMTP', 'REST APIs', 'macOS Automation'],
    date: '2024-12',
    githubUrl: 'https://github.com/kumamcode/Stock-Bot',
  },
  {
    id: '13',
    title: 'Engineering Portfolio Website',
    category: 'Software/AI',
    description: `Modern, responsive portfolio website built with Next.js and React to showcase engineering projects across robotics, CAD design, data analysis, and software development.

**Features include:** Dynamic project filtering by category, interactive image lightbox galleries, and a clean, professional UI with smooth animations. The site includes a custom system architecture diagram component and is optimized for performance with Next.js image optimization and lazy loading.`,
    images: [], // You can add screenshots of the website later
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Image Optimization'],
    date: '2025',
    githubUrl: 'https://github.com/kumamcode/Engineering-Portfolio',
  },
];
