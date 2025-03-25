import Image from 'next/image'
import { getImagePath } from '@/utils/imagePath'

interface Certification {
  title: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId: string
  code: string
  url: string
  image: string
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
        title: "CompTIA Security+ (SYS-701)",
        issuer: "CompTIA",
        issueDate: "2024",
        expiryDate: "2027",
        credentialId: "DMEYDXSZNFV41TKW",
        code: "DMEYDXSZNFV41TKW",
        url: "http://verify.CompTIA.org",
        image: getImagePath('/certifications/security-plus.png')
    },
    {
        title: "Google Cybersecurity Professional",
        issuer: "Google",
        issueDate: "2024",
        expiryDate: "",
        credentialId: "UDWHJN5S3N6S",
        code: "",
        url: "https://coursera.org/verify/professional-cert/UDWHJN5S3N6S",
        image: getImagePath('/certifications/google-cybersecurity.png')
    },
    {
      title: "INTRODUCTION TO INFORMATION SECURITY FUNDAMENTALS + IT DATA AND APPLICATION SECURITY",
      issuer: "IBM ICE",
      issueDate: "2019",
      expiryDate: "",
      credentialId: "SCOE_IBM-SU_WPP_09/19_0020",
      code: "",
      url: "",
      image: getImagePath('/certifications/ibm-ice.jpg')
    },  
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text">
          Certifications
        </h2>
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="border-l-2 border-foreground/20 pl-6 relative">
              <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[7px] top-2" />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-48 h-48 rounded-lg overflow-hidden border border-foreground/10">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-foreground/60 mb-2">{cert.issuer}</p>
                  <div className="space-y-1 text-sm text-foreground/60">
                    <p>Issued: {cert.issueDate}</p>
                    <p>
                      {cert.expiryDate 
                        ? `Expires: ${cert.expiryDate}`
                        : "No Expiration Date"}
                    </p>
                    <p>Credential ID: {cert.credentialId}</p>
                  </div>
                  {cert.url && (
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      Verify Certificate →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}