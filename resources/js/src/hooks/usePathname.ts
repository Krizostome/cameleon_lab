import { usePage } from '@inertiajs/react'

export function usePathname(): string {
  const page = usePage()
  try {
    return new URL(page.url).pathname
  } catch {
    return window.location.pathname
  }
}
