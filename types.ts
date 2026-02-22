import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface MissionPoint {
  title: string;
  icon: React.ReactNode;
  description: string;
}