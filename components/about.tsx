"use client";

import React from "react";
import SectionHeading from "../components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As an Accomplished {" "}
        <span className="font-medium">Oracle Database Administrator</span>, I have decided to pursue my
        passion towards Oracle and its demanding technologies. I bring a
unique blend of technical expertise to drive organizational
success{" "}
        <span className="font-medium">as a DBA.</span>{" "}
        My commitment
to staying at the forefront of Oracle technologies, coupled with
my ability to collaborate seamlessly with diverse teams, has
consistently translated into successful database management
solutions.{" "}
      </p>

      <p>
        <span className="italic">In my Leisure</span>, I enjoy playing
        video games, watching movies, batminton and jogging. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
