import { MenuItem } from 'primeng/api';

export const navbarConfig: MenuItem[] = [
  {
    label: 'Brief introduction',
    icon: 'assets/icons/home-icon.svg',
    routerLink: '/',
    tooltipOptions: {
      tooltipPosition: 'right',
      tooltipLabel: 'Brief introduction',
    },
  },
  {
    label: 'About me/skills',
    icon: 'assets/icons/about-me-icon.svg',
    routerLink: '/about-me',
    tooltipOptions: {
      tooltipPosition: 'right',
      tooltipLabel: 'About me/skills',
    },
  },
  {
    label: 'Projects',
    icon: 'assets/icons/projects-icon.svg',
    routerLink: '/projects',
    tooltipOptions: {
      tooltipPosition: 'right',
      tooltipLabel: 'Projects',
    },
  },
  {
    label: 'Contact',
    icon: 'assets/icons/contact-me-icon.svg',
    routerLink: '/contact',
    tooltipOptions: {
      tooltipPosition: 'right',
      tooltipLabel: 'Contact',
    },
  },
];
