import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AC Global Risk (Client Application)",
      description:
        "A platform utilizing voice analytics to streamline processing and prevent fraud.",
      points: [
        "Currently managing Clearspeed's voice analytics platform to streamline operations and prevent fraud, used by ICICI Lombard and Bajaj Allianz.",
        "Oversee admin panel tasks like participant creation, communication, and risk evaluation.",
        "Developed a bulk upload feature to enhance onboarding efficiency.",
      ],
      technologies: ["React.js", "Redux", "Material UI", "REST API"],
    },
    {
      title: "AC Global Risk (Guide App)",
      description:
        "Browser-based voice response system for dynamic question handling and audio input submission.",
      points: [
        "Parsed URL to extract participant identification and session metadata.",
        "Retrieved and sequenced questions dynamically, including repeat index logic.",
        "Implemented user interface for intro, mic check, terms acceptance, and confirmations.",
        "Captured user voice input, recorded 5-second audio, and generated .wav files.",
        "Sent API requests with audio and metadata; managed success and error responses.",
      ],
      technologies: ["React.js", "Web Audio API", "Material UI", "Axios"],
    },
    {
      title: "Tracker-app Group Admin Portal",
      description: "A comprehensive employee management system.",
      points: [
        'The "Tracker App Group Admin Panel" is a real-time employee management system that allows admins to manage profiles, track live locations, and handle attendance with punch-in/out features.',
      ],
      technologies: [
        "React.js",
        "Redux",
        "Material UI",
        "WebSocket",
        "Google Maps API",
      ],
    },
    {
      title: "Recipe-sharing Website and Admin Portal",
      description:
        "A recipe sharing platform with user and admin functionalities.",
      points: [
        "Developed a two-tier system with user and admin functionalities for a recipe sharing website.",
        "Allowed users to upload, update, delete recipes, and manage user functionalities through an admin panel.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Material UI",
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" sx={{ mb: 6 }}>
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  backgroundColor: "background.paper",
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Typography variant="h5" color="primary" gutterBottom>
                    {project.title}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  {project.description}
                </Typography>

                <Box component="ul" sx={{ mt: 2, mb: 3, pl: 2 }}>
                  {project.points.map((point, i) => (
                    <Typography
                      key={i}
                      component="li"
                      variant="body1"
                      sx={{ mb: 1 }}
                    >
                      {point}
                    </Typography>
                  ))}
                </Box>

                <Box
                  sx={{ mt: "auto", display: "flex", flexWrap: "wrap", gap: 1 }}
                >
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(100, 255, 218, 0.1)",
                        color: "primary.main",
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
