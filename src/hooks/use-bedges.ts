
export type BadgesType = {
    name: string,
    url: string,
    src: string,
    alt?: string
}

export const badges: BadgesType[] = [
    {
        name: 'AWS Certified Cloud Practitioner',
        url: "https://www.credly.com/badges/0928a4d7-d742-457a-926b-063f6c6a5168/public_url",
        src: "/badges/aws-certified-cloud-practitioner.png",
        alt: "AWS Certified Cloud Practitioner Badge"
    },
    {
        name: 'AWS Educate Introduction to Generative AI',
        url: "https://www.credly.com/badges/216e9cb8-25e5-4dc5-a9df-49bf37c3ef51/public_url",
        src: "/badges/aws-educate-introduction-to-generative-ai.png",
        alt: "AWS Educate Badge"
    }
]