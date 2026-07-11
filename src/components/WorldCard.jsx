import { motion } from "framer-motion";

export default function WorldCard({ world }) {
  return (
    <motion.a
      href={world.link}
      className="worldCard"
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <img src={world.image} alt={`World ${world.id}`} />
    </motion.a>
  );
}