"use server"

export async function downloadResume() {
  const resume = `Juan
Software Engineer Manager
Mexico City, Mexico (GMT-6)
(+52) 55 83 67 99 08
jironjuarezjuan@outlook.com
juancarlosjiron.com

As a Software Engineer, I developed an Android application used nationwide for delivering medicine in Mexico, created a website that receives 100,000 visitors per month, built an e-commerce platform generating $500,000 in sales per month, and contributed to open-source libraries in the real estate sector. My experience includes working with technologies such as React, Android, Java, Kotlin, TypeScript, and Spring Boot.

[... rest of resume content ...]`

  return new Response(resume, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": 'attachment; filename="juan-carlos-jiron-resume.txt"',
    },
  })
}

