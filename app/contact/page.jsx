"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Update contact information with actionable links
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(316)-765-2035",
    link: "tel:+13167652035"  // Phone link for direct calling
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "qt.joseph.nguyen@gmail.com",
    link: "mailto:qt.joseph.nguyen@gmail.com"  // Email link for opening email client
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "Joseph Nguyen",
    link: "https://www.linkedin.com/in/joseph-nguyen-02326a165/"  // LinkedIn profile link
  },
];

const Contact = () => {
  // Replace form submit handler to send email
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Example using Email.js or a serverless function to send emails
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message.");
      }
    })
    .catch((error) => console.error('Error sending email:', error));
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Connect with me</h3>
              <p className="text-white/60">
                Feel free to connect with me and ask me any questions! I'm an open book :)
              </p>
              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="First name" required />
                <Input type="text" name="lastname" placeholder="Last name" required />
                <Input type="email" name="email" placeholder="Email address" required />
                <Input type="tel" name="phone" placeholder="Phone number" required />
              </div>
              {/* Subject input */}
              <Input type="text" name="subject" placeholder="Subject" required />

              {/* Textarea for message */}
              <Textarea 
                className="h-[200px]"
                name="message"
                placeholder="Type your message here"
                required
              />
              
              {/* Submit button */}
              <Button size="md" type="submit" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          
          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                  </a>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;




// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "(316)-765-2035",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "qt.joseph.nguyen@gmail.com",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     title: "Address",
//     description: "Are you stalking me?",
//   },
// ]

// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <motion.section 
//       initial={{ opacity: 0}}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },

//       }}
//       className="py-6"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-[30px]">
//           {/* form */}
//           <div className="xl:h-[54%] order-2 xl:order-none">
//             <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
//               <h3 className="text-4xl text-accent">Connect with me</h3>
//               <p className="text-white/60">
//                Feel free to connect with me and ask me any questions! I'm an open book :)
//               </p>
//               {/* input */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Input type="firstname" placeholder="First name" />
//                 <Input type="lastname" placeholder="Last name" />
//                 <Input type="email" placeholder="Email address" />
//                 <Input type="phone" placeholder="Phone number" />
//               </div>
//               {/* select */}
//               <Select>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select a service" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Select a service</SelectLabel>
//                     <SelectItem value="est">Web Development</SelectItem>
//                     <SelectItem value="cst">UI/UX Design</SelectItem>
//                     <SelectItem value="mst">Resume Review</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//               {/* textarea */}
//               <Textarea 
//                 className="h-[200px]"
//                 placeholder="Type your message here"
//               />
//               {/* button */}
//               <Button size="md" className="max-w-40">
//                 Send message
//               </Button>
//             </form>
//           </div>
//           {/* info */}
//           <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => {
//                 return <li key={index} className="flex items-center gap-6">
//                   <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
//                     <div className="text-[28px]">{item.icon}</div>
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-white/60">{item.title}</p>
//                     <h3 className="text-xl">{item.description}</h3>
//                   </div>
//                 </li>
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
      
//     </motion.section>
//   )
// }

// export default Contact;