export type BadgesType = {
  name: string;
  url: string;
  src: string;
  alt?: string;
};

export const badges: BadgesType[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    url: 'https://www.credly.com/badges/0928a4d7-d742-457a-926b-063f6c6a5168/public_url',
    src: '/badges/aws-certified-cloud-practitioner.png',
    alt: 'AWS Certified Cloud Practitioner Badge',
  },
  {
    name: 'AWS Educate Introduction to Generative AI',
    url: 'https://www.credly.com/badges/216e9cb8-25e5-4dc5-a9df-49bf37c3ef51/public_url',
    src: '/badges/aws-educate-introduction-to-generative-ai.png',
    alt: 'AWS Educate Badge',
  },
  {
    name: 'AWS Cloud Quest: Cloud Practitioner',
    url: 'https://www.credly.com/badges/20c989a4-48f4-419b-a217-0700b1a8da2d/public_url',
    src: '/badges/aws-cloud-quest-cloud-practitioner.png',
    alt: 'AWS Cloud Quest: Cloud Practitioner Badge',
  },
  {
    name: 'AWS Partner: Cloud Economics Essentials',
    url: 'https://www.credly.com/badges/43763f22-ff73-4dbc-8a4c-5ba18ba5059f/public_url',
    src: '/badges/aws-partner-cloud-economics-essentials.png',
    alt: 'AWS Partner: Cloud Economics Badge',
  },
  {
    name: 'AWS Partner: Technical Accredited',
    url: 'https://www.credly.com/badges/1e84f4e3-fe58-45c6-bc70-45b413c7fcfe/public_url',
    src: '/badges/aws-partner-technical-accredited.png',
    alt: 'AWS Partner: Technical Badge',
  },
  {
    name: 'AWS Partner: Sales Accreditation',
    url: 'https://www.credly.com/badges/0dc37ebb-88f3-4ba7-aeb5-92628acfd10c/public_url',
    src: '/badges/aws-partner-sales-accreditation.png',
    alt: 'AWS Partner: Sales Badge',
  },
];
