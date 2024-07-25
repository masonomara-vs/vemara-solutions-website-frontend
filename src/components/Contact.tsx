import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../utils/send-email';


export type FormData = {
  name: string;
  email: string;
  businessName: string;
  website?: string;
  location?: string;
  message?: string;
  budget?: string;
  startDate?: string;
  projectBrief?: FileList; // Optional file upload
  projectOptions: {
    oneTime: boolean;
    servicePackage: boolean;
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          What is your name?*
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          What is your best email address?*
        </label>
        <input
          type='email'
          placeholder='Best email address'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='businessName'
          className='mb-3 block text-base font-medium text-black'
        >
          What is the business name?*
        </label>
        <input
          type='text'
          placeholder='Business name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('businessName', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='website'
          className='mb-3 block text-base font-medium text-black'
        >
          What is your web address?
        </label>
        <input
          type='string'
          placeholder='https://...'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('website')}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='location'
          className='mb-3 block text-base font-medium text-black'
        >
          What is the business physical address?
        </label>
        <input
          type='text'
          placeholder='Physical address'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('location')}
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='services'
          className='mb-3 block text-base font-medium text-black'
        >
          What services are you interested in?
        </label>
        <div className='flex flex-col space-y-2'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='One-time project'
              className='mr-2'
              {...register('projectOptions.oneTime')}
            />
            One-time project
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Monthly service engagement'
              className='mr-2'
              {...register('projectOptions.servicePackage')}
            />
            Monthly service engagement
          </label>

        </div>
      </div>

      <div className='mb-5'>
        <label
          htmlFor='services'
          className='mb-3 block text-base font-medium text-black'
        >
          What services are you interested in?
        </label>
        <div className='flex flex-col space-y-2'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Custom Software Development'
              className='mr-2'
              {...register('services.customSoftwareDevelopment')}
            />
            Custom Software Development
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='UX/UI Design'
              className='mr-2'
              {...register('services.uxUiDesign')}
            />
            UX/UI Design
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Front-End Development'
              className='mr-2'
              {...register('services.frontEndDevelopment')}
            />
            Front-End Development
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Back-End Development'
              className='mr-2'
              {...register('services.backEndDevelopment')}
            />
            Back-End Development
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='iOS App Development'
              className='mr-2'
              {...register('services.iosAppDevelopment')}
            />
            iOS App Development
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Android App Development'
              className='mr-2'
              {...register('services.androidAppDevelopment')}
            />
            Android App Development
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Web Application Development'
              className='mr-2'
              {...register('services.webApplicationDevelopment')}
            />
            Web Application Development
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='E-Commerce Development'
              className='mr-2'
              {...register('services.eCommerceDevelopment')}
            />
            E-Commerce Development
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Technology Adoption & Integration'
              className='mr-2'
              {...register('services.technologyAdoptionIntegration')}
            />
            Technology Adoption & Integration
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Brand Strategy & Identity'
              className='mr-2'
              {...register('services.brandStrategyIdentity')}
            />
            Brand Strategy & Identity
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='User Research & Interviews'
              className='mr-2'
              {...register('services.userResearchInterviews')}
            />
            User Research & Interviews
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Foundational Product Research'
              className='mr-2'
              {...register('services.foundationalProductResearch')}
            />
            Foundational Product Research
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Maintenance & Support'
              className='mr-2'
              {...register('services.maintenanceSupport')}
            />
            Maintenance & Support
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Training & Documentation'
              className='mr-2'
              {...register('services.trainingDocumentation')}
            />
            Training & Documentation
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Project Plans & Process Flows'
              className='mr-2'
              {...register('services.projectPlansProcessFlows')}
            />
            Project Plans & Process Flows
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Product Design Systems'
              className='mr-2'
              {...register('services.productDesignSystems')}
            />
            Product Design Systems
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Quality Assurance & Testing'
              className='mr-2'
              {...register('services.qualityAssuranceTesting')}
            />
            Quality Assurance & Testing
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Sitemaps & Content Inventory'
              className='mr-2'
              {...register('services.sitemapsContentInventory')}
            />
            Sitemaps & Content Inventory
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Information Architectures'
              className='mr-2'
              {...register('services.informationArchitectures')}
            />
            Information Architectures
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Product & Initiative Strategy'
              className='mr-2'
              {...register('services.productInitiativeStrategy')}
            />
            Product & Initiative Strategy
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Workflow Automation & Improvement'
              className='mr-2'
              {...register('services.workflowAutomationImprovement')}
            />
            Workflow Automation & Improvement
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Search Engine Optimization (SEO)'
              className='mr-2'
              {...register('services.searchEngineOptimization')}
            />
            Search Engine Optimization (SEO)
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Search Engine Marketing (SEM)'
              className='mr-2'
              {...register('services.searchEngineMarketing')}
            />
            Search Engine Marketing (SEM)
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Usability & Accessibility'
              className='mr-2'
              {...register('services.usabilityAccessibility')}
            />
            Usability & Accessibility
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Modernization & Migration'
              className='mr-2'
              {...register('services.modernizationMigration')}
            />
            Modernization & Migration
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              value='Content Management Systems (CMS)'
              className='mr-2'
              {...register('services.contentManagementSystems')}
            />
            Content Management Systems (CMS)
          </label>
        </div>
      </div>


      <div className='mb-5'>
        <label
          htmlFor='projectBrief'
          className='mb-3 block text-base font-medium text-black'
        >
          Attach a project brief if available:
        </label>
        <input
          type='file'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('projectBrief')}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='budget'
          className='mb-3 block text-base font-medium text-black'
        >
          What is your anticipated budget?*
        </label>
        <select
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
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
      <div className='mb-5'>
        <label
          htmlFor='startDate'
          className='mb-3 block text-base font-medium text-black'
        >
          Do you have a desired start date?
        </label>
        <input
          type='string'
          placeholder='Desired start date'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('startDate')}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Any additional thoughts or questions you would like to share?
        </label>
        <textarea
          rows={5}
          placeholder='Any additional thoughts or questions, including technical, practical, and other specifics...'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message')}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;