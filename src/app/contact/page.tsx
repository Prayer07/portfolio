"use client";
import { FaWhatsapp, FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const contacts = [
    {
      id: 1,
      label: "Whatsapp",
      value: "09161083039",
      href: "https://wa.me/2349161083039",
      icon: <FaWhatsapp className="text-green-400 text-xl" />,
    },
    {
      id: 2,
      label: "Email",
      value: "ezenwaokechukwu3@gmail.com",
      href: "mailto:ezenwaokechukwu3@gmail.com",
      icon: <FaEnvelope className="text-yellow-400 text-xl" />,
    },
    {
      id: 3,
      label: "GitHub",
      value: "Prayer07",
      href: "https://github.com/Prayer07",
      icon: <FaGithub className="text-white text-xl" />,
    },
    {
      id: 4,
      label: "Twitter",
      value: "@pra_yer07",
      href: "https://x.com/pra_yer07",
      icon: <FaTwitter className="text-blue-400 text-xl" />,
    },
    {
      id: 5,
      label: "LinkedIn",
      value: "Ezenwa Okechukwu",
      href: "https://www.linkedin.com/in/ezenwa-okechukwu-58858533a/",
      icon: <FaLinkedin className="text-blue-500 text-xl" />,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg"
      >
        <Card className="bg-gray-900 border-gray-800 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-yellow-400 text-3xl font-bold">
              Contact Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {contacts.map((c) => (
                <li key={c.id}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    {c.icon}
                    <span className="text-gray-200">
                      {c.label}:{" "}
                      <span className="font-semibold text-white">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}