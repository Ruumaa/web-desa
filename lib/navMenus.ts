export const navMenus = [
  {
    title: 'Beranda',
    href: '#home',
  },
  {
    title: 'Tentang',
    href: '#about',
  },
  {
    title: 'Unggulan',
    href: '#features',
  },
  {
    title: 'Lokasi',
    href: '#location',
  },
  {
    title: 'Galeri',
    href: '#galeries',
  },
];

export const handleNavigation = (href: string) => {
  return (window.location.href = href);
};
