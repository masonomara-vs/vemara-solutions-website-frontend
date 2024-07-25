import { FormData } from "@/components/Contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

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
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
