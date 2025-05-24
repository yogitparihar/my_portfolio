import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "React Developer",
      company: "Sofmen Technologies Pvt Ltd",
      period: "09/2022 - Present",
      description: [
        "Developed and maintained complex React.js applications, ensuring code quality and adherence to best practices in a fast-paced Agile development environment.",
        "Optimized front-end performance by implementing lazy loading, code splitting, and caching strategies, resulting in a 40% reduction in load times and a smoother user experience.",
        "Collaborated closely with UX/UI designers to transform design mockups into pixel-perfect, responsive web interfaces, delivering an exceptional user experience across all devices.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      school: "Medi-Caps University Indore",
      period: "09/2020 - 05/2022",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "J.S.T PG College (Rani Durgavati University) Balaghat",
      period: "07/2017 - 07/2020",
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
          Experience & Education
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <WorkIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h4">Work Experience</Typography>
              </Box>
              {experiences.map((exp, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    p: 3,
                    mb: 3,
                    backgroundColor: "background.paper",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {exp.period}
                  </Typography>
                  <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                    {exp.description.map((item, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body1"
                        sx={{ mb: 1 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <SchoolIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h4">Education</Typography>
              </Box>
              {education.map((edu, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    p: 3,
                    mb: 3,
                    backgroundColor: "background.paper",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {edu.school}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.period}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Experience;
