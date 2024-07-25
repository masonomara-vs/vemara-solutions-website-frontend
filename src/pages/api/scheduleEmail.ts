import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    email,
    name,
    businessName,
    website,
    location,
    message,
    budget,
    startDate,

    projectOptions,
    services, // Extract the services object
  } = req.body;

  // Log the received data
  console.log("Received data:", {
    email,
    name,
    businessName,
    website,
    location,
    message,
    budget,
    startDate,

    projectOptions,
    services, // Log the services object
  });

  if (!email || !name || !businessName) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Destructure the services object
  const {
    customSoftwareDevelopment,
    uxUiDesign,
    frontEndDevelopment,
    backEndDevelopment,
    iosAppDevelopment,
    androidAppDevelopment,
    webApplicationDevelopment,
    eCommerceDevelopment,
    technologyAdoptionIntegration,
    brandStrategyIdentity,
    userResearchInterviews,
    foundationalProductResearch,
    maintenanceSupport,
    trainingDocumentation,
    projectPlansProcessFlows,
    productDesignSystems,
    qualityAssuranceTesting,
    sitemapsContentInventory,
    informationArchitectures,
    productInitiativeStrategy,
    workflowAutomationImprovement,
    searchEngineOptimization,
    searchEngineMarketing,
    usabilityAccessibility,
    modernizationMigration,
    contentManagementSystems,
  } = services;
  const { servicePackage, oneTime } = projectOptions;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Set email options
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Vemara Solutions - ${name}, ${email}, ${businessName}`,
    html: `
        <h3>Basic Info:</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Business Name:</strong> ${businessName}</p>
    <p><strong>Website:</strong> ${website}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    <p><strong>Budget:</strong> ${budget}</p>
    <p><strong>Start Date:</strong> ${startDate}</p>
    <br/>
    <h3>Project Options:</h3>
      <p><strong>Custom Software Development:</strong> ${customSoftwareDevelopment}</p>
      <p><strong>UX/UI Design:</strong> ${uxUiDesign}</p>
      <p><strong>Front-End Development:</strong> ${frontEndDevelopment}</p>
      <p><strong>Back-End Development:</strong> ${backEndDevelopment}</p>
      <p><strong>iOS App Development:</strong> ${iosAppDevelopment}</p>
      <p><strong>Android App Development:</strong> ${androidAppDevelopment}</p>
      <p><strong>Web Application Development:</strong> ${webApplicationDevelopment}</p>
      <p><strong>E-Commerce Development:</strong> ${eCommerceDevelopment}</p>
      <p><strong>Technology Adoption & Integration:</strong> ${technologyAdoptionIntegration}</p>
      <p><strong>Brand Strategy & Identity:</strong> ${brandStrategyIdentity}</p>
      <p><strong>User Research & Interviews:</strong> ${userResearchInterviews}</p>
      <p><strong>Foundational Product Research:</strong> ${foundationalProductResearch}</p>
      <p><strong>Maintenance & Support:</strong> ${maintenanceSupport}</p>
      <p><strong>Training & Documentation:</strong> ${trainingDocumentation}</p>
      <p><strong>Project Plans & Process Flows:</strong> ${projectPlansProcessFlows}</p>
      <p><strong>Product Design Systems:</strong> ${productDesignSystems}</p>
      <p><strong>Quality Assurance & Testing:</strong> ${qualityAssuranceTesting}</p>
      <p><strong>Sitemaps & Content Inventory:</strong> ${sitemapsContentInventory}</p>
      <p><strong>Information Architectures:</strong> ${informationArchitectures}</p>
      <p><strong>Product & Initiative Strategy:</strong> ${productInitiativeStrategy}</p>
      <p><strong>Workflow Automation & Improvement:</strong> ${workflowAutomationImprovement}</p>
      <p><strong>Search Engine Optimization (SEO):</strong> ${searchEngineOptimization}</p>
      <p><strong>Search Engine Marketing (SEM):</strong> ${searchEngineMarketing}</p>
      <p><strong>Usability & Accessibility:</strong> ${usabilityAccessibility}</p>
      <p><strong>Modernization & Migration:</strong> ${modernizationMigration}</p>
      <p><strong>Content Management Systems (CMS):</strong> ${contentManagementSystems}</p>
    <br/>
    <h3>Engagement Type:</h3>
    <p><strong>One-Time Project:</strong> ${oneTime}</p>
    <p><strong>Service Package:</strong> ${servicePackage}</p>
  `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" });
  }
}
