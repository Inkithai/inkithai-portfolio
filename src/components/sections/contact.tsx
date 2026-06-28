"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/content";
import { Mail, Copy, Check, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { LinkedinIcon, GithubIcon } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      action: handleCopyEmail,
      href: `mailto:${personal.email}`,
      isLink: false,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/Inkithai",
      action: () => {},
      href: personal.socials.github,
      isLink: true,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/inkithai",
      action: () => {},
      href: personal.socials.linkedin,
      isLink: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      action: () => {},
      href: `tel:${personal.phone}`,
      isLink: true,
    },
  ];

  return (
    <section id="contact" className="py-24 section-padding bg-zinc-950/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Contact</span>
          <h2 className="heading-md mt-2 text-zinc-100">Let's Connect</h2>
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
            I'm actively looking for Software Engineering opportunities. Feel free to reach out via email or connect with me on GitHub or LinkedIn.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.isLink ? item.href : undefined}
                target={item.isLink ? "_blank" : undefined}
                rel={item.isLink ? "noopener noreferrer" : undefined}
                onClick={!item.isLink ? item.action : undefined}
                className={cn(
                  "flex flex-col items-center gap-3 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30",
                  "transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/50 cursor-pointer group",
                  !item.isLink && "hover:text-zinc-200"
                )}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <div className="p-3 rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-zinc-500">{item.label}</p>
                  <p className="text-sm text-zinc-300 font-medium mt-0.5">
                    {item.label === "Email" ? (
                      <span className="inline-flex items-center gap-1">
                        {item.value}
                        <span className="ml-1">
                          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        </span>
                      </span>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Location */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-zinc-500">
            Based in {personal.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
