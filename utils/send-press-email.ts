import { FormData } from "@/components/PressContact";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/pressEmail";

  console.log("Sending data:", data); // Log the data to verify

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Ensure headers are correctly set
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(
        "Thank you for submitting your form! We are excited to read it and get back to you."
      );
    })
    .catch((err) => {
      alert(err);
    });
}
