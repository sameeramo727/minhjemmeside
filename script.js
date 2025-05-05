
const { createClient } = supabase;
const supabaseClient = createClient(
"https://cjtmfvwmhhebxsatwbgf.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqdG1mdndtaGhlYnhzYXR3YmdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0OTI2NTgsImV4cCI6MjA2MTA2ODY1OH0.aEbdD8csoF-h0MiMkd1cetjfYu-MUl6CCnJ7-e5zRBs"    

);


const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      
      const formData = {
        navn: document.getElementById("navn").value,
        epost: document.getElementById("epost").value,
        melding: document.getElementById("melding").value,
      };

      try {

        const { data, error } = await supabaseClient
        .from("kontaktmeldinger")
        .insert([formData]);

        if (error) throw error;

        alert("Takk for din melding! Den er lagret i databasen.");
        this.reset();
      } catch (error) {
        console.error("Feil ved sending av data:", error);
        alert("Beklager, noe gikk galt ved sending av skjemaet.");
      }
    })
} else {
    console.error("Skjemaet ble ikke funnet i dokumentet.");
}