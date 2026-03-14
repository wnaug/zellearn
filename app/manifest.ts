import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zel Learn',
    short_name: 'Zel Learn',
    description: 'Find your notes in seconds. Search, read, and study — distraction-free.',
    start_url: '/home',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#F4F8F7',
    theme_color: '#2F8F83',
    categories: ['education', 'productivity'],
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/home.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Home screen — continue reading and popular notes',
      },
      {
        src: '/screenshots/reader.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Note reader — clean distraction-free reading',
      },
    ],
  }
}