import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database or CMS
const blogPosts = {
  "moving-lake": {
    title: "Moving Lake: Integrating Legacy Technology and Developing New Features",
    headerImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movinglake.jpg-DgdR0Rro26b57BB3aKF2FfDzWIS2eg.jpeg",
    content: `
      <p>My experience at Moving Lake was a pivotal phase in my career, where I worked on integrating and adapting legacy technology from Casai while continuously developing new features and enhancing visual design for client platforms. For approximately a year, I took on an integral role that spanned backend and frontend development while also leading technical aspects related to project quality and delivery.</p>

      <h2>Project 1: Vacation Rental System Legacy from Casai</h2>
      <p>After acquiring technology from Casai, my primary responsibility was to migrate and adapt the vacation rental system to Moving Lake's infrastructure. This project involved two global clients:</p>
      <ul>
        <li>Kenya and Tanzania: Collaborated with a client to expand vacation rental operations in Africa.</li>
        <li>Argentina: Another client aimed to implement the system in Mexico and Argentina.</li>
      </ul>

      <h3>My contributions included:</h3>
      <h4>Frontend:</h4>
      <ul>
        <li>Refactoring the web system developed with:
          <ul>
            <li>React and Styled Components.</li>
            <li>TypeScript and Webpack.</li>
          </ul>
        </li>
        <li>Implementing visual and usability improvements to align the system with client expectations.</li>
      </ul>

      <h4>Backend:</h4>
      <ul>
        <li>Developing and maintaining the backend using Django, ensuring seamless integration with the frontend.</li>
      </ul>

      <h4>Project Management:</h4>
      <ul>
        <li>Collaborated directly with clients (Product Owners) to gather requirements, prioritize features, and ensure timely deliveries.</li>
      </ul>

      <p>While a DevOps team handled the infrastructure, my focus was on complete backend and frontend development, as well as quality assurance testing.</p>

      <h2>Project 2: Sales Platform for Ofertacero</h2>
      <p>In this project, I contributed to the ongoing development of a sales platform for Oferta Cero, a client focused on product commercialization. My work centered on:</p>
      <ul>
        <li>Adding Visual Identity: Implemented the brand's visual identity using Next.js and Tailwind CSS.</li>
        <li>Developing New Features: Enhanced the platform's capabilities by making adjustments and adding new features.</li>
        <li>Bug Fixing: Ensured the system operated optimally by resolving technical issues that arose during its operation.</li>
      </ul>

      <h2>Skills and Achievements</h2>
      <p>At Moving Lake, I worked independently on key projects, which allowed me to strengthen and apply skills in:</p>
      <ul>
        <li>Full-Stack Development: Delivered high-quality, functional products by handling backend, frontend, and testing.</li>
        <li>International Collaboration: Worked with global clients across Africa and Latin America, tailoring solutions to different markets.</li>
        <li>Technical Project Management: Coordinated meetings, managed backlogs, and ensured on-time deliveries with Product Owners.</li>
      </ul>

      <h2>Challenges and Learnings</h2>
      <ul>
        <li>Integrating Legacy Technology: Adapting a system developed by another team to new technical standards was a significant challenge.</li>
        <li>Autonomous Work: Being responsible for the entire technical development process helped refine my organizational and technical skills.</li>
        <li>Visual Identity: Learned to translate branding concepts into functional and visually consistent interfaces.</li>
      </ul>

      <h2>Final Outcome</h2>
      <ul>
        <li>The vacation rental system was successfully migrated and adapted, enabling clients to expand their operations in different regions.</li>
        <li>The Oferta Cero sales platform significantly improved its visual identity and functionality, meeting client expectations.</li>
        <li>I solidified my technical expertise in React, Next.js, Django, Styled Components, and Tailwind CSS, establishing myself as a comprehensive full-stack developer.</li>
      </ul>

    `,
  },
  casai: {
    title: "Casai: Leading Mobile and Web Development at Latin America's Largest Real Estate Startup",
    headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp",
    content: `
      <p>My experience at Casai marked a turning point in my professional career. Casai was a startup focused on real estate and short-term rentals, recognized as the largest real estate startup in Latin America, with operations in Mexico and Brazil. I worked there for four years, starting as an Android developer and progressing to become the tech lead of the mobile and web development teams.</p>

      <h2>Role and Responsibilities</h2>
      <p>At Casai, I led a multidisciplinary team composed of:</p>
      <ul>
        <li>1 additional Android developer.</li>
        <li>2 frontend developers.</li>
      </ul>
      <p>We collaborated constantly with:</p>
      <ul>
        <li>2 product designers.</li>
        <li>1 product owner, later replaced to continue development.</li>
      </ul>
      <p>We followed the Agile Scrum methodology, which enabled effective communication and iterative value delivery.</p>

      <h2>Mobile Application Development</h2>
      <p>At Casai, I developed two Android applications:</p>
      <ol>
        <li><strong>Guest Application:</strong> Designed for customers to manage their reservations, communicate with the support team, and access relevant information about their stay.</li>
        <li><strong>Hotel Front Desk Application:</strong> Used internally by reception staff to manage guest check-ins and check-outs, as well as other operational tasks.</li>
      </ol>
      <p>Both applications were developed using:</p>
      <ul>
        <li>Kotlin as the primary programming language.</li>
        <li>Retrofit and Room for backend communication and local data persistence.</li>
        <li>XML for user interfaces, adhering to Material Design guidelines.</li>
      </ul>
      <p>This experience allowed me to deepen my expertise in Material Design, creating visually appealing and functional interfaces.</p>

      <h2>Web Development with a Design System</h2>
      <p>In addition to mobile applications, I led the development of Casai's website. The site included a booking system and administrative functionalities, built with:</p>
      <ul>
        <li>React and TypeScript.</li>
        <li>Styled Components.</li>
        <li>Bootstrap and Webpack.</li>
        <li>Storybook for implementing a design system.</li>
      </ul>
      <p>While the design system provided visual consistency, I later realized that maintaining complex infrastructure could hinder work in small teams. This lesson was crucial for simplifying systems in future projects.</p>

      <h2>Microservices and Backend</h2>
      <p>I also developed a microservice with Spring Boot and Kotlin to integrate the service desk with a queueing system. This microservice monitored and processed new reservations created on the platform. Although my involvement in AWS infrastructure was limited, I resolved critical bugs and ensured the service operated correctly.</p>

      <h2>Key Learnings and Achievements</h2>
      <ul>
        <li>Progressed from Android developer to tech lead, showcasing leadership and technical growth.</li>
        <li>Developed and maintained two critical Android applications, enhancing guest experience and operational efficiency.</li>
        <li>Led the development of a comprehensive website with booking and administrative capabilities.</li>
        <li>Gained valuable insights into the challenges of maintaining complex design systems in small teams.</li>
        <li>Expanded skill set to include microservice development and backend integration.</li>
      </ul>

      <p>My time at Casai was instrumental in shaping my career, providing me with diverse experiences across mobile and web development, team leadership, and startup operations in the competitive real estate tech sector.</p>
    `,
  },
  "farmacias-especializadas": {
    title: "Farmacias Especializadas (FESA): Revolutionizing Medicine Delivery in Mexico",
    headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fesa-N4ChbTd8kgRmw4s62eW64l1KHdB8cK.webp",
    content: `
      <p>One of the most challenging and rewarding projects I've worked on was developing a delivery application for Farmacias Especializadas FESA, a renowned pharmaceutical chain in Mexico. This project involved creating a technological solution to optimize the logistics of delivering medications, both between branches and directly to end customers.</p>

      <h2>Project Objective</h2>
      <p>The application was specifically designed for the company's delivery personnel. Its main function was to move stock between pharmacies and deliver medications to customers who placed orders through the call center. Once an order was received, the backend calculated the best delivery route, and this information was sent to and consumed by the mobile application.</p>

      <figure>
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fesa-N4ChbTd8kgRmw4s62eW64l1KHdB8cK.webp" alt="FESA Project" />
        <figcaption>Farmacias Especializadas FESA logo, representing the brand for which the delivery app was developed</figcaption>
      </figure>

      <h2>My Role and Responsibilities</h2>
      <p>I was the Android developer responsible for the project, participating from its inception to its release on the Play Store. My responsibilities included:</p>
      <ul>
        <li><strong>Graphic Interface Design:</strong> Creating wireframes and prototypes using Whimsical.</li>
        <li><strong>Full App Development:</strong> Utilizing technologies such as Jetpack Compose, Kotlin, Retrofit, Room, Flow, and Google Maps and Roads APIs.</li>
        <li><strong>Implementation of Key Features:</strong>
          <ul>
            <li>Displaying optimized routes for delivery personnel.</li>
            <li>Integration with GPS for real-time tracking.</li>
            <li>Sending notifications and tracking orders.</li>
          </ul>
        </li>
        <li><strong>Test Management:</strong> Using Firebase Distribution to distribute APKs among testers and managing simulations in Android Studio to verify app behavior in various locations.</li>
        <li><strong>Field Testing:</strong> Conducting physical tests with delivery drivers on motorcycles to validate the app's accuracy and usability.</li>
      </ul>

      <h2>Technologies Used</h2>
      <p>The project leveraged a robust and modern tech stack, including:</p>
      <ul>
        <li>Jetpack Compose for intuitive and efficient UI design.</li>
        <li>Kotlin as the primary programming language.</li>
        <li>Retrofit for backend communication.</li>
        <li>Room and Flow for local data management.</li>
        <li>Google Maps, Routes, and GPS APIs for geolocation and route calculation.</li>
        <li>Firebase Distribution for managing test versions.</li>
      </ul>

      <h2>Team and Duration</h2>
      <p>The team consisted of:</p>
      <ul>
        <li>Two backend developers.</li>
        <li>One frontend developer.</li>
        <li>Myself, as the Android developer.</li>
      </ul>
      <p>The project lasted six months, following a defined schedule and constant collaboration between development areas.</p>

      <h2>Challenges and Learnings</h2>
      <p>The biggest challenge was ensuring the application worked correctly under real-world conditions. This involved fine-tuning route calculations and optimizing data and battery usage — crucial factors for delivery personnel on the move. Additionally, I learned a lot about the importance of field testing and the value of a well-coordinated team.</p>

      <h2>Final Outcome</h2>
      <p>The application was successfully published on the Play Store and is currently used by Farmacias Especializadas FESA delivery personnel to improve medication delivery efficiency. This project not only allowed me to solidify my technical skills but also gave me the satisfaction of creating a product that directly impacts people's lives.</p>
    `,
  },
}

// Define the correct type for the params
type BlogPostParams = {
  params: {
    slug: string
  }
}

// For static site generation
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-64 mb-6">
            <Image
              src={post.headerImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>
    </div>
  )
}

