This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Stay Swift Project Overview

## Introduction

RoomBooker is a web application for booking hotels. This project utilizes MongoDB as the database, Next.js for the frontend, and Next-Auth for authentication. The following document provides a structured overview of the project components, setup, and implementation details.

---

## Component Structure

- **Authentication**: Handles user login, OAuth2, and session management.
- **Hotel Listings**: Displays available hotels with search and filter functionalities.
- **Hotel Details**: Displays detailed information about a selected hotel.
- **Booking**: Allows users to book hotels and view their bookings in their profile.
- **Protected Routes**: Ensures secure access to authenticated sections.

---

## Database Design

### Collections:

1. **Users**: Stores user information, including credentials and profile details.
2. **Hotels**: Stores detailed information about hotels available for booking, including amenities and rates.
3. **Bookings**: Stores information about user bookings, including check-in and check-out dates.
4. **Ratings**: Stores user-provided ratings for hotels.
5. **Reviews**: Stores user-written reviews for hotels.
6. **Amenities**: Stores details about specific services offered by hotels.
