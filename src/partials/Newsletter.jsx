import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import frame from "../images/whitetap/Frame.svg";

function Newsletter() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section
      className="py-12 md:py-20 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded-3xl py-10 px-6 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none lg:block"
              aria-hidden="true"
            >
              <img
                className="transform translate-x-16 translate-y-10 animate-float"
                src={frame}
                width="500"
                height="400"
                alt="credit"
                loading="lazy"
              />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Personalized Networking Experience
                </h3>
                <p className="text-gray-300 text-lg md:text-xl mb-6">
                  Tailor your networking interactions with White Tap NFC
                  business cards. Seamlessly share your professional profile and
                  contact information with a simple tap.
                </p>

                {/* Join now button */}
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <Link
                    to="/signup"
                    className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                  >
                    Join now
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Newsletter;
