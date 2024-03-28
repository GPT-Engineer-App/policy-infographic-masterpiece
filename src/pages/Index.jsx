import React from "react";
import { Box, Container, Heading, Text, Image, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { FaBalanceScale, FaUsers, FaHandshake, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Policy Overview
      </Heading>
      <Text fontSize="lg" textAlign="center" mb={10}>
        A brief infographic on our core policies and commitments to our stakeholders
      </Text>

      <SimpleGrid columns={[1, null, 2, 4]} spacing={10}>
        <InfoCard icon={FaBalanceScale} title="Fair Practices" description="Ensuring equality and fairness across all levels of our operations." />
        <InfoCard icon={FaUsers} title="Community Engagement" description="Building strong relationships with the communities we serve." />
        <InfoCard icon={FaHandshake} title="Partnerships" description="Collaborating with industry leaders for innovative solutions." />
        <InfoCard icon={FaChartLine} title="Sustainable Growth" description="Committing to eco-friendly practices and long-term profitability." />
      </SimpleGrid>

      <Box mt={14}>
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Our Commitment to You
        </Heading>
        <Image src="https://images.unsplash.com/photo-1508726096737-5ac7ca26345f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21taXRtZW50fGVufDB8fHx8MTcxMTYzODIyMnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
      </Box>
    </Container>
  );
};

const InfoCard = ({ icon, title, description }) => {
  return (
    <Flex direction="column" align="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Icon as={icon} w={10} h={10} mb={4} color="teal.500" />
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </Flex>
  );
};

export default Index;
