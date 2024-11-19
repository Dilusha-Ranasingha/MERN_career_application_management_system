import { useNavigate } from 'react-router-dom';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const CustomCard = ({ title, description, image, alt }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        borderRadius: 2,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="180" image={image} alt={alt} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: 600,
              color: '#1976d2',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: 'right', // Align text to the right
              fontSize: '0.95rem',
              lineHeight: 1.5,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate('/users')}
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontWeight: 700,
  fontSize: '2.5rem',
  color: '#ffffff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
}));

const UserPosters = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url('https://img.freepik.com/free-vector/gradient-dark-dynamic-lines-background_23-2148995950.jpg?w=360')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      <StyledTypography align="center">Available Job Vacancies</StyledTypography>
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Grid item>
          <CustomCard
            title="Senior Chef"
            description={
              <>
                <ul style={{ textAlign: 'left' }}>
                  <li>
                    <b>Role:</b> Lead kitchen operations and supervise staff.
                  </li>
                  <li>
                    <b>Key Responsibilities:</b> Create innovative menus and
                    maintain quality standards.
                  </li>
                  <li>
                    <b>Safety:</b> Ensure kitchen cleanliness and adhere to
                    safety protocols.
                  </li>
                  <li>
                    <b>Salary:</b> $60,000 annually + bonuses.
                  </li>
                  <li>
                    <b>Benefits:</b> Health insurance, paid time off, and
                    professional development.
                  </li>
                </ul>
              </>
            }
            image="https://img.freepik.com/free-photo/man-chef-cooking-asian-chicken-cafe-kitchen_1303-32155.jpg"
            alt="Senior Chef"
          />
        </Grid>
        <Grid item>
          <CustomCard
            title="Delivery Boy"
            description={
              <>
                <ul style={{ textAlign: 'left' }}>
                  <li>
                    <b>Role:</b> Timely and accurate deliveries to customers.
                  </li>
                  <li>
                    <b>Key Responsibilities:</b> Navigate delivery routes
                    efficiently and provide exceptional customer service.
                  </li>
                  <li>
                    <b>Salary:</b> $25,000 per year + tips and mileage
                    reimbursement.
                  </li>
                  <li>
                    <b>Benefits:</b> Flexible scheduling and employee
                    discounts.
                  </li>
                </ul>
              </>
            }
            image="https://media.istockphoto.com/id/1190668042/photo/man-delivering-food-by-bike-in-the-city.jpg?s=612x612&w=0&k=20&c=8ntP-Gfp-3-AiUwOC1uHB805iB-jNpfzN2zoum-Vw5I="
            alt="Delivery Boy"
          />
        </Grid>
        <Grid item>
          <CustomCard
            title="Receptionist"
            description={
              <>
                <ul style={{ textAlign: 'left' }}>
                  <li>
                    <b>Role:</b> Serve as the first point of contact for guests
                    and handle inquiries professionally.
                  </li>
                  <li>
                    <b>Key Responsibilities:</b> Manage reservations and
                    perform administrative tasks.
                  </li>
                  <li>
                    <b>Salary:</b> $35,000 annually + health benefits.
                  </li>
                  <li>
                    <b>Growth:</b> Opportunities within the organization.
                  </li>
                </ul>
              </>
            }
            image="https://nationaltoday.com/wp-content/uploads/2021/05/Receptionists.jpg"
            alt="Receptionist"
          />
        </Grid>
        <Grid item>
          <CustomCard
            title="Waiter"
            description={
              <>
                <ul style={{ textAlign: 'left' }}>
                  <li>
                    <b>Role:</b> Provide exceptional dining experiences by
                    taking orders and serving meals.
                  </li>
                  <li>
                    <b>Key Responsibilities:</b> Ensure customer satisfaction
                    and handle requests.
                  </li>
                  <li>
                    <b>Salary:</b> $28,000 annually + tips.
                  </li>
                  <li>
                    <b>Benefits:</b> Flexible scheduling and employee meals.
                  </li>
                </ul>
              </>
            }
            image="https://inspire.qa/wp-content/uploads/2024/01/profesional-waiter-in-restaurant-e1706520489906.jpg"
            alt="Waiter"
          />
        </Grid>
        <Grid item>
          <CustomCard
            title="Finance Manager"
            description={
              <>
                <ul style={{ textAlign: 'left' }}>
                  <li>
                    <b>Role:</b> Oversee budgeting, financial reporting, and
                    strategic planning.
                  </li>
                  <li>
                    <b>Key Responsibilities:</b> Ensure the financial health of
                    the organization.
                  </li>
                  <li>
                    <b>Salary:</b> $80,000 annually + bonuses.
                  </li>
                  <li>
                    <b>Benefits:</b> Health insurance and opportunities for
                    professional growth.
                  </li>
                </ul>
              </>
            }
            image="https://www.mitacs.ca/wp-content/uploads/2022/03/MANINNOVATION-SUB-PAGE_FINANCEMGR_IMAGE1_iStock-968943368.jpg"
            alt="Finance Manager"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserPosters;
