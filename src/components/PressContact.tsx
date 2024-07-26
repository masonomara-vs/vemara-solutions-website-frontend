import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../utils/send-press-email';
import styles from "../styles/ContactForm.module.css";
import Image from 'next/image';
import { motion } from "framer-motion";
import { fade, fadeIn } from "../../utils/motion";
import Link from 'next/link';

export type FormData = {
  name: string;
  email: string;
  businessName: string;
  message: string;
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
              What is your business name? <span className="dull">(Required)</span>
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
            <label htmlFor='message' className="inactive">
              How can we help you? <span className="dull">(Required)</span>
            </label>
            <textarea
              id='message'
              rows={5}
              placeholder='Share any additional thoughts or questions'
              className='textBoxForeground'
              autoCapitalize='sentences'
              autoComplete='off'
              required
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
          <Image src="/fingerprint.gif" alt="Vemara Solutions" unoptimized fill style={{ objectFit: "cover" }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
