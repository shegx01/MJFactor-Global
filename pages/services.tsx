import * as React from "react";
import { Box } from "@mui/system";
import { Divider, Toolbar } from "@mui/material";
import SectionHeader from "../src/components/SectionHeader";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import ServicesData from "../src/components/services/ServicesData";
import ServicesHeader from "../src/components/services/servicesHeader";

const Services = () => {
  const servicesMain = [
    {
      title: "Quality Materials",
      subTitle:
        "We generally found the best materials for yor project, we promise to give you quality materials.",
    },
    {
      title: "All Installation & Construction type offer",
      subTitle:
        "We offer any installation and construction type you can think of, we’re ready to serve and give you the best, we always stick to our words. ",
    },
    {
      title: "Knowledgeable team",
      subTitle:
        "We have experience workers, they are ready to work and attend to all your queries, and give yu best results at the end of the project. Excellent and Good team work at MJ FACTOR. ",
    },
  ];
  return (
    <Box>
      <Toolbar />
      <Box>
        <Container
          sx={{
            py: 4,
          }}
        >
          <SectionHeader
            headerTitle="services"
            headerSubtitle="The Installation and Contruction. Ours services tells more about our expertice "
          />
          <Typography
            sx={{
              lineHeight: 1.1,
              fontSize: 14,
            }}
            component="span"
          >
            Over the years, our company has grown to become an innovative market
            leader in the building material and security industry. Our driving
            force is to consistently work towards meeting the high standard that
            is expected of us. We have a team of professionals all over the
            country, working tirelessly to satisfy customer needs and exceed
            their expectations. We emphasize on the latest technologies and
            newest products from highly experienced and reputable companies.
          </Typography>
        </Container>

        <Container>
          <Box
            sx={{
              background: "#D20EA6",
              p: 4,
              width: "100%",
            }}
          >
            {servicesMain.map(({ title, subTitle }) => (
              <Box
                key={title}
                css={{
                  maxWidth: "78vw",
                  color: "white",
                  margin: "2rem 0",
                }}
              >
                <Typography
                  css={{
                    fontSize: "1.2rem",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  css={{
                    padding: "8px 0",
                    fontSize: "14px",
                  }}
                >
                  {subTitle}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
        <Container>
          <ServicesData
            body1="The installation and constructions we’ve make are always perfect and
         standard, this enable our customer to have a strong feelings about
         us and refer us to friends and family to make us work o their
         project as well, we have experience workers and we always focus on
         our works to bring good results for customer satisfaction"
            body2="We offer a variety of Stone Coated Roof Tiles, Truss Roofing,
         Alluminium Roofing, Roof Gutters, Building Constructions, Interior
         Design, Plaster of Paris (POP), Electric Wire Fence and Security
         Cameras (CCTV). We supply and install for all our customers. Contact
         us today to get the best value in building materials and
         surveillance gadgets for your home or offices."
          />
          <ServicesHeader
            title="Roofing Work"
            excerpt="Short info"
            bgColor="#07377E"
          />
          <ServicesData
            body1="Being competitive is our starting point, but we have greater ambitions. We will set an example for how the plank/iron and roofing sheet should transform the house. We will show leadership and deliver quality materials  for a good result and lasting. We will be the company others look to for bold and better solutions."
            body2="MJ FACTOR Is Nigeria’s Fastest Growing Roofing Construction Company With More Than Two Decades Experience. Perhaps even more than the walls, doors, or walls, your roof provides crucial protection for your home, especially against elements.

          When a violent rainstorm blows through the community, you want to know that the roof will continue to defend your property without leaking. But how can you guarantee that? At (MJ FACTOR), we have a pool of well-trained carpenters (in-house and subcontractors) who have been on our various sites over the years."
          />
          <ServicesHeader
            title="Interior Design"
            excerpt="Short info"
            bgColor="#B915B2"
          />
          <ServicesData
            body1="We provide unique handcrafted furniture for Homes and Offices including wooden beds, four poster beds, chests of drawers, dining tables, dining chairs, bookcases, coffee tables and home accessories including cushions, lamps throw pillows and many more."
            body2="Our team of interior designers are creative, good humoured and genuine as they are dedicated. We are focused on developing solid and loyal client relationships offering design solutions based on the client’s taste, budget, use, and goals for the space. Need budget friendly home and office interiors design services, then talk to MJ FACTOR!"
          />

          <ServicesHeader
            title="POP Installation"
            excerpt="Short info"
            bgColor="#000000"
          />
          <ServicesData
            body1="The popularity of POP ceilings cannot be debated. They are widely adopted for homes, offices, restaurants, hotels, malls, hospitals – in short, they are suited to all building types."
            body2="SUSPENDED ceiling tile is made of high-quality paper-faced gypsum board with a layer of PVC on surface and aluminum foil on its back. It is a kind of environmental friendly, light weight, high quality, fireproof and waterproof. The extensive use of POP ceilings can be attributed to the versatility of Plaster of Paris. The first unmatched advantage is that POP can be easily moulded into any shape. This allows the creation of beautiful designs and patterns on the ceiling. Plaster of Paris (POP) is commonly used for constructing suspended ceilings. It is even the popular material for suspended ceilings. False ceilings or suspended ceilings constructed with POP can take really beautiful and attractive designs."
          />
          <ServicesHeader
            title="CCTV Installation"
            excerpt="Short info"
            bgColor="#7E7A07"
          />
          <ServicesData
            body1="Our Security Camera Systems are world-class quality security products that provide great security control for homes, offices, and government areas. "
            body2="We have developed many ground-breaking advances that have shaped today’s residential and commercial security systems. Our cost-effective products will bring high-performance, durable, and reliable security solutions to your homes, offices, and Government areas. down your roof and channels, it smoothly through the downspout into the water drainage next to your home."
          />
          <ServicesHeader
            title="Electric Wire Fence"
            excerpt="Short info"
            bgColor="#C92906"
          />
          <ServicesData
            body1="An electric fence is a barrier that uses electric shocks to ward off intruders from crossing the boundary of your property. Electric fences are used to secure residential areas, high-security areas and all forms of properties generally."
            body2={`
            MJ FACTOR specialize in the supply and installation of Electric Fence Products in Nigeria; we proffer solutions that meet industry standards and are yet very cost-effective.
            \n
            We have a qualified and trained team who are able to deliver excellent and professional services to our clients. We do not compromise quality; as we ensure to design and execute installations properly the first time.
            `}
          />
          <ServicesHeader
            title="Water Collector Installation"
            excerpt="Short info"
            bgColor="#045F33"
          />
          <ServicesData
            body1="Our Water Collector (Roof Gutter) Systems are extremely efficient and weather friendly, to help your home avoid interior flooding, backsplash, and moisture-related foundation problems. When the rain comes, your well-constructed and designed drainage system gathers the water running down your roof and channels it smoothly through the downspout into the water drainage next to your home."
            body2={`
            We offer not only high-quality gutter options but a wide array of colors and finishes to match your home. We can also install seamless gutters for an even better curb appeal and increased home value.
            Proper gutter installs can save your home from water damage that can destroy paint, rot wood, build up mold and even degrade the structural integrity of your foundation!
            `}
          />
          <ServicesHeader
            title="Building Construction"
            excerpt="Short info"
            bgColor="#7E0773"
          />
          <ServicesData
            body1="At MJ FACTOR, Our Building Construction Services is second to none. As a renowned construction company that is well established in every area of building construction especially the design, installation and management of building services, we pull all the stops to make sure all the right boxes are ticked, in attending to our clients request."
            body2={`
            Over the years, MJ FACTOR has been developing and refining methods and procedures to efficiently control time, cost and quality of a client’s construction program. We optimize strategies for procurement and phase construction, marketing to bidders to ensure competitive prices, cost and quality control, and post-occupancy evaluation.
            With relevant years of experience, we have the professional depth and ethical standards to deliver the best building services engineering in the country. We have an efficient workforce that covers both the mechanical and electrical aspect of building services.
            `}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
