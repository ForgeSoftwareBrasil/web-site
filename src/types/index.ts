import type { ReactNode } from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
}
