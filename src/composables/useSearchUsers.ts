import { computed, ref } from 'vue'

export default function useSearchUsers (users: User[]) {
  const searchQuery = ref<string>('')
  const usersMatchingSearchQuery = computed<User[] | []>(() => users.filter(
    (userObject: User) => userObject.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  ))

  return { searchQuery, usersMatchingSearchQuery }
}
