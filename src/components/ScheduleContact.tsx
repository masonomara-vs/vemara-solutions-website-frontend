import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../utils/send-schedule-email';
import styles from "../styles/ContactForm.module.css";
import Image from 'next/image';
import { motion } from "framer-motion";
import { fade, fadeIn, textFadeUp } from "../../utils/motion";
import Link from 'next/link';

export type FormData = {
  name: string;
  email: string;
  businessName: string;
  website?: string;
  location?: string;
  message?: string;
  budget?: string;
  startDate?: string;
  projectOptions: {
    oneTime: boolean;
    ongoingService: boolean;
  }
  services: {
    customSoftwareDevelopment: boolean;
    uxUiDesign: boolean;
    frontEndDevelopment: boolean;
    backEndDevelopment: boolean;
    iosAppDevelopment: boolean;
    androidAppDevelopment: boolean;
    webApplicationDevelopment: boolean;
    eCommerceDevelopment: boolean;
    technologyAdoptionIntegration: boolean;
    brandStrategyIdentity: boolean;
    userResearchInterviews: boolean;
    foundationalProductResearch: boolean;
    maintenanceSupport: boolean;
    trainingDocumentation: boolean;
    projectPlansProcessFlows: boolean;
    productDesignSystems: boolean;
    qualityAssuranceTesting: boolean;
    sitemapsContentInventory: boolean;
    informationArchitectures: boolean;
    productInitiativeStrategy: boolean;
    workflowAutomationImprovement: boolean;
    searchEngineOptimization: boolean;
    searchEngineMarketing: boolean;
    usabilityAccessibility: boolean;
    modernizationMigration: boolean;
    contentManagementSystems: boolean;
  };
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.contactFormWrapper}
          variants={fade("spring", 0, 0.8, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          <div className={styles.inputWrapper}>
            <label htmlFor='name' className="inactive">
              What is your name? <span className="dull">(Required)</span>
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter your full name'
              className='inputForeground'
              autoCapitalize='words'
              autoComplete='name'
              required
              {...register('name', { required: true })}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='email' className="inactive">
              What is your best email address? <span className="dull">(Required)</span>
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email address'
              className='inputForeground'
              autoComplete='email'
              required
              {...register('email', { required: true })}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='businessName' className="inactive">
              What is the business name? <span className="dull">(Required)</span>
            </label>
            <input
              id='businessName'
              type='text'
              placeholder='Enter the business name'
              className='inputForeground'
              autoCapitalize='words'
              autoComplete='organization'
              required
              {...register('businessName', { required: true })}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='website' className="inactive">
              What is your web address?
            </label>
            <input
              id='website'
              type='string'
              placeholder='Enter your website URL'
              className='inputForeground'
              autoComplete='url'
              {...register('website')}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='location' className="inactive">
              What is the business address?
            </label>
            <input
              id='location'
              type='text'
              placeholder='Enter the address'
              className='inputForeground'
              autoCapitalize='words'
              autoComplete='street-address'
              {...register('location')}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='projectOptions' className="inactive">
              Which would you like to discuss?
            </label>
            <div className={styles.checkboxFieldsWrapper}>
              <label className={styles.checkboxWrapper}>
                <input
                  id='oneTime'
                  type='checkbox'
                  className='checkbox'
                  {...register('projectOptions.oneTime')}
                />
                One-time project
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='ongoingService'
                  type='checkbox'
                  className='checkbox'
                  {...register('projectOptions.ongoingService')}
                />
                Ongoing service
              </label>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='services' className="inactive">
              What services are you interested in?
            </label>
            <div className={styles.checkboxFieldsWrapper}>
              <label className={styles.checkboxWrapper}>
                <input
                  id='customSoftwareDevelopment'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.customSoftwareDevelopment')}
                />
                Custom Software Development
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='uxUiDesign'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.uxUiDesign')}
                />
                UX/UI Design
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='frontEndDevelopment'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.frontEndDevelopment')}
                />
                Front-End Development
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='backEndDevelopment'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.backEndDevelopment')}
                />
                Back-End Development
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='iosAppDevelopment'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.iosAppDevelopment')}
                />
                iOS App Development
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='androidAppDevelopment'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.androidAppDevelopment')}
                />
                Android App Development
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='webApplicationDevelopment'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.webApplicationDevelopment')}
                />
                Web Application Development
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='eCommerceDevelopment'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.eCommerceDevelopment')}
                />
                E-Commerce Development
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='technologyAdoptionIntegration'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.technologyAdoptionIntegration')}
                />
                Technology Adoption & Integration
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='brandStrategyIdentity'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.brandStrategyIdentity')}
                />
                Brand Strategy & Identity
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='userResearchInterviews'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.userResearchInterviews')}
                />
                User Research & Interviews
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='foundationalProductResearch'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.foundationalProductResearch')}
                />
                Foundational Product Research
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='maintenanceSupport'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.maintenanceSupport')}
                />
                Maintenance & Support
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='trainingDocumentation'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.trainingDocumentation')}
                />
                Training & Documentation
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='projectPlansProcessFlows'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.projectPlansProcessFlows')}
                />
                Project Plans & Process Flows
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='productDesignSystems'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.productDesignSystems')}
                />
                Product Design Systems
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='qualityAssuranceTesting'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.qualityAssuranceTesting')}
                />
                Quality Assurance & Testing
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='sitemapsContentInventory'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.sitemapsContentInventory')}
                />
                Sitemaps & Content Inventory
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='informationArchitectures'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.informationArchitectures')}
                />
                Information Architectures
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='productInitiativeStrategy'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.productInitiativeStrategy')}
                />
                Product Initiative Strategy
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='workflowAutomationImprovement'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.workflowAutomationImprovement')}
                />
                Workflow Automation & Improvement
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='searchEngineOptimization'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.searchEngineOptimization')}
                />
                Search Engine Optimization
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='searchEngineMarketing'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.searchEngineMarketing')}
                />
                Search Engine Marketing
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='usabilityAccessibility'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.usabilityAccessibility')}
                />
                Usability & Accessibility
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='modernizationMigration'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.modernizationMigration')}
                />
                Modernization & Migration
              </label>
              <label className={styles.checkboxWrapper}>
                <input
                  id='contentManagementSystems'
                  type='checkbox'
                  className='checkbox'
                  {...register('services.contentManagementSystems')}
                />
                Content Management Systems
              </label>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='budget' className="inactive">
              What is your anticipated budget?
            </label>
            <select
              id='budget'
              className='inputForeground'
              {...register('budget', { required: true })}
            >
              <option value='Under $10,000'>Under $10,000</option>
              <option value='$10,000 – $30,000'>$10,000 – $30,000</option>
              <option value='$30,000 – $60,000'>$30,000 – $60,000</option>
              <option value='$60,000 – $100,000'>$60,000 – $100,000</option>
              <option value='$100,000 – $150,000'>$100,000 – $150,000</option>
              <option value='Over $150,000'>Over $150,000</option>
            </select>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='startDate' className="inactive">
              Do you have a desired start date?
            </label>
            <input
              id='startDate'
              type='string'
              placeholder='Enter the desired start date'
              className='inputForeground'
              {...register('startDate')}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='message' className="inactive">
              Any additional thoughts or questions you would like to share?
            </label>
            <textarea
              id='message'
              rows={5}
              placeholder='Share any additional thoughts or questions, including technical, practical, and other specifics'
              className='textBoxForeground'
              autoCapitalize='sentences'
              autoComplete='off'
              {...register('message')}
            ></textarea>
          </div>
          <div>
            <button type='submit' className='buttonPrimaryBackground'>
              <span className={`callout`}>Submit</span>
              <Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt="" />
            </button>
          </div>
          <div className={styles.email} style={{ paddingTop: 8 }}>
            <span className="body">
              Online forms aren‘t for you? Feel free to reach out at <Link href="mailto:connect@vemarasolutions.com" style={{ textDecoration: "underline", textUnderlineOffset: "0.2rem", fontWeight: 500 }} target="_blank">connect@vemarasolutions.com</Link>
            </span>
          </div>
        </motion.form>
        <motion.div className={styles.media} variants={fadeIn("up", "spring", 0, 0.8)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0 }}>
          <Image src="/dance.gif" alt="Vemara Solutions" unoptimized fill style={{ objectFit: "cover" }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
