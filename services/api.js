import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bkhtvxdurcaogxhrzuiv.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJraHR2eGR1cmNhb2d4aHJ6dWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNDE0MjQsImV4cCI6MjAzODcxNzQyNH0.9xsc8i-63uD8OKitJf5NfzcgXU9C3jw-tLBR23Od3wU",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJraHR2eGR1cmNhb2d4aHJ6dWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNDE0MjQsImV4cCI6MjAzODcxNzQyNH0.9xsc8i-63uD8OKitJf5NfzcgXU9C3jw-tLBR23Od3wU"
    }
})