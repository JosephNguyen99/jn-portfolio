# Joseph Nguyen - Portfolio Website

Welcome to my personal portfolio website project! This project showcases my experience, skills, projects, and more in a sleek, modern design. Built with modular components, responsive layouts, and a variety of modern tools and technologies, this website serves as an interactive resume and portfolio.

 
## 🌟 Potential Future Enhancements
-  **Blog Section**: Add a section where I can write about my thoughts, tutorials, and industry knowledge.
-  **Project Filtering**: Add the ability to filter projects by category or technology.
-  **Dark/Light Theme**: Implement a theme toggle for light and dark modes.
-  **Project Demo**: Implement a live project demo or showcase projects with slides - currently I have quite a bit of privated repos + personal/proprietary projects that I need to determine how to showcase
-  **Testimonials**: Include a section for testimonials from previous colleagues or clients.
-  **Advanced Animations**: Further enhance animations to improve the user experience and add more interactive elements.
-  **Database Integration**: Store my data dynamically in a CMS or database to easily update content.
-  **Form Integrations**: Enhance the contact form with backend integration to securely handle messages and allow for notifications. Potential services like Email.js or AWS Lambda (?)

  

---

## 🔍 Project Overview

This portfolio website includes the following sections:

1.  **Home**: Introduction, experience stats, and social links.
2.  **About Me**: A detailed summary of my background, skills, experience, and education.
3.  **Projects**: Highlights of selected projects with descriptions and technologies used.
4.  **Contact**: A form to get in touch, as well as clickable contact information.

  

## 🛠 Tools and Technologies Used

-  **Frontend Framework**: [Next.js](https://nextjs.org/)
-  **Styling**: Tailwind CSS
-  **Animations**: Framer Motion
-  **Icons**: React Icons
-  **Deployment**: Vercel
-  **Form Handling**: Custom web form setup with future plans for backend integration


## 📂 Project Structure
The project is organized as follows:

jn-portfolio/ ├── public/ # Static files and assets ├── src/ │ ├── app/ │ │ ├── about/ # About page components and sections │ │ ├── projects/ # Projects page components and sections │ │ ├── contact/ # Contact page form and info │ │ ├── layout/ # Layout components and global setup │ │ └── globals.css # Global styles │ ├── components/ # Reusable components (Header, Footer, etc.) │ ├── data/ # Static data for about, projects, etc. │ └── styles/ # Custom CSS and Tailwind configuration ├── README.md ├── .gitignore ├── next.config.js # Next.js configuration └── package.json

  
  

---

  

## 🚀 Getting Started
To get a local copy of the project up and running, follow these simple steps.

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [Git](https://git-scm.com/) for cloning the repository

### Installation

1.  **Clone the Repository**
	```bash
	git clone https://github.com/JosephNguyen99/jn-portfolio.git

	cd your-portfolio
	```

2.  **Install Dependencies**

- Install all the necessary dependencies for the project:
	```bash
	npm install
	```

3. **Environment Variables**

- Set up environment variables for your deployment and local development as needed. Create a .env.local file in the root directory with any API keys or configurations (if applicable).

  

4. **Run the Project Locally**
- Start the development server:
	```bash
	npm run dev
	```

- This will launch the app at http://localhost:3000.

5. **Deployment**

- The project is set up for deployment on Vercel. Follow these steps to deploy:
	a. Sign up or Log in to Vercel at https://vercel.com.
	b. Link Your GitHub Repository on Vercel.
	c. Select the Branch you want to deploy (e.g., main or v3-portfolio).
	d. Configure Environment Variables if needed in the Vercel dashboard.
	e. Deploy: Once connected, Vercel will handle deployments automatically on new commits to the selected branch.

6. **Customization**
Updating Content: Modify data/aboutData.js and other data files to update content like personal details, skills, projects, and education.

	Adding New Components: Create modular components in components/ and import them 	into relevant pages.

	Styling Changes: Use Tailwind CSS for styling adjustments in globals.css or add custom classes in your components.

  

7. **📧 Contact Form Configuration**

	Currently, the contact form does not have a backend integration for handling messages. Future integration could involve a serverless function or third-party service (e.g., EmailJS, AWS SES) to send emails.

  

8. **📈 Responsive Design**

	The website is fully responsive with optimizations for both desktop and mobile views. Key points to note:

	  

	Responsive Containers: Components adjust based on screen width for the best user experience.

	Tailwind CSS: Utility-first CSS framework for quick and consistent styling.

	Media Queries: Used as needed to ensure content remains aligned across screen sizes.

  
  

