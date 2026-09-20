export { cn } from "cn"
export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
};

// Curated list of upcoming/popular developer events.
// Image assets live under public/images and can be used directly with next/image
// via paths like "/images/event1.png".
export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit US 2025",
    slug: "react-summit-us-2025",
    location: "San Francisco, CA, USA",
    date: "2025-11-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "KubeCon + CloudNativeCon Europe 2026",
    slug: "kubecon-europe-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-04-18",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "Next.js Conf 2026",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA, USA",
    date: "2026-10-24",
    time: "09:00 AM",
  },
  {
    image: "/images/event4.png",
    title: "Oracle CloudWorld 2027",
    slug: "oracle-cloudworld-2027",
    location: "Las Vegas, NV, USA",
    date: "2027-09-20",
    time: "08:30 AM",
  },
  {
    image: "/images/event5.png",
    title: "MongoDB.local London 2027",
    slug: "mongodb-local-london-2027",
    location: "London, UK",
    date: "2027-01-15",
    time: "09:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "Devoxx Belgium 2026",
    slug: "devoxx-belgium-2026",
    location: "Antwerp, Belgium",
    date: "2026-11-09",
    time: "08:30 AM",
  }
];