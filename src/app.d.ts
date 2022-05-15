interface Bank {
  name: string
  slug: string
  id: string
  users: string[]
}
interface User {
  avatar: string
  email: string
  name: string
  registeredAt: number
  username: string
  usernameLower: string
  lastVisitAt: number
  id: string
  isModerator?: boolean
  bio?: string
  twitter?: string
  website?: string
}
