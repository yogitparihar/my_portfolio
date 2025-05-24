import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Frontend",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "JSX",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "SCSS",
      ],
    },
    {
      category: "State Management",
      items: ["Redux Toolkit", "Context API"],
    },
    {
      category: "API Handling",
      items: ["Axios", "REST API", "React Query"],
    },
    {
      category: "Build Tools",
      items: ["Vite", "npm"],
    },
    {
      category: "Version Control",
      items: ["Git", "GitHub", "Bitbucket"],
    },
    {
      category: "Testing",
      items: ["Jest", "React Testing Library"],
    },
    {
      category: "Other Tools",
      items: ["VS Code", "Chrome DevTools", "Postman", "Cursor AI"],
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
        <Typography variant="h2" sx={{ mb: 4 }}>
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I am a React developer with strong expertise in identifying
              web-based user interactions and designing highly responsive user
              interface components using React concepts. I excel at translating
              designs and wireframes into high-quality code and developing
              application interfaces using JavaScript and React.js workflows.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I am also proficient in monitoring and maintaining frontend
              performance, as well as troubleshooting and debugging to ensure
              optimal user experience.
            </Typography>
            <Typography variant="body1">
              Currently working at Sofmen Technologies Pvt Ltd as a React
              Developer, where I've contributed to various projects and helped
              optimize front-end performance by implementing lazy loading, code
              splitting, and caching strategies.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: "background.paper",
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" sx={{ mb: 3 }}>
                Technical Skills
              </Typography>
              <Grid container spacing={2}>
                {skills.map((skillGroup) => (
                  <Grid item xs={12} sm={6} key={skillGroup.category}>
                    <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                      {skillGroup.category}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {skillGroup.items.map((skill) => (
                        <Typography
                          key={skill}
                          variant="body2"
                          sx={{
                            backgroundColor: "rgba(100, 255, 218, 0.1)",
                            color: "primary.main",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                          }}
                        >
                          {skill}
                        </Typography>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;
