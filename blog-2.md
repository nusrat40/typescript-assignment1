Pick and Omit create specialized slices of an interface without repeating fields, keeping code DRY.

interface User { id: number; name: string; email: string; password: string }
type UserProfile = Pick<User, "id" | "name" | "email">


type PublicUser = Omit<User, "password">