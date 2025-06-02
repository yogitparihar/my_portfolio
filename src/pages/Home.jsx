import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          pt: 8,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: "100%" }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              color="primary"
              sx={{
                mb: 2,
                display: "inline-block",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: -4,
                  left: 0,
                  backgroundColor: "primary.main",
                  transform: "scaleX(0)",
                  transformOrigin: "right",
                  transition: "transform 0.3s ease-out",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                  transformOrigin: "left",
                },
              }}
            >
              Hi, My name is
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: "bold",
                background: "linear-gradient(45deg, #64ffda 30%, #2196f3 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Yogit Parihar.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontSize: { xs: "2rem", md: "3rem" },
                color: "text.secondary",
              }}
            >
              I build things for the web.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "600px",
                mb: 4,
                color: "text.secondary",
                lineHeight: 1.8,
              }}
            >
              I'm a React developer specializing in building exceptional digital
              experiences. Currently, I'm focused on building accessible,
              human-centered products at Sofmen Technologies.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants} whileHover="hover" whileTap="tap">
            <Button
              component={RouterLink}
              to="/projects"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                  transform: "scaleX(0)",
                  transformOrigin: "right",
                  transition: "transform 0.3s ease-out",
                },
                "&:hover::before": {
                  transform: "scaleX(1)",
                  transformOrigin: "left",
                },
              }}
            >
              Check out my work!
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
