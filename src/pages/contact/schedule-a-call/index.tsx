import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'


export default function index() {

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);




    try {
      const response = await fetch("/api/contact", {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.log("Error response:", errorText);
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData['message']);
      alert('Message successfully sent');
    } catch (err) {
      console.error('Submission error:', err);
      alert("Error, please try resubmitting the form");
    }
  }


  return (
    <div>
      <Navbar firstTitle='Home' firstLink="/" secondTitle="Contact" secondLink='/contact' thirdTitle='Schedule a Call' />
      <Header
        label="Schedule a Call"
        title="Let’s get started on your next project."
        subtitle="Thank you for your interest in Vemara Solutions! Please answer a few questions so we can better prepare to help you." />
      <div>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col w-500">

            <label htmlFor="form-name">Name </label>
            <input id="form-name" autoComplete="name" maxLength={50} name="name" className="text-black" />

            <label htmlFor="form-email"> Email:</label>
            <input id="form-email" required autoComplete="email" maxLength={80} name="email" type="email" className="text-black" />

            <label htmlFor="form-message"> Message: </label>
            <textarea id="form-message" required name="message" rows={5} className="text-black" />

          </div>
          <button className=" rounded bg-sky-400" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
