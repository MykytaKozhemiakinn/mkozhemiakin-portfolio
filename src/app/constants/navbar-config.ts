import { MenuItem } from 'primeng/api';

export const navbarConfig: MenuItem[] = [
  {
    label: 'Home',
    icon: 'assets/icons/home-icon.svg',
    routerLink: '/',
    tooltipOptions: {
      tooltipPosition: 'top',
      tooltipLabel: 'Home',
    },
  },
  {
    label: 'About me',
    icon: 'assets/icons/about-me-icon.svg',
    routerLink: '/about-me',
    tooltipOptions: {
      tooltipPosition: 'top',
      tooltipLabel: 'About me',
    },
  },
  {
    label: 'Projects',
    icon: 'assets/icons/projects-icon.svg',
    routerLink: '/projects',
    tooltipOptions: {
      tooltipPosition: 'top',
      tooltipLabel: 'Projects',
    },
  },
  {
    label: 'Contact',
    icon: 'assets/icons/contact-me-icon.svg',
    routerLink: '/contact',
    tooltipOptions: {
      tooltipPosition: 'top',
      tooltipLabel: 'Contact',
    },
  },
];
