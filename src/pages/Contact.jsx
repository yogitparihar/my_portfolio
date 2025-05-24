import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Yogit Parihar",
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "yogitparihar130@gmail.com",
      link: "mailto:yogitparihar130@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: "9131575441",
      link: "tel:+919131575441",
    },
    {
      icon: <LocationOnIcon />,
      label: "Location",
      value: "Indore, Madhya Pradesh",
      link: "https://maps.google.com/?q=Indore,Madhya+Pradesh",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      value: "yogit-parihar",
      link: "https://www.linkedin.com/in/yogit-parihar",
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
          Get In Touch
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                backgroundColor: "background.paper",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Typography variant="h4" sx={{ mb: 4 }}>
                Contact Information
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <IconButton
                      color="primary"
                      component="a"
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.icon}
                    </IconButton>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {info.label}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="a"
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "text.primary",
                          textDecoration: "none",
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                backgroundColor: "background.paper",
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" sx={{ mb: 4 }}>
                Send Me a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
