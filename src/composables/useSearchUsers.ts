import { computed, ref, ToRef } from 'vue'

export default function useSearchUsers (users: ToRef<User[]>) {
  const searchQuery = ref<string>('')
  const usersMatchingSearchQuery = computed<User[] | []>(() => users.value.filter(
    (userObject: User) => userObject.name.includes(searchQuery.value)
  ))

  return { searchQuery, usersMatchingSearchQuery }
}
